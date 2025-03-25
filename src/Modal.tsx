import { ReactElement, ReactNode } from 'react';
import ReactModal from 'react-modal';
import { ZeroFuncType } from 'src/util';
import CloseIcon from './CloseIcon';
import Row from './Row';

interface ModalProps {
  isOpen: boolean;
  onClose: ZeroFuncType;
  title: string | ReactElement;
  content: ReactNode;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  isCloseIconHidden?: boolean;
  style?: ModalStyleProps;
}

interface ModalStyleOverlayProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  backgroundColor?: string;
}

interface ModalStyleContentProps {
  top?: string;
  left?: string;
  transform?: string;
  border?: string;
  background?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  padding?: string;
  overflow?: string;
}

export interface ModalStyleProps {
  overlay?: ModalStyleOverlayProps;
  content?: ModalStyleContentProps;
}

const defaultStyle = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  content: {
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    borderRadius: '4px',
    width: 'fit-content',
    height: 'fit-content',
    boxShadow: '3px 3px 2px grey',
    padding: '10px 15px',
    overflow: 'visible',
  },
};

const mergeModalStyles = (style: ModalStyleProps) => {
  if (!style) return defaultStyle;
  return {
    overlay: {
      ...defaultStyle.overlay,
      ...style.overlay,
    },
    content: {
      ...defaultStyle.content,
      ...style.content,
    },
  };
};

ReactModal.setAppElement('#root');

function Modal({
  isOpen,
  onClose,
  title,
  content,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  isCloseIconHidden = false,
  style = undefined,
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={mergeModalStyles(style!)}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onClose}
    >
      <Row className="justify-between items-center w-full h-fit border-b border-gray-333 border-dashed pb-2 mb-2">
        <h1 className="text-gray-666">{title}</h1>
        {!isCloseIconHidden && (
          <CloseIcon
            className="right-1 text-gray-666"
            onClick={onClose}
          />
        )}
      </Row>
      {content}
    </ReactModal>
  );
}

export default Modal;
