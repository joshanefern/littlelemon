import React from 'react';
import DishCard from './DishCard';

const specialsData = [
  {
    id: 1,
    title: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.",
    price: "$12.99",
    image: "/greek-salad.jpg"
  },
];

function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials</h2>
      <div className="specials-grid">
        {specialsData.map(special => (
          <DishCard key={special.id} {...special} />
        ))}
      </div>
    </section>
  );
}

export default Specials;