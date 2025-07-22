import React from 'react';
import { User, Calendar, Code, Star, Trophy, Edit2, Settings, Video, MessageCircle, GitCompare } from 'lucide-react';

const Profile = () => {
  const achievements = [
    { name: 'First Collaboration', description: 'Complete your first coding session', date: 'Jan 2024', earned: true },
    { name: 'Helper Hero', description: 'Help 10 developers solve problems', date: 'Mar 2024', earned: true },
    { name: 'Problem Solver', description: 'Solve 50 coding challenges', date: '', earned: false },
    { name: 'Code Reviewer', description: 'Review 25 code solutions', date: 'Feb 2024', earned: true },
    { name: 'Community Leader', description: 'Get 100+ helpful ratings', date: '', earned: false },
    { name: 'Debugging Master', description: 'Help debug 30 different problems', date: 'Apr 2024', earned: true },
  ];

  const collaborationStats = [
    { label: 'Problems Solved', value: '47', period: 'This Year' },
    { label: 'Developers Helped', value: '23', period: 'Total' },
    { label: 'Video Sessions', value: '156', period: 'Completed' },
    { label: 'Helpfulness Rating', value: '4.8', period: 'Out of 5' },
  ];

  const recentSessions = [
    { 
      title: 'Binary Tree Traversal', 
      type: 'helped', 
      language: 'Python', 
      rating: 5, 
      duration: '25 min',
      partner: 'Alex Chen'
    },
    { 
      title: 'React State Management', 
      type: 'received-help', 
      language: 'JavaScript', 
      rating: 4, 
      duration: '18 min',
      partner: 'Sarah Kim'
    },
    { 
      title: 'SQL Query Optimization', 
      type: 'helped', 
      language: 'SQL', 
      rating: 5, 
      duration: '32 min',
      partner: 'Mike Johnson'
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      'Python': 'bg-blue-600',
      'JavaScript': 'bg-yellow-600',
      'SQL': 'bg-purple-600'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 mb-8">
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-lg"></div>
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 bg-slate-800 rounded-full border-4 border-slate-700 flex items-center justify-center">
                <User className="h-16 w-16 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="pt-20 pb-6 px-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">Sarah Johnson</h1>
                <p className="text-gray-400 mb-1">Full-stack developer passionate about helping others</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined January 2024</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg hover:bg-slate-600 transition-colors">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
                <button className="flex items-center px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg hover:bg-slate-600 transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Collaboration Stats */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-6">Collaboration Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {collaborationStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-700 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-400">{stat.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-6">Recent Collaboration Sessions</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <Video className="h-8 w-8 text-green-400 mr-4" />
                  <div className="flex-1">
                    <p className="font-medium">Helped with "Binary Tree Traversal"</p>
                    <p className="text-sm text-gray-400">25-minute session with Alex Chen • 2 days ago</p>
                  </div>
                  <div className="flex">{renderStars(5)}</div>
                </div>
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-blue-400 mr-4" />
                  <div className="flex-1">
                    <p className="font-medium">Got help with "React State Management"</p>
                    <p className="text-sm text-gray-400">18-minute session with Sarah Kim • 1 week ago</p>
                  </div>
                  <div className="flex">{renderStars(4)}</div>
                </div>
                <div className="flex items-center p-4 bg-slate-700 rounded-lg">
                  <GitCompare className="h-8 w-8 text-purple-400 mr-4" />
                  <div className="flex-1">
                    <p className="font-medium">Helped with "SQL Query Optimization"</p>
                    <p className="text-sm text-gray-400">32-minute session with Mike Johnson • 2 weeks ago</p>
                  </div>
                  <div className="flex">{renderStars(5)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Sessions */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Sessions</h2>
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(session.language)}`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{session.title}</p>
                      <p className="text-xs text-gray-400">
                        {session.type === 'helped' ? 'Helped' : 'Got help from'} {session.partner}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="flex">{renderStars(session.rating)}</div>
                        <span className="text-xs text-gray-500">{session.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h2 className="text-xl font-semibold mb-6">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-lg ${
                    achievement.earned 
                      ? 'bg-green-900/20 border border-green-500/30' 
                      : 'bg-slate-700 border border-slate-600'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      achievement.earned ? 'bg-green-600' : 'bg-gray-600'
                    }`}>
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        achievement.earned ? 'text-white' : 'text-gray-400'
                      }`}>
                        {achievement.name}
                      </p>
                      <p className={`text-xs ${
                        achievement.earned ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-green-400">Earned {achievement.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  <Code className="h-5 w-5 mr-2" />
                  Post New Problem
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                  <Users className="h-5 w-5 mr-2" />
                  Find Problems to Help With
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;