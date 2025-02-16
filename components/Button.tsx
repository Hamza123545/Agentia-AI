import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Define the props for the Button component
interface ButtonProps {
  text: string;            // Button text
  primary?: boolean;       // Primary style flag
  gradient?: boolean;      // Gradient style flag
  icon?: ReactNode;        // Optional icon element
  className?: string;      // Additional class names
  onClick?: () => void;    // Click event handler
}

const Button: React.FC<ButtonProps> = ({
  text,
  primary = false,   // Default to non-primary style
  gradient = false,  // Default to no gradient
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        // Base styling for button
        "px-6 py-2 rounded-md transition-all duration-300 flex items-center justify-center gap-2",
        
        // Primary styling when gradient is not applied
        primary && !gradient
          ? "bg-purple-600 hover:bg-purple-700 text-white"
          : "bg-gray-700 hover:bg-gray-800 text-white",
        
        // Gradient styling if enabled
        gradient &&
          "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)]",
        
        className
      )}
      onClick={onClick}
    >
      {/* Display icon if provided */}
      {icon && <span className="w-5 h-5">{icon}</span>}
      
      {/* Display button text */}
      {text}
    </button>
  );
};

export default Button;
