import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-deep-green/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-gray/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 mt-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Construimos espacios para el futuro.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl font-light"
          >
            Soluciones constructivas con visión, planificación y compromiso.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#nosotros" 
              className="px-8 py-4 bg-brand-gold text-brand-deep-green font-semibold hover:bg-white hover:text-brand-deep-green transition-colors duration-300 rounded-sm"
            >
              Conócenos
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-4 bg-transparent border border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300 rounded-sm"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
