import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At <strong>Typing Master Pro</strong>, your privacy is very important
          to us. This Privacy Policy explains how we collect, use, and protect
          your information when you use our website or services.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Personal Information:</strong> Such as your name or email if
            you contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Typing speed, accuracy, and progress
            data generated during typing tests.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          How We Use Information
        </h2>
        <p className="mb-4">
          We use your information to improve our services, personalize your
          experience, and ensure smooth functionality of Typing Master Pro.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Data Security
        </h2>
        <p className="mb-4">
          We take reasonable precautions to protect your data, but no system is
          100% secure. We encourage you to use Typing Master Pro responsibly.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
          Contact Us
        </h2>
        <p>
          If you have any questions regarding this Privacy Policy, please reach
          out to us at{" "}
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

export default PrivacyPolicy;
