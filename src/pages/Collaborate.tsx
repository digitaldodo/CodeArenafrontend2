import React, { useState } from 'react';
import { Search, Filter, Video, MessageCircle, Users, Clock, Code, GitCompare, Star, Play } from 'lucide-react';

const Collaborate = () => {
  const [selectedTab, setSelectedTab] = useState('find-help');

  const activeProblems = [
    {
      id: 1,
      title: 'Binary Tree Maximum Path Sum',
      language: 'Python',
      difficulty: 'Hard',
      description: 'Need help optimizing my recursive solution for finding the maximum path sum in a binary tree.',
      timePosted: '5 minutes ago',
      helpersNeeded: 2,
      currentHelpers: 1,
      tags: ['Trees', 'Recursion', 'Dynamic Programming']
    },
    {
      id: 2,
      title: 'React Component State Management',
      language: 'JavaScript',
      difficulty: 'Medium',
      description: 'Struggling with prop drilling in my React app. Looking for someone to help refactor with Context API.',
      timePosted: '12 minutes ago',
      helpersNeeded: 1,
      currentHelpers: 0,
      tags: ['React', 'State Management', 'Context API']
    },
    {
      id: 3,
      title: 'SQL Query Optimization',
      language: 'SQL',
      difficulty: 'Medium',
      description: 'My JOIN query is running too slowly on large datasets. Need help with indexing and optimization.',
      timePosted: '18 minutes ago',
      helpersNeeded: 1,
      currentHelpers: 1,
      tags: ['SQL', 'Performance', 'Database']
    }
  ];

  const myProblems = [
    {
      id: 4,
      title: 'Implementing Dijkstra\'s Algorithm',
      language: 'Java',
      difficulty: 'Hard',
      status: 'active',
      helpers: 2,
      timeActive: '25 minutes',
      lastActivity: '2 minutes ago'
    },
    {
      id: 5,
      title: 'CSS Grid Layout Issues',
      language: 'CSS',
      difficulty: 'Easy',
      status: 'solved',
      helpers: 1,
      timeActive: '15 minutes',
      lastActivity: '1 hour ago'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'Hard': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      'Python': 'bg-blue-600',
      'JavaScript': 'bg-yellow-600',
      'Java': 'bg-orange-600',
      'SQL': 'bg-purple-600',
      'CSS': 'bg-pink-600'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Collaborate & Debug</h1>
          <p className="text-xl text-gray-300">
            Connect with developers, share problems, and solve challenges together in real-time.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setSelectedTab('find-help')}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedTab === 'find-help'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Find Help
          </button>
          <button
            onClick={() => setSelectedTab('my-problems')}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedTab === 'my-problems'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Problems
          </button>
          <button
            onClick={() => setSelectedTab('help-others')}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${
              selectedTab === 'help-others'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Help Others
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search problems by language, topic, or keyword..."
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
            />
          </div>
          <button className="flex items-center px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium">
            <Code className="h-5 w-5 mr-2" />
            Post Problem
          </button>
        </div>

        {/* Content based on selected tab */}
        {selectedTab === 'find-help' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Active Problems Seeking Help</h2>
              <span className="text-gray-400">{activeProblems.length} problems available</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeProblems.map((problem) => (
                <div key={problem.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(problem.language)}`}></div>
                      <span className="text-sm text-gray-400">{problem.language}</span>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{problem.timePosted}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{problem.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {problem.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{problem.currentHelpers}/{problem.helpersNeeded} helpers</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm font-medium">
                        <Video className="h-4 w-4 mr-2" />
                        Join Video
                      </button>
                      <button className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'my-problems' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">My Posted Problems</h2>
              <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                <Code className="h-4 w-4 mr-2" />
                Post New Problem
              </button>
            </div>

            <div className="space-y-4">
              {myProblems.map((problem) => (
                <div key={problem.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-semibold">{problem.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(problem.language)}`}></div>
                        <span className="text-sm text-gray-400">{problem.language}</span>
                        <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {problem.status === 'active' && (
                        <span className="flex items-center px-3 py-1 bg-green-900/20 text-green-400 rounded-full text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Active
                        </span>
                      )}
                      {problem.status === 'solved' && (
                        <span className="flex items-center px-3 py-1 bg-blue-900/20 text-blue-400 rounded-full text-sm">
                          <Star className="w-3 h-3 mr-2" />
                          Solved
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{problem.helpers} helper{problem.helpers !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Active for {problem.timeActive}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      <span>Last activity {problem.lastActivity}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {problem.status === 'active' && (
                      <>
                        <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm font-medium">
                          <Video className="h-4 w-4 mr-2" />
                          Join Session
                        </button>
                        <button className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          View Chat
                        </button>
                      </>
                    )}
                    {problem.status === 'solved' && (
                      <button className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm">
                        <GitCompare className="h-4 w-4 mr-2" />
                        View Solution
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'help-others' && (
          <div className="text-center py-16">
            <Users className="h-24 w-24 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Help Fellow Developers</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Share your knowledge and help others solve their coding challenges. 
              Build your reputation and learn from different problem-solving approaches.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Problems to Help With
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collaborate;