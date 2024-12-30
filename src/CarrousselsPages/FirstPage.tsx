import React, { useEffect, useState } from "react";
import "./FirstPage.css";

interface FirstPageProps {
  text: string;
}

const FirstPage: React.FC<FirstPageProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [index, text]);

  return (
    <div className="container">
      <p className="text">{displayedText}</p>
    </div>
  );
};

export default FirstPage;
