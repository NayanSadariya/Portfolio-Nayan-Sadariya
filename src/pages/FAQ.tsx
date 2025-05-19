import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Are You really a diploma student?",
      answer: "Yes, I am a diploma student. I am currently pursuing my diploma in Computer Science and Engineering, which has provided me with a strong foundation in both theoretical and practical aspects of technology."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "The timeline for each project varies based on its complexity and scope. Generally, smaller projects can take a few weeks, while larger ones may take several months. I always provide a detailed timeline during the initial consultation."
    },
    {
      question: "Do you offer customization for specific client needs?",
      answer: "Yes, absolutely! Each project is tailored to meet specific client requirements. We work closely with clients to understand their vision and adapt our tools and design approach accordingly."
    },
    {
      question: "Is learning DSA and development together a good idea?",
      answer: "i think learning DSA (Data Structures and Algorithms) alongside development is beneficial. It enhances problem-solving skills and helps in writing efficient code, which is crucial for any developer."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, I work with clients globally. Through digital collaboration tools and regular virtual meetings, we maintain effective communication regardless of location."
    },
    {
      question: "What makes your approach unique and creative?",
      answer: "my approach is unique because I blend technical skills with creative thinking. I focus on creating immersive experiences that not only meet functional requirements but also engage and inspire users. My background in both technology and design allows me to think outside the box and deliver innovative solutions."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-cream rounded-card p-6 sm:p-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-medium mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-700">Find answers to common questions about my work and process.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-cream rounded-card overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {openIndex === index ? (
                <Minus size={20} className="text-medium-green flex-shrink-0" />
              ) : (
                <Plus size={20} className="text-medium-green flex-shrink-0" />
              )}
            </button>
            <div 
              className={`px-6 transition-all duration-300 ${
                openIndex === index ? 'pb-5 max-h-96' : 'max-h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cream rounded-card p-6 sm:p-8 mt-8">
        <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
        <p className="text-gray-700 mb-6">
          Can't find the answer you're looking for? Feel free to reach out directly.
        </p>
        <a 
          href="/contact"
          className="inline-block bg-medium-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default FAQ;