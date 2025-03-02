import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-2xl p-6 sm:p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="text-purple-500">🤖</span> Agentia World
          </h2>
          <p className="mt-2 text-gray-400">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
            <li><Link href="/api" className="hover:text-white">API</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/security" className="hover:text-white">Security</Link></li>
            <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-500">© 2025 Agentia World. Powered by Panaversity.</p>
        <p className="text-gray-500">All rights reserved.</p>
      </div>
    </footer>
  );
}





// import Link from "next/link";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-black  text-gray-400 text-2xl p-6 sm:p-10">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         {/* Brand Section */}
//         <div>
//           <h2 className="text-white font-bold text-lg flex items-center gap-2">
//             <span className="text-purple-500">🤖</span> Agentia World
//           </h2>
//           <p className="mt-2 text-gray-400">
//             Next-generation AI agents powering the future of enterprise intelligence.
//           </p>
//           <div className="flex gap-4 mt-3">
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//               <FaGithub size={20} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//               <FaLinkedin size={20} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//               <FaTwitter size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Product Section */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Product</h3>
//           <ul className="space-y-2">
//             <li><Link href="/features" className="hover:text-white">Features</Link></li>
//             <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
//             <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
//             <li><Link href="/api" className="hover:text-white">API</Link></li>
//           </ul>
//         </div>

//         {/* Company Section */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Company</h3>
//           <ul className="space-y-2">
//             <li><Link href="/about" className="hover:text-white">About</Link></li>
//             <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
//             <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
//             <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Legal Section */}
//         <div>
//           <h3 className="text-white font-semibold mb-3">Legal</h3>
//           <ul className="space-y-1">
//             <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
//             <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
//             <li><Link href="/security" className="hover:text-white">Security</Link></li>
//             <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
//           </ul>
//         </div>
//          <div  className="bg-black   text-gray-400 text-2xl p-6 sm:p-10">
//         {/* Copyright Section */}
//         <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-right">
//           <p className="text-gray-500">© 2025 Agentia World. Powered by Panaversity.</p>
//           <p className="text-gray-500">All rights reserved.</p>
//         </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
