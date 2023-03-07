import { motion } from "framer-motion"
import react from "react"
import church from "../../../assets/about/church.jpg"
import leader from "../../../assets/about/leader.jpg"
import "./about.scss"

export const About = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >
            <div className="about" style={{ marginBottom: "5rem" }}>
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>
                    <ul className="uk-slider-items uk-grid">
                        <li className="uk-width-7-8">
                            <div className="uk-panel container">
                                <img src={church} alt="" style={{ height: "26rem", width: "100%" }} />
                                <div className="uk-position-center uk-text-center text-overlay">
                                    <h2 data-uk-slider-parallax="x: 100,-100 " style={{ color: "white" }}>ABOUT UNITED GRACE FAMILY</h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a style={{ background: "white", color: "blue", marginTop: "-5rem" }} className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                </div>
                <div className="uk-child-width-1-2@s uk-grid-match uk-margin" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <img src={leader} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                            <h3 className="uk-card-title">Apostle Isaac Imanuel Lucas,</h3>
                            <p>United Grace Family a Ministry founded by Apostle Isaac Imanuel Lucas, in the southern Town of
                                Namibia, Lüderitz, in 2009.
                            </p>
                            <p>
                                The ministry was founded in line with a calling received from the Lord in 2003. Though at the time
                                Apostle Isaac Imanuel Lucas had gone for work at Lüderitz Town Council, the Lord was also working
                                out and preparing him for the calling of soul winning, preaching the gospel, healing the sick and so
                                much more!
                            </p>
                            <p>
                                He began with the work of the Lord as a part - time minister and in 2013 he decided to answer the
                                calling full-time and embarked upon a lifetime journey of preaching the gospel and church planting.
                                It was in that year 2013 that he resigned from his full-time job, with Lüderitz Town Council, then
                                accepted the calling of God into preaching the gospel as a full-time minister.
                            </p>
                            <p>
                                It was 2 years later, led by the Holy Spirit that the man of God envisioned the necessity of moving his
                                ministry operations from South to Northern Namibia in 2015. According to him this was deemed as a
                                strategic move and great step in advancing his vision into the rest of the country.
                            </p>
                            <p>
                                The ministry was initially called, Grace Ministries, and in 2015 it was re-branded to United Grace
                                Family Ministries. The church was started with only 3 members, and it has since grown and impacted
                                the lives of hundreds and thousands of people.
                            </p>
                            <p>
                                United Grace Family Ministries is a legally registered ministry according to the requirements of the
                                government of the Republic of Namibia, and has a vision to reach out and spread to yonder regions
                                of the country and beyond the borders of Namibia.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 style={{ color: "black" }}>Church Members</h3>

                <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-hover uk-card-body">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card uk-card-hover uk-card-body">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card uk-card-hover uk-card-body ">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-hover uk-card-body">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card uk-card-hover uk-card-body">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card uk-card-hover uk-card-body ">
                            <img src={leader} style={{ width: "100%" }} alt="" />
                            <h3 className="uk-card-title">Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </div>

            </div>
        </motion.div>
    )
}