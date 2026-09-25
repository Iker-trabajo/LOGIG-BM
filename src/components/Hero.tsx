import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark-blue">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c80a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark-blue via-brand-dark-blue/80 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan font-medium text-sm mb-6 border border-brand-blue/30"
          >
            Logigho Platform
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Tecnología que <span className="text-brand-cyan">transforma</span> la logística.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light"
          >
            Soluciones digitales para optimizar, automatizar y conectar procesos empresariales.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#soluciones" 
              className="px-8 py-4 bg-brand-blue text-white font-semibold hover:bg-brand-cyan hover:text-brand-dark-blue transition-colors duration-300 rounded-full shadow-lg shadow-brand-blue/30"
            >
              Explorar Soluciones
            </a>
            <a 
              href="#contacto" 
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors duration-300 rounded-full backdrop-blur-sm"
            >
              Solicitar Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
