import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsCard: React.FC = () => {
  return (
    <div className="bg-cream rounded-card p-5 sm:p-6">
      <div className="flex justify-between items-start mb-4">
        <Quote size={24} className="text-medium-green" />
      </div>
      <blockquote className="text-sm italic">
        {/* "I have had the opportunity to teach Nayan in various technical fields such as Cyber Security, Data Structures, and Algorithms. Throughout his learning journey, Nayan has consistently demonstrated a strong understanding of the subjects and the ability to apply concepts practically. */}
"
Nayan is not only academically strong but also highly curious and self-motivated, which makes him stand out among his peers. His dedication, problem-solving mindset, and willingness to explore complex topics make him a valuable asset in any technical or research-oriented field.
"
      </blockquote>
      <div className="mt-4">
        <p className="text-sm font-medium">Hardik Kumar</p>
        <p className="text-xs text-gray-700">Faculty, Parul University</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;