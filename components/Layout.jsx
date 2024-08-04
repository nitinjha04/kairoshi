import React from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { page } from "../constansts/variants";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description="Kairoshi is an online web tool to help you with downloading Instagram Photos, Videos and IGTV videos. Kairoshi is designed to be easy to use on any device, such as, mobile, tablet or computer."
        openGraph={{
          title,
          description,
          images: [
            {
              url: "https://kairoshi.vercel.app/images/open-graph.jpg",
              width: 1200,
              height: 630,
              alt: "Kairoshi | Home",
            },
          ],
        }}
      />
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={page}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
