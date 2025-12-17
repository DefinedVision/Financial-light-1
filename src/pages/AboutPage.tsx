import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Users, Award, Target, Heart } from 'lucide-react';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="pt-24 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-6 text-gray-900">{t('aboutTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl mb-6 text-gray-900">{t('ourStoryTitle')}</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>{t('ourStoryP1')}</p>
            <p>{t('ourStoryP2')}</p>
            <p>{t('ourStoryP3')}</p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-gray-900">{t('ourValuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{t('professionalismTitle')}</h3>
              <p className="text-gray-600">{t('professionalismDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{t('personalApproachTitle')}</h3>
              <p className="text-gray-600">{t('personalApproachDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{t('qualityTitle')}</h3>
              <p className="text-gray-600">{t('qualityDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Heart size={32} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{t('trustTitle')}</h3>
              <p className="text-gray-600">{t('trustDesc')}</p>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="bg-gray-50 p-8 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl mb-6 text-gray-900">{t('whyChooseUsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl mb-3 text-gray-900">{t('noabCertifiedTitle')}</h3>
              <p className="text-gray-600">{t('noabCertifiedDesc')}</p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-gray-900">{t('experiencedTeamTitle')}</h3>
              <p className="text-gray-600">{t('experiencedTeamDesc')}</p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-gray-900">{t('fixedRatesTitle')}</h3>
              <p className="text-gray-600">{t('fixedRatesDesc')}</p>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-gray-900">{t('modernToolsTitle')}</h3>
              <p className="text-gray-600">{t('modernToolsDesc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Erkend Leerbedrijf Section */}
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl mb-4 text-gray-900">{t('recognizedTrainingCompanyTitle')}</h2>
          <p className="text-lg text-gray-600 mb-4">{t('recognizedTrainingCompanyDesc')}</p>
          <p className="text-gray-600">{t('recognizedTrainingCompanyP2')}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
