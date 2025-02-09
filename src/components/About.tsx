import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Target, Award, Coffee } from 'lucide-react';

const stats = [
  { label: 'Projetos Entregues', value: '150+' },
  { label: 'Clientes Satisfeitos', value: '100+' },
  { label: 'Anos de Experiência', value: '8+' },
  { label: 'Profissionais', value: '20+' }
];

const values = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Excelência Técnica',
    description: 'Comprometimento com as melhores práticas e tecnologias mais recentes.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Foco no Cliente',
    description: 'Parceria próxima e comunicação transparente em todos os projetos.'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Inovação Constante',
    description: 'Busca contínua por soluções criativas e tecnologias emergentes.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-coffee-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
              Sobre a Braavos
            </h1>
            <p className="text-xl text-coffee-600 dark:text-coffee-300 max-w-3xl mx-auto">
              Transformando ideias em soluções digitais inovadoras desde 2016
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coffee-600 dark:text-coffee-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-coffee-700 dark:text-coffee-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-xl"
            >
              <Target className="w-12 h-12 text-coffee-500 mb-4" />
              <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
                Nossa Missão
              </h2>
              <p className="text-coffee-600 dark:text-coffee-300">
                Impulsionar o sucesso dos nossos clientes através de soluções tecnológicas inovadoras e personalizadas, 
                sempre buscando excelência e qualidade em cada projeto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-coffee-800 p-8 rounded-2xl shadow-xl"
            >
              <Award className="w-12 h-12 text-coffee-500 mb-4" />
              <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
                Nossa Visão
              </h2>
              <p className="text-coffee-600 dark:text-coffee-300">
                Ser referência nacional em desenvolvimento de soluções digitais, reconhecida pela 
                qualidade, inovação e impacto positivo nos negócios de nossos clientes.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-coffee-900 dark:text-coffee-50 text-center mb-12">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-coffee-800 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="inline-block p-3 bg-coffee-100 dark:bg-coffee-700 rounded-full text-coffee-500 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-50 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-coffee-600 dark:text-coffee-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-coffee-600 dark:text-coffee-300 mb-8">
              Profissionais apaixonados por tecnologia e inovação
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-coffee-600 text-white px-6 py-3 rounded-lg"
            >
              <Coffee className="w-5 h-5" />
              <span>Faça parte do nosso time</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}