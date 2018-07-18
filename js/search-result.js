
    var  params = {};   

    $( function () {

         var key = getParamsByUrl(location.href,'key');

        if(!key){

            return;

         }
         params.page=1,
         params.pageSize=3,
         params.proName = key;
       

        function getParamsByUrl(url, name) {

            var params = url.substr(url.indexOf('?') + 1).split('&');
            console.log(params)

            for (var i = 0; i < params.length; i++) {

                var param = params[i].split('=');

                if (param[0] == name) {

                    return param[1];
                }
            }
            return null;
        }

           mui.init({
                pullRefresh : {
                  container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
                  up : {
                    height:50,//可选.默认50.触发上拉加载拖动距离
                    auto:true,//可选,默认false.自动上拉加载一次
                    contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                    contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                    callback : pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
                  }
                }
              });
            
    });
    function pullfresh() {
        $.ajax({
            type: "get",
            url: " /product/queryProduct",
            data:params,
            success: function (result) {
                console.log(result)
                var html = template("searchTp",result);
                $('#lifeSportAll').html(html);
            }
        });
  }

