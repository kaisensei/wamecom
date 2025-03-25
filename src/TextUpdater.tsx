import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { twcn, ZeroFuncType } from 'src/util';
import { FormButtons, Textarea } from './form';

export interface TextUpdaterProps {
  content: string;
  // eslint-disable-next-line no-unused-vars
  onSave: (v:string, cancelEdit: ZeroFuncType)=>void;
  isLoading: boolean;
  editable: boolean;
  placeholder?: string;
  classNameEdit?: string;
  classNameDisplay?: string;
}

function TextUpdater({
  content,
  onSave,
  isLoading,
  editable,
  placeholder = 'write something...',
  classNameEdit = '',
  classNameDisplay = '',
}:TextUpdaterProps) {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const cancelEdit = () => setIsEditing(false);
  const onSubmit = (data:FieldValues) => {
    onSave(data.content, cancelEdit);
  };

  return (isEditing && editable) ? (
    <form onSubmit={handleSubmit(onSubmit)} className={twcn('TextUpdater', classNameEdit)}>
      <Textarea
        row={5}
        name="content"
        placeholder={placeholder!}
        errors={errors}
        register={register}
        defaultValue={content}
        disabled={isLoading}
      />
      <FormButtons
        cancelEdit={cancelEdit}
        isLoading={isLoading}
        submitLabel="Save"
      />
    </form>
  ) : (
    <p
      onClick={() => setIsEditing(editable)}
      className={twcn('TextUpdater text-sm bg-gray-50 text-gray-666 p-1 rounded-lg mt-1', classNameDisplay)}
    >
      {content || placeholder}
    </p>
  );
}

export default TextUpdater;
