const useLocalstorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const getLSValue = (key) => {
    return localStorage.getItem(key);
  };
  const setLSValue = (key, value) => {
    localStorage.setItem(key, value);
  };
  const removeLSValue = (key) => {
    localStorage.removeItem(key);
  };
  return {
    getLSValue,
    setLSValue,
    removeLSValue,
  };
};

export default useLocalstorage;
