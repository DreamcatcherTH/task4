let money, time;

function start() {
    money = +prompt('бюджет?', '');
    time = prompt('Введите дату в формате ДД.ММ.ГГГГ', '');

    while (isNaN(money) || money =="" || money == null) {
        money = +prompt('бюджет?', '');
    }
}

start();

let appData = {moneyData: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    savings: true };

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            b = prompt('Во сколько обойдется?', '');
            
        if ( (typeof(a))=== 'string' &&  (typeof(a)) != null && (typeof(b)) != null &&  a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('bad result');
            i--;
        }
        i++;
    }
}

appData.moneyPerDay = (appData.moneyData / 30).toFixed();

alert('Ежедневный бюджет: ' +appData.moneyPerDay);

/*let i=0;
while (i < 2){
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        b = prompt('Во сколько обойдется?', '');
        
    if ( (typeof(a))=== 'string' &&  (typeof(a)) != null && (typeof(b)) != null &&  a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    }else {
        console.log('bad result');
        i--;
    }
    i++;
}*/


/*let i=0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    b = prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a))=== 'string' &&  (typeof(a)) != null && (typeof(b)) != null &&  a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    }else {
        console.log('bad result');
        i--;
    }
    i++;
}
while (i < 2);*/

function detectLevel() {
    if (appData.moneyPerDay < 100){
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Средний уровень достатка');
    } else if ( appData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма накопления?"),
        percent = +prompt("Процент?");

        appData.MonthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.MonthIncome);
   }
}
checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData/30).toFixed();
    alert ("Дневной бюджет: " + appData.moneyPerDay + "руб");
}
detectDayBudget();

function chooseOptExpenses() {
    for (let i=0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();