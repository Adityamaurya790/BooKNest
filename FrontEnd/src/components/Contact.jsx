import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 md:mt-20 text-center">
        <h2 className="text-4xl md:text-4xl py-5 font-bold dark:text-white">
          Feel Free To Contact
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109105.13533645475!2d75.55760760024516!3d31.288941902074896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1714145282710!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mx-auto mt-10">
        <div className="w-full md:w-1/2 mx-auto border p-6 rounded-lg">
          <form action="#" method="POST">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="block my-2 p-2 border rounded-md w-full"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="block my-2 p-2 border rounded-md w-full"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="Message"
              className="block my-2 p-2 border rounded-md w-full"
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-pink-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer hover:bg-pink-600"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
