import ExpandableContainer from './expandableContainer/ExpandableContainer';
import TextUpdater, { TextUpdaterProps } from './TextUpdater';

interface ExpandableTextUpdaterProps extends TextUpdaterProps {
  title: string;
  isExpandable?: boolean;
}

function ExpandableTextUpdater({
  content,
  onSave,
  isLoading,
  placeholder,
  classNameEdit,
  classNameDisplay,
  title,
  editable,
  isExpandable = true,
}:ExpandableTextUpdaterProps) {
  return (
    <ExpandableContainer title={title} className="p-1" isExpandable={isExpandable}>
      <TextUpdater
        content={content}
        onSave={onSave}
        isLoading={isLoading}
        placeholder={placeholder}
        classNameEdit={classNameEdit}
        classNameDisplay={classNameDisplay}
        editable={editable}
      />
    </ExpandableContainer>
  );
}

export default ExpandableTextUpdater;
