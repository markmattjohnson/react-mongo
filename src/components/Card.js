import React from "react";
import Tag from "./Tag";

export default function Card({ title, description, tags }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </section>
  );
}
