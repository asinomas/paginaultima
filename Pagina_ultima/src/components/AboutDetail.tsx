import React from 'react';
import { Target, Users, Zap, Shield, MapPin, Mail, Phone, Globe } from 'lucide-react';

const AboutDetail: React.FC = () => {
  const values = [
    {
      icon: <Target className="size-6" />,
      title: "Misión",
      desc: "Impulsar la evolución digital de las empresas a través de soluciones tecnológicas estratégicas y personalizadas."
    },
    {
      icon: <Shield className="size-6" />,
      title: "Confianza",
      desc: "Construimos relaciones a largo plazo basadas en la transparencia y la entrega constante de valor real."
    },
    {
      icon: <Zap className="size-6" />,
      title: "Innovación",
      desc: "Nos mantenemos a la vanguardia de las tendencias para ofrecer siempre la tecnología más eficiente."
    },
    {
      icon: <Users className="size-6" />,
      title: "Equipo",
      desc: "Expertos apasionados por resolver problemas complejos con simplicidad y excelencia operativa."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 antialiased">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* SECCIÓN HERO NOSOTROS */}
        <div className="max-w-3xl mb-24">
          <h4 className="text-[#135bec] font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
            Sobre BlackTI
          </h4>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            Liderando la <br />
            <span className="text-[#135bec]">transformación.</span>
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed">
            Somos un equipo multidisciplinario dedicado a redefinir el estándar de la consultoría tecnológica. 
            No solo entregamos software, construimos la infraestructura del éxito para el mañana.
          </p>
        </div>

        {/* GRILLA DE VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#135bec]/20 hover:shadow-xl transition-all group">
              <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#135bec] mb-6 group-hover:bg-[#135bec] group-hover:text-white transition-colors">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* SECCIÓN DE CONTACTO Y MAPA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-8 tracking-tight">Presencia Regional</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center text-[#135bec] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Oficina Central</p>
                  <p className="text-lg font-medium">Santiago, Chile</p>
                  <p className="text-white/50 text-sm">Av. Nueva Tajamar 481, Torre Norte</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center text-[#135bec] shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Alcance</p>
                  <p className="text-lg font-medium">Operaciones en Latam</p>
                  <p className="text-white/50 text-sm">Chile, Perú, Colombia y México</p>
                </div>
              </div>

              <div className="flex items-start gap-6 pt-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white/70 hover:text-[#135bec] transition-colors cursor-pointer">
                    <Mail size={16} />
                    <span className="text-sm font-medium">contacto@blackti.cl</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Phone size={16} />
                    <span className="text-sm font-medium">+56 2 2345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAPS INTEGRADO */}
          <div className="h-[400px] lg:h-auto min-h-[450px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.141528659223!2d-70.6067087!3d-33.4130095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf420d437f8f%3A0x868b199e44927b14!2sAv.%20Nueva%20Tajamar%20481%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[3rem]"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
