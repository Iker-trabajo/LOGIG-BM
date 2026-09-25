import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-medium-green uppercase mb-4">Quiénes somos</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-gray mb-8 leading-tight">
                Constructora Ecoedif SAS.
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Constructora Ecoedif SAS. es una organización con sede en Medellín, Antioquia, orientada al desarrollo y construcción de espacios y soluciones para el entorno empresarial y urbano.
              </p>
              
              <div className="bg-brand-cement-gray/30 p-8 border-l-4 border-brand-gold rounded-sm">
                <ul className="space-y-4 text-brand-dark-gray">
                  <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="font-semibold w-32">Razón Social:</span>
                    <span>CONSTRUCTORA ECOEDIF SAS.</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="font-semibold w-32">Sigla:</span>
                    <span>ECOEDIF</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="font-semibold w-32">NIT:</span>
                    <span>901148227-1</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="font-semibold w-32">Ubicación:</span>
                    <span>Medellín, Antioquia, Colombia</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888081691-bd8011f0a2ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Arquitectura corporativa" 
                className="object-cover w-full h-full rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-deep-green rounded-sm -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/40 rounded-sm -z-10"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
