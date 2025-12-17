import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function About() {
  const { t } = useLanguage();
  
  const benefits = [
    'aboutBenefit1',
    'aboutBenefit2',
    'aboutBenefit3',
    'aboutBenefit4',
    'aboutBenefit5',
    'aboutBenefit6'
  ];

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">{t('aboutTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutP1')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('aboutP2')}
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={benefitVariants}
                >
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t(benefit)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl mb-6">{t('whyChooseUs')}</h3>
            <div className="space-y-6">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
              >
                <div className="text-blue-200 mb-2">{t('experienceTitle')}</div>
                <p>{t('experienceDesc')}</p>
              </motion.div>
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
              >
                <div className="text-blue-200 mb-2">{t('qualityTitle')}</div>
                <p>{t('qualityDesc')}</p>
              </motion.div>
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
              >
                <div className="text-blue-200 mb-2">{t('personalTitle')}</div>
                <p>{t('personalDesc')}</p>
              </motion.div>
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={featureVariants}
              >
                <div className="text-blue-200 mb-2">{t('modernTitle')}</div>
                <p>{t('modernDesc')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}