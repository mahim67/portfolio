import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} mt-2`}>What I Have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
