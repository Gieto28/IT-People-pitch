import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Componente para selecionar o idioma
 */
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇵🇹' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
  ];

  return (
    <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            i18n.language === lang.code
              ? 'bg-primary-600 text-white dark:bg-primary-500'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          aria-label={`Change language to ${lang.name}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

