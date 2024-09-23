//1.Дана строка "Node.js course". Виведіть в консоль довжину цієї строки.
const text = "Node.js course";
console.log(text.length) //14

//2.Дано число 33. Напишіть функції що приймає на вхід дане число та видає це число помножене на 2 стільки разів, з скількох символів складається число. Підказка: Для числа 33 це 2 рази (число складається із двох символів).

const number = 33;
function getCalculateNumber (number) {
   const symbols = number.toString().length;
   let result = number;
   for (let i = 0; i < symbols; i++) {
      result *= 2;
   }
   return result;
}

console.log(getCalculateNumber(number));