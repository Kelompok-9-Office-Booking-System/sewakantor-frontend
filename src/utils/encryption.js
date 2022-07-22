import CryptoJs from "crypto-js";

const ENCRYPT_KEY = import.meta.env.VITE_ENCRYPT_KEY;

export const encrypt = (text) => {
  let string = "";
  if (typeof text === "string") {
    string = text;
  } else {
    string = JSON.stringify(text);
  }
  return CryptoJs.AES.encrypt(string, ENCRYPT_KEY).toString();
};

export const decrypt = (text) => {
  let string = CryptoJs.AES.decrypt(text, ENCRYPT_KEY).toString(
    CryptoJs.enc.Utf8
  );
  if (string.charAt(string.length - 1) === "}") {
    return JSON.parse(string);
  } else {
    return string;
  }
};
