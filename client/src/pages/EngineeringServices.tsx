import CommonQuestions from "@/components/Engineering-Services/CommonQuestions";
import ContactUs from "@/components/Engineering-Services/ContactUs";
import Description from "@/components/Engineering-Services/Description";
import OurFeatures from "@/components/Engineering-Services/OurFeatures";
import OurServices from "@/components/Engineering-Services/OurServices";
import Header from "@/components/Header";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Contact from "./Contact";
import { useParams } from "wouter";
import { Services, ServiceType } from "../lib/utils";
import { motion } from "motion/react";

function EngineeringServices() {
  const { id } = useParams();
  const [service, setService] = useState<ServiceType | null>(null);

  useEffect(() => {
    if (id == undefined) return;
    const index = Number(id);
    setService(pre => Services[index]);
    console.log(service);
  }, []);
  return (
    <div className="bg-white dark:bg-[#050710]">
      <Header></Header>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="title text-center p-5 text-[45px] max-md:text-[30px] font-extrabold rounded-b-[80px] h-[150px] dark:bg-[#111a33]
       bg-[#f3f5ff] flex justify-center items-center"
      >
        <h1 className="text-[#2f45ff] w-fit dark:text-white">
          {service?.title}
        </h1>
      </motion.div>
      {service && (
        <>
          <Description description={service.Description} />
          <OurServices ourServices={service.OurServices} />
          <OurFeatures ourFeatures={service.OurFeatures} />
          <CommonQuestions commonQ={service.CommonQuestions} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default EngineeringServices;
