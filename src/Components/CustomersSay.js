import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Emily R.",
    text: "Amazing food and wonderful atmosphere! The Greek salad is a must-try.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael B.",
    text: "The staff was so friendly and the Mediterranean flavors really shine here.",
    rating: 4
  },
  {
    id: 3,
    name: "Sofia L.",
    text: "Cozy place with authentic dishes. Highly recommend the lamb kebabs!",
    rating: 5
  },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map(({ id, name, text, rating }) => (
          <blockquote key={id} className="testimonial-card">
            <p>"{text}"</p>
            <footer>
              — <strong>{name}</strong>, {Array(rating).fill('⭐').join('')}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
