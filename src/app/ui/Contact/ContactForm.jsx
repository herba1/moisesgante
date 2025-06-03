"use client";
import { useState } from "react";
import { inter } from "@/app/fonts";
import MaskButton from "../MaskButton";
import InputField from "./InputField";
import InputTextArea from "./InputTextArea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // getting form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsSubmitting(false);
  };

  // Your custom styled form here
  return (
    <form onSubmit={handleSubmit} className={`${inter.className} group`}>
      {/* Style however you want */}
      <div className="flex flex-col gap-small items-stretch">
        <div className="flex flex-col gap-small md:flex-row">
          <InputField
            name="name"
            labelText="Name:*"
            placeholder="Enter your name here..."
            type="input"
            autocomplete="name"
            className=" flex-1/2"
          ></InputField>
          <InputField
            className="flex-1/2"
            name="email"
            labelText="Email:*"
            placeholder="Enter your Email here..."
            type="email"
            autocomplete="email"
          ></InputField>
        </div>
        <InputField
          name="subject"
          labelText="Subject*:"
          placeholder="Enter subject here..."
          type="text"
        ></InputField>
        <InputTextArea
          name="message"
          labelText="Message*:"
          placeholder="Message here..."
        ></InputTextArea>
        <MaskButton text="Submit" type="submit"></MaskButton>
      </div>
    </form>
  );
}
