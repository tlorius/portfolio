"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, message });
  };
  return (
    <>
      <h1 className="text-center">Contact Me!</h1>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-solid border-black"
          />
        </label>
        <label>
          Message
          <textarea
            cols={40}
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border border-solid border-black"
          ></textarea>
        </label>
        <input
          type="submit"
          value="Send Message"
          className="border border-solid border-black w-fit"
        />
      </form>
    </>
  );
}
