import { motion } from 'framer-motion';
// No lucide icons imported

const stats = [
  { value: "1.2K+", label: "Pedidos Diarios" },
  { value: "956", label: "Guías Generadas" },
  { value: "92%", label: "Entregas a tiempo" },
  { value: "+15%", label: "Eficiencia" }
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-brand-light-gray relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Plataforma Inteligente</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-6 leading-tight">
                El motor de tu operación logística
              </h3>
              
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Logigho es la solución definitiva para empresas que buscan llevar su cadena de suministro al siguiente nivel. Centraliza, monitorea y automatiza cada etapa del proceso.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-black text-brand-blue mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-brand-dark-blue p-2"
            >
              {/* Dashboard mockup visual */}
              <div className="rounded-xl overflow-hidden bg-[#0f172a] aspect-video flex flex-col">
                <div className="h-10 bg-[#1e293b] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">logigho-dashboard</div>
                </div>
                <div className="flex-1 p-6 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                  <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
                    <div className="col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10"></div>
                    <div className="col-span-1 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 flex flex-col gap-4">
                      <div className="h-1/3 rounded bg-brand-blue/50"></div>
                      <div className="h-1/3 rounded bg-brand-cyan/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
