import { observer } from "mobx-react-lite";
import { FormEvent, useEffect, useState } from "react";
import useUploadToStorage from "../../../../Shared/FUNCTION/uploadtToStorage";
import { defaultTest, ITestimonial } from "../../../../Shared/Interface/ITestimonials";
import { useAppContext } from "../../../Context";
import { hideModalId } from "../../../Modal";
import { DIALOGNAMES } from "../../Testimonials/testimonial";
import { TestForm } from "./TestForm";

export const TestDialog = observer(() => {
    const { store, api } = useAppContext()
    const [loading, setLoading] = useState(false)
    const [test, setTest] = useState<ITestimonial>({ ...defaultTest })
    const { uploadFile, progress } = useUploadToStorage();
    const [src, setSrc] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const $test: ITestimonial = {
            ...test
        };
        if (selectedFile) {
            const downloadURL = await uploadFile(selectedFile, `/test`);
            $test.imgUrl = downloadURL;
        }


        if (store.test.selected) {
            try {
                setLoading(true)
                const updated = await api.test.update($test);
                if (updated) store.test.load([updated])

            } catch (error) {
                console.log("Error updating", error)
            }
        } else {
            try {
                setLoading(true)
                const created = await api.test.create($test);
                if (created) store.test.load([created])

            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoading(false)
        setTest({ ...defaultTest })
        store.test.clearSelected()
        setSrc("");
        hideModalId(DIALOGNAMES.TEST)

    }
    const cleartest = () => {
        store.test.clearSelected()
        setSrc("")
    }


    useEffect(() => {
        if (store.test.selected) {
            setTest(store.test.selected)
            setSrc(store.test.selected.imgUrl)
        }
        else setTest({ ...defaultTest })
        console.log("Selected test", test);

    }, [store.test.selected])


    return (
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
            <button className="uk-modal-close-default" type="button" data-uk-close onClick={cleartest}></button>
            <TestForm test={test} setTest={setTest} onSubmit={onSubmit} loading={loading}
                src={src}
                setSrc={setSrc}
                setSelectedFile={setSelectedFile}
                progress={progress}
                setProgress={progress}
            />
        </div>
    )
});