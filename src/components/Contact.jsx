import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.9 }}
        className="text-center my-10 text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a className="my-4 border-b border-white">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
