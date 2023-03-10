import { observer } from "mobx-react-lite";
import reat, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import { db } from "../../../firebase";
import { showModalId } from "../../Modal";
import { TestimonialModel } from "../../../Shared/models/TestimonialModel";
import { DIALOGNAMES } from "./testimonial";



interface IProps {
    test: TestimonialModel
}

export const TestCard = observer((props: IProps) => {
    const { store, api } = useAppContext();
    const [loading, setLoaidng] = useState(false);
    const [agent, setAgent] = useState<[]>([]);
    const navigate = useNavigate();
    const { test } = props;

    const value = 3;


    const onView = () => {
        store.test.select(test.asJson);
        showModalId(DIALOGNAMES.TEST);
    };

    const onDelete = async (id: string) => {
        if (window.confirm("Delete")) {
            setLoaidng(true)
            try {
                await api.test.delete(id)
                await api.test.getAll();
            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoaidng(false)
    }

    const getTest = async () => {
        // setLoading(true);
        const colRef = collection(db, "test");
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
        getTest()
    }, [])

    return (
        <>
            <div className="" style={{ display: "flex" }}>
                <button className="uk-button uk-button-default" onClick={onView}>Edit</button>
                <button className="uk-button uk-button-default" onClick={() => onDelete(test.id)}>Delete</button>

                {/* <button style={{ float: "right" }} className="uk-button uk-button-default" onClick={onCreate} >Add test</button> */}
            </div>
        </>
    );
});
