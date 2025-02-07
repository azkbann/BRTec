import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bot, Globe, ArrowRight, MessageSquare, Instagram, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'landing-page',
    title: 'Landing Page Personalizada',
    icon: <Globe className="w-12 h-12 text-coffee-500" />,
    description: 'Desenvolva sua presença online com uma landing page profissional e otimizada para conversões.',
    features: [
      'Design responsivo e moderno',
      'Otimização para SEO',
      'Integração com Analytics',
      'Formulários de captura',
      'Hospedagem incluída',
      'Suporte técnico'
    ],
    price: 'R$ 2.997',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3'
  },
  {
    id: 'mobile-template',
    title: 'Template Mobile para Lojas',
    icon: <Smartphone className="w-12 h-12 text-coffee-500" />,
    description: 'Template mobile otimizado para e-commerce com foco em conversão e experiência do usuário.',
    features: [
      'Design mobile-first',
      'Carrinho de compras',
      'Integração com pagamentos',
      'Gestão de produtos',
      'Painel administrativo',
      'Relatórios de vendas'
    ],
    price: 'R$ 3.997',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2424&ixlib=rb-4.0.3'
  },
  {
    id: 'chatbot',
    title: 'Automação de Chatbot',
    icon: <Bot className="w-12 h-12 text-coffee-500" />,
    description: 'Automatize seu atendimento com chatbots inteligentes para múltiplas plataformas.',
    features: [
      'Integração WhatsApp',
      'Bot para Instagram',
      'Automação Telegram',
      'Respostas automáticas',
      'Análise de conversas',
      'Relatórios detalhados'
    ],
    price: 'R$ 1.997',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2425&ixlib=rb-4.0.3'
  }
];

const platformIcons = {
  WhatsApp: <MessageSquare className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  Telegram: <Send className="w-5 h-5" />
};

export default function Services() {
  const navigate = useNavigate();

  const handleServiceSelection = (serviceId: string) => {
    // This would typically navigate to login if not authenticated
    navigate('/auth');
  };

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
              Nossos Serviços
            </h1>
            <p className="text-xl text-coffee-600 dark:text-coffee-300 max-w-3xl mx-auto">
              Soluções tecnológicas personalizadas para impulsionar seu negócio no mundo digital
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-coffee-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    {service.icon}
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-coffee-600 dark:text-coffee-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center text-coffee-700 dark:text-coffee-200"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-coffee-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="mt-8">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-coffee-900 dark:text-coffee-50">
                        {service.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleServiceSelection(service.id)}
                      className="w-full py-3 px-4 bg-coffee-600 hover:bg-coffee-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Começar Agora</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-coffee-100 dark:bg-coffee-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-coffee-600 dark:text-coffee-300">
              Conheça alguns dos nossos casos de sucesso
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={`portfolio-${service.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={service.image}
                  alt={`Portfolio ${service.title}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-coffee-200 text-sm">{service.description}</p>
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