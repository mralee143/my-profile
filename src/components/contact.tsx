"use client";

import { Facebook, Linkedin, Mail, User } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ✅ SocialIcon component
interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}
function SocialIcon({ icon, link }: SocialIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 hover:border-white hover:scale-105 transition-all"
    >
      {icon}
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbx04CPXZfEO-DLvOObp85GiGBXE9apRSjJFLDvt0qmC65NoPIesMhusZgoHwLbk25VO/exec";

      const formDataToSend = new URLSearchParams();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(`Server returned ${response.status}`);
      }
    } catch (error) {
      console.error("Error!", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 text-center">CONTACT ME</h1>

      <div className="flex flex-col lg:flex-row gap-16 w-full max-w-6xl">
        {/* Left side */}
        <div className="flex-1">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/profile.jpeg"
                alt="avatar"
                className="w-[120px] h-[120px] rounded-full object-cover"
              />
              <div className="w-4 h-4 bg-orange-800 rounded-full animate-ping"></div>
            </div>

            <p className="text-gray-400 text-lg">Are you ready?</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              ELEVATE YOUR <br />
              BRAND EXPERIENCE <br />
              TO THE NEXT LEVEL
            </h2>

            <p className="text-lg md:text-xl max-w-xl">
              Hi, I'm <span className="font-semibold">Ali Haider</span>, a
              passionate UI Designer dedicated to creating user-friendly digital
              experiences.
            </p>

            {/* ✅ Social Links */}
            <div className="flex gap-4 mt-4">
              <SocialIcon
                icon={<Facebook size={20} />}
                link="https://facebook.com"
              />
              <SocialIcon
                icon={<FaWhatsapp size={20} />}
                link="https://wa.me/923144202998"
              />
              <SocialIcon
                icon={<Linkedin size={20} />}
                link="https://www.linkedin.com/in/ali-haider-611455316/"
              />
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="flex-1 bg-[#111] rounded-lg p-8 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1">FULL NAME</label>
                <div className="flex items-center bg-black px-4 py-3 rounded border border-gray-700">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Steve Milner"
                    className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
                    required
                  />
                  <User className="text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">EMAIL ADDRESS</label>
                <div className="flex items-center bg-black px-4 py-3 rounded border border-gray-700">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@websitename.com"
                    className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
                    required
                  />
                  <Mail className="text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">SUBJECT</label>
              <div className="flex items-center bg-black px-4 py-3 rounded border border-gray-700">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
                  required
                />
                <User className="text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">YOUR MESSAGE</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-black hover:bg-orange-800 transition-all px-6 py-3 rounded text-white font-semibold disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-500 text-center">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-500 text-center">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
