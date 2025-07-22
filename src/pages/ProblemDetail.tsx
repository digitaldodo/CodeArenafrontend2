import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Users, Video, MessageCircle, GitCompare, Star, Clock, CheckCircle, Circle } from 'lucide-react';
import { problems } from '../data/problems';

const ProblemDetail = () => {
  const { id } = useParams();
  const problem = problems.find(p => p.id === parseInt(id || '0'));
  const [code, setCode] = useState('// Write your solution here\n\n');
  const [activeTab, setActiveTab] = useState('description');

  if (!problem) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Problem Not Found</h1>
          <Link to="/problems" className="text-purple-400 hover:text-purple-300">
            ← Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'Hard': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getTopicColor = (topic: string) => {
    const colors = {
      'Arrays': 'bg-blue-600',
      'Strings': 'bg-green-600',
      'Recursion': 'bg-purple-600',
      'Linked Lists': 'bg-orange-600',
      'Trees': 'bg-teal-600',
      'Graphs': 'bg-pink-600',
      'Dynamic Programming': 'bg-indigo-600',
      'Stack': 'bg-red-600',
      'Queue': 'bg-yellow-600',
      'Searching': 'bg-cyan-600',
      'Sorting': 'bg-lime-600',
      'Bit Manipulation': 'bg-violet-600',
      'Math': 'bg-rose-600'
    };
    return colors[topic as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link 
              to="/problems" 
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Problems
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Video className="h-4 w-4 mr-2" />
              Get Help Live
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <MessageCircle className="h-4 w-4 mr-2" />
              Join Discussion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Problem Description */}
          <div className="space-y-6">
            {/* Problem Header */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {problem.solved ? (
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-500" />
                  )}
                  <span className="text-gray-400">#{problem.id}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getTopicColor(problem.topic)}`}></div>
                    <span className="text-sm text-gray-400">{problem.topic}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{problem.solvedBy.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{problem.helpRequests} help requests</span>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold">{problem.title}</h1>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('solutions')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'solutions'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => setActiveTab('discussions')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'discussions'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Discussions
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'description' && (
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Problem Description</h3>
                  <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Examples</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-slate-700 rounded-lg p-4 mb-4">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-400">Input:</span>
                        <code className="block bg-slate-900 p-2 rounded mt-1 text-green-400">
                          {example.input}
                        </code>
                      </div>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-400">Output:</span>
                        <code className="block bg-slate-900 p-2 rounded mt-1 text-blue-400">
                          {example.output}
                        </code>
                      </div>
                      {example.explanation && (
                        <div>
                          <span className="text-sm font-medium text-gray-400">Explanation:</span>
                          <p className="text-gray-300 mt-1">{example.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Constraints</h3>
                  <ul className="space-y-1">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="text-gray-300">• {constraint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                <div className="text-center py-8">
                  <GitCompare className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Solutions Available</h3>
                  <p className="text-gray-500 mb-4">
                    Connect with others who have solved this problem to see different approaches.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
                    Find Solution Partners
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'discussions' && (
              <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                <div className="text-center py-8">
                  <MessageCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Join the Discussion</h3>
                  <p className="text-gray-500 mb-4">
                    Connect with other developers working on this problem in real-time.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
                    Join Discussion Room
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Code Editor */}
          <div className="space-y-6">
            {/* Code Editor */}
            <div className="bg-slate-800 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-4">
                  <select className="bg-slate-700 border border-slate-600 rounded px-3 py-1 text-sm">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors">
                    <Play className="h-4 w-4 mr-1" />
                    Run
                  </button>
                  <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors">
                    Submit
                  </button>
                </div>
              </div>
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 bg-slate-900 border border-slate-700 rounded p-4 font-mono text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Write your solution here..."
                />
              </div>
            </div>

            {/* Collaboration Panel */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div>
                    <p className="font-medium">Get Live Help</p>
                    <p className="text-sm text-gray-400">Connect with someone who can help debug your code</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors">
                    <Video className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div>
                    <p className="font-medium">Join Study Group</p>
                    <p className="text-sm text-gray-400">Work on this problem with other learners</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                    <Users className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div>
                    <p className="font-medium">Compare Solutions</p>
                    <p className="text-sm text-gray-400">See how others approached this problem</p>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors">
                    <GitCompare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Test Results */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h3 className="text-xl font-semibold mb-4">Test Results</h3>
              <div className="text-center py-8 text-gray-500">
                <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Run your code to see test results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;