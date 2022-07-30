import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
}

const FormField = ({ label, id, name }: FormFieldProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="text" />
    </div>
  );
};

export default FormField;
