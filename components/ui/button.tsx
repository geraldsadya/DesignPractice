import React from "react";

type ButtonProps = {//custom data structure that says "my button has these properties"
  children: React.ReactNode;      //anything inside <Button>...</Button>
  onClick?: () => void;           
};

//the actual Button component
export function Button({ children, onClick }: ButtonProps) {//create function and extract the properties it recieves
  return (
    <button
      onClick={onClick} //when the button is clicked, call the onClick function
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"// this is just to style the button
    >
      {children}
    </button>
  );
}
