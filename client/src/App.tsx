import LandingPage from "./pages/LandingPage";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <LandingPage />

      <motion.div
        initial={{
          opacity: 1,
          scale: 1,
          transformOrigin: "bottom right",
        }}
        animate={{
          opacity: 0,
          scale: 1.8,
        }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-0 bg-[#f5f1ed] z-[9999] pointer-events-none"
      />
    </>
  );
}

export default App;