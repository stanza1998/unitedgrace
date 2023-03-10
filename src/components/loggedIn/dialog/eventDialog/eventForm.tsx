import react, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect } from "react"
import { IEvent } from "../../../../Shared/Interface/IEvent";
import { useAppContext } from "../../../Context";


interface IFromProps {
    event: IEvent;
    setEvent: Dispatch<SetStateAction<IEvent>>
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    src: string;
    setSrc: Dispatch<SetStateAction<string>>
    setSelectedFile: Dispatch<SetStateAction<File | null>>
    progress: number;
    setProgress: Number;
}

export const EventForm = (props: IFromProps) => {

    const { store, api } = useAppContext();
    const { onSubmit, event, setEvent, loading, setSelectedFile, src, setSrc, progress, setProgress } = props;

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file =
            e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        if (!file) return;
        setSelectedFile(file);
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                const $src = reader.result?.toString() || "";
                setSrc($src);
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
        e.target.value = "";
    };






    return (
        <form onSubmit={onSubmit}>
            <legend className="uk-legend">Event</legend>
            <label className="thumbnail uk-margin">
                <img src={src} alt="" />
                Select Image
                <div className={`tools`}>
                    <input className="d-none" type="file" accept="image/*" onChange={onFileChange} />
                    <progress className="uk-progress" value={progress} max="100"></progress>
                </div>
            </label>
            <div className="uk-margin">
                <label>Title</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="text" placeholder=""
                    value={event.title}
                    onChange={(e) =>
                        setEvent({ ...event, title: (e.target.value) })
                    }

                />
            </div>
            <div className="uk-margin">
                <label>Description</label>
                <br />
                <textarea className="uk-input uk-form-width-large w-100"
                    value={event.description}
                    style={{ height: "80px" }}
                    onChange={(e) =>
                        setEvent({ ...event, description: (e.target.value) })
                    }
                />
            </div>

            <div className="uk-margin">
                <label>Vanue</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="text"
                    value={event.vanue}
                    onChange={(e) =>
                        setEvent({ ...event, vanue: (e.target.value) })
                    }
                />
            </div>
            <div className="uk-margin">
                <label>Start Date</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="date"
                    value={event.startDate}
                    onChange={(e) =>
                        setEvent({ ...event, startDate: (e.target.value) })
                    }
                />
            </div>
            <div className="uk-margin">
                <label>End Date</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="date"
                    value={event.endDate}
                    onChange={(e) =>
                        setEvent({ ...event, endDate: (e.target.value) })
                    }
                />
            </div>
            <button style={{ color: "white", backgroundColor: "#2F80ED", padding: "5px", borderRadius: "5px", width: "100px" }} type="submit">Submit
                {loading && <div data-uk-spinner></div>}
            </button>
        </form>

    )
}

