//  سن و جنسیت را از کاربر دریافت کنید . اگر جنسیت مونث بود یا سن کمتر از 18 سال بود به او خطا نشان دهد وگرنه به او مجوز ورود به پنل نمایش دهد 


var userAge = prompt("enter your age : ")
var userSex = prompt("enter your sex(male,female) : ")

if(userSex==="female" || userAge < 18 ){
    alert("شما مجاز به ورود نیستید ")
}else{
    alert("شما مجاز ورود به پنل کاربری خود میباشید ")
}