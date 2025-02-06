import React from 'react';

interface BirthdayProps {
  name: string;
}

const BirthdayWishes: React.FC<BirthdayProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-400 text-gray-800 font-sans text-center">
      <h1 className="text-5xl font-extrabold text-orange-600">Happy Birthday, {name} Singh!</h1>
      <p className="text-xl mt-4">Wishing you a fantastic year ahead!</p>
    </div>
  );
};

export default function App() {
  return <BirthdayWishes name="Harkirat Singh" />;
}
