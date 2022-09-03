//Patterns
//
var urlPattern = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
);
var emailPattern = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class formValidation {
  static isUrlValid = (url) => {
    return !!urlPattern.test(url);
  };
  static isEmailValid = (email) => {
    return !!emailPattern.test(email);
  };
  static isUsernameValid = (username) => {
    return username.length >= 0;
  };
  static isValidPassword = (password) => {
    return password.length >= 8;
  };
}

export default formValidation;
