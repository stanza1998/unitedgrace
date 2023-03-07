import { motion } from "framer-motion"
import react from "react"

export const Events = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            events
        </motion.div>
    )
}