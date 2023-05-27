export default {
    subOptimal: function () {
        // оптимізуйте код нижче таким чином, щоб уникнути дублювання завдяки використання функції reverseString
        // будь-ласка, вносіть зміни тільки в межах, позначених лініями
        // !! ВАЖЛИВО: Виклик reverseString здійснюйте за допомогою this: this.reverseString

        const strings = ['abcd', 'karamba', 'racecar'];

        // ========== Початок зони редагування ==============

        const reversedStrings = [];
          
        strings.forEach(element => reversedStrings.push(this.reverseString(element)))   
        

        return reversedStrings;

        // ========== Кінець зони редагування ===============
    },

    reverseString: function (str) {
        return str.split('').reverse().join('');
    }
};



