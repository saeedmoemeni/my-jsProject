var username = prompt("enter your username : ")
var password = prompt("enter your password : ")

if(username.length < 3 || password.length < 8  ){

    alert("یوزرنیم باید حداقل سه کاراکتر و پسوورد حداقل بایذ هشت کاراکتر باشد ")

} else {
    alert("ثبت نام شما با موفقیت انجام شد ")
}
