import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100',
    content: 'A Braavos transformou completamente nossa presença digital. O atendimento e profissionalismo são excepcionais.',
    rating: 5
  },
  {
    name: 'Ana Martins',
    role: 'Diretora de Marketing, InnovaCorp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100',
    content: 'Impressionante como conseguiram captar exatamente o que precisávamos. O resultado superou nossas expectativas.',
    rating: 5
  },
  {
    name: 'Pedro Santos',
    role: 'Fundador, EcoTech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100',
    content: 'A melhor decisão que tomamos foi escolher a Braavos. Profissionais altamente capacitados e resultados extraordinários.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-coffee-100 dark:bg-coffee-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4"
          >
            O Que Nossos Clientes Dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-coffee-600 dark:text-coffee-300"
          >
            Histórias reais de clientes que transformaram seus negócios conosco
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="testimonial-card relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-coffee-300 dark:text-coffee-600 opacity-50" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-coffee-900 dark:text-coffee-50">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-coffee-600 dark:text-coffee-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-coffee-600 dark:text-coffee-300">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}