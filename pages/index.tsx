import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Rocket, Satellite, Orbit } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import Card from "../components/Card";
import Header from "../components/Header";

interface Plan {
  title: string;
  description: string;
  features: string[];
  cost: string;
}

interface Review {
  text: string;
  author: string;
}

interface Stat {
  title: string;
  value: string;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const plans: Plan[] = [
    {
      title: "Plan Básico: Sitio Web Inicial",
      description: "Ideal para freelancers, emprendedores o pequeños negocios que necesitan una presencia en línea simple pero profesional.",
      features: [
        "Dominio gratuito (.com o .co) por 1 año",
        "Hosting compartido básico",
        "Diseño responsivo: Plantilla predefinida personalizable",
        "Hasta 5 páginas estáticas (inicio, servicios, contacto, etc.)",
        "Formulario de contacto integrado",
        "Optimización SEO básica",
        "Correo electrónico profesional: 1 cuenta",
        "Soporte técnico básico vía WhatsApp o correo electrónico",
      ],
      cost: "$200,000 COP/mes o $2,000,000 COP/año",
    },
    {
      title: "Plan Avanzado: Tienda Online",
      description: "Diseñado para negocios que quieren vender productos o servicios en línea.",
      features: [
        "Dominio gratuito (.com o .co) por 1 año",
        "Hosting compartido avanzado",
        "E-commerce integrado",
        "Diseño personalizado",
        "Páginas ilimitadas",
        "Catálogo de productos: Hasta 50 productos configurados",
        "Pasarelas de pago integradas",
        "Optimización SEO avanzada",
        "Marketing digital básico",
        "Correo electrónico profesional: Hasta 5 cuentas",
        "Mantenimiento avanzado",
        "Capacitación para administrar el sitio",
      ],
      cost: "$800,000 COP/mes o $8,000,000 COP/año",
    },
    {
      title: "Plan Intermedio: Sitio Web Empresarial",
      description: "Perfecto para pequeñas y medianas empresas que necesitan un sitio más robusto con funcionalidades adicionales.",
      features: [
        "Dominio gratuito (.com o .co) por 1 año",
        "Hosting compartido avanzado",
        "Diseño semi-personalizado",
        "Hasta 10 páginas estáticas",
        "Blog integrado",
        "Optimización SEO avanzada",
        "Formularios personalizados",
        "Chat en vivo",
        "Mantenimiento básico",
        "Soporte técnico prioritario vía WhatsApp o correo electrónico",
      ],
      cost: "$400,000 COP/mes o $4,200,000 COP/año",
    },
  ];

  const reviews: Review[] = [
    {
      text: "La aplicación se desarrolló en un tiempo récord con calidad superior.",
      author: "Carlos Martínez - TechSolutions",
    },
    {
      text: "Optimizar tareas manuales ha revolucionado nuestro negocio.",
      author: "Ana Gómez - DigitalMind",
    },
  ];

  const stats: Stat[] = [
    { title: "Profesionales Certificados", value: "15+" },
    { title: "Clientes Satisfechos", value: "50+" },
    { title: "Proyectos Entregados", value: "80+" },
  ];

  return (
    <>
      <Head>
        <title>NovaDev - Desarrollo Web y Soluciones Digitales Innovadoras</title>
        <meta name="description" content="Agencia especializada en desarrollo web moderno, e-commerce y soluciones digitales personalizadas. Transformamos tu visión en realidad digital." />
      </Head>

      <Header />

      <main className="pt-24 cosmic-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 flex items-center space-x-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"
          >
            <Rocket className="h-12 w-12 text-cyan-400/90" />
          </motion.div>
          <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            NovaDev
          </span>
        </div>

        <section 
          id="hero" 
        >
          <img src="/images/planet.png" alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
          <ParticleBackground particleCount={500} particleColor="#4F46E5" />
          <div className="z-10 relative text-center px-4 space-y-8">
            <motion.div 
              className="inline-block"
              animate={{
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-24 h-24 text-cyan-400 mb-8 mx-auto cosmic-icon" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 cosmic-glow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Transformamos Ideas en
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-gradient-x">
                Realidades Digitales
              </span>
            </motion.h1>
            
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="cosmic-button px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-galaxy">
                Comenzar Proyecto
              </button>
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse-slow" />
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-20"
            style={{ scaleY: scale }}
          />
        </section>

        <section 
          id="features" 
          className="py-24 relative cosmic-warp"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 cosmic-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Nuestros Pilares
              </span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {["Innovación", "Calidad", "Soporte"].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="cosmic-card p-8 rounded-3xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all glass-effect"
                  whileHover={{ y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <div className="cosmic-icon-container mb-6">
                    <Sparkles className="w-16 h-16 text-cyan-400 mx-auto cosmic-icon animate-float" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center cosmic-text bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-center text-lg leading-relaxed">
                    Tecnología de punta adaptada a tus necesidades
                  </p>
                  <div className="mt-6 cosmic-divider" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="stats" 
          className="py-24 relative cosmic-nebula"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 cosmic-title"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="cosmic-text-outline">Nuestro Impacto</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              {stats.map((stat) => (
                <motion.div 
                  key={stat.title} 
                  className="p-8 cosmic-stat-card rounded-3xl backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all glass-effect"
                  whileHover={{ scale: 1.05 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <div className="cosmic-number-glow mb-4">
                    <span className="text-6xl font-bold text-cyan-400 cosmic-number">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xl cosmic-text">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="services" 
          className="py-24 relative cosmic-constellation"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 cosmic-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Nuestros Planes
              </span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {plans.map((plan, index) => (
                <motion.div 
                  key={index}
                  className="relative cosmic-planet-card"
                  whileHover={{ scale: 1.02 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    {...plan} 
                    className="cosmic-card-hover h-full bg-gray-900/50 backdrop-blur-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all glass-effect"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="testimonials" 
          className="py-24 relative cosmic-quasar"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 cosmic-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="cosmic-text-shine">Testimonios</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {reviews.map((review, index) => (
                <motion.div 
                  key={index} 
                  className="p-8 cosmic-testimonial-card rounded-3xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all glass-effect"
                  whileHover={{ rotate: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <Satellite className="w-12 h-12 text-cyan-400 mb-6 cosmic-icon-float" />
                  <p className="text-xl italic mb-6 text-gray-200 leading-relaxed cosmic-quote">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-medium text-cyan-400 text-lg cosmic-author">
                    {review.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 cosmic-blackhole relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="mb-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Orbit className="w-24 h-24 text-cyan-400 mx-auto opacity-50" />
          </motion.div>
          
          <p className="text-gray-400 text-lg cosmic-footer-text">
            &copy; 2025 NovaDev. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}