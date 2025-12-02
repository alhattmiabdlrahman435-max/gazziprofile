import React from "react";
import Question from "./Question";
import ContactUs from "./ContactUs";
import { ServiceType } from "@/lib/utils";
type CommonQuestionsProps = {
  commonQ: ServiceType["CommonQuestions"];
};
import { motion } from "motion/react";

function CommonQuestions({ commonQ }: CommonQuestionsProps) {
  return (
    <div className="px-8 py-8 mt-16 bg-[#f3f5ff] dark:bg-[#050710]">
      <div className="container px-8 flex max-lg:flex-col gap-3 items-center max-lg:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-5 w-1/2 max-xl:w-3/4"
        >
          <h1 className="text-[45px] max-md:text-3xl max-md:mx-auto font-extrabold w-fit mb-5 text-[#2f45ff]">
            {commonQ.title}{" "}
            <span className="mt-px bg-[#d5b26e] h-px block"></span>
          </h1>
          <div className="flex flex-col gap-2 lg:max-w-3/4">
            {commonQ.boxes.map((b, i) => {
              return (
                <Question key={i} question={b.question} answer={b.answer} />
              );
            })}
          </div>
        </motion.div>
        <ContactUs />
      </div>
    </div>
  );
}

export default CommonQuestions;
