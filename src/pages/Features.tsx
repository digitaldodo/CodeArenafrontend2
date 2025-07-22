import React from 'react';
import { Video, MessageCircle, GitCompare, Users, Star, Zap, Shield, Code } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Live Video Collaboration',
      description: 'Jump into face-to-face debugging sessions with HD video, screen sharing, and voice chat.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Messaging',
      description: 'Instant chat with code snippet sharing, syntax highlighting, and file attachments.',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: GitCompare,
      title: 'Code Diff Tool',
      description: 'Compare your code with working solutions side-by-side with highlighted differences.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Users,
      title: 'Smart Problem Matching',
      description: 'Get automatically paired with developers working on the same coding challenges.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Star,
      title: 'Community Ratings',
      description: 'Rate helpful sessions and build your reputation as a collaborative problem solver.',
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get notified immediately when someone wants to collaborate on your problem.',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-900/20',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Shield,
      title: 'Safe Learning Environment',
      description: 'Moderated sessions ensure a respectful and productive learning atmosphere.',
      color: 'text-pink-400',
      bgColor: 'bg-pink-900/20',
      borderColor: 'border-pink-500/30'
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Collaborate on problems in Python, JavaScript, Java, C++, and 20+ other languages.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Powerful Collaboration Features</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Everything you need to connect with fellow developers, share knowledge, and solve problems together in real-time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className={`bg-slate-800 rounded-xl p-6 border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105`}>
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Spotlight - Live Collaboration */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6">Live Collaboration in Action</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Share your screen and walk through your code</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Point out specific lines and explain your logic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Get real-time feedback and suggestions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Debug together and learn different approaches</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <Video className="h-24 w-24 mx-auto mb-4 text-white" />
                <p className="text-xl font-semibold text-white">HD Video Collaboration</p>
                <p className="text-purple-100 mt-2">Crystal clear communication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Spotlight - Code Comparison */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-teal-600 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <GitCompare className="h-24 w-24 mx-auto mb-4 text-white" />
                <p className="text-xl font-semibold text-white">Side-by-Side Comparison</p>
                <p className="text-green-100 mt-2">Spot differences instantly</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6">Advanced Code Diff Tool</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Compare your solution with working code</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Highlight syntax and logic differences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Understand multiple solution approaches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Learn best practices and optimizations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How Matching Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">How Smart Matching Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share Your Problem</h3>
              <p className="text-gray-400">
                Post your coding challenge with relevant tags, difficulty level, and programming language.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-gray-400">
                Our algorithm finds developers working on similar problems or those who've solved them.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Collaborating</h3>
              <p className="text-gray-400">
                Jump into a video call, share screens, and solve the problem together in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Developer Community</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Connect with over 5,000 developers worldwide. Share knowledge, solve problems together, 
            and build your reputation as a collaborative problem solver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Collaborating
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;