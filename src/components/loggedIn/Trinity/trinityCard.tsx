import { observer } from "mobx-react-lite";
import reat, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import { db } from "../../../firebase";
import { showModalId } from "../../Modal";
import { TrinityModel } from "../../../Shared/models/TrinityModel";
import { DIALOGNAMES } from "./trinity";



interface IProps {
    trinity: TrinityModel
}

export const TrinityCard = observer((props: IProps) => {
    const { store, api } = useAppContext();
    const [loading, setLoaidng] = useState(false);
    const [agent, setAgent] = useState<[]>([]);
    const navigate = useNavigate();
    const { trinity } = props;

    const value = 3;


    const onView = () => {
        store.trinity.select(trinity.asJson);
        showModalId(DIALOGNAMES.TRINITY);
    };

    const onDelete = async (id: string) => {
        if (window.confirm("Delete")) {
            setLoaidng(true)
            try {
                await api.trinity.delete(id)
                await api.trinity.getAll();
            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoaidng(false)
    }

    const gettrinity = async () => {
        // setLoading(true);
        const colRef = collection(db, "Trinity");
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
        gettrinity()
    }, [])

    return (
        <>
            <div className="" style={{ display: "flex" }}>
                <button className="uk-button uk-button-default" onClick={onView}>Edit</button>
                <button className="uk-button uk-button-default" onClick={() => onDelete(trinity.id)}>Delete</button>

                {/* <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add trinity</button> */}
            </div>
        </>
    );
});
