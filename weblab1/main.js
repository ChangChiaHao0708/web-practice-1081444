window.onload = function(){

};

let imageURLArray = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202109/article-613031bda0783.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/391516/4a15cb3a501a0c4e.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png"
];
let previousNumber;//記錄上一個結果
$(function(){
    $("input").on("click", function(){
        // alert("Hi");
        let numberOfListItem = $("li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == previousNumber)
        {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        previousNumber = randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURLArray[randomChildNumber]);
        // console.log(randomChildNumber);
    });
});