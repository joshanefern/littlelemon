import React from 'react';

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <h1>About Little Lemon</h1>
        <p>
          At Little Lemon, we bring authentic Mediterranean flavors to your table,
          combining traditional recipes with a modern twist. Founded in 1995, our
          family-owned restaurant has been dedicated to quality ingredients, warm
          hospitality, and an unforgettable dining experience.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We strive to create a welcoming atmosphere where friends and family can
          enjoy delicious meals made with fresh, locally-sourced ingredients.
          Sustainability and customer satisfaction are at the heart of everything
          we do.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Our passionate chefs and friendly staff work tirelessly to deliver
          exceptional service and cuisine. From our kitchen to your plate, quality
          is our promise.
        </p>
      </section>
    </main>
  );
}

export default AboutPage;
