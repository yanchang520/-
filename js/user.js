
 var userInfo = null;
 $.ajax({
     type: "get",
     url: "/user/queryUserMessage",
     async:false,
     success: function (res) {
         if(res.error ){
             location.href="login.html"
         } else{
            userInfo = res;
         }
       

        

     }
 });


$(function () {
    console.log(userInfo)
    var html = template('userTpl',userInfo);
    console.log(html)
    $('#user').html(html);

     $('#loginOut').on('tap',function () {
            $.ajax({
                type: "get",
                url: "/user/logout",
                success: function (res) {
                    
                    if(res.success){
                        location.href = "index.html";
                    }
                }
            });
     })
})