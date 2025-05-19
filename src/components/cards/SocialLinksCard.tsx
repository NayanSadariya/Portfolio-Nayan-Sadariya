import React from 'react';

const SocialLinksCard: React.FC = () => {
  const socialLinks = [
    { name: "INSTAGRAM", url: "https://www.instagram.com/nayan_sadariya?igsh=Z3FkOWtpZ3AxdDA2" },
    { name: "GITHUB", url: "https://github.com/NayanSadariya" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/nayan-sadariya/" },
  ];

  return (
    <div className="bg-cream rounded-card p-5 sm:p-6">
      <div className="flex justify-between items-center">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm uppercase hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksCard;
