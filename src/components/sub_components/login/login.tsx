import { motion } from "framer-motion"
import { observer } from "mobx-react-lite";
import react, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import "./login.scss"

export const Login = observer(() => {
    const { store, api } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = store.user.currentUser
    const currentUser = store.auth.meJson;
    const loading = store.auth.loading;
    const error = store.auth.error;

    const navigate = useNavigate();
    const location = useLocation();



    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            api.auth.signIn(email, password);
        } catch (error) {
        }


    };

    console.log("error 3", error);

    if (!!currentUser) {
        currentUser?.role.Admin ? navigate("/admin") : navigate("/");
    }


    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            <div className="login">
                <div className="div">
                    <div className="uk-card uk-card-default uk-card-body uk-width-1-3@m ">
                        <h3 className="uk-card-title div">Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon" href="#" uk-icon="icon:  user"></a>
                                    <input className="uk-input" type="email" aria-label="Clickable icon" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>

                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: lock"></a>
                                    <input className="uk-input" type="password" aria-label="Clickable icon" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <p data-uk-margin>
                                        <button className="uk-button uk-button-primary" type="submit">Login</button>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
})