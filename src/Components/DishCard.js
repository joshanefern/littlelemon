import React from 'react';
import greek from "../assets/greek salad.jpg"

function DishCard({ title, description, price, image }) {
    return (
      <div className="dish-card">
        <img src={greek} alt={title} />
        <div className="dish-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }

export default DishCard;