import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormField } from '../../Interfaces/FormProps';



const renderField = (field: FormField, onFieldChange: (name: string, value: any) => void) => {
  const { type, label, name, value, options, required } = field;

  switch (type) {
    case 'text':
      return (
        <TextField
          label={label}
          name={name}
          value={value as string | undefined}
          required={required}
          onChange={(e) => onFieldChange(name, e.target.value)}
        />
      );
    case 'textarea':
      return (
        <TextField
          label={label}
          name={name}
          multiline
          rows={4}
          value={value as string | undefined}
          required={required}
          onChange={(e) => onFieldChange(name, e.target.value)}
        />
      );
    case 'checkbox':
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value}
              onChange={(e) => onFieldChange(name, e.target.checked)}
            />
          }
          label={label}
        />
      );
    case 'radio':
      return (
        <RadioGroup
          name={name}
          value={value as string | undefined}
          onChange={(e) => onFieldChange(name, e.target.value)}
        >
          {options?.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      );
    case 'select':
      return (
        <Select
          label={label}
          name={name}
          value={value as string | undefined}
          required={required}
          onChange={(e) => onFieldChange(name, e.target.value)}
        >
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      );
    default:
      return null;
  }
};

export default renderField;
