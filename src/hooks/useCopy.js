import { useState, useEffect } from 'react';

function useCopy(duration = 1500) {
  const [isCopied, setIsCopied] = useState(false);
  const [ref, setRef] = useState(null);

  function copy(newRef) {
    setIsCopied(true);
    setRef(newRef);
  }

  useEffect(
    () => {
      if (!isCopied) return;

      if (ref) {
        ref.select();
        document.execCommand('copy');
      }

      setTimeout(() => {
        setIsCopied(false);
      }, duration);
    },
    [isCopied],
  );

  return [copy, isCopied];
}

export default useCopy;
