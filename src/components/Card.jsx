import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/**
 * Reusable Card component for displaying content in a styled container
 */
const Card = ({ 
  icon, 
  title, 
  description, 
  items = [], 
  className = '',
  iconBgColor = 'bg-primary-100 dark:bg-primary-900',
  iconColor = 'text-primary-600 dark:text-primary-300',
  delay = 0
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 hover:shadow-xl dark:hover:shadow-gray-900 transition-all duration-300 hover:-translate-y-1 transform ${className} ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className={`${iconBgColor} ${iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {items.length > 0 && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={`${item.substring(0, 15)}-${index}`} className="flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">✓</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;

