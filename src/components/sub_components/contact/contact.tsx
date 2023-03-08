import { motion } from "framer-motion"
import react from "react"
import "./contact.scss"

export const Contact = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            <div className="contact" style={{marginLeft:"-2rem"}}>
                <div className="contain">

                    <div className="wrapper">

                        <div className="form">
                            <h4>GET IN TOUCH</h4>
                            <h2 className="form-headline">Send us a message</h2>
                            <form id="submit-form" action="">
                                <p>
                                    <input id="name" className="form-input" type="text" placeholder="Your Name*" required />
                                    <small className="name-error"></small>
                                </p>
                                <p>
                                    <input id="email" className="form-input" type="email" placeholder="Your Email*" required />
                                    <small className="name-error"></small>
                                </p>
                                <p className="full-width">
                                    <input id="company-name" className="form-input" type="number" placeholder="Your Phone No.*" required />
                                    <small></small>
                                </p>
                                <p className="full-width">
                                    <input id="company-name" className="form-input" type="text" placeholder="Subject*" required />
                                    <small></small>
                                </p>
                                <p className="full-width">
                                    <textarea id="message" placeholder="Your Message*" required></textarea>
                                    <small></small>
                                </p>
                                {/* <p className="full-width">
                                    <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services.
                                </p> */}
                                <p className="full-width">
                                    <input type="submit" className="submit-btn" value="Submit" />
                                    <button className="reset-btn">Reset</button>
                                </p>
                            </form>
                        </div>

                        <div className="contacts contact-wrapper">

                            <ul>
                                <li>
                                    <strong> Church Address: </strong>
                                    United Grace Family International
                                    Windhoek, Namibia
                                </li>
                                <span className="hightlight-contact-info">
                                    <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i>info@ugfministry.org</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+264-81-551-7247</span></li>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}