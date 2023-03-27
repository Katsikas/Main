'use client';
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
 

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Pets on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Βρες τους φίλους σου που βολτάρουν και βγες για μια νεα περιπέτεια!!!
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/greece.png" alt="map" className="w-full h-full object-contain" />
        <div className="absolute top-1/2 left-1/4 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/dog01.png" alt="dog" className="w-[100%] h-[90%] " />
        </div>
        <div className="absolute top-20 left-1/4 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/dog02.png" alt="dog" className="w-full h-full " />
        </div>
        <div className="absolute top-[85%] left-[45%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/dog03.png" alt="dog" className="w-full h-full " />
        </div>
        <div className="absolute top-[48%] left-[38%] w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/dog04.png" alt="dog" className="w-full h-full " />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
