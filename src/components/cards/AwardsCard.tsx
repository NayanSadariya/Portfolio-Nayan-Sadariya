import React from 'react';
import { Award } from 'lucide-react';

const AwardsCard: React.FC = () => {
  const awards = [
    {
      year: "2024",
      title: "University Highest Marks",
      organization: "Parul University CSE diploma 3rd Semester"
    },
    {
      year: "2025",
      title: "400+ LeetCode Problems",
      organization: "with 250+ days of streak and 6000+ followers"
    }
  ];

  return (
    <div className="bg-cream rounded-card p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Award size={20} />
        <h3 className="text-xl font-medium">Achievments</h3>
      </div>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="border-l-2 border-medium-green pl-4">
            <span className="text-sm text-medium-green">{award.year}</span>
            <h4 className="font-medium">{award.title}</h4>
            <p className="text-sm text-gray-700">{award.organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsCard;