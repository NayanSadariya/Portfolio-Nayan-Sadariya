import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-cream rounded-card p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medium-green"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medium-green"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medium-green"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-medium-green text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
      
      <div className="space-y-6">
        <div className="bg-cream rounded-card p-6">
          <h3 className="text-xl font-medium mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail size={20} />
              <span className="text-sm">nayansadariya84@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} />
              <span className="text-sm">+91 93136 18768</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} />
              <span className="text-sm">Gujrat, India</span>
            </div>
          </div>
        </div>
        
        <div className="bg-cream rounded-card p-6">
          <h3 className="text-xl font-medium mb-4">Connect</h3>
          <div className="space-y-3">
            <a href="https://www.instagram.com/nayan_sadariya?igsh=Z3FkOWtpZ3AxdDA2" className="block text-sm hover:underline">Instagram</a>
            <a href="https://github.com/NayanSadariya" className="block text-sm hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/nayan-sadariya/" className="block text-sm hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;