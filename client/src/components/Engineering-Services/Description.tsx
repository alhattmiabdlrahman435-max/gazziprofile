import { ServiceType } from "@/lib/utils";
import { P } from "node_modules/framer-motion/dist/types.d-BJcRxCew";
import React from "react";
type DescriptionProps = {
  description: ServiceType["Description"];
};
import { motion } from "motion/react";

function Description({ description }: DescriptionProps) {
  return (
    <div className="my-6 md:px-8 py-8 bg-white dark:bg-[#050710]">
      <div className="container px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="description space-y-10 max-md:text-center"
        >
          <div className="border-b border-[#444] pb-10">
            {description.texts.map((text, index) => {
              return (
                <p
                  className={`xl:text-[25px] max-xl:text-center md:text-[20px] max-md:text-[18px] ${description.texts.length > 1 && index != description.texts.length - 1 ? "mb-8" : ""} 
                       font-semibold leading-[1.3] text-[#777777] dark:text-white lg:p-4`}
                >
                  {text}
                </p>
              );
            })}
          </div>
          <button
            className="text-2xl max-md:text-xl max-md:mx-auto font-bold bg-[#2f45ff] px-5 py-3 cursor-pointer text-white rounded-sm
        hover:bg-[#091a9b] hover:scale-105 transition"
          >
            {description.button}{" "}
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="img w-full lg:w-3/4 mx-auto"
        >
          <img
            src={description.img}
            alt=""
            className="w-full max-h-[900px] object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Description;
