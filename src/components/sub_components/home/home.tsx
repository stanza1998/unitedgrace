import react from "react"
import mission from "../../../assets/home/mission.jpg"
import vision from "../../../assets/home/vision.jpg"
import doctrine from "../../../assets/home/doctrine.jpg"
import music from "../../../assets/home/music.jpg"

import "./home.scss"
import { motion } from "framer-motion"

export const Home = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >

            <div className="home">
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>
                    <ul className="uk-slider-items uk-grid">
                        <li className="uk-width-7-8">
                            <div className="uk-panel container">
                                <img src={mission} alt="" style={{ height: "26rem" }} />
                                <div className="uk-position-center uk-text-center text-overlay">
                                    <h2 data-uk-slider-parallax="x: 100,-100 " style={{ color: "white" }}>OUR VISSION</h2>
                                    <p data-uk-slider-parallax="x: 200,-200" style={{ fontSize: "16px" }}>To bring healing to the sick, deliver the captives and empower the poor with the gospel.</p>
                                </div>
                            </div>
                        </li>
                        <li className="uk-width-7-8">
                            <div className="uk-panel container">
                                <img src={vision} alt="" style={{ height: "26rem" }} />
                                <div className="uk-position-center uk-text-center text-overlay">
                                    <h2 data-uk-slider-parallax="x: 100,-100 " style={{ color: "white" }}>OUR MISSION</h2>
                                    <p data-uk-slider-parallax="x: 200,-200" style={{ fontSize: "16px" }}>Preaching the gospel through outreach programs, books, Musics , television and radio to all nations.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                </div>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                    <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                        <img src={doctrine} alt="" data-uk-cover />
                        <canvas width="600" height="400"></canvas>
                    </div>
                    <div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">DOCTRINE</h3>
                            <p>
                                We believe that Jesus Christ is the son of God, born in the flesh, baptized through water immersion,
                                dead for the sins of the world, resurrected the 3rd day and ascended to heaven.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>
                    <h3 style={{ color: "black" }}>Up Coming Events</h3>
                    <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-grid">
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel" >
                                <img style={{ width: "100%" }} src={vision} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>

                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                </div>
                <div className="uk-position-relative uk-visible-toggle uk-light uk-margin" data-uk-slider>
                    <h3 style={{ color: "black" }}>Testimonials</h3>
                    <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-grid">
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img style={{ width: "100%" }} src={mission} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                </div>

                <div className="uk-section-default uk-margin " style={{ backgroundColor: "rgba(255, 0, 0, 0.2);" }} >
                    <div className="uk-section uk-light uk-background-cover" style={{ backgroundImage: `url(${mission})`, height: "18rem" }} >
                        <div className="uk-container">
                            <h3>TRINITY</h3>
                            <button className="uk-button uk-button-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="uk-section-default uk-margin " style={{ backgroundColor: "rgba(255, 0, 0, 0.2);" }} >
                    <div className="uk-section uk-light uk-background-cover" style={{ backgroundImage: `url(${vision})`, height: "18rem" }} >
                        <div className="uk-container">
                            <h3>e-STORE</h3>
                            <button className="uk-button uk-button-primary">Visit Our Store Now</button>
                        </div>
                    </div>
                </div>
                <div className="uk-section-default uk-margin " style={{ backgroundColor: "rgba(255, 0, 0, 0.2);" }} >
                    <div className="uk-section uk-light uk-background-cover" style={{ backgroundImage: `url(${mission})`, height: "18rem" }} >
                        <div className="uk-container">
                            <h3>CONTACT US</h3>
                            <button className="uk-button uk-button-primary">Connet with us</button>
                        </div>
                    </div>
                </div>
                <h3 style={{ color: "black" }}>Find our location</h3>
                <div className="responsive-map uk-margin">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                </div>
            </div>
        </motion.div>

    )
}