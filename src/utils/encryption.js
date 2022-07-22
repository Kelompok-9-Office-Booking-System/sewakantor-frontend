import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, "sewakantor").toString();
};

export const decryptData = (data) => {
  return CryptoJS.AES.decrypt(data, "sewakantor").toString(CryptoJS.enc.Utf8);
};
