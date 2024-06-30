import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded z-50">
      {message}
    </div>,
    document.body
  );
};

export default Popup;
