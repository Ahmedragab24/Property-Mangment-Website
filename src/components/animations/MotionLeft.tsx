"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const MotionDiv = ({ children, className }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
