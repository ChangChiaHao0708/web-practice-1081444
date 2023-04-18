let topic = [
    "課程介紹",
    "環境安裝&Lab1",
    "國定假日",
    "Lab2 & Lab3",
    "Lab4",
    "測試"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);//月份0-11
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(10,14);