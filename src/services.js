export function getCards() {
  return fetch("/cards").then(res => res.json());
}

export function postCard(data) {
  return fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
