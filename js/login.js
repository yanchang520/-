

$(function () {
     $('#primaryBtn').on('tap',function () {
            var  data = { 
                username:$.trim($('input[name=username]').val()),
                password:$.trim($('input[name=password]').val()),
            }
           
            if(!data.username){
                mui.toast('请输入用户名');
                return
            }
            if(!data.password){
                mui.toast('请输入密码');
                return
            }

            $.ajax({
                type: "post",
                url: " /user/login",
                data: data,
                success: function (res) {
                    if(res.success){
                        mui.toast('登录成功');
                        setTimeout(function (){
                            location.href = "user.html"
                        },2000)
                    } else {
                        location.href = "register.html"
                    }
                }
            });
     })
})