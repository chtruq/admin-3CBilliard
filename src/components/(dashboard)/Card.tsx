import React from 'react';

interface CardProps {
  title: string;
  amount: string | number;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  iconColor: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, amount, icon, bgColor, textColor, iconColor, onClick }) => {
  return (
    <div className={`py-4 px-6 border rounded-2xl ${bgColor}`} onClick={onClick}>
      <div className="flex justify-between">
        <p className={`text-xl font-medium ${textColor}`}>{title}</p>
        {icon}
      </div>
      <p className={`text-3xl pt-4 ${textColor}`}>{amount}</p>
    </div>
  );
};

export default Card;