console.log("train js file ishga tushdi");
// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

// function counterLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(counterLetter("e", "engineer"));

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


// function counterLetter(word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if ('0123456789'.includes(word[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(counterLetter("e49727dhw32u")); 




// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;


function checkLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
        if (!letter.includes(word[i])) {
           return false;
        }
    }
    return true;
}

console.log(checkLetter("mit15sila", "l15tisima" )); 

