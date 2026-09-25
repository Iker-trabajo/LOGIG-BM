import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-deep-green">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888081691-bd8011f0a2ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Construyamos nuevas posibilidades
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Conversemos sobre tus necesidades y conozcamos cómo podemos abordar tu próximo proyecto.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-10 py-4 bg-brand-gold text-brand-deep-green font-bold hover:bg-white transition-colors duration-300 rounded-sm shadow-lg"
          >
            Hablar con nosotros
          </a>
        </motion.div>
      </div>
    </section>
  );
}
