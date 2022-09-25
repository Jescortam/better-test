export default interface ITextFormField {
  inputProps: {
    id: string;
    name: string;
    value: string;
    type?: string;
  };
  setValue: (value: string) => void;
  required: boolean;
  label: string;
  helper?: string;
}
