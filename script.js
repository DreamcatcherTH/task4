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
    savings: true,
    chooseExpenses: function() {
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
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.moneyData/30).toFixed();
        alert ("Ежедневный бюджет: " + appData.moneyPerDay + "руб");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        } else if ( appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Сумма накопления?"),
            percent = +prompt("Процент?");
    
            appData.MonthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.MonthIncome);
       }
    },
    chooseOptExpenses: function() {
        for (let i=0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую )", "");
        if (typeof(items) != "string" || typeof(items) == null || items == "") {
            console.log("Вы ввели некорректные данные");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
            appData.income.forEach( function(itemarr, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemarr);
            });
        }    
    };

    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }

