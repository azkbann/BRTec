import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MessageSquare, Globe2, Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Auth from './components/Auth';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Logo from "./assets/Logo.png"; // Importação correta da imagem
import Logo1 from "./assets/Logo1.svg";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleStartNow = () => {
    setShowAuth(true);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-coffee-900' : 'bg-white'}`}>
        {/* Header/Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed w-full z-50 bg-coffee-50/90 dark:bg-coffee-900/90 transition-colors duration-300 border-b border-coffee-200 dark:border-coffee-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src={Logo} // Usando a variável importada
                  alt="Braavos Tecnologia" 
                  className="h-16 w-auto"
                />
                <span className="ml-2 text-2xl font-bold text-coffee-800 dark:text-coffee-100 logo-text">
                  Braavos Tecnologia
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/services" className="nav-link">Serviços</Link>
                <Link to="/projects" className="nav-link">Projetos</Link>
                <Link to="/about" className="nav-link">Sobre</Link>
                <Link to="/contact" className="nav-link">Contato</Link>
              </div>

              {/* Right side icons */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-coffee-600 hover:bg-coffee-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coffee-500 transition-colors duration-200"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div 
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="lg:hidden overflow-hidden bg-coffee-50 dark:bg-coffee-900"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link to="/services" className="block px-3 py-2 text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-md">Serviços</Link>
              <Link to="/projects" className="block px-3 py-2 text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-md">Projetos</Link>
              <Link to="/about" className="block px-3 py-2 text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-md">Sobre</Link>
              <Link to="/contact" className="block px-3 py-2 text-coffee-700 dark:text-coffee-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 rounded-md">Contato</Link>
            </div>
          </motion.div>
        </motion.nav>

        {/* Routes */}
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="pt-16 pb-32">
                <div className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-coffee-700 to-coffee-900">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Technology Background"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                      >
                        Transformando Ideias em Soluções Digitais
                      </motion.h1>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl mb-8 text-gray-200"
                      >
                        Desenvolvimento web, aplicações e automação de chatbot para impulsionar seu negócio
                      </motion.p>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <button
                          onClick={handleStartNow}
                          className="inline-flex items-center px-8 py-3 border-2 border-coffee-400 bg-coffee-400 text-white hover:bg-transparent hover:text-coffee-400 transition-colors rounded-lg"
                        >
                          Começar Agora
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                        <Link to="/services" className="inline-flex items-center px-8 py-3 border-2 border-coffee-400 text-coffee-400 hover:bg-coffee-400 hover:text-white transition-colors rounded-lg">
                          Nossos Serviços
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pricing Section */}
              <Pricing />

              {/* Testimonials Section */}
              <Testimonials />
            </>
          } />
        </Routes>

        {/* Auth Modal */}
        {showAuth && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-coffee-900 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white dark:bg-coffee-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => setShowAuth(false)}
                    className="text-coffee-500 hover:text-coffee-600 focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <Auth />
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-coffee-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src={Logo1} // Usando a variável importada
                    alt="Braavos Tecnologia" 
                    className="h-10 w-auto"
                  />
                  <span className="logo-text text-white"></span>
                </div>
                <p className="text-coffee-300">
                  Transformando o futuro através da tecnologia.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Serviços</h4>
                <ul className="space-y-2">
                  <li><Link to="/services" className="text-coffee-300 hover:text-coffee-400 transition-colors">Desenvolvimento Web</Link></li>
                  <li><Link to="/services" className="text-coffee-300 hover:text-coffee-400 transition-colors">Aplicações Web</Link></li>
                  <li><Link to="/services" className="text-coffee-300 hover:text-coffee-400 transition-colors">Automação de Chatbot</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-coffee-300 hover:text-coffee-400 transition-colors">Sobre</Link></li>
                  <li><Link to="/projects" className="text-coffee-300 hover:text-coffee-400 transition-colors">Projetos</Link></li>
                  <li><Link to="/contact" className="text-coffee-300 hover:text-coffee-400 transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Newsletter</h4>
                <p className="text-coffee-300 mb-4">Receba novidades sobre tecnologia e inovação.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-2 bg-coffee-800 border border-coffee-700 rounded-lg focus:ring-2 focus:ring-coffee-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-coffee-400 text-white font-medium rounded-lg hover:bg-coffee-500 transition-colors"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-coffee-800 mt-12 pt-8 text-center text-coffee-300">
              <p>&copy; 2025 Braavos Tecnologia. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;