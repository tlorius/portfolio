"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};
const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
      <h1 className="text-center">Contact Me!</h1>
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Name{" "}
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="border border-solid border-black"
          />
        </label>
        <label>
          Email{" "}
          <input
            type="email"
            placeholder="example@domain.com"
            {...register("email", { required: true })}
            className="border border-solid border-black"
          />
        </label>
        <label>
          Message{" "}
          <textarea
            cols={40}
            rows={5}
            placeholder="Enter your message"
            {...register("message", { required: true })}
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
};

export default Contact;