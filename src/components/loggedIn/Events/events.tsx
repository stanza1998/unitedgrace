import { observer } from "mobx-react-lite"
import react from "react"
import { EventModel } from "../../../Shared/models/EventModel";
import { EventCard } from "./eventCard";

interface IProps {
    events: EventModel[]
}

export const Events = observer((props: IProps) => {
    const { events } = props;

    return (
        <div className="uk-child-width-1-3@m" data-uk-grid>
            {events.map((d) => (
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={d.imgUrl} style={{ height: "300px", width: "100%" }} alt="" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title text-center" style={{ textTransform: "capitalize" }}>{"Title: "}{d.title}</h3>
                            <p> <strong>VANUE: </strong> {d.vanue}</p>
                            <p> <strong>START DATE: </strong> {d.startDate}</p>
                            <p> <strong>END DATE: </strong> {d.endDate}</p>
                            <p> <strong>DESCRIPTION: </strong> {d.description}</p>
                            <EventCard event={d} />
                        </div>
                    </div>
                </div>
            ))}
            {events.map((d) => d).length == 0 && <h5 className="text-danger">No events added</h5>}
        </div>

    )
})
