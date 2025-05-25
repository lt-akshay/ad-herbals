import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-green-700 pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-green-100 mt-2 max-w-2xl">
            Learn how AD Herbals collects, uses, and protects your information when you use our services.
          </p>
        </div>
      </div>

      {/* Policy Content Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information you provide to us such as your name, email, phone number, and address when you place an order or contact us. We also collect usage data through cookies and other tracking technologies.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            Your data is used to process orders, improve our services, provide customer support, and send promotional communications if you have opted in. We do not sell or rent your personal data to third parties.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications at any time.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
            <a href="mailto:support@adherbals.in" className="text-green-700 underline">support@adherbals.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
