import React from "react";

export default function Form({ onFormSubmit }) {
  function splitToArray(tagString) {
    return tagString.split(",").map(tag => tag.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onFormSubmit({
      title: form.title.value,
      description: form.description.value,
      tags: splitToArray(form.tags.value)
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Title
        <input name="title" placeholder="title" type="text" />
      </label>
      <label className="form__label">
        Description
        <input name="description" placeholder="description" type="text" />
      </label>
      <label className="form__label">
        Tags
        <input name="tags" placeholder="tags" type="text" />
      </label>
      <button>Create card</button>
    </form>
  );
}
