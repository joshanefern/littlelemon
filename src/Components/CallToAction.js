import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
    return (
      <section className="call-to-action">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="button">Reserve a Table</Link>
      </section>
    );
  }
export default CallToAction;