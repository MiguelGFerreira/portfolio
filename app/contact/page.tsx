'use client';

import FormInput from '@/components/FormInput';
import FormTextArea from '@/components/FormTextarea';
import { useForm, ValidationError } from '@formspree/react';

export default function About() {
  const [state, handleSubmit] = useForm("xvoegnbe");
  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 sm:p-8">
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 mx-auto">
          <p>Thank You!</p>
          <p>I'll reach out to you ASAP!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 sm:p-8">
      <p className="text-2xl sm:text-2xl font-semibold mb-4">Contact</p>
      <p className="text-lg sm:text-lg mb-4">
        If you are interested in working with me on a project or collaborating, please contact me.
      </p>
      <p className="mb-2 sm:mb-4">Or send an e-mail to <a href="mailto:miguel.gfe@outlook.com" className="text-blue-500">miguel.gfe@outlook.com</a></p>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-4 sm:p-8 mt-8 rounded shadow-md"
      >
        <FormInput
          label="Name *"
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <FormInput
          label="Email *"
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <FormTextArea
          label="Message *"
          id="message"
          name="message"
          rows={4}
          placeholder="Your message..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}