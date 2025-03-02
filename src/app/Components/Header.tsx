
"use client";

import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black  text-white text-6xl font-semibold  w-full p-4 sm:p-6 font-geist">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl sm:text-5xl  font-bold text-purple-700">Agentia World</h1>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AiOutlineMenu size={25} />
        </button>
        
        {/* Navigation for larger screens */}
        <nav className="hidden md:block  text- 4xl font-semibold space-x-4 sm:space-x-6">
          <Link href="/Features" className="hover:text-purple-400 text-sm sm:text-base">Features</Link>
          <Link href="/Technology" className="hover:text-purple-400 text-sm sm:text-base">Technology</Link>
          <Link href="/Agents" className="hover:text-purple-400 text-sm sm:text-base">Agents</Link>
          <Link href="/Pricing" className="hover:text-purple-400 text-sm sm:text-base">Pricing</Link>
          <Link href="/Contact" className="hover:text-purple-400 text-sm sm:text-base">Contact</Link>
        </nav>
        {/* <Menu  className='md:hidden'/> */}
        {/* Launch Console Button */}
        <div className="hidden md:block">
          <Link href="/console">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1 px-3 sm:py-2 sm:px-5 rounded-lg transition text-sm sm:text-base">
              🚀 Launch Console
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-gray-900 p-3 rounded-lg text-center space-y-2">
          <Link href="/Features" className="block hover:text-purple-400 text-sm">Features</Link>
          <Link href="/Technology" className="block hover:text-purple-400 text-sm">Technology</Link>
          <Link href="/Agents" className="block hover:text-purple-400 text-sm">Agents</Link>
          <Link href="/Pricing" className="block hover:text-purple-400 text-sm">Pricing</Link>
          <Link href="/Contact" className="block hover:text-purple-400 text-sm">Contact</Link>
          <Link href="/console">
            <button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1 px-3 rounded-lg transition text-sm">
              🚀 Launch Console
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}







// "use client";

// import Link from 'next/link';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-black text-white w-full p-4 sm:p-6 font-geist">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <h1 className="text-4xl font-bold text-purple-700">Agentia World</h1>
//         </Link>
        
//         {/* Mobile Menu Toggle */}
//         <button 
//           className="md:hidden text-white" 
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <AiOutlineMenu size={30} />
//         </button>
        
//         {/* Navigation for larger screens */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/Features" className="hover:text-purple-400">Features</Link>
//           <Link href="/Technology" className="hover:text-purple-400">Technology</Link>
//           <Link href="/Agents" className="hover:text-purple-400">Agents</Link>
//           <Link href="/Pricing" className="hover:text-purple-400">Pricing</Link>
//           <Link href="/Contact" className="hover:text-purple-400">Contact</Link>
//         </nav>
        
//         {/* Launch Console Button */}
//         <div className="hidden md:block">
//           <Link href="/console">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition">
//               🚀 Launch Console
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="md:hidden mt-4 bg-gray-900 p-4 rounded-lg text-center space-y-3">
//           <Link href="/Features" className="block hover:text-purple-400">Features</Link>
//           <Link href="/Technology" className="block hover:text-purple-400">Technology</Link>
//           <Link href="/Agents" className="block hover:text-purple-400">Agents</Link>
//           <Link href="/Pricing" className="block hover:text-purple-400">Pricing</Link>
//           <Link href="/Contact" className="block hover:text-purple-400">Contact</Link>
//           <Link href="/console">
//             <button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition">
//               🚀 Launch Console
//             </button>
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }







// import Link from 'next/link'
// import { AiOutlineMenu } from 'react-icons/ai';


// export default function Header() {
//     return(
       
//              <div className="flex justify-between items-center text-4xl text-white bg-black  w-full p-4 sm:p-6 font-geist "> 
//                <Link href="/">
//       {/* <nav className="bg-black text-white p-4 flex justify-between items-center"> */}
//       <h1 className="text-4xl font-bold text-purple-700">Agentia World</h1>
//       </Link>
//       {/* ChatBubble Component */}
//       <nav>
//       <ul className="flex space-x-6">
//         {/* <li><Link href="/">Home</Link></li> */}
        
    
//         <li><Link href="/Features">Features</Link></li>
//         <li><Link href="/Technology">Technology</Link></li>
//         <li><Link href="/Agents">Agents</Link></li>
//         <li><Link href="/Pricing">Pricing</Link></li>
//         <li><Link href="/Contact">Contact</Link></li>
//       </ul>
//     </nav>
//     <AiOutlineMenu  className='md:middle' size={30}/>
//           <div className="mt-4">
//             <Link href="/console">
//               <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition">
//                 🚀 Launch Console
//               </button>
//             </Link>
//           </div>
        
  
//       <div/>
//       </div>
//     );
// };