import { observer } from "mobx-react-lite"
import react, { useEffect, useState } from "react"
import { useAppContext } from "../../Context";
import { Modal, showModalId } from "../../Modal";
import { Loader } from "../adminloader/adminloader";
import { TestDialog } from "../dialog/TestimonialDialog/TestDialog";
import { Tests } from "./testimonials";


export const DIALOGNAMES = {
    TEST: "test-dialog",
}

export const Testimonial = observer(() => {
    const { store, api } = useAppContext();
    const [loading, setLoading] = useState(false);
    const _tests = store.test.all;

    const onCreate = () => {
        showModalId(DIALOGNAMES.TEST);
    }

    const getTestimonial = async () => {
        setLoading(true)
        await api.test.getAll();
        store.test.load();
        setLoading(false);
    }

    useEffect(() => {
        getTestimonial();
    }, [])

    return (
        <div>
            {loading ?
                <> <Loader /> </>
                :
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3>Testimonials</h3>
                        <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add Testimonial</button>
                    </div>

                    <Tests tests={_tests} />

                    <Modal modalId={DIALOGNAMES.TEST}>
                        <TestDialog />
                    </Modal>
                </>
            }
        </div>
    )
})