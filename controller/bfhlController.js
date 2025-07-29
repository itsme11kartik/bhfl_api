const ResponseModel = require("../models/responseModel");

const FULL_NAME = "kartik_sharma";
const DOB = "29072005";
const EMAIL = "your_email@example.com";
const ROLL_NUMBER = "CH12345";

const alternateCapsReverse = (letters) => {
  let str = letters.reverse().join("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return result;
};

const processData = (req, res) => {
  try {
    const inputData = req.body.data;

    if (!Array.isArray(inputData)) {
      return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    const lettersForConcat = [];
    let sum = 0;

    inputData.forEach((item) => {
      const str = String(item);
      if (/^-?\d+$/.test(str)) {
        const num = parseInt(str);
        sum += num;
        (num % 2 === 0 ? evenNumbers : oddNumbers).push(str);
      } else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
        lettersForConcat.push(...str.split(""));
      } else {
        specialCharacters.push(str);
      }
    });

    const concatString = alternateCapsReverse(lettersForConcat);

    const response = new ResponseModel({
      fullName: FULL_NAME,
      dob: DOB,
      email: EMAIL,
      rollNumber: ROLL_NUMBER,
      oddNumbers,
      evenNumbers,
      alphabets,
      specialCharacters,
      sum,
      concatString,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
};

module.exports = { processData };
