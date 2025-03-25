import { useMutation } from '@apollo/client';
import { MUT_UPLOAD_FILE } from 'src/graphql/files/mutations';
import { FieldValues, useForm } from 'react-hook-form';
import AvatarImage from 'src/assets/avatar.png';
import SubmitButton from './SubmitButton';
import FileInput from './FileInput';

function FileUpload() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const [uploadFile] = useMutation(MUT_UPLOAD_FILE, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (data:FieldValues) => {
    const { file } = data;
    if (!file || !file.length) return;
    uploadFile({ variables: { file: file[0] } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post" className="w-fit">
      <FileInput
        name="file"
        url={AvatarImage}
        register={register}
        errors={errors}
        watch={watch}
      />
      <SubmitButton label="Save" className="mt-5" />
    </form>

  );
}

export default FileUpload;
