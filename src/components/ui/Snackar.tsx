import React from 'react';

function Snackbar({ message, show }) {
  return (
    <div
      className={`fixed bottom-4 right-4 p-4 bg-gray-800 text-white border border-teal-600 rounded transition-transform ${
        show ? 'transform translate-y-0' : 'hidden'
      }`}
    >
      {message}
    </div>
  );
}

export default Snackbar;
