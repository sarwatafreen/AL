import Link from "next/link"
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-purple-500">Get in Touch</h2>
        <p className="text-gray-400 mt-2">Ready to transform your business with AI?</p>
      </div>
      <div className="mt-10 w-full max-w-lg">
        <h3 className="text-2xl font-semibold">Contact Information</h3>
        <div className="mt-4 flex flex-col gap-3">
          <p className="flex items-center gap-2"><FaEnvelope className="text-purple-500" /> contact@agentiaworld.com</p>
          <p className="flex items-center gap-2"><FaGlobe className="text-purple-500" /> www.agentiaworld.com</p>
          <div className="flex gap-4 mt-2">
            <FaGithub className="text-gray-400 text-2xl cursor-pointer hover:text-white" />
            <FaLinkedin className="text-gray-400 text-2xl cursor-pointer hover:text-white" />
            <FaTwitter className="text-gray-400 text-2xl cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-lg">
        <form>
          <input type="text" placeholder="First Name" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
          <input type="text" placeholder="Last Name" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-2 mb-4 bg-gray-800 text-white rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 bg-gray-800 text-white rounded"></textarea>
          <button className="w-full px-6 py-2 bg-purple-500 text-white rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
}
