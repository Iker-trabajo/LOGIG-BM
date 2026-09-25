import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <>
      <footer className="bg-brand-dark-blue text-gray-300 pt-20 pb-10 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-xl">L</div>
                <div className="font-bold text-2xl tracking-tight text-white">
                  Logigho
                </div>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Plataforma tecnológica y de gestión logística<br />
                NIT: 900314975 - 9<br />
                Tecnología que transforma la logística.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-6">Enlaces Legales</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-brand-cyan transition-colors text-left"
                  >
                    Política de Privacidad
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('terms')}
                    className="hover:text-brand-cyan transition-colors text-left"
                  >
                    Términos y Condiciones
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-6">Contacto Oficial</h4>
              <ul className="space-y-3">
                <li>CL 37 NORTE # 90 - 967 CS 81</li>
                <li>Cali - Valle, Colombia</li>
                <li className="mt-4 text-brand-cyan">+57 304 402 8126</li>
                <li><a href="mailto:soporte@logigho.lat" className="hover:text-white transition-colors">soporte@logigho.lat</a></li>
                <li><a href="https://logigho.lat/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">logigho.lat</a></li>
              </ul>
            </div>
            
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Logigho. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">Privacidad</button>
              <span>|</span>
              <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors">Términos</button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark-blue/80 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-brand-dark-blue">
                  {activeModal === 'privacy' ? 'Política de Privacidad y Tratamiento de Datos' : 'Términos y Condiciones'}
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto flex-grow text-brand-gray text-sm md:text-base leading-relaxed">
                {activeModal === 'privacy' && (
                  <div className="space-y-6">
                    <p className="font-semibold">Última actualización: Septiembre de 2026</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">1. IDENTIFICACIÓN DEL RESPONSABLE</h4>
                    <p>En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 (Habeas Data), informamos que el responsable del tratamiento de sus datos personales es <strong>Logigho</strong>, identificada con NIT <strong>900314975 - 9</strong>, con domicilio en <strong>CL 37 NORTE # 90 - 967 CS 81, Cali - Valle, Colombia</strong>.</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">2. FINALIDAD DEL TRATAMIENTO</h4>
                    <p>Los datos personales recolectados a través de nuestro sitio web (logigho.lat) serán utilizados exclusivamente para las siguientes finalidades:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Gestionar solicitudes de contacto, dudas o inquietudes comerciales.</li>
                      <li>Procesar las solicitudes para demostraciones (demos) de nuestra plataforma tecnológica y de gestión logística.</li>
                      <li>Brindar soporte técnico y servicio al cliente.</li>
                      <li>Enviar información relevante sobre nuestros servicios, actualizaciones de la plataforma y contenido relacionado con el sector logístico (sujeto a su consentimiento).</li>
                    </ul>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">3. DERECHOS DEL TITULAR</h4>
                    <p>Como titular de los datos personales, usted tiene derecho a:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a Logigho.</li>
                      <li>Solicitar prueba de la autorización otorgada.</li>
                      <li>Ser informado previa solicitud respecto al uso que se le ha dado a sus datos.</li>
                      <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.</li>
                      <li><strong>Revocar la autorización y/o solicitar la supresión</strong> del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                    </ul>

                    <h4 className="text-lg font-bold text-brand-dark-blue">4. CANALES DE ATENCIÓN</h4>
                    <p>Para ejercer sus derechos (conocer, actualizar, rectificar o suprimir su información), puede comunicarse a través de nuestros canales oficiales:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Correo Electrónico:</strong> <a href="mailto:soporte@logigho.lat" className="text-brand-blue hover:underline">soporte@logigho.lat</a></li>
                      <li><strong>Teléfono Oficial / WhatsApp:</strong> +57 304 402 8126</li>
                      <li><strong>Dirección:</strong> CL 37 NORTE # 90 - 967 CS 81, Cali - Valle, Colombia</li>
                    </ul>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div className="space-y-6">
                    <p className="font-semibold">Última actualización: Septiembre de 2026</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">1. OBJETO</h4>
                    <p>Los presentes Términos y Condiciones regulan el uso de la plataforma web <strong>logigho.lat</strong> y los servicios prestados por <strong>Logigho</strong> (NIT 900314975 - 9). Logigho es una plataforma tecnológica enfocada en ofrecer soluciones digitales para optimizar, automatizar y conectar procesos empresariales logísticos. Este documento se redacta en concordancia con la Ley 1480 de 2011 (Estatuto del Consumidor) y la Ley 527 de 1999 (Comercio Electrónico en Colombia).</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">2. USO DE LA PLATAFORMA Y SOLICITUD DE DEMOS</h4>
                    <p>El usuario se compromete a hacer un uso lícito y adecuado del sitio web. La solicitud de una demostración (demo) de la plataforma no constituye un contrato vinculante de prestación de servicios, sino una etapa de exploración comercial. Logigho se reserva el derecho de aceptar o rechazar las solicitudes de acceso a la plataforma o demostraciones a su entera discreción.</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">3. PROPIEDAD INTELECTUAL</h4>
                    <p>Todos los contenidos del sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, descargas digitales, recopilaciones de datos y el software de la plataforma, son propiedad exclusiva de <strong>Logigho</strong> o de sus proveedores de contenido, y están protegidos por las leyes de propiedad intelectual de Colombia y convenios internacionales. Queda estrictamente prohibida su reproducción o distribución sin autorización expresa.</p>
                    
                    <h4 className="text-lg font-bold text-brand-dark-blue">4. LIMITACIÓN DE RESPONSABILIDAD</h4>
                    <p>Logigho no garantiza la disponibilidad ininterrumpida del sitio web y no será responsable de daños indirectos, lucro cesante o pérdida de datos derivados del uso o imposibilidad de uso de nuestro sitio web informativo. Para los usuarios de la plataforma paga, las condiciones de nivel de servicio (SLA) se estipularán en su respectivo contrato comercial.</p>

                    <h4 className="text-lg font-bold text-brand-dark-blue">5. CANALES OFICIALES DE SOPORTE</h4>
                    <p>Cualquier controversia, duda o requerimiento técnico o comercial deberá ser tramitado única y exclusivamente a través de nuestros canales autorizados:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Correo Electrónico:</strong> <a href="mailto:soporte@logigho.lat" className="text-brand-blue hover:underline">soporte@logigho.lat</a></li>
                      <li><strong>Línea de Atención:</strong> 3044028126</li>
                      <li><strong>Dirección:</strong> CL 37 NORTE # 90 - 967 CS 81, Cali - Valle</li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-dark-blue transition-colors shadow-md"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
