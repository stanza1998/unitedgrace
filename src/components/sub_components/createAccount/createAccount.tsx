import { motion } from "framer-motion"
import react, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { defaultUser, IUser } from "../../../Shared/Interface/IUser";
import { useAppContext } from "../../Context";

export const CreateAccoount = () => {
    const [user, setUser] = useState<IUser>({ ...defaultUser });
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { store, api } = useAppContext();

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        api.auth.onSignup(user);
        setLoading(false)
        navigate("/login")
    };
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            <div className="login">
                <div className="div">
                    <div className="uk-card uk-card-default uk-card-body uk-width-1-3@m ">
                        <h3 className="uk-card-title div">Create Account</h3>
                        <form onSubmit={handleSignUp}>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon:  tag"></a>
                                    <input className="uk-input" type="text" aria-label="Clickable icon" value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
                                </div>
                            </div>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon" href="#" uk-icon="icon:  user"></a>
                                    <input className="uk-input" type="email" aria-label="Clickable icon" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </div>
                            </div>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <a className="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: lock"></a>
                                    <input className="uk-input" type="password" aria-label="Clickable icon" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                </div>
                            </div>
                            <div className="uk-margin div">
                                <div className="uk-inline">
                                    <p data-uk-margin>
                                        <button className="uk-button uk-button-primary" type="submit">Create</button>
                                    </p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}