console.log("hello world");

$(document).ready(function(){
    $('.button[filter="wd"]').click(function(){
        $('.filter > div').hide(300);
    })
});