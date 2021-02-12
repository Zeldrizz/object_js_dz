
function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        }, 
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]
    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}
const obj = receipt();
let answer, result, s = 0;

console.log('Заказ');

for (const key in obj) {
    console.log('Вы заказали: ' + key);
   for (const keyid in obj[key]) {
       console.log('А именно: ' + obj[key]['info']);
       console.log('На сумму: ' + obj[key]['price'] + ' сум');
       answer = obj[key]['price'];
   }
    s += answer;
    var delivery = 9000;
    result = s + delivery;
}

console.log('Общая сумма с доставкой(9000) ' + result);