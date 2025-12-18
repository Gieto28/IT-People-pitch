import React from 'react';

/**
 * Reusable Section component for consistent spacing and layout
 */
const Section = ({ id, title, subtitle, children, bgColor = 'bg-white dark:bg-gray-800', className = '' }) => {
  return (
    <section
      id={id}
      className={`${bgColor} py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

