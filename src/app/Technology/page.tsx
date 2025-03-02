
"use client"

const features = [
  {
    icon: "🧠", // Replace with Lucide Icon if needed
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
  },
  {
    icon: "⚙️",
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
  },
  {
    icon: "💻",
    title: "Advanced ML",
    description: "Cutting-edge machine learning techniques for AI development",
  },
  {
    icon: "🌍",
    title: "Global Scale",
    description: "Distributed AI processing for large-scale applications",
  },
];

export default function Technology() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-black text-white py-10">
      {/* AI Features Section */}
      {/* <FeatureCards /> */}

      {/* Watch Demo Button */}
      <button className="border border-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition">
        Watch Demo
      </button>

      {/* AI Text Section */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Powered by <br /> Advanced AI
        </h2>
        <p className="text-gray-400 mt-2">
          Built on cutting-edge neural architectures
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg"
          >
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

// import { Brain, Cpu, Code, Globe } from "lucide-react";
// const features = [
//     {
//       icon: <Brain size={32} />,
//       title: "Neural Networks",
//       description: "Advanced neural architectures for complex decision making",
//     },
//     {
//       icon: <Cpu size={32} />,
//       title: "Deep Learning",
//       description: "Sophisticated deep learning models for pattern recognition",
//     },
//     {
//       icon: <Code size={32} />,
//       title: "Advanced ML",
//       description: "Cutting-edge machine learning techniques for AI development",
//     },
//     {
//       icon: <Globe size={32} />,
//       title: "Global Scale",
//       description: "Distributed AI processing for large-scale applications",
//     },
//   ];
// export default function Technology () {
//     zzzzzz
//     return(
//         <div className="flex flex-col items-center justify-center text-center bg-black text-white py-10">
//         {/* AI Features Section */}
//         <FeatureCards />
      
//         {/* Watch Demo Button */}
//         <button className="border border-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition">
//           Watch Demo
//         </button>
  
//         {/* AI Text Section */}
//         <div className="mt-6">
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
//             Powered by <br /> Advanced AI
//           </h2>
//           <p className="text-gray-400 mt-2">
//             Built on cutting-edge neural architectures
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 bg-black text-white">
//       {features.map((feature, index) => (
//         <div key={index} className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg">
//           {/* Gradient Icon */}
//           <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl inline-block">
//             {feature.icon}
//           </div>
//           <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
//           <p className="text-gray-400 mt-2">{feature.description}</p>
//         </div>
//   ))}
//   </div>
//   );
// };
/********************************************************************//******************************* */     
/* //  <div className="flex justify-between items-center text-4xl text-white bg-black   ">  
//                <h1 className="text-3xl font-bold mb-4"> Powered by Advanced AI</h1>
//                <div className="flex justify-normal">   
//                 <h2>Built on cutting-edge neural architectures</h2> 
//                  </div> 
// Neural Networks
// Advanced neural architectures for complex decision making

// Deep Learning
// Sophisticated deep learning models for pattern recognition

// Advanced ML
// Cutting-edge machine learning algorithms





 */








/* // "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useState } from "react";
// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY });

// export default function Robot() { */
/* //     const { scene } = useGLTF("/robot.glb"); // 3D model of robot
//     const [response, setResponse] = useState("Hello! How can I help?");

//     async function askAI() {
//         const res = await openai.chat.completions.create({
//             model: "gpt-4",
//             messages: [{ role: "user", content: "What is AI?" }],
//         });
//         setResponse(res.choices[0].message.content);
//     }

//     return (
//         <div className="flex flex-col items-center">
//             <Canvas camera={{ position: [0, 2, 5] }}>
//                 <ambientLight intensity={0.5} />
//                 <OrbitControls />
//                 <primitive object={scene} />
//             </Canvas>
//             <button onClick={askAI} className="mt-4 p-2 bg-blue-500 text-white">
//                 Ask AI
//             </button>
//             <p className="text-white mt-2">{response}</p>
//         </div>
//     );
// } */
