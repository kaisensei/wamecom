import { useEffect, useState } from 'react';
import {
  FieldValues, FieldErrors, UseFormRegister, UseFormWatch,
} from 'react-hook-form';

interface FileInputProps {
  name: string;
  url: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function FileInput({
  name,
  url,
  register,
  errors,
  watch,
}:FileInputProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const fileInput = watch(name);
  useEffect(() => {
    if (!fileInput || !fileInput.length) return;
    setImageUrl(URL.createObjectURL(fileInput[0]));
  }, [fileInput]);

  return (
    <label htmlFor={name}>
      <img src={imageUrl} alt={name} />
      <input
        id={name}
        type="file"
        accept="image/*"
        hidden
        {...register(name)}
      />
      <p className="pl-3 text-red-600">{errors[name]?.message as string}</p>
    </label>
  );
}

export default FileInput;
