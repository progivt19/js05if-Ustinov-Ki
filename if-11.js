//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
WeekdayName1 = понедельник
WeekdayName2 = вторник
WeekdayName3 = среда
WeekdayName4 = четверг
WeekdayName5 = пятница
WeekdayName6 = суббота
WeekdayName7 = воскресенье

function WeekdayName(n){
    switch (n) {
        case 1:
            alert (WeekdayName1)
        break;
        case 2:
            alert (WeekdayName2)
        break;
        case 3:
            alert (WeekdayName3)
        break;
        case 4:
            alert (WeekdayName4)
        break;
        case 5:
            alert (WeekdayName5)
        break;
        case 6:
            alert (WeekdayName6)
            break;
        case 7:
            lert (WeekdayName7)
        break;
        default:
            alert ('нет такого дня недели')
    }
}

module.exports = WeekdayName;
