import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Card from './components/Card';

/**
 * Main App Component
 * Single-page application for IT People First - Talent Retention Program
 * Optimized for pitch presentation with smooth scrolling and professional design
 */
function App() {
  const { t } = useTranslation();

  return (
    <div className="App min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero / Introduction Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 dark:from-primary-700 dark:via-primary-600 dark:to-primary-800 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-primary-100">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="mt-12">
            <button
              onClick={() => {
                document.getElementById('objetivos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-300 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <Section
        id="objetivos"
        title={t('objetivos.title')}
        subtitle={t('objetivos.subtitle')}
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {t('objetivos.items', { returnObjects: true }).map((item, index) => (
            <Card
              key={`objetivo-${index}`}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title={item}
              className="h-full group"
              delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* IT People Solidária Section */}
      <Section
        id="solidaria"
        title={t('solidaria.title')}
        subtitle={t('solidaria.subtitle')}
        bgColor="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <Card
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            iconBgColor="bg-red-100 dark:bg-red-900"
            iconColor="text-red-600 dark:text-red-300"
            items={t('solidaria.items', { returnObjects: true })}
            className="mt-8 group"
          />
        </div>
      </Section>

      {/* IT People Bonus Section */}
      <Section
        id="bonus"
        title={t('bonus.title')}
        subtitle={t('bonus.subtitle')}
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <Card
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconBgColor="bg-green-100 dark:bg-green-900"
            iconColor="text-green-600 dark:text-green-300"
            description={t('bonus.description')}
            items={t('bonus.items', { returnObjects: true })}
            className="mt-8 group"
          />
        </div>
      </Section>

      {/* IT People Benefícios de Permanência Section */}
      <Section
        id="beneficios"
        title={t('beneficios.title')}
        subtitle={t('beneficios.subtitle')}
        bgColor="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <Card
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconBgColor="bg-blue-100 dark:bg-blue-900"
            iconColor="text-blue-600 dark:text-blue-300"
            items={t('beneficios.items', { returnObjects: true })}
            className="mt-8 group"
          />
        </div>
      </Section>

      {/* IT People Escolha Section */}
      <Section
        id="escolha"
        title={t('escolha.title')}
        subtitle={t('escolha.subtitle')}
        bgColor="bg-white dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <Card
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
            iconBgColor="bg-purple-100 dark:bg-purple-900"
            iconColor="text-purple-600 dark:text-purple-300"
            items={t('escolha.items', { returnObjects: true })}
            className="mt-8 group"
          />
        </div>
      </Section>

      {/* Conclusão Section */}
      <Section
        id="conclusao"
        title={t('conclusao.title')}
        subtitle={t('conclusao.subtitle')}
        bgColor="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800"
        className="text-white"
      >
        <div className="max-w-4xl mx-auto">
          <Card
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconBgColor="bg-white/20 dark:bg-white/10"
            iconColor="text-white"
            items={t('conclusao.items', { returnObjects: true })}
            className="mt-8 bg-white/10 dark:bg-black/20 border border-white/20"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

