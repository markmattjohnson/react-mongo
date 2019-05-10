import React from "react";
import Card from "./Card";

export default function CardList({ cards }) {
  return (
    <section className="card-list">
      {cards.map(card => (
        <Card key={card._id} title={card.title} />
      ))}
    </section>
  );
}
