$.myfunction = (function(){
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;

    let millisecsPerDay = 24*60*60*1000;

    for(let x = 0; x < topicCount; x++)
    {
        $("#courseTable").append(
            // ``裡面可以放運算，${operation}
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startDate.getTime() + 7*x*millisecsPerDay)).toLocaleDateString().substring(5)}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>"
        )
    }
});

$("input").change(function(){
    let date = new Date($(this).val());
    let month = date.getMonth() + 1;
    let day = date.getDate();

    setMonthAndDay(month, day);
    $.myfunction();
    // console.log($(this));
    // console.log(typeof(date));
    // console.log(date);
    // console.log(month);
    // console.log(day);
});

$.myfunction();