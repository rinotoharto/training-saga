var CryptoJS = require("crypto-js");

export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(data, "secretKey").toString();
  return ciphertext;
};

export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, "secretKey");
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const encryptArrayData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "secretKey"
  ).toString();
  return ciphertext;
};

export const decryptArrayData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, "secretKey");
  const originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return originalText;
};
