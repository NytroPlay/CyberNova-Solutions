// src/components/ServiceGrid.jsx
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "../data/services.json";

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

// Asociación nombre → imagen
const imageMap = {
  "Desarrollo Web": DesarrolloWeb,
  "Apps": Apps,
  "Cloud": MigracionNube,
  "Consultoría": Consultoria,
  "Ciberseguridad": Ciberseguridad,
  "Datos": AnalisisDatos,
  "Automatización": AutomatizacionRPA,
  "UX/UI": DisenoUXUI,
  "IA y Chatbots": IAChatbots,
  "Integración de APIs": IntegracionAPIs,
  "Redes y Conectividad": RedesConectividad,
  "Soporte y Mantenimiento": SoporteMantenimiento,
};

export default function ServiceGrid() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Se mezclan los datos con las imágenes
    const merged = servicesData.map((service) => ({
      ...service,
      image: imageMap[service.name] || null,
    }));
    setServices(merged);
  }, []);

  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.name}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
}
