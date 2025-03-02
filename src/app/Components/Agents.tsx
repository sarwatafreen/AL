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
