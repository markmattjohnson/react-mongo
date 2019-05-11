import React, { Component } from "react";
import { getCards, postCard } from "../services";
import CardList from "./CardList";
import Form from "./Form";

export default class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards() {
    getCards()
      .then(data =>
        this.setState({ cards: data }, () => console.log(this.state))
      )
      .catch(error => console.log(error));
  }

  createCard(data) {
    const { cards } = this.state;

    postCard(data)
      .then(newCard => this.setState({ cards: [newCard, ...cards] }))
      .catch(error => console.log(error));
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onFormSubmit={data => this.createCard(data)} />
        <CardList cards={cards} />
      </main>
    );
  }
}
