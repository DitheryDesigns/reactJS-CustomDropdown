# CustomDropdown React Component

## Overview

The `CustomDropdown` component is a flexible and customizable dropdown menu for React applications. It takes an array of text options and provides a dropdown interface for selecting one of those options.

## Features

- **Open/Close Toggle**: Opens and closes on button click.
- **Dynamic Options**: Accepts an array of text options that will be displayed in the dropdown menu.
- **Event Handling**: Calls a custom function (`onSelect`) whenever an option is selected.

## Installation

1. Download both `CustomDropdown.js` and its associated `CustomDropdown.css` files.
2. Place them into your project's appropriate directory.

## Usage

```jsx
import CustomDropdown from './path/to/CustomDropdown';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (selectedOption) => {
    console.log(`You selected ${selectedOption}`);
  };

  return (
    <div>
      <CustomDropdown options={options} onSelect={handleSelect} />
    </div>
  );
}
```

## Props

- `options` (Array): An array of text strings to be used as options in the dropdown.
- `onSelect` (Function): A function to be called whenever an option is selected.

## License

MIT License
