import { motion } from "framer-motion"
import react from "react"
import "./login.scss"

export const Login = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            <div className="login">
                <div className="div">
                    <div className="uk-card uk-card-default uk-card-body uk-width-1-3@m ">
                        <h3 className="uk-card-title div">Login</h3>
                        <form>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon" href="#" uk-icon="icon:  user"></a>
                                    <input className="uk-input" type="text" aria-label="Clickable icon" />
                                </div>
                            </div>

                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: lock"></a>
                                    <input className="uk-input" type="text" aria-label="Clickable icon" />
                                </div>
                            </div>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <p data-uk-margin>
                                        <button className="uk-button uk-button-primary">Create</button>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}