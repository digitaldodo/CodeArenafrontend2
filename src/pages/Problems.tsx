import React, { useState, useMemo } from 'react';
import { Search, Filter, Code, Users, Clock, CheckCircle, Circle, Video, MessageCircle, Star } from 'lucide-react';
import { problems, getProblemsStats } from '../data/problems';

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [showSolvedOnly, setShowSolvedOnly] = useState(false);

  const stats = getProblemsStats();

  const filteredProblems = useMemo(() => {
    return problems.filter(problem => {
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           problem.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
      const matchesTopic = selectedTopic === 'All' || problem.topic === selectedTopic;
      const matchesSolved = !showSolvedOnly || problem.solved;
      
      return matchesSearch && matchesDifficulty && matchesTopic && matchesSolved;
    });
  }, [searchTerm, selectedDifficulty, selectedTopic, showSolvedOnly]);

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

  const topics = Object.keys(stats.topicCounts);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Coding Problems</h1>
          <p className="text-xl text-gray-300">
            Practice coding problems and connect with others for real-time collaboration and debugging.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-purple-400">{stats.totalProblems}</div>
            <div className="text-sm text-gray-400">Total Problems</div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-green-400">{stats.solvedProblems}</div>
            <div className="text-sm text-gray-400">Solved</div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-yellow-400">{stats.mediumProblems}</div>
            <div className="text-sm text-gray-400">Medium</div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="text-2xl font-bold text-red-400">{stats.hardProblems}</div>
            <div className="text-sm text-gray-400">Hard</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
              />
            </div>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
            >
              <option value="All">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>

            <label className="flex items-center space-x-2 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg">
              <input
                type="checkbox"
                checked={showSolvedOnly}
                onChange={(e) => setShowSolvedOnly(e.target.checked)}
                className="rounded border-slate-600 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-300">Solved Only</span>
            </label>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <div key={problem.id} className="bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {problem.solved ? (
                        <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      ) : (
                        <Circle className="h-6 w-6 text-gray-500 mr-3" />
                      )}
                      <span className="text-sm text-gray-400">#{problem.id}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getTopicColor(problem.topic)}`}></div>
                      <span className="text-sm text-gray-400">{problem.topic}</span>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
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

                <h3 className="text-xl font-semibold mb-3 hover:text-purple-400 cursor-pointer">
                  {problem.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{problem.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      <strong>Input:</strong> {problem.inputFormat.substring(0, 50)}...
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm font-medium">
                      <Code className="h-4 w-4 mr-2" />
                      Solve
                    </button>
                    <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm">
                      <Video className="h-4 w-4 mr-2" />
                      Get Help
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Discuss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-16">
            <Code className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-4">No problems found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Any Problem?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Connect with other developers in real-time. Get instant help through video calls, 
            code sharing, and collaborative debugging sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Study Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Join Discussion Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;