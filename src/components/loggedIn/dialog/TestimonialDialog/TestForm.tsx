import react, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect } from "react"
import { ITestimonial } from "../../../../Shared/Interface/ITestimonials";
import { useAppContext } from "../../../Context";


interface IFromProps {
    test: ITestimonial;
    setTest: Dispatch<SetStateAction<ITestimonial>>
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    src: string;
    setSrc: Dispatch<SetStateAction<string>>
    setSelectedFile: Dispatch<SetStateAction<File | null>>
    progress: number;
    setProgress: Number;
    
}

export const TestForm = (props: IFromProps) => {

    const { store, api } = useAppContext();
    const { onSubmit, test, setTest, loading, setSelectedFile, src, setSrc, progress, setProgress } = props;

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
            <legend className="uk-legend">Testimonial</legend>
            <label className="thumbnail uk-margin">
                <img src={src} alt="" />
                Select Image
                <div className={`tools`}>
                    <input className="d-none" type="file" accept="image/*" onChange={onFileChange} />
                    <progress className="uk-progress" value={progress} max="100"></progress>
                </div>
            </label>
            <div className="uk-margin">
                <label>Full Name</label>
                <br />
                <input className="uk-input uk-form-width-large w-100"
                    type="text" placeholder=""
                    value={test.name}
                    onChange={(e) =>
                        setTest({ ...test, name: (e.target.value) })
                    }

                />
            </div>
            <div className="uk-margin">
                <label>Testimonial</label>
                <br />
                <textarea className="uk-input uk-form-width-large w-100"
                    placeholder=""
                    style={{ height: "80px" }}
                    value={test.testimonial}
                    onChange={(e) =>
                        setTest({ ...test, testimonial: (e.target.value) })
                    }
                />
            </div>
            <button style={{ color: "white", backgroundColor: "#2F80ED", padding: "5px", borderRadius: "5px", width: "100px" }} type="submit">Submit
                {loading && <div data-uk-spinner></div>}
            </button>
        </form>

    )
}

