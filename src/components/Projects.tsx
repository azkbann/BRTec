import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building2, Users2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Responsivo',
    type: 'Landing Page Personalizada',
    client: 'TechStore Brasil',
    description: 'Desenvolvimento de uma plataforma e-commerce completa com design responsivo e sistema de pagamentos integrado.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3',
    testimonial: {
      name: 'Maria Silva',
      role: 'CEO TechStore',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100',
      content: 'A Braavos superou todas as expectativas. Nossa conversão aumentou 150% após o lançamento da nova plataforma.',
      rating: 5
    }
  },
  {
    id: 2,
    title: 'Aplicativo de Delivery',
    type: 'Template Mobile para Lojas',
    client: 'FoodExpress',
    description: 'App mobile para sistema de delivery com rastreamento em tempo real e integração com múltiplos restaurantes.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2424&ixlib=rb-4.0.3',
    testimonial: {
      name: 'João Santos',
      role: 'Diretor FoodExpress',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100',
      content: 'O aplicativo revolucionou nossa operação. A interface intuitiva e o sistema de rastreamento são excepcionais.',
      rating: 5
    }
  },
  {
    id: 3,
    title: 'Chatbot Multicanal',
    type: 'Automação de Chatbot',
    client: 'ServiceHub',
    description: 'Sistema de atendimento automatizado integrado com WhatsApp, Instagram e Telegram.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2425&ixlib=rb-4.0.3',
    testimonial: {
      name: 'Ana Costa',
      role: 'COO ServiceHub',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100',
      content: 'Reduzimos nosso tempo de resposta em 80% e aumentamos a satisfação dos clientes significativamente.',
      rating: 5
    }
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-coffee-50 dark:bg-coffee-900 pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
              Nossos Projetos
            </h1>
            <p className="text-xl text-coffee-600 dark:text-coffee-300 max-w-3xl mx-auto">
              Conheça alguns dos nossos casos de sucesso e como transformamos negócios através da tecnologia
            </p>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-coffee-800 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-coffee-500 text-white rounded-full text-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Building2 className="w-6 h-6 text-coffee-500" />
                      <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center text-coffee-600 dark:text-coffee-300 mb-4">
                      <Users2 className="w-5 h-5 mr-2" />
                      <span>{project.client}</span>
                    </div>

                    <p className="text-coffee-600 dark:text-coffee-300 mb-8">
                      {project.description}
                    </p>

                    {/* Client Testimonial */}
                    <div className="border-t border-coffee-200 dark:border-coffee-700 pt-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={project.testimonial.avatar}
                          alt={project.testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-coffee-900 dark:text-coffee-50">
                            {project.testimonial.name}
                          </h4>
                          <p className="text-sm text-coffee-600 dark:text-coffee-300">
                            {project.testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(project.testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-coffee-600 dark:text-coffee-300 italic">
                        "{project.testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}