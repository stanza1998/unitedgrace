import { observer } from "mobx-react-lite"
import react, { useEffect, useState } from "react"
import { useAppContext } from "../../Context";
import { Modal, showModalId } from "../../Modal";
import { Loader } from "../adminloader/adminloader";
import { EventDialog } from "../dialog/eventDialog/eventDialog";
import { Events } from "./events";

export const DIALOGNAMES = {
    EVENT: "event-dialog",
}

export const Event = observer(() => {
    const { store, api } = useAppContext();
    const [loading, setLoading] = useState(false);
    const _events = store.event.all;


    const onCreate = () => {
        showModalId(DIALOGNAMES.EVENT);
    }

    const getEvent = async () => {
        setLoading(true)
        await api.event.getAll();
        store.event.load();
        setLoading(false);
    }

    useEffect(() => {
        getEvent();
    }, [])


    return (
        <div>
            {loading ?
                <> <Loader /> </>
                :
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3>Events</h3>
                        <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add Event</button>
                    </div>

                    <Events events={_events} />

                    <Modal modalId={DIALOGNAMES.EVENT}>
                        <EventDialog />
                    </Modal>
                </>
            }
        </div>
    )
})