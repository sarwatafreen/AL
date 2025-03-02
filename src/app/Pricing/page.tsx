 import Link from "next/link"

export default function Pricing() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold text-purple-500">Choose Your Plan</h2>
        <p className="text-gray-400 mt-1">Scale your AI capabilities with our flexible pricing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        <div className="p-6 bg-gray-900 rounded-lg text-center">
          <h3 className="text-xl font-bold text-white">Starter</h3>
          <p className="text-3xl font-bold text-purple-500">$499/month</p>
          <ul className="text-gray-400 mt-4">
            <li>✅ 2 AI Agent Instances</li>
            <li>✅ Basic Neural Processing</li>
            <li>✅ 24/7 Support</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg">Get Started</button>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg text-center">
          <h3 className="text-xl font-bold text-white">Professional</h3>
          <p className="text-3xl font-bold text-purple-500">$999/month</p>
          <ul className="text-gray-400 mt-4">
            <li>✅ 10 AI Agent Instances</li>
            <li>✅ Advanced Neural Networks</li>
            <li>✅ Priority Support</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg">Get Started</button>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg text-center">
          <h3 className="text-xl font-bold text-white">Enterprise</h3>
          <p className="text-3xl font-bold text-purple-500">$Custom</p>
          <ul className="text-gray-400 mt-4">
            <li>✅ Unlimited Agents</li>
            <li>✅ Full Neural Suite</li>
            <li>✅ Dedicated Support Team </li>
            <li>✅ Advanced Analytic Dashboard</li>
            <li>✅ Custom Development</li>
            <li>✅ Full API Access</li>
            <li>✅ Enterprise Security</li>
            <li>✅  Custom Training</li>
          </ul>
          <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
