import { ReactNode, useState } from 'react';
import { Modal, StyledButton } from 'src/components/util';

interface ModalButtonProps {
  label: string;
  content: ReactNode;
}

function ModalButton({ label, content }:ModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledButton
        label={label}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={content}
        title={label}
      />
    </>
  );
}

export default ModalButton;
