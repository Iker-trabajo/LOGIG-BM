import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-24 bg-brand-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-brand-deep-green fill-current">
          <polygon points="100,0 0,100 100,100" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-square w-full rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1596404987766-3d2b2cd2cbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Medellín Skyline" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-deep-green/20 mix-blend-multiply"></div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cement-gray/30 rounded-sm mb-6 text-brand-medium-green font-medium">
                <MapPin size={18} />
                <span>Medellín, Antioquia</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark-gray mb-8 leading-tight">
                Desde Medellín
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Con sede en Medellín, Antioquia, Constructora Ecoedif desarrolla su identidad desde un entorno urbano y empresarial en constante evolución.
              </p>
              
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-brand-dark-gray">Medellín</div>
                <div className="text-lg text-brand-medium-green">Antioquia</div>
                <div className="text-gray-500 font-light">Colombia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
