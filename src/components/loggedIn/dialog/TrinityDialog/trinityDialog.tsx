import { observer } from "mobx-react-lite";
import { FormEvent, useEffect, useState } from "react";
import useUploadToStorage from "../../../../Shared/FUNCTION/uploadtToStorage";
import { defaultTrinity, ITrinity } from "../../../../Shared/Interface/ITrinity";
import { useAppContext } from "../../../Context";
import { hideModalId } from "../../../Modal";
import { DIALOGNAMES } from "../../Trinity/trinity";
import { TrinityForm } from "./trinityForm";

export const TrinityDialog = observer(() => {
    const { store, api } = useAppContext()
    const [loading, setLoading] = useState(false)
    const [trinity, setTrinity] = useState<ITrinity>({ ...defaultTrinity })
    const { uploadFile, progress } = useUploadToStorage();
    const [src, setSrc] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [srcImg, setSrcImg] = useState("");
    const [selectedFileImg, setSelectedFileImg] = useState<File | null>(null);


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const $trinity: ITrinity = {
            ...trinity
        };
        if (selectedFile) {
            const downloadURL = await uploadFile(selectedFile, `/trinityAudion`);
            $trinity.audioUrl = downloadURL;
        }
        if (selectedFileImg) {
            const downloadURLImg = await uploadFile(selectedFileImg, `/trinityImg`);
            $trinity.imgUrl = downloadURLImg;
        }

        if (store.trinity.selected) {
            try {
                setLoading(true)
                const updated = await api.trinity.update($trinity);
                if (updated) store.trinity.load([updated])

            } catch (error) {
                console.log("Error updating", error)
            }
        } else {
            try {
                setLoading(true)
                const created = await api.trinity.create($trinity);
                if (created) store.trinity.load([created])

            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoading(false)
        setTrinity({ ...defaultTrinity })
        store.trinity.clearSelected()
        setSrc("");
        setSrcImg("");
        hideModalId(DIALOGNAMES.TRINITY)

    }
    const cleartrinity = () => {
        store.trinity.clearSelected()
        setSrc("")
        setSrcImg("")
    }


    useEffect(() => {
        if (store.trinity.selected) {
            setTrinity(store.trinity.selected)
            setSrc(store.trinity.selected.audioUrl)
            setSrc(store.trinity.selected.imgUrl)
        }
        else setTrinity({ ...defaultTrinity })
        console.log("Selected trinity", trinity);

    }, [store.trinity.selected])


    return (
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
            <button className="uk-modal-close-default" type="button" data-uk-close onClick={cleartrinity}></button>
            <TrinityForm trinity={trinity} setTrinity={setTrinity} onSubmit={onSubmit} loading={loading}
                src={src}
                srcImage={srcImg}
                setSrc={setSrc}
                setSelectedFile={setSelectedFile}
                setSrcImg={setSrcImg}
                setSelectedFileImg={setSelectedFileImg}
                progress={progress}
                setProgress={progress}
            />
        </div>
    )
});