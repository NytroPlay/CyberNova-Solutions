// src/components/ServiceGrid.jsx
import React from "react";
import ServiceCard from "./ServiceCard";

// Importación de imágenes
import MigracionNube from "../assets/services/Migración a la Nube.png";
import AnalisisDatos from "../assets/services/Análisis de Datos.png";
import Apps from "../assets/services/Apps.png";
import AutomatizacionRPA from "../assets/services/Automatización de Procesos (RPA).png";
import Ciberseguridad from "../assets/services/ciberseguridad.png";
import Consultoria from "../assets/services/Consultoría Tecnológica.png";
import DesarrolloWeb from "../assets/services/Desarrollo Web.png";
import DisenoUXUI from "../assets/services/Diseño UX UI.png";
import IAChatbots from "../assets/services/IA y Chatbots.png";
import IntegracionAPIs from "../assets/services/Integración de APIs.png";
import RedesConectividad from "../assets/services/Redes y Conectividad.png";
import SoporteMantenimiento from "../assets/services/Soporte y Mantenimiento.png";

export default function ServiceGrid() {
  const services = [
    {
      title: "Migración a la Nube",
      description: "Lleva tu infraestructura a la nube con soluciones seguras y escalables.",
      image: MigracionNube,
    },
    {
      title: "Análisis de Datos",
      description: "Transforma datos en decisiones con herramientas avanzadas de análisis.",
      image: AnalisisDatos,
    },
    {
      title: "Apps",
      description: "Desarrollamos aplicaciones móviles y web a la medida de tu negocio.",
      image: Apps,
    },
    {
      title: "Automatización de Procesos (RPA)",
      description: "Optimiza tareas repetitivas mediante robots de software inteligentes.",
      image: AutomatizacionRPA,
    },
    {
      title: "Ciberseguridad",
      description: "Protege tus sistemas con medidas avanzadas de seguridad digital.",
      image: Ciberseguridad,
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoría estratégica para implementar soluciones digitales efectivas.",
      image: Consultoria,
    },
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, optimizados y con diseño responsivo.",
      image: DesarrolloWeb,
    },
    {
      title: "Diseño UX/UI",
      description: "Diseños centrados en el usuario para experiencias digitales memorables.",
      image: DisenoUXUI,
    },
    {
      title: "IA y Chatbots",
      description: "Incorpora inteligencia artificial en tus procesos de atención al cliente.",
      image: IAChatbots,
    },
    {
      title: "Integración de APIs",
      description: "Conecta tus sistemas y servicios mediante integraciones seguras y eficientes.",
      image: IntegracionAPIs,
    },
    {
      title: "Redes y Conectividad",
      description: "Implementamos soluciones de redes seguras, rápidas y confiables.",
      image: RedesConectividad,
    },
    {
      title: "Soporte y Mantenimiento",
      description: "Mantenemos tus sistemas y equipos funcionando de forma óptima.",
      image: SoporteMantenimiento,
    },
  ];

  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
}
