import React from 'react';
import { Heart, Target, Users, Award, Code, Video, MessageCircle, GitCompare } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Code Arena</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing how developers learn and solve problems by bringing real-time 
            collaboration to coding. No more getting stuck alone — connect, discuss, and debug together.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 border border-purple-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  To eliminate the frustration of getting stuck on coding problems by creating 
                  the world's first real-time peer-to-peer collaboration platform for developers.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Whether you're a complete beginner or a seasoned professional, Code Arena 
                  connects you with the right people at the right time to help you learn, 
                  grow, and solve problems faster than ever before.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Code className="h-32 w-32 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">The Problem We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Traditional Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Post on forums and wait hours for responses</li>
                <li>• Get generic answers that don't fit your specific case</li>
                <li>• Struggle to explain your problem in text</li>
                <li>• Feel isolated when debugging complex issues</li>
                <li>• Waste time on trial-and-error approaches</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Code Arena Way</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Get matched instantly with relevant developers</li>
                <li>• Show your code and explain via video chat</li>
                <li>• Collaborate in real-time with screen sharing</li>
                <li>• Learn multiple approaches to the same problem</li>
                <li>• Build lasting connections in the dev community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-400">
                Every feature we build strengthens the developer community and fosters collaboration.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-center mb-4">
                <Target className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Solutions</h3>
              <p className="text-gray-400">
                We believe in instant help and immediate problem-solving, not delayed responses.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Learning</h3>
              <p className="text-gray-400">
                We prioritize deep understanding over quick fixes through collaborative learning.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Growth</h3>
              <p className="text-gray-400">
                We welcome developers of all skill levels and create safe spaces for learning.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <Video className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Collaboration</h3>
              <p className="text-gray-400">
                Unlike static forums, we enable real-time video calls, screen sharing, 
                and live code collaboration.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <MessageCircle className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
              <p className="text-gray-400">
                Our algorithm connects you with developers working on similar problems 
                or those who've solved them before.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <GitCompare className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Code Comparison</h3>
              <p className="text-gray-400">
                Visual diff tools help you understand exactly what's different 
                between your approach and working solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Alex Smith</h3>
              <p className="text-purple-400 mb-3">Founder & CEO</p>
              <p className="text-gray-400">
                Former Google engineer who got tired of debugging alone. 
                Passionate about building developer communities.
              </p>
            </div>
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">MJ</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Maya Johnson</h3>
              <p className="text-purple-400 mb-3">Head of Product</p>
              <p className="text-gray-400">
                UX designer turned developer advocate. Believes great tools 
                should feel intuitive and empower creativity.
              </p>
            </div>
            <div className="text-center bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">DC</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">David Chen</h3>
              <p className="text-purple-400 mb-3">Lead Engineer</p>
              <p className="text-gray-400">
                Full-stack wizard specializing in real-time systems. 
                Open source contributor and mentorship enthusiast.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of the next generation of collaborative coding. Connect with developers 
            worldwide and never get stuck alone again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Collaborating
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;