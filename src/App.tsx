import React from 'react';
import Autocomplete from './components/AutoComplete/AutoComplete';
import { FormField } from './Interfaces/FormProps';
import ReusableForm from './components/ReusableForm/ReusableForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


// Mock function to fetch autocomplete suggestions
const fetchSuggestions = async (query: string): Promise<string[]> => {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  return suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
};

const App: React.FC = () => {
  // Define fields for the reusable form
  const formFields: FormField[] = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'text',
      required: true,
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['USA', 'Canada', 'UK', 'Australia'],
    },
    {
      label: 'Favorite Fruit',
      name: 'favoriteFruit',
      type: 'text',
    },
  ];

  const handleFormSubmit = (formData: { [key: string]: any }) => {
    console.log('Form submitted:', formData); // Process form data
  };

  return (
    <div>

      {/* Display the Autocomplete component */}
      <h2>Autocomplete Search bar</h2>
      <Autocomplete fetchSuggestions={fetchSuggestions} label="Search for Fruits" />

      <h2>Reusable form</h2>
      <ReusableForm fields={formFields} onSubmit={handleFormSubmit} />

      {/* Display the Registration Form using reusable form */}
      <h2>Online Registration form validations using reusable form</h2>
      <RegistrationForm /> {/* Calling the RegistrationForm component */}
    </div>
  );
};

export default App;
