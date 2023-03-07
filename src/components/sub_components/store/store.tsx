import { motion } from "framer-motion"
import react from "react"

export const Store = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            store
        </motion.div>
    )
}