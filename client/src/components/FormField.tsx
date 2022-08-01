import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  required: boolean;
}

const FormField = ({
  label,
  id,
  name,
  type = 'text',
  required,
}: FormFieldProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...{ id, name, type, required }} />
    </div>
  );
};

export default FormField;
