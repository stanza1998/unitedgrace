import { observer } from "mobx-react-lite";
import { FormEvent, useEffect, useState } from "react";
import useUploadToStorage from "../../../../Shared/FUNCTION/uploadtToStorage";
import { defaultEvent, IEvent } from "../../../../Shared/Interface/IEvent";
import { useAppContext } from "../../../Context";
import { hideModalId } from "../../../Modal";
import { DIALOGNAMES } from "../../Events/event";
import { EventForm } from "./eventForm";

export const EventDialog = observer(() => {
    const { store, api } = useAppContext()
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState<IEvent>({ ...defaultEvent })
    const { uploadFile, progress } = useUploadToStorage();
    const [src, setSrc] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const $event: IEvent = {
            ...event
        };
        if (selectedFile) {
            const downloadURL = await uploadFile(selectedFile, `/event`);
            $event.imgUrl = downloadURL;
        }


        if (store.event.selected) {
            try {
                setLoading(true)
                const updated = await api.event.update($event);
                if (updated) store.event.load([updated])

            } catch (error) {
                console.log("Error updating", error)
            }
        } else {
            try {
                setLoading(true)
                const created = await api.event.create($event);
                if (created) store.event.load([created])

            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoading(false)
        setEvent({ ...defaultEvent })
        store.event.clearSelected()
        setSrc("");
        hideModalId(DIALOGNAMES.EVENT)

    }
    const clearevent = () => {
        store.event.clearSelected()
        setSrc("")
    }


    useEffect(() => {
        if (store.event.selected) {
            setEvent(store.event.selected)
            setSrc(store.event.selected.imgUrl)
        }
        else setEvent({ ...defaultEvent })
        console.log("Selected event", event);

    }, [store.event.selected])


    return (
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
            <button className="uk-modal-close-default" type="button" data-uk-close onClick={clearevent}></button>
            <EventForm event={event} setEvent={setEvent} onSubmit={onSubmit} loading={loading}
                src={src}
                setSrc={setSrc}
                setSelectedFile={setSelectedFile}
                progress={progress}
                setProgress={progress}
            />
        </div>
    )
});