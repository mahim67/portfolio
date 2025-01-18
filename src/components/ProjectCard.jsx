import { color, motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";

export default function ProjectCard(props) {
  const { index, name, description, tags, image, source_code_link, detail_description } = props;
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.05, 0.25)}>
        <Tilt options={{ max: 25, scale: 1, speed: 250 }} className="bg-tertiary p-5 rounded-2xl sm:2-[360px] w-full">
            <div className="relative w-full h-[230px]">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img src={github} alt="gitlab" className="w-1/2 h-1/2 object-contain" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                {description ? <p className="mt-2 text-secondary text-[14px]">{description}</p> : ''}
                <ol>
                    {detail_description && detail_description.map((element, index) => (
                        <li className="mt-2 text-secondary text-[14px]" key={index}>{element.detail}</li>
                    ))}
                </ol>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <p key={`tag-${index}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
  );
}
 