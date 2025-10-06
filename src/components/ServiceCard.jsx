import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card-modern">
      <div className="image-container">
        {image ? (
          <img src={image} alt={title} className="service-image" />
        ) : (
          <div className="no-image">Sin imagen</div>
        )}
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
