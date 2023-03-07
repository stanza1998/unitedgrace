import { motion } from "framer-motion"
import react from "react"

export const Testimonials = () => {
    return (
        <motion.div
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
        >
            testimonials
        </motion.div>
    )
}