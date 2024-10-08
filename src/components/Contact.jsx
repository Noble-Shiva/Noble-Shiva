import React from 'react';

function Contact() {
  return (
    <section className="mb-12" id="contact">
      <h2 className="text-2xl font-bold mb-6">Contact me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p>l.shivkumarreddy@gmail.com</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p>+91 9036360233</p>
        </div>
      </div>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-gray-800 p-2 rounded"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-gray-800 p-2 rounded"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full bg-gray-800 p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Send →
        </button>
      </form>
    </section>
  );
}

export default Contact;
