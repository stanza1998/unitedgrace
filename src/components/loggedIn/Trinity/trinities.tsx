import { observer } from "mobx-react-lite"
import react from "react"
import ReactAudioPlayer from "react-audio-player";
import { TrinityModel } from "../../../Shared/models/TrinityModel";
import { TrinityCard } from "./trinityCard";

interface IProps {
    trinities: TrinityModel[]
}

export const Trinities = observer((props: IProps) => {
    const { trinities } = props;

    return (
        <div className="uk-child-width-1-3@m" data-uk-grid>
            {trinities.map((d) => (
                <div>
                    <div className="uk-card uk-card-default">
                        {/* <div className="uk-card-media-top">
                            <img src={d.imgUrl} style={{ height: "300px", width: "100%" }} alt="" />
                        </div> */}
                        <div className="uk-card-media-top">
                            <audio style={{ width: "100%", background: "black" }} controls>
                                <source src={d.audioUrl} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title text-center" style={{ textTransform: "capitalize" }}>{"Song Name: "}{d.name}</h3>
                            <p> <strong>Artist: </strong> {d.artist}</p>
                            <TrinityCard trinity={d} />
                        </div>
                    </div>
                </div>
            ))}
            {trinities.map((d) => d).length == 0 && <h5 className="text-danger">No trinity added</h5>}
        </div>

    )
})
