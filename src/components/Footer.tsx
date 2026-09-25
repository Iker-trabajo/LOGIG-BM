export default function Footer() {
  return (
    <footer className="bg-brand-dark-gray text-white pt-20 pb-10 border-t-4 border-brand-deep-green">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="font-bold text-2xl tracking-tighter mb-6">
              CONSTRUCTORA <span className="text-brand-gold">ECOEDIF</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              ECOEDIF<br />
              CONSTRUCTORA ECOEDIF SAS.<br />
              NIT 901148227-1
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Enlaces</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-gold transition-colors">Nosotros</a></li>
              <li><a href="#soluciones" className="hover:text-brand-gold transition-colors">Soluciones</a></li>
              <li><a href="#enfoque" className="hover:text-brand-gold transition-colors">Enfoque</a></li>
              <li><a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Carrera 63 # 49 A 31</li>
              <li>Medellín, Antioquia, Colombia</li>
              <li className="mt-4 text-brand-gold">3105399585</li>
              <li><a href="mailto:soporte@constructoraecoedif.online" className="hover:text-white transition-colors">soporte@constructoraecoedif.online</a></li>
              <li><a href="https://constructoraecoedif.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">constructoraecoedif.online</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Constructora Ecoedif SAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
