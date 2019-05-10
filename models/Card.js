import React from "react";

export default function Card({ title }) {
  return <section className="card">{title}</section>;
}

const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  }
});

module.exports = mongoose.model("Card", cardSchema);
