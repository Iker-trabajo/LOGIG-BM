export default function Footer() {
  return (
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
              Logigho<br />
              NIT 900314975 - 9<br />
              Tecnología que transforma la logística.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-brand-cyan transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-cyan transition-colors">Plataforma</a></li>
              <li><a href="#soluciones" className="hover:text-brand-cyan transition-colors">Soluciones</a></li>
              <li><a href="#contacto" className="hover:text-brand-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li>CL 37 NORTE # 90 - 967 CS 81</li>
              <li>Cali - Valle, Colombia</li>
              <li className="mt-4 text-brand-cyan">3044028126</li>
              <li><a href="mailto:soporte@logigho.lat" className="hover:text-white transition-colors">soporte@logigho.lat</a></li>
              <li><a href="https://logigho.lat/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">logigho.lat</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Logigho. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
