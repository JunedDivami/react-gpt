// src/components/FormTypes.ts

// Type for form field types
export type FieldType = 'text' | 'textarea' | 'checkbox' | 'radio' | 'select';

// Interface for individual form fields
export interface FormField {
  label: string;  // Display label for the field
  name: string;   // Name attribute for the field
  type: FieldType;  // Type of field
  options?: string[];  // For select or radio fields
  value?: string | boolean;  // Default or current value
  required?: boolean;  // If the field is required
  onChange?: (value: any) => void;  // Custom change handler
}

// Interface for form component props
export interface FormProps {
  fields: FormField[];  // Array of form fields
  onSubmit: (formData: { [key: string]: any }) => void;  // Submission handler
}
