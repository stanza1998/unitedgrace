import { observer } from "mobx-react-lite"
import react, { useEffect, useState } from "react"
import { useAppContext } from "../../Context";
import { Modal, showModalId } from "../../Modal";
import { Loader } from "../adminloader/adminloader";
import { TrinityDialog } from "../dialog/TrinityDialog/trinityDialog";
import { Trinities } from "./trinities";

export const DIALOGNAMES = {
    TRINITY: "event-dialog",
}

export const Trinity = observer(() => {
    const { store, api } = useAppContext();
    const [loading, setLoading] = useState(false);
    const _events = store.trinity.all;


    const onCreate = () => {
        showModalId(DIALOGNAMES.TRINITY);
    }

    const getTrinity = async () => {
        setLoading(true)
        await api.trinity.getAll();
        store.trinity.load();
        setLoading(false);
    }

    useEffect(() => {
        getTrinity();
    }, [])


    return (
        <div>
            {loading ?
                <> <Loader /> </>
                :
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3>Trinty</h3>
                        <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add Audio</button>
                    </div>

                    <Trinities trinities={_events} />

                    <Modal modalId={DIALOGNAMES.TRINITY}>
                        <TrinityDialog />
                    </Modal>
                </>
            }
        </div>
    )
})