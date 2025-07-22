import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, MessageCircle, ArrowRight, Video, GitCompare, Star, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Code Arena
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 font-light">
            Don't just code. Connect, discuss, debug — together.
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get unstuck faster with real-time peer-to-peer collaboration. Connect with developers 
            solving the same problems, share code instantly, and learn through live video discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/problems"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Solving Problems
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-white text-lg font-semibold rounded-lg transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How Code Arena Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get matched with peers, collaborate in real-time, and solve problems together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get Matched</h3>
              <p className="text-gray-300 leading-relaxed">
                Share your coding problem and get instantly matched with developers working on 
                the same challenge or those who've already solved it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborate Live</h3>
              <p className="text-gray-300 leading-relaxed">
                Jump into video calls, share your screen, compare code side-by-side, and 
                debug together in real-time with instant messaging.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Learn & Grow</h3>
              <p className="text-gray-300 leading-relaxed">
                Understand different approaches, learn from mistakes, build your reputation, 
                and help others on their coding journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Preview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Code Arena?</h2>
            <p className="text-xl text-gray-300">Real-time collaboration tools designed for developers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <Video className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Live Video Chat</h3>
              <p className="text-gray-400">Face-to-face debugging sessions with screen sharing and voice chat</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <MessageCircle className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Instant Messaging</h3>
              <p className="text-gray-400">Real-time chat with code snippet sharing and syntax highlighting</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <GitCompare className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Code Diff Tool</h3>
              <p className="text-gray-400">Compare solutions side-by-side and highlight differences</p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Matching</h3>
              <p className="text-gray-400">Get paired with developers working on similar problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Code className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-300 text-lg">Problems Solved Together</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-gray-300 text-lg">Active Developers</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <Video className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">50,000+</h3>
              <p className="text-gray-300 text-lg">Collaboration Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Developers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Finally found someone to help me debug my React component in real-time. 
                The video chat made all the difference!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">AS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Alex Smith</p>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The code diff tool helped me understand exactly where my algorithm was failing. 
                Learning from others' solutions is incredible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MJ</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Maya Johnson</p>
                  <p className="text-gray-400 text-sm">Backend Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "As a beginner, having experienced developers help me through problems 
                in real-time has accelerated my learning tremendously."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">DC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">David Chen</p>
                  <p className="text-gray-400 text-sm">CS Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Code Together?</h2>
          <p className="text-xl text-purple-100 mb-10">
            Join thousands of developers who are already collaborating, learning, and growing together on Code Arena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Sign Up with GitHub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Join with Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;