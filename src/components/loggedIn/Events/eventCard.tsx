import { observer } from "mobx-react-lite";
import reat, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { EventModel } from "../../../Shared/models/EventModel";
import { useAppContext } from "../../Context";
import { db } from "../../../firebase";
import { showModalId } from "../../Modal";
import { DIALOGNAMES } from "./event";



interface IProps {
    event: EventModel
}

export const EventCard = observer((props: IProps) => {
    const { store, api } = useAppContext();
    const [loading, setLoaidng] = useState(false);
    const [agent, setAgent] = useState<[]>([]);
    const navigate = useNavigate();
    const { event } = props;

    const value = 3;


    const onView = () => {
        store.event.select(event.asJson);
        showModalId(DIALOGNAMES.EVENT);
    };

    const onDelete = async (id: string) => {
        if (window.confirm("Delete")) {
            setLoaidng(true)
            try {
                await api.event.delete(id)
                await api.event.getAll();
            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoaidng(false)
    }

    const getEvent = async () => {
        // setLoading(true);
        const colRef = collection(db, "Event");
        const docsSnap = await getDocs(colRef);
        const list: any = [];
        docsSnap.forEach((doc) => {
            // console.log(doc.data());
            list.push(doc.data());
        })
        setAgent(list);
        // setLoading(false)
    }

    const view = (id: string) => {
        navigate(`/a/agents/${id}`)
    }


    useEffect(() => {
        getEvent()
    }, [])

    return (
        <>
            <div className="" style={{ display: "flex" }}>
                <button className="uk-button uk-button-default" onClick={onView}>Edit</button>
                <button className="uk-button uk-button-default" onClick={() => onDelete(event.id)}>Delete</button>

                {/* <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add Event</button> */}
            </div>
        </>
    );
});
