import { motion } from 'framer-motion';
import { Truck, BarChart2, Cog, PlugZap } from 'lucide-react';

const solutions = [
  {
    title: "Gestión Logística",
    description: "Control total de inventario, rutas y entregas en tiempo real.",
    icon: Truck,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10"
  },
  {
    title: "Datos y Analítica",
    description: "Toma decisiones informadas con tableros predictivos e informes detallados.",
    icon: BarChart2,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10"
  },
  {
    title: "Automatización de Procesos",
    description: "Reduce errores manuales y acelera el flujo de trabajo operativo.",
    icon: Cog,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Integraciones Tecnológicas",
    description: "Conecta Logigho con tu ERP, e-commerce y transportadoras fácilmente.",
    icon: PlugZap,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Nuestras Soluciones</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark-blue mb-6">
            Ecosistema Digital Completo
          </h3>
          <p className="text-lg text-gray-500">
            Diseñado para adaptarse a las necesidades específicas de tu modelo de negocio logístico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${solution.bg} ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-brand-dark-blue mb-4">{solution.title}</h4>
                <p className="text-gray-500 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
