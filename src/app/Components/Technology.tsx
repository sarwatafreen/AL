import FeatureCards from "@/app/Components/Technology";

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
      <FeatureCards />

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
