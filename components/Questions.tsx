"use client";

import { useState, useEffect } from "react";

// Predefined Questions for AI Assistant
const questions = [
  "Hi there! I'm your AI assistant. How can I help streamline your operations today?",
  "I specialize in automating repetitive tasks to save you time and resources.",
  "Let me help you uncover insights from your data with advanced analytics.",
  "Interested in boosting productivity? I can integrate AI into your workflows.",
  "Need help with decision-making? I provide real-time recommendations.",
  "Let's explore how AI can transform your customer experience.",
];

export default function InputField() {
  // State Variables for Typing Effect
  const [currentText, setCurrentText] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing Speed Configuration
  const typingSpeed = isDeleting ? 50 : 100;

  // Typing Effect Logic using useEffect
  useEffect(() => {
    const interval = setTimeout(() => {
      const currentQuestion = questions[questionIndex];

      // Typing Effect
      if (!isDeleting) {
        if (charIndex < currentQuestion.length) {
          setCurrentText(currentQuestion.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } 
      // Deleting Effect
      else {
        if (charIndex > 0) {
          setCurrentText(currentQuestion.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setQuestionIndex((prev) => (prev + 1) % questions.length);
        }
      }
    }, typingSpeed);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(interval);
  }, [charIndex, isDeleting, questionIndex, typingSpeed]);

  return (
    <div className="lg:w-[140%] lg:-ml-[70px] mx-auto bg-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm border border-purple-500/20">
      {/* AI Agent's Message Box */}
      <div className="flex items-start space-x-4">
        {/* AI Agent Avatar with Gradient Background */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot w-6 h-6"
          >
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
        </div>
        {/* Displaying the Typing Effect */}
        <div className="flex-1 text-left">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-gray-300">
              {currentText}
              <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
