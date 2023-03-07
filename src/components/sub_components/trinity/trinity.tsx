import { motion } from "framer-motion"
import react from "react"

export const Trinity = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            trinity
        </motion.div>
    )
}