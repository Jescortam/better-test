import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required: boolean;
}

const FormField = ({
  label,
  name,
  type = 'text',
  required,
}: FormFieldProps): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input {...{ name, type, required }} />
      </label>
    </div>
  );
};

export default FormField;
