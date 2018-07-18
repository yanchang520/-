

$(function () {
            $('#modifyBtn').on('tap',function () {
                console.log ($('.groupAll input[name=vCode]').val())
                console.log(22)
                    var data ={
                        oldPassword : $('.groupAll input[name=oldPassword]').val(),
                        newPassword : $('.groupAll input[name=newPassword]').val(),
                        confirmPassword : $('.groupAll input[name=confirmPassword]').val(),
                        vCode : $('.groupAll input[name=vCode]').val()
                    }
                    if(!data.oldPassword){
                        mui.toast('请输入原密码')
                        return
                    }
                    if(!data.newPassword){
                        mui.toast('请输入新密码')
                        return
                    }
                    if(!data.confirmPassword){
                        mui.toast('请确认密码')
                        return
                    }
                    if(data.newPassword != data.confirmPassword){
                        mui.toast('输入的密码不一致')
                        return
                    }

                    $.ajax({
                        type: "post",
                        url: " /user/updatePassword",
                        data: data,
                        success: function (res) {

                            console.log(res)
                            if(res.success){

                                location.href = "login.html";
            
                            }else{
            
                                //This.html('修改密码');
            
                                mui.toast('密码修改失败:'+res.message);
            
                               
            
                            }		
                        }
                    });         
            })

            $('#getCode').on('tap',function () {
                $.ajax({
                    type: "get",
                    url: "/user/vCodeForUpdatePassword",
                    success: function (res) {
                        console.log(res.vCode)
                    }
                });
            })
})