import { collection, getDocs } from "firebase/firestore"
import { motion } from "framer-motion"
import react, { useEffect, useState } from "react"
import { db } from "../../../firebase"
import { useAppContext } from "../../Context"
import { Loader } from "../../loader/loader"
import church from "../../../assets/about/church.jpg"



export const Testimonials = () => {
    const [events, setEvent] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const { store, api } = useAppContext();


    const getEvents = async () => {
        setLoading(true)
        const colRef = collection(db, "Testimonials");
        const docsSnap = await getDocs(colRef);
        const num: any = [];
        docsSnap.forEach(doc => {
            num.push(doc.data());
        })
        setEvent(num)
        setLoading(false)
    }

    useEffect(() => {
        getEvents();
    }, [])

    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            {loading ? <><Loader /></>

                :
                <>
                    <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>
                        <ul className="uk-slider-items uk-grid">
                            <li className="uk-width-7-8">
                                <div className="uk-panel container">
                                    <img src={church} alt="" style={{ height: "26rem", width: "100%" }} />
                                    <div className="uk-position-center uk-text-center text-overlay">
                                        <h2 data-uk-slider-parallax="x: 100,-100 " style={{ color: "white" }}>TESTIMONIALS</h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                    </div>
                    <div className="uk-child-width-1-3@m" style={{ marginTop: "5rem", marginBottom: "4rem" }} data-uk-grid>
                        {events.map((d) => (
                            <div>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src={d.imgUrl} style={{ height: "300px", width: "100%" }} alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title text-center" style={{ textTransform: "capitalize" }}>{"Full Name: "}{d.name}</h3>
                                        <p> <strong>Testimonial: </strong> {d.testimonial}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {events.map((d) => d).length == 0 && <h5 style={{ color: "red" }}>No testimonials added</h5>}
                    </div>
                </>}

        </motion.div>
    )
}