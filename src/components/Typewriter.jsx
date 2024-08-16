import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const texts = [
    "To Support Agents to auto respond and route",
    "For Product Managers to analyze and cluster customer feedback",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const pauseTime = 2000; // Pause time after typing

  useEffect(() => {
    const currentText = texts[index];
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentText.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        } else {
          setText(currentText.substring(0, text.length + 1));
          if (text === currentText) {
            setIsDeleting(true);
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return <span className="font-unica text-xs typewriter">{text}</span>;
};

export default Typewriter;
