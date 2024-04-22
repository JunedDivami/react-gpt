import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormProps, FormField } from '../../Interfaces/FormProps'; // Importing the interfaces defined earlier
import renderField from '../RenderField/RenderField';

const ReusableForm: React.FC<FormProps> = ({ fields, onSubmit }) => {
    
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleFieldChange = (name: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>{renderField(field, handleFieldChange)}</div>
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ReusableForm;
