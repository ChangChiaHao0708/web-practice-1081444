window.onload = function(){

};

$(function(){
    $("input").on("click", function(){
        // alert("Hi");
        let numberOfListItem = $("li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        // console.log(randomChildNumber);
    });
});