// import Link from "next/link";

// import { Button } from "@/components/ui/button"
export default function FeaturesSection() {
  const features = [
    {
      icon: "📡",
      title: "Neural Operations",
      description: "Automated workflow optimization through distributed neural networks",
    },
    {
      icon: "🛡️",
      title: "Secure Intelligence",
      description: "Privacy-first AI solutions with military-grade security protocols",
    },
    {
      icon: "🌍",
      title: "Enterprise AI",
      description: "Custom AI agents designed for enterprise-scale operations and decision-making",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        AI Solutions
      </h1>
      <p className="text-gray-400 mt-2 text-center">
        Transforming industries with intelligent agents
      </p>

      {/* Feature Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg w-80 hover:scale-105 transition-transform">
            {/* Gradient Icon */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl inline-block text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// export default function Agents() {
 

//  return(
    
//          <div className="bg-black text-white min-h-screen">

// <header className="text-center py-20">
//   <h1 className="text-4xl font-bold text-purple-500">Powering the Future of Enterprise AI</h1>
//   <p className="text-lg text-gray-300 mt-4">Next-generation AI agents for automation and intelligence.</p>
// </header>
// <section className="p-10">
//   <h2 className="text-4xl font-bold text-center text-purple-500">AI Solutions</h2>
//   <p className="text-4xl font-bold text-center text-purple-500" >   Transforming industries with intelligent agents</p>
           
  
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//     <div className="p-6 bg-gray-900 rounded-lg">
//       <h3 className="text-xl font-bold text-white">Enterprise AI</h3>
//       <p className="text-gray-400">Custom AI agents designed for automation and decision-making.</p>
//     </div>
//     <div className="p-6 bg-gray-900 rounded-lg">
//       <h3 className="text-xl font-bold text-white">Neural Operations</h3>
//       <p className="text-gray-400">Automated workflow optimization with distributed neural networks.</p>
//     </div>
//   </div>
// </section>
// </div>

//  );


 


// };

