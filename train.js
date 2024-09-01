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


// function checkLetter(word, letter) {
//     for (let i = 0; i < word.length; i++) {
//         if (!letter.includes(word[i])) {
//            return false;
//         }
//     }
//     return true;
// }

// console.log(checkLetter("mit15sila", "l15tisima" )); 


/*
D-TASK: 

Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

// const moment = require("moment");

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.inventory = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         };
//     }


//     qoldiq() {
//         const currentTime = moment().format("HH:mm:ss");
//         console.log(`Hozir ${currentTime}da ${this.inventory.non}ta non, ${this.inventory.lagmon}ta lagmon va ${this.inventory.cola}ta cola mavjud!`);
//     }

//     sotish(product, quantity) {
//         if (this.inventory[product] !== undefined) {
//             if (this.inventory[product] >= quantity) {
//                 this.inventory[product] -= quantity;
//                 const currentTime = moment().format("HH:mm:ss");
//                 console.log(`${currentTime}da ${quantity}ta ${product} sotildi.`);
//             } else {
//                 console.log(`Yeterli ${product} mavjud emas.`);
//             }
//         } else {
//             console.log(`Bunday mahsulot mavjud emas.`);
//         }
//     }

//     qabul(product, quantity) {
//         if (this.inventory[product] !== undefined) {
//             this.inventory[product] += quantity;
//             const currentTime = moment().format("HH:mm:ss");
//             console.log(`${currentTime}da ${quantity}ta ${product} qabul qilindi.`);
//         } else {
//             console.log(`Bunday mahsulot mavjud emas.`);
//         }
//     }
// }


// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); 
// shop.sotish('non', 3); 
// shop.qabul('cola', 4); 
// shop.qoldiq(); 


// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


// function stringReverser(word) {
//     const reversed = word.split('').reverse().join('');
//     console.log(reversed);
// }

// stringReverser("hello");

/*
F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi

*/


function findDoublers(word) {
    for (let i = 0; i < word.length; i++) {

        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return true; 
            }
        }
    }
    return false; 
}


console.log(findDoublers("hello"));  