import React from 'react'

function Main() {
  return (
    <main className="main-content">
      <section className="featured-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="intro-text">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
      </section>
      
      <section className="specials">
        <h2>Weekly Specials</h2>
        <div className="dish-card">
          <img src="/greek-salad.jpg" alt="Greek Salad" className="dish-image" />
          <h3>Greek Salad</h3>
          <p>Our famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
          <span className="highlight-text">$12.99</span>
        </div>
      </section>
    </main>
  );
}

export default Main
