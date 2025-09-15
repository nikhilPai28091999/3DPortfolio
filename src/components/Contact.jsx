import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_qwaq864
//service_5qphe9h
//8L3x7ye0xYP1gMFJ0

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_5qphe9h",
        "template_qwaq864",
        {
          from_name: form.name,
          to_name: "Nikhil Pai",
          from_email: form.email,
          to_email: "nikpai2809@gmail.com",
          message: form.message,
        },
        "8L3x7ye0xYP1gMFJ0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You. I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <h3 className={styles.sectionHeadText}>Contact Me</h3>
          <form
            ref={formref}
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
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium hover:bg-purple-700 transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="flex justify-center gap-8 mt-6 text-white text-sm font-medium">
              <a
                href="https://www.linkedin.com/in/nikhil-pai-2164aa1aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nikhilPai28091999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:nikpai2809@gmail.com"
                className="hover:text-purple-500 transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
