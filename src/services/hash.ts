import * as CryptoTS from "crypto-ts";

// Encrypt
export const encrypt = (password: string = "") => {
  return CryptoTS.enc.Hex.stringify(CryptoTS.enc.Utf8.parse(password));
};

// Decrypt
export const decrypt = (data: string = "") => {
  return CryptoTS.enc.Hex.parse(data).toString(CryptoTS.enc.Utf8);
};
