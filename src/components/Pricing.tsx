import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Básico',
    price: {
      monthly: 99,
      semiannual: 89,
      annual: 79
    },
    features: [
      'Desenvolvimento Web Básico',
      'Suporte por Email',
      '1 Revisão Mensal',
      'SSL Básico',
      'Hospedagem Compartilhada'
    ]
  },
  {
    name: 'Profissional',
    price: {
      monthly: 199,
      semiannual: 179,
      annual: 159
    },
    features: [
      'Tudo do Plano Básico',
      'Desenvolvimento Web Avançado',
      'Suporte Prioritário',
      '3 Revisões Mensais',
      'SSL Avançado',
      'Hospedagem Dedicada',
      'Otimização SEO'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 399,
      semiannual: 359,
      annual: 319
    },
    features: [
      'Tudo do Plano Profissional',
      'Desenvolvimento Personalizado',
      'Suporte 24/7',
      'Revisões Ilimitadas',
      'SSL Enterprise',
      'Hospedagem Premium',
      'SEO Avançado',
      'Análise de Dados',
      'Consultoria Dedicada'
    ]
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'semiannual' | 'annual'>('monthly');

  const getDiscount = (cycle: typeof billingCycle) => {
    switch (cycle) {
      case 'semiannual':
        return 10;
      case 'annual':
        return 20;
      default:
        return 0;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-coffee-50 dark:bg-coffee-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 dark:text-coffee-50 mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-coffee-600 dark:text-coffee-300 max-w-2xl mx-auto">
            Soluções flexíveis para cada necessidade. Economize até 20% com planos anuais.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'monthly'
                  ? 'bg-coffee-600 text-white'
                  : 'bg-coffee-100 text-coffee-600'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('semiannual')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'semiannual'
                  ? 'bg-coffee-600 text-white'
                  : 'bg-coffee-100 text-coffee-600'
              }`}
            >
              Semestral (-10%)
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'annual'
                  ? 'bg-coffee-600 text-white'
                  : 'bg-coffee-100 text-coffee-600'
              }`}
            >
              Anual (-20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`pricing-card rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'bg-coffee-600 text-white'
                  : 'bg-white dark:bg-coffee-800'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {plan.popular && (
                <div className="bg-yellow-400 text-coffee-900 text-center py-2 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1" />
                  Mais Popular
                </div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  plan.popular ? 'text-white' : 'text-coffee-900 dark:text-coffee-50'
                }`}>
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    R$ {plan.price[billingCycle]}
                  </span>
                  <span className={`${
                    plan.popular ? 'text-coffee-100' : 'text-coffee-600 dark:text-coffee-300'
                  }`}>
                    /mês
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className={`w-5 h-5 mr-2 ${
                        plan.popular ? 'text-white' : 'text-coffee-600'
                      }`} />
                      <span className={`${
                        plan.popular ? 'text-coffee-100' : 'text-coffee-600 dark:text-coffee-300'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-white text-coffee-600 hover:bg-coffee-50'
                      : 'bg-coffee-600 text-white hover:bg-coffee-700'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}