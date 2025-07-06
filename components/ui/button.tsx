import React from "react";
import { clsx } from "clsx";//clsx is a utility for constructing className strings conditionally
import { twMerge } from "tailwind-merge";//tailwind-merge is a utility for merging Tailwind CSS class names, ensuring that conflicting classes are resolved correctly


type ButtonProps = {//custom data structure that says "my button has these properties"
  children: React.ReactNode;      //anything inside <Button>...</Button>
  onClick?: () => void; 
  className?: string;          
};

//the actual Button component
export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        clsx("bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition", className)//this is just to style the button with Tailwind CSS classes
      )}
    >
      {children}
    </button>
  );
}
