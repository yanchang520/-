

$(function () {
    var address = null;
    $.ajax({
        type: "get",
        url: "/address/queryAddress",
        success: function (res) {
           // console.log(res)
            address = res;
            var html = template('addressTpl',{result:address});
           // console.log(html);
            $('#addressBox').html(html)
        }
    });

        $('#addressBox').on('tap','#deleteBtn',function () {
            var id = $(this).attr('data-id');
            console.log(id)

            $.ajax({
                type: "post",
                url: "/address/deleteAddress",
                data: {id:id},
                success: function (res) {
                    if(res.success){
                        location.reload();
                    } else {
                        mui.toast('删除地址失败');
                    }
                }
            });
        })

        $('#addressBox').on('tap','#editBtn',function () {
            var id = $(this).data('id');
            for(var i = 0 ; i < address.length ; i++){
                if(id == address[i].id ){
                    localStorage.setItem('arr',JSON.stringify(address[i]));
                   break; 
                }
            }
            location.href="addAddress.html?isEdit=1"
           
               
        })

        
})