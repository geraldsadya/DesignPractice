import * as React from "react";
import { Slot } from "@radix-ui/react-slot";//importing Slot from Radix UI for creating composable components
import { cva, type VariantProps } from "class-variance-authority";//importing cva for creating class variance authority components
import { cn } from "@/lib/utils";//importing cn function from utils to merge class names

const buttonVariants = cva(//this actually creates a class variance authority component for buttons
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps//changed it to export because we want to use this Button component in other files
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

//now this is confusing but this is how we create a button component that can be used in other files
//it uses React.forwardRef to allow the button to be used as a child of another component
//the `asChild` prop allows the button to be used as a child of another component
//the `className`, `variant`, and `size` props allow the button to be
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }