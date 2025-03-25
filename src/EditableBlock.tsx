import { ElementType, ReactNode, useState } from 'react';
import EditIcon from './EditIcon';
import { ZeroFuncType } from 'src/util';
import CloseIcon from './CloseIcon';
import Column from './Column';
import Row from './Row';

interface EditableBlockProps {
  Edit: ElementType;
  Display: ElementType;
  optionalMenu?: ReactNode;
  title: string | ReactNode;
  defaultValues?: any;
  editable?: boolean;
}

export interface EditableBlockEditProps {
  cancelEdit: ZeroFuncType;
  defaultValues: any;
}

export interface EditableBlockDisplayProps {
  defaultValues: any;
}

function EditableBlock({
  Edit,
  Display,
  title,
  defaultValues = {},
  editable = false,
  optionalMenu = null,
}: EditableBlockProps) {
  const [isEditting, setIsEditting] = useState(false);
  const cancelEdit = () => setIsEditting(false);
  if (!editable) {
    return (
      <Column className={`EditableBlock-${title} bg-white rounded-lg px-2 py-1 mb-2`}>
        <Row className="justify-between">
          <div className="p-1 text-lg text-blue-500">{title}</div>
          {optionalMenu}
        </Row>
        <Display defaultValues={{ ...defaultValues, editable }} />
      </Column>
    );
  }
  return (
    <div className={`EditableBlock-${title} bg-white rounded-lg px-2 py-1 mb-2`}>
      <div className="text-lg text-blue-500 flex justify-between items-center w-9/10">
        <div>{title}</div>
        <CloseIcon hidden={!isEditting} onClick={cancelEdit} />
        <EditIcon hidden={isEditting} onClick={() => setIsEditting(true)} />
      </div>
      {isEditting
        ? <Edit cancelEdit={cancelEdit} defaultValues={defaultValues} />
        : <Display defaultValues={{ ...defaultValues, editable }} />}
    </div>
  );
}

export default EditableBlock;
