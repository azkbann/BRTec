import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Entre em Contato
            </h1>
            <p className="text-xl text-coffee-600 dark:text-coffee-300 max-w-3xl mx-auto">
              Estamos prontos para transformar sua ideia em realidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-coffee-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-coffee-100 dark:bg-coffee-700 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-coffee-500" />
                    </div>
                    <div>
                      <p className="text-sm text-coffee-600 dark:text-coffee-300">Email</p>
                      <p className="text-coffee-900 dark:text-coffee-50">contato@braavos.tech</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-coffee-100 dark:bg-coffee-700 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-coffee-500" />
                    </div>
                    <div>
                      <p className="text-sm text-coffee-600 dark:text-coffee-300">Telefone</p>
                      <p className="text-coffee-900 dark:text-coffee-50">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-coffee-100 dark:bg-coffee-700 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-coffee-500" />
                    </div>
                    <div>
                      <p className="text-sm text-coffee-600 dark:text-coffee-300">Endereço</p>
                      <p className="text-coffee-900 dark:text-coffee-50">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-coffee-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-coffee-900 dark:text-coffee-50 mb-6">
                  Atendimento
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-coffee-100 dark:bg-coffee-700 p-3 rounded-full">
                      <MessageSquare className="w-6 h-6 text-coffee-500" />
                    </div>
                    <div>
                      <p className="text-sm text-coffee-600 dark:text-coffee-300">Horário</p>
                      <p className="text-coffee-900 dark:text-coffee-50">Seg - Sex: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-coffee-800 p-8 rounded-xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-700 dark:text-coffee-200">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-700 dark:text-coffee-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-coffee-700 dark:text-coffee-200">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-coffee-700 dark:text-coffee-200">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="landing-page">Landing Page Personalizada</option>
                    <option value="mobile-template">Template Mobile</option>
                    <option value="chatbot">Automação de Chatbot</option>
                    <option value="other">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-700 dark:text-coffee-200">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-coffee-300 shadow-sm focus:border-coffee-500 focus:ring-coffee-500 dark:bg-coffee-700 dark:border-coffee-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-coffee-600 hover:bg-coffee-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coffee-500 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}