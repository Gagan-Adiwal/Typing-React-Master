import React from "react";

const Term = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to <strong>Typing Master Pro</strong>. By using our services,
          you agree to the following Terms & Conditions. Please read them
          carefully.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Use of Service
        </h2>
        <p className="mb-4">
          Typing Master Pro is designed for educational and personal use only.
          You agree not to misuse or exploit the platform in any unlawful way.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          User Responsibilities
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide accurate information while using our services.</li>
          <li>
            Avoid any actions that may disrupt or damage the functionality of
            the website.
          </li>
          <li>
            Respect intellectual property rights related to Typing Master Pro.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          Typing Master Pro is provided “as-is” without warranties of any kind.
          We are not responsible for any direct, indirect, or incidental damages
          resulting from your use of the platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms & Conditions at any time. Continued use of
          Typing Master Pro after changes indicates your acceptance of the
          updated terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Contact Us
        </h2>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at{" "}
          <a
            href="mailto:support@typingmasterpro.com"
            className="text-indigo-600 underline"
          >
            support@typingmasterpro.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Term;
