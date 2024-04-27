// 页面加载
window.onload = function(){
    // 获取元素
    var username = document.getElementById("username")
    var password = document.getElementById('password') 
    var btnClick = document.getElementById("enter")
    // 创建变量
    var new_username
    var new_password
    // 创建对象
    var content = {
        // 保存的账号
        username:[122794326,],
        // 保存的密码
        password:[5201314,]
    }
    username.onchange=function(){
        new_username = username.value
    }
    password.onchange=function(){
        new_password = password.value
    }
    btnClick.onclick = function(){
        if(
            (new_username == content.username[0]) && (new_password == content.password[0]) &&(new_username != "")&&(new_password != "")
            ){
            alert("登录成功！！")
            window.location.href = "./html/loading.html"
        }else{
            alert("登录失败！！请检测账号密码是否正确");
        }
    }
}