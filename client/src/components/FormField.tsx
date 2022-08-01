import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
}

const FormField = ({
  label,
  name,
  type = 'text',
}: FormFieldProps): JSX.Element => {
  return (
    <div>
      <label>
        {label}
        <input {...{ name, type }} />
      </label>
    </div>
  );
};

export default FormField;
