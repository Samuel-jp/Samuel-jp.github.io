import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ children }) {
  const div = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(div);
    return () => modalRoot.removeChild(div);
  }, [div])

  return ReactDOM.createPortal(
    children,
    div,
  )
}

export default Modal;
