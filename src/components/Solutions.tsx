import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Desarrollo",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Construcción",
    image: "https://images.unsplash.com/photo-1541888081691-bd8011f0a2ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Planeación",
    image: "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Diseño",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Gestión de proyectos",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Soluciones para espacios",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-24 bg-brand-cement-gray/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-medium-green uppercase mb-4">Áreas conceptuales</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-gray leading-tight">
              Soluciones constructivas
            </h3>
          </div>
          <div className="text-gray-600 max-w-md md:text-right">
            Enfoques integrales para abordar desafíos en el entorno constructivo y de desarrollo.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-dark-gray"
            >
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-green/90 via-brand-deep-green/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <div className="w-8 h-1 bg-brand-gold mb-4 transition-all duration-300 group-hover:w-12"></div>
                <h4 className="text-xl font-bold text-white">{solution.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
