import React, { useState } from 'react'; // Import React and useState hook
import './styles/CustomDropdown.css'; // Import the CSS for styling

// Define the CustomDropdown functional component
const CustomDropdown = ({ options, onSelect }) => {
  // Declare state to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the selection of an option
  const toggleSelect = (option) => {
    onSelect(option); // Call the passed-in onSelect function with the selected option
    setIsOpen(!isOpen); // Toggle the dropdown open/closed state
  }

  return (
    <div className="customDropdown">
      {/* Button to open or close the dropdown */}
      <button className="customDropdown-button" onClick={() => setIsOpen(!isOpen)}>
        Select an Option
      </button>

      {/* Conditional rendering of the dropdown menu */}
      {isOpen && (
        <div className="customDropdown-menu">
          {/* Map over the 'options' array to create a dropdown item for each */}
          {options.map((option, index) => (
            <div key={index} className="customDropdown-item" onClick={() => toggleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown; // Export the component for use in other parts of the application
