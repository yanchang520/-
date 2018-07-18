


        $( function () {
                $('#register-btn').on('click',function () {

                  var  data = {
                         username: $.trim($('.groupAll input[name=username]').val()),
                        password : $.trim($('.groupAll input[name=password]').val()),
                        mobile : $.trim($('.groupAll input[name=mobile]').val()),
                        vCode : $.trim($('.groupAll input[name=vCode]').val()),
                        surepassword : $.trim($('.groupAll input[name=surepassword]').val())
                    };
                       

                       if(!data.username){

                        mui.toast('请输入用户名');
            
                        return;
            
                    }
                    
            
                    if(!/^1[4578]\d{9}$/.test(data.mobile)){
            
                        mui.toast('请输入正确格式的手机号');
            
                        return;
            
                    }
            
                    if(!data.password){
            
                        mui.toast('请输入密码');
            
                        return;
            
                    }
            
                    if(!data.surepassword){
            
                        mui.toast('请输入确认密码');
            
                        return;
                    }
            
                    if(data.password != data.surepassword){
            
                        mui.toast('两次密码输入的不相同');
            
                        return;
            
                    }
            
                    if(!/^\d{6}$/.test(data.vCode)){
            
                        mui.toast('验证码输入的格式不正确');
            
                        return;
            
                    }

                       $.ajax({
                           type: "post",
                           url: "/user/register",
                           data: data,
                           success: function (res) {
                                 if(res.success){
                                    mui.toast('注册成功');
                                    setTimeout(function (){
                                        location.href = "login.html"
                                    },2000)
                                 } else {
                                    mui.toast(res.message);
                                 }
                           }
                       });
                })

                $('#getCode').on('tap',function () {
                     $.ajax({
                         type: "get",
                         url: "/user/vCode",
                        
                         success: function (res) {
                             console.log(res.vCode)
                             $('#getCode').addClass('active')
                         }
                     });
                })
        })