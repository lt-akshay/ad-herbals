import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-green-700 pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-green-100 mt-2 max-w-2xl">
            We'd love to hear from you. Fill out the form below or reach us directly via email or phone.
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <section className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
                  <p className="text-gray-600">Mehrauli, New Delhi</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 953-66-555-66</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@adherbals.in</p>
                  <p className="text-gray-600">adherbals22@gmail.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
