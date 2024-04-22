import React, { useState } from 'react';
import { isValidEmail, isValidPassword } from '../../utils/FieldValidators'; // Import validation functions
import { FormField } from '../../Interfaces/FormProps';
import ReusableForm from '../ReusableForm/ReusableForm';

const RegistrationForm: React.FC = () => {
  const formFields: FormField[] = [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'text', // You can change this to 'password' for masking input
      required: true,
    },
  ];

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validateFields = (formData: { [key: string]: any }) => {
    const newErrors: { [key: string]: string | null } = {};

    // Validate email
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password
    if (!isValidPassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit';
    }

    return newErrors;
  };

  const handleFormSubmit = (formData: { [key: string]: any }) => {
    const fieldErrors = validateFields(formData);

    if (Object.values(fieldErrors).some((error) => error !== null)) {
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log('Form submitted successfully:', formData);
      // Add additional form submission logic here
    }
  };

  return (
    <div>
      <ReusableForm fields={formFields} onSubmit={handleFormSubmit} />
      {/* Display validation errors */}
      {Object.keys(errors).map((key) => (
        errors[key] && (
          <div key={key} style={{ color: 'red' }}>
            {errors[key]}
          </div>
        )
      ))}
    </div>
  );
};

export default RegistrationForm;
