

$(function () {


       
        var cityPicker = new mui.PopPicker({layer:3});
        cityPicker.setData(cityData);
        
        $('#addAddressBox').on('tap','#showCityPicker',function (){
            cityPicker.show(function(items) {
    
                $('[name="province"]').val((items[0] || {}).text + (items[1] || {}).text + (items[2] || {}).text);
    
            });
        })

           
    
       
     
        var hhh = location.href.substr(location.href.indexOf('?') + 1).split('&');
        // console.log(hhh);
        var param = hhh[0].split('=');
        //console.log(param);
        //console.log(param[1])  ;
       var aa =Number(param[1]); 
       console.log(aa)
      
          
       
     
        var bb=JSON.parse( localStorage.getItem('arr'));
        var  id = bb.id;
            if (aa == 0){
                var bb = {};
            } 
                var html = template('addAddressTp',bb);
                console.log(html);
                $('#addAddressBox').html(html);
      
      
      
    
       
            
            
        


            $('#addAddressBtn').on('tap',function () {
                
                var name = $('.groupAll input[name=name]').val();
                var postCode = $('.groupAll input[name=postCode]').val();
                var province = $('.groupAll input[name=province]').val();
                var detail = $('.groupAll input[name=detail]').val();
                var data = {
                    address :province,
                    addressDetail :detail,
                    recipients :name,
                    postcode :postCode
                 }
                console.log(data)

                console.log(id)
                if(aa == 1 ){
                  var url =" /address/updateAddress";
                    data.id= id;
                } else if(aa == 0){
                   var  url="/address/addAddress";
                }


                 if(!name){
                     mui.toast('请输入收获人姓名');
                     return
                 }
                 if(!postCode){
                    mui.toast('请输入邮编');
                    return
                }
                if(!province){
                    mui.toast('请输入省市区');
                    return
                }
                if(!detail){
                    mui.toast('请输入详细地址');
                    return
                }

              
                 

                $.ajax({
                    type: "post",
                    url: url,
                    data: data,
                    success: function (res) {
                        console.log(res)
                        if(res.success){

                            location.href = "address.html";
        
                        }else{
        
                            mui.toast(res.message)
        
                        }
                    }
                });
            })



})