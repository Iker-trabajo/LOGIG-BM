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
    // Simulate form submission
    console.log('Formulario enviado', formData);
    alert('Consulta enviada. Nos pondremos en contacto pronto.');
    setFormData({ nombre: '', empresa: '', correo: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-brand-cement-gray/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-medium-green uppercase mb-4">Comunicación</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-gray">Contáctanos</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-sm shadow-xl h-full border-t-4 border-brand-gold"
            >
              <div className="mb-10 border-b border-gray-100 pb-8">
                <h4 className="text-2xl font-bold text-brand-dark-gray mb-2">CONSTRUCTORA ECOEDIF SAS.</h4>
                <p className="text-brand-medium-green font-medium">NIT: 901148227-1</p>
              </div>

              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-brand-cement-gray/50 flex items-center justify-center text-brand-deep-green shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark-gray">Dirección:</p>
                    <p>Carrera 63 # 49 A 31</p>
                    <p>Medellín, Antioquia, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-brand-cement-gray/50 flex items-center justify-center text-brand-deep-green shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark-gray">Teléfono:</p>
                    <p>3105399585</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-brand-cement-gray/50 flex items-center justify-center text-brand-deep-green shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark-gray">Correo:</p>
                    <a href="mailto:soporte@constructoraecoedif.online" className="hover:text-brand-gold transition-colors break-all">
                      soporte@constructoraecoedif.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-brand-cement-gray/50 flex items-center justify-center text-brand-deep-green shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark-gray">Sitio web:</p>
                    <a href="https://constructoraecoedif.online/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors break-all">
                      https://constructoraecoedif.online/
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
              className="bg-white p-10 rounded-sm shadow-lg h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-medium-green focus:bg-white transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-medium-green focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">Correo</label>
                  <input 
                    type="email" 
                    id="correo" 
                    name="correo" 
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-medium-green focus:bg-white transition-colors"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-medium-green focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows={5}
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-medium-green focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-deep-green text-white font-bold py-4 px-8 rounded-sm hover:bg-brand-medium-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
              >
                Enviar consulta
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
