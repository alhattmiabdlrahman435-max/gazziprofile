import React from "react";
import { motion } from "motion/react";

function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col gap-3"
    >
      <span className="text-xl font-medium text-[#2f45ff]">
        اشترك بقائمتنا البريدية
      </span>
      <h2 className="xl:text-4xl text-3xl font-extrabold max-w-[700px] text-[#777777] dark:text-white">
        اشترك الآن في قائمتنا البريدية لمعرفة كل ما هو جديد في عالم الاستشارات
        الهندسية.
      </h2>
      <div className="flex max-w-[500px] max-sm:w-full max-lg:mx-auto max-lg:w-1/2">
        <input
          type="text"
          placeholder="Sample.mail.com"
          className="h-12 outline-0 w-3/4 px-3 bg-[#e3e8ff] rounded-tr-md rounded-br-md dark:text-black"
        />
        <input
          type="button"
          value="اشترك"
          className="flex-1 bg-[#2f45ff] text-white text-xl max-sm:text-lg font-bold rounded-tl-md rounded-bl-md"
        />
      </div>
    </motion.div>
  );
}

export default ContactUs;
