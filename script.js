// 8.7
// export default {
//     subOptimal: function () {
//         // оптимізуйте код нижче таким чином, щоб уникнути дублювання завдяки використання функції reverseString
//         // будь-ласка, вносіть зміни тільки в межах, позначених лініями
//         // !! ВАЖЛИВО: Виклик reverseString здійснюйте за допомогою this: this.reverseString

//         const strings = ['abcd', 'karamba', 'racecar'];

//         // ========== Початок зони редагування ==============

//         const reversedStrings = [];
          
//         strings.forEach(element => reversedStrings.push(this.reverseString(element)))   
        

//         return reversedStrings;

//         // ========== Кінець зони редагування ===============
//     },

//     reverseString: function (str) {
//         return str.split('').reverse().join('');
//     }
// };



export const person = {
    name: 'Petro',
    age: 35,
    gender: 'male',
    education: 'university',
    occupation: 'developer',
    isAdmin: true
  };
  
  export const person1 = {
    name: 'Jane',
    age: 37,
    gender: 'female',
    education: 'college',
    occupation: 'designer',
    isAdmin: false
  };
  
  export function processPerson(person) {
    if (person && typeof person === 'object') {
      const genders = {
        male: 'Чоловік',
        female: 'Жінка'
      };
  
      let summary = 'Інформація про особу: \n';
  
      summary += genders[person.gender] || 'Особа невідомої статі';
      summary += ' ' + person.name;
      summary += ' віком ' + person.age + ' роки(-ів)';
      summary += ' має освіту на рівні ' + person.education;
      summary += ' та працює на посаді ' + person.occupation + '.';
  
      if (person.isAdmin) {
        summary += ' Є адміністратором.';
      }
  
      return summary;
    }
  
    throw new Error("Очікується об'єкт");
  }

