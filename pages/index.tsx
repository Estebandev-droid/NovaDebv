import Head from 'next/head';
import { Sparkles } from "lucide-react";
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
  const plans: Plan[] = [
    {
      title: "Plan Básico: Sitio Web Inicial",
      description:
        "Ideal para freelancers, emprendedores o pequeños negocios que necesitan una presencia en línea simple pero profesional.",
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
      description:
        "Diseñado para negocios que quieren vender productos o servicios en línea.",
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
      description:
        "Perfecto para pequeñas y medianas empresas que necesitan un sitio más robusto con funcionalidades adicionales.",
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

      <main className="pt-16">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <ParticleBackground />
          <div className="z-10 relative text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformamos Ideas en Realidades Digitales
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Soluciones tecnológicas que impulsan tu negocio hacia el éxito digital
            </p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Innovación", "Calidad", "Soporte"].map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <Sparkles className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Estadísticas</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.title} className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                  <h3 className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="p-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <p className="text-lg italic mb-4">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-medium text-cyan-400">{review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2025 NovaDev. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}