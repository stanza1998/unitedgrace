import { observer } from "mobx-react-lite"
import react from "react"
import { TestimonialModel } from "../../../Shared/models/TestimonialModel";
import { TestCard } from "./testCard";

interface IProps {
    tests: TestimonialModel[]
}

export const Tests = observer((props: IProps) => {
    const { tests } = props;

    return (
        <div className="uk-child-width-1-3@m" data-uk-grid>
            {tests.map((d) => (
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={d.imgUrl} style={{ height: "300px", width: "100%" }} alt="" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title text-center" style={{ textTransform: "capitalize" }}>{"Full Name: "}{d.name}</h3>
                            <p> <strong>Testimonial: </strong> {d.testimonial}</p>
                            <TestCard test={d} />
                        </div>
                    </div>
                </div>
            ))}
            {tests.map((d) => d).length == 0 && <h5 className="text-danger">No tests added</h5>}
        </div>

    )
})
