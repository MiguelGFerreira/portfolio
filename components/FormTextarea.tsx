import { TextareaHTMLAttributes } from 'react';

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ label, ...textareaProps }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={textareaProps.id}>
        {label}
      </label>
      <textarea
        {...textareaProps}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormTextArea;
