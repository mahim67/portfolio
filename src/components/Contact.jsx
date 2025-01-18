import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { useRef, useState } from "react";
import { EarthCanvas } from "./canvas";
import { Facebook, Github, Gitlab, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceID = 'service_6fxtzc2';
  const templateID = 'template_d78a32k';
  const publicKey = 'jI0SMZ0gMc6Vq7sQ9';

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(serviceID, templateID, {
      from_name: form.name,
      to_name: 'Mohiuddin Mahim',
      from_email: form.email,
      to_email: 'kmahim489@gmail.com',
      message: form.message,
    }, publicKey)
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      })
  }

  return (
    <>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>
      <div className="flex gap-4 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[1] flex justify-center items-center gap-8 bg-black-100 p-6 rounded-2xl">
          <div onClick={() => window.open('https://gitlab.com/Mahim67', "_blank")} className="w-20 h-20 bg-blue-900 rounded-full flex justify-center items-center cursor-pointer">
            <Gitlab size={40} />
          </div>
          <div onClick={() => window.open('https://github.com/mahim67', "_blank")} className="w-20 h-20 bg-green-800 rounded-full flex justify-center items-center cursor-pointer">
            <Github size={40} />
          </div>
          <div onClick={() => window.open('https://www.linkedin.com/in/mohiuddin-mahim-589876240', "_blank")} className="w-20 h-20 bg-pink-900 rounded-full flex justify-center items-center cursor-pointer">
            <Linkedin size={40} />
          </div>
          <div onClick={() => window.open('https://www.facebook.com/mohiuddenkhan.mahim', "_blank")} className="w-20 h-20 bg-indigo-600 rounded-full flex justify-center items-center cursor-pointer">
            <Facebook size={40} />
          </div>
        </motion.div>
      </div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                name="message"
                rows="7"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[530px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
