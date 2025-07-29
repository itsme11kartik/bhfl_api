class ResponseModel {
  constructor({
    fullName,
    dob,
    email,
    rollNumber,
    oddNumbers,
    evenNumbers,
    alphabets,
    specialCharacters,
    sum,
    concatString,
  }) {
    this.is_success = true;
    this.user_id = `${fullName.toLowerCase()}_${dob}`;
    this.email = email;
    this.roll_number = rollNumber;
    this.odd_numbers = oddNumbers;
    this.even_numbers = evenNumbers;
    this.alphabets = alphabets;
    this.special_characters = specialCharacters;
    this.sum = String(sum);
    this.concat_string = concatString;
  }
}

module.exports = ResponseModel;
