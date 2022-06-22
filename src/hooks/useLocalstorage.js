const useLocalstorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const getLSValue = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  const setLSValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
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
