import { motion } from 'framer-motion';
import { Ruler, ShieldCheck, Lightbulb, PenTool, HardHat } from 'lucide-react';

const pillars = [
  {
    title: "Planificación",
    description: "Una visión estructurada para abordar cada etapa de un proyecto.",
    icon: Ruler,
  },
  {
    title: "Calidad",
    description: "Atención al detalle y enfoque en procesos responsables.",
    icon: ShieldCheck,
  },
  {
    title: "Innovación",
    description: "Exploramos nuevas ideas y soluciones aplicadas al entorno constructivo.",
    icon: Lightbulb,
  },
  {
    title: "Diseño",
    description: "Espacios pensados desde una perspectiva funcional y contemporánea.",
    icon: PenTool,
  },
  {
    title: "Ejecución",
    description: "Organización y seguimiento de los procesos necesarios para materializar cada propuesta.",
    icon: HardHat,
  }
];

export default function Approach() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="enfoque" className="py-24 bg-brand-deep-green text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Metodología</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Nuestro enfoque</h3>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-gold/20 text-brand-gold rounded-sm flex items-center justify-center mb-6">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
