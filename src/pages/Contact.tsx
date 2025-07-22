import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, Code, Video, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Have questions about Code Arena? Need help with collaboration features? 
            Want to suggest improvements? We'd love to hear from you and help make your coding experience better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="collaboration">Collaboration Issues</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="feedback">Platform Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none text-white"
                  placeholder="Tell us how we can help you with Code Arena..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">hello@codearena.dev</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+1 (555) CODE-HELP</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-400">123 Developer Street<br />Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Quick Help</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Frequently Asked Questions</p>
                    <p className="text-gray-400 text-sm">Find answers to common questions about using Code Arena's collaboration features.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Video className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Video Call Troubleshooting</p>
                    <p className="text-gray-400 text-sm">Get help with video chat, screen sharing, and audio issues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Code Sharing Guide</p>
                    <p className="text-gray-400 text-sm">Learn how to effectively share and compare code with other developers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Community Guidelines</p>
                    <p className="text-gray-400 text-sm">Understand our community standards and collaboration best practices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-8 border border-purple-700">
              <h3 className="text-2xl font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-200">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 8:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Saturday:</span>
                  <span className="font-medium">10:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Sunday:</span>
                  <span className="font-medium">12:00 PM - 5:00 PM PST</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-700">
                <p className="text-sm text-purple-200">
                  <strong>Emergency Support:</strong> For critical collaboration issues, 
                  we provide 24/7 support via our priority email channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;