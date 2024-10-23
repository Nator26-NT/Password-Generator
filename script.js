const passwordBox = document.getElementById("password");

const lenght = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmopqrsvuvwxyz";
const Number = "0123456789";
const Symbol = "~!@#$%^&*()_+{}|:<>,.";
const AllChar = UpperCase + LowerCase + Number + Symbol;

function CreatePassword(){
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)]
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)]
    password += Number[Math.floor(Math.random() * Number.length)]
    password += Symbol[Math.floor(Math.random() * Symbol.length)]
while (lenght > password.length){
  password +=  AllChar[Math.floor(Math.random() * AllChar.length)]
}
  passwordBox.value = password;
}
function Copy(){
  passwordBox.select();
  document.execCommand("copy");
}





