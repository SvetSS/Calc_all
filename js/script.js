'use strict'
/*const appData = {

    title: '',
    screens: '',
    adaptive: true,
    fullPrice: 0,
    service1: 0,
    service2: 0,
    allServicePrices: 0,
    screenPrice: 0,
    getTitle: function (name) {
        return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
    },

    asks: function () {
        //appData.title=prompt('Как называется ваш проект?','Расчёт');
        do {
            appData.title = prompt('Как называется ваш проект? Ответ не должен содержать только цифры', 'Расчёт');
        }
        while (appData.isNumber(appData.title))

        do {
            appData.screens = prompt('Какие типы экранов нужно разработать?', 'Выберите: Простые, Сложные, Интерактивные');
        }
        while (appData.isNumber(appData.screens))

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        appData.getTitle(appData.title);

    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getAnswerNum: function () {
        let Price;
        do {
            Price = prompt('Сколько будет стоить данная работа? Ответ выразите в цифрах');
        }
        while (!appData.isNumber(Price))
        return Number(Price);
    },
    showTypeOf: function (element) {
        return typeof (element);
    },
    getRollbackPercent: function (getFullPriceOfAll) {
        if (getFullPriceOfAll >= 30000) {
            return getFullPriceOfAll / 100 * 10;
        }
        else if (getFullPriceOfAll >= 15000 && appData.fullPrice < 30000) {
            return getFullPriceOfAll / 100 * 5;
        }
        else if (getFullPriceOfAll >= 0 && appData.fullPrice < 15000) {
            return getFullPriceOfAll = 0;
        }
    },

    getServicePercentPrices: function (getFullPriceOfAll, RollbackPercent) {
        const servicePercentPrice = Number(getFullPriceOfAll) - Number(RollbackPercent);
        return servicePercentPrice;
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                do {
                    appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
                }
                while (appData.isNumber(appData.service1))

            } else if (i === 1) {
                do {
                    appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
                }
                while (appData.isNumber(appData.service2))
            }
            do {
                sum = Number(prompt('Сколько будет стоить данная работа? Ответ выразите в цифрах'));
            }
            while (!appData.isNumber(sum))
            sum += +sum;
        }
        return sum;
    },
    getFullPrice: function (priceScreen, getAllPrices) {
        const fullPrice = Number(priceScreen) + Number(getAllPrices);
        return fullPrice;
    },
    logger: function () {
        console.log(appData.screenPrice);
        console.log(appData.screens);
        console.log(appData.fullPrice);
        console.log(appData.allServicePrices);
        console.log(appData.getRollbackPercent(appData.fullPrice));
        console.log(appData.getTitle(appData.title));
        console.log(appData.getServicePercentPrices(appData.fullPrice, appData.getRollbackPercent(appData.fullPrice)));
        for (let key in appData) {
            console.log('ключ: ' + key + '' + ' значение: ' + appData[key]);
        }
    },
    start: function () {
        appData.asks();
        appData.screenPrice = appData.getAnswerNum();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
        appData.logger();
    }

}

appData.start();*/

//1 les09
const listH = document.getElementsByTagName('h1');
const titleH = listH.item(0).innerHTML;

//2 les09
const listBtn = document.getElementsByClassName('handler_btn');
let listBtnEl0 = listBtn[0];
let listBtnEl1 = listBtn[1];
//3
const btnPlus = document.querySelector('.screen-btn');
//4
const percentList = Array.from(document.querySelectorAll('.other-items.percent'));
const numbertList = Array.from(document.querySelectorAll('.other-items.number'));
//5
const inputType = document.querySelector('.rollback input[type=range]');
//6
const spanType = document.querySelector('.rollback .range-value');
//7
const totalInput = document.getElementsByClassName('total-input');
let totalInputEl0 = totalInput[0];
let totalInputEl1 = totalInput[1];
let totalInputEl2 = totalInput[2];
let totalInputEl3 = totalInput[3];
let totalInputEl4 = totalInput[4];
//8
let listScreen = document.querySelectorAll('.screen');

console.log(listScreen);
console.log(totalInputEl1);
console.log(totalInputEl2);
console.log(totalInputEl3);
console.log(listBtnEl0);
console.log(listBtnEl1);
console.log(inputType);
console.log(spanType);
console.log(titleH);
console.log(listBtn);
console.log(btnPlus);
console.log(percentList);
console.log(numbertList);
