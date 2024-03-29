"use client"


import HeaderNav from '@/components/HeaderNav';
import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion";
import Footer from '@/components/Footer';

const HomeLayout = ({ children }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main>
        <HeaderNav />
        <motion.div initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}>
          {children}
        </motion.div>
        <Footer />
      </main>
    </AnimatePresence>
  );
};

export default HomeLayout;