

$(function(){
    $(".react-red").on("click",function(){
        console.log(124);
        $(".btn1").css('background-color', 'orange');
    })


    $(".react-red").on("dblclick",function(){
        console.log(124);
        $(".btn1").css('background-color', 'red');
    })



    $(".vue-blue").on("click",function(){
        console.log(124);
        $(".btn2").css('background-color', 'purple');
    })


    $(".vue-blue").on("dblclick",function(){
        console.log(124);
        $(".btn2").css('background-color', 'blue');
    })






    $(".angular-green").on("click",function(){
        console.log(124);
        $(".btn3").css('background-color', 'pink');
    })



    $(".angular-green").on("dblclick",function(){
        console.log(124);
        $(".btn3").css('background-color', 'green');
    })


    // $(".push").on("click",function(){
    //     console.log("タッチ");
    //     $(".push")
    //     .siblings(".none")
    //     .slideToggle();
    // });



})


