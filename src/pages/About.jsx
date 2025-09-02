import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Profile Image + Name */}
        <div className="md:w-1/3 bg-gradient-to-b from-indigo-500 to-purple-700 flex flex-col items-center justify-center p-6">
          <img
            src="images/gagann.jpg" // Replace with your actual image path
            alt="Gagan Adiwal"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h2 className="text-white text-2xl font-bold mt-4">Gagan Adiwal</h2>
          <p className="text-purple-100 text-center mt-2">
            Web & App Developer | AI Tools Enthusiast
          </p>
        </div>

        {/* Right Side: About Content */}
        <div className="md:w-2/3 p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            About Me
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hello! I’m <strong>Gagan Adiwal</strong>, a passionate{" "}
            <strong>Web Developer</strong> and <strong>App Developer</strong>{" "}
            who loves turning ideas into impactful digital solutions. I specialize
            in <strong>React.js, Node.js, and Python (basics)</strong> for modern
            web applications, as well as <strong>Java & XML</strong> for Android
            app development.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            My journey started with building responsive websites and Android apps,
            and today I’m exploring the future of{" "}
            <strong>AI tools & chatbot development</strong>. I enjoy solving
            problems with clean code, intuitive design, and user-friendly
            experiences that make technology accessible for everyone.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Beyond coding, I’m continuously learning and experimenting with
            emerging technologies to stay ahead in the digital era. Whether it’s
            a web platform, a mobile app, or AI-powered solutions, I aim to create
            products that inspire and help people achieve more.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This portfolio is a showcase of my work, skills, and projects.
            I’d love to collaborate, innovate, and build something extraordinary
            together 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
