import React from 'react';

const HoverLetter = ({ char }: { char: string }) => {
const generateColor = () => `hsl(${Math.floor(Math.random() * 360)}, 90%, 80%)`;
  
  const [color, setColor] = React.useState(generateColor());

  return (
    <span
      onMouseOver={() => setColor(generateColor())}
      style={{ '--hover-color': color } as React.CSSProperties}
      className="hover:uppercase hover:font-extrabold hover:text-[var(--hover-color)] transition duration-2000 hover:duration-50 ease-in-out"
    >
      {char}
    </span>
  );
};

export const ColorText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <HoverLetter key={index} char={char} />
      ))}
    </>
  );
};