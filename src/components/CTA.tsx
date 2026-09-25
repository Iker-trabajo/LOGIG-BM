import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-blue">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-luminosity"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7c80a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para modernizar tu operación?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            Únete a las empresas que ya están transformando su logística con nuestra plataforma digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto" 
              className="px-10 py-4 bg-white text-brand-blue font-bold hover:bg-gray-50 transition-colors duration-300 rounded-full shadow-xl"
            >
              Solicitar Demo Gratuita
            </a>
            <a 
              href="#soluciones" 
              className="px-10 py-4 bg-transparent border border-white text-white font-bold hover:bg-white/10 transition-colors duration-300 rounded-full"
            >
              Conocer Más
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
