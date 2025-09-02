import React, { useState, useEffect, useRef } from "react";

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is an essential skill in the digital era to improve productivity.",
  "Practice daily to enhance your speed and accuracy in typing tests.",
  "Consistent typing builds muscle memory and boosts confidence.",
  "A good typing speed saves time and increases efficiency at work.",
  "A romantic entanglement was the last thing wanted on a solo trip" ,
  "to Greece. A person from Israel was met on the first" ,
  "night, and it was a whirlwind of late-night talks and shared laughs.",
  " Together, the island was explored, with the connection feeling easy and cinematic" ,
  "as the first kiss was shared on a deserted beach.",
];

const Home = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [time, setTime] = useState(60); // default
  const [wrong, setWrong] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [totalTime, setTotalTime] = useState(60); // user chosen total time
  const inputRef = useRef(null);

  // pick random paragraph on load
  useEffect(() => {
    setText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
  }, []);

  // Timer
  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  }, [isRunning, time]);

  const [typedWords, setTypedWords] = useState(0); // ✅ track completed words

  // WPM Calculation
  useEffect(() => {
    const elapsed = totalTime - time;
    if (elapsed > 0) {
      setWpm(Math.round((typedWords / elapsed) * 60)); // ✅ use typedWords instead of input
    }
  }, [typedWords, time, totalTime]);

  // Detect completed words
  useEffect(() => {
    const inputWords = input.trim().split(" ");
    const textWords = text.trim().split(" ");
    let wrongCount = 0;

    inputWords.forEach((word, index) => {
      if (index < textWords.length && word !== textWords[index] && word !== "") {
        wrongCount++;
      }
    });
    setWrong(wrongCount);

    // ✅ Increment typedWords only when space pressed & word completed
    if (input.endsWith(" ")) {
      setTypedWords((prev) => prev + 1);
    }

    // ✅ if paragraph completed -> load next one
    if (input.trim() === text.trim()) {
      setText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
      setInput("");
    }
  }, [input, text]);

  // Start Test (reset typedWords too)
  const startTest = () => {
    setIsRunning(true);
    setInput("");
    setTime(totalTime);
    setWpm(0);
    setWrong(0);
    setTypedWords(0); // ✅ reset
    setText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    inputRef.current.focus();
  };


  const pauseTest = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  // Highlight text dynamically (only after space when word is complete)
  const renderText = () => {
    const inputWords = input.trim().split(" ");
    const currentWordIndex = input.endsWith(" ") ? inputWords.length : inputWords.length - 1;

    return text.split(" ").map((word, i) => {
      let color = "";

      if (i < currentWordIndex) {
        // ✅ Completed words -> check correctness
        color = inputWords[i] === word ? "text-green-600" : "text-red-600";
      } else if (i === currentWordIndex) {
        // ⏳ Current word -> neutral (no red/green yet)
        color = "text-gray-800";
      }

      return (
        <span key={i} className={`${color}`}>
          {word}{" "}
        </span>
      );
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col">
      {/* Intro Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Welcome to <span className="text-indigo-600">Typing Master Pro</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Boost your typing skills with real-time speed tracking, accuracy
          analysis, and fun challenges. Start practicing now and become a typing
          pro!
        </p>
      </section>

      {/* Typing Test Section */}
      <section className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          {/* Time Selector */}
          {!isRunning && (
            <div className="flex justify-center mb-6 space-x-4">
              {[60, 180, 300].map((t) => (
                <button
                  key={t}
                  onClick={() => setTotalTime(t)}
                  className={`px-4 py-2 rounded-lg ${totalTime === t
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700"
                    }`}
                >
                  {t / 60} min
                </button>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex justify-around mb-6 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">WPM</h2>
              <p className="text-2xl font-bold text-indigo-600">{wpm}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Time</h2>
              <p className="text-2xl font-bold text-indigo-600">{time}s</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Wrong</h2>
              <p className="text-2xl font-bold text-red-600">{wrong}</p>
            </div>
          </div>

          {/* Paragraph */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-lg text-gray-800 leading-relaxed">
            {renderText()}
          </div>

          {/* Typing Box */}
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!isRunning || time === 0}
            placeholder="Start typing here..."
            className="w-full h-32 p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={startTest}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Start Test
            </button>
            <button
              onClick={pauseTest}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition"
            >
              Pause
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
