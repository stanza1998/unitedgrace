import react, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect } from "react"
import { ITrinity } from "../../../../Shared/Interface/ITrinity";
import { useAppContext } from "../../../Context";


interface IFromProps {
    trinity: ITrinity;
    setTrinity: Dispatch<SetStateAction<ITrinity>>
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    src: string;
    srcImage: string;
    setSrc: Dispatch<SetStateAction<string>>
    setSelectedFile: Dispatch<SetStateAction<File | null>>
    setSrcImg: Dispatch<SetStateAction<string>>
    setSelectedFileImg: Dispatch<SetStateAction<File | null>>
    progress: number;
    setProgress: Number;
}

export const TrinityForm = (props: IFromProps) => {

    const { store, api } = useAppContext();
    const { onSubmit, trinity, setTrinity, loading, setSelectedFile, src, setSrc, progress, setProgress, setSrcImg, setSelectedFileImg, srcImage } = props;

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

    const onFileChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file =
            e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        if (!file) return;
        setSelectedFileImg(file);
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                const $src = reader.result?.toString() || "";
                setSrcImg($src);
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
            <legend className="uk-legend">Trinity</legend>
            {/* <label className="thumbnail uk-margin">
                <img src={srcImage} alt="" />
                Select Image
                <div className={`tools`}>
                    <input className="d-none" type="file" accept="image/*" onChange={onFileChange1} />
                    <progress className="uk-progress" value={progress} max="100"></progress>
                </div>
            </label> */}
            <label className="thumbnail uk-margin">
                <img src={src} alt="" />
                Select Audio
                <div className={`tools`}>
                    <input className="d-none" type="file" accept="audio/*" onChange={onFileChange} />
                    <progress className="uk-progress" value={progress} max="100"></progress>
                </div>
            </label>
            <div className="uk-margin">
                <label>Song Name</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="text" placeholder=""
                    value={trinity.name}
                    onChange={(e) =>
                        setTrinity({ ...trinity, name: (e.target.value) })
                    }

                />
            </div>
            <div className="uk-margin">
                <label>Artist Name</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    placeholder=""
                    value={trinity.artist}
                    onChange={(e) =>
                        setTrinity({ ...trinity, artist: (e.target.value) })
                    }
                />
            </div>
            <button style={{ color: "white", backgroundColor: "#2F80ED", padding: "5px", borderRadius: "5px", width: "100px" }} type="submit">Submit
                {loading && <div data-uk-spinner></div>}
            </button>
        </form>

    )
}

