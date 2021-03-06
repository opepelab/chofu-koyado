import { motion } from "framer-motion";
import React from "react";

type RRNode = {
  children: React.ReactNode;
};

const Framerdiv = React.memo(({ children }: RRNode): JSX.Element => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.article>
  );
});

export default Framerdiv;
