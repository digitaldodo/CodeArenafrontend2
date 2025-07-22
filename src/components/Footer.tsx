import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Problems', path: '/problems' },
      { name: 'Contests', path: '#' },
      { name: 'Tools', path: '#' },
      { name: 'Leaderboard', path: '#' },
    ],
    Community: [
      { name: 'Connections', path: '#' },
      { name: 'Discussions', path: '/collaborate' },
      { name: 'Events', path: '#' },
      { name: 'Become a Mentor', path: '#' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">CodeArena</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              The ultimate platform for coders to grow, connect, and showcase their skills.
            </p>
            <h3 className="font-semibold text-white mb-2">Stay up to date</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CodeArena. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;