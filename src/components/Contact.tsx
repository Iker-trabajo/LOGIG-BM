import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consulta enviada. Nos pondremos en contacto pronto.');
    setFormData({ nombre: '', empresa: '', correo: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-brand-light-gray">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Soporte y Ventas</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark-blue">Hablemos de tu negocio</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark-blue text-white p-10 rounded-3xl shadow-xl h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="mb-10 border-b border-white/10 pb-8 relative z-10">
                <h4 className="text-2xl font-bold mb-2">LOGIGHO</h4>
                <p className="text-brand-cyan font-medium">NIT: 900314975 - 9</p>
              </div>

              <div className="space-y-6 text-gray-300 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-brand-cyan">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Dirección:</p>
                    <p>CL 37 NORTE # 90 - 967 CS 81</p>
                    <p>Cali - Valle, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-brand-cyan">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Teléfono:</p>
                    <p>3044028126</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-brand-cyan">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Correo electrónico:</p>
                    <a href="mailto:soporte@logigho.lat" className="hover:text-brand-cyan transition-colors break-all">
                      soporte@logigho.lat
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-brand-cyan">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Sitio web:</p>
                    <a href="https://logigho.lat/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors break-all">
                      https://logigho.lat/
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">Correo corporativo</label>
                  <input 
                    type="email" 
                    id="correo" 
                    name="correo" 
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-dark-blue transition-colors shadow-lg shadow-brand-blue/30"
              >
                Enviar Solicitud
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
