

// window.onload =function () {
//     mui('.mui-scroll-wrapper').scroll({
//         deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，
//     // 滚动距离越小，默认值0.0006
//     })
// }

$(function () {
        $.ajax({
                type: "get",
                url: " /category/queryTopCategory",
                success: function (result) {
                        console.log(result)
                        var html = template("leftCategory", { data: result.rows });
                        $('#leftCate').html(html);
                        console.log(result.rows.length);
                        //加设小圆点
                        $('#leftCate a').eq(0).parent().addClass('active')
                        if (result.rows.length) {
                               
                               console.log( $("#leftCate").find('a').eq(0).attr('data-id'));
                                var id = $("#leftCate a").eq(0).attr('data-id');
                                console.log(id)
                                console.log(111)
                               render(id)
                        }
                }
        });

        $("#leftCate").on('click', 'a', function () {
                var id = $(this).attr('data-id');
                $(this).parent().addClass('active').siblings().removeClass('active');
                render(id);

        })
        function render(id){
                $.ajax({
                        type: "get",
                        url: " /category/querySecondCategory",
                        data: { id },
                        //        data:{id:id},
                        success: function (result) {
                                //  console.log(result)
                                var html = template('rightCategory', result);
                                $('#rightCate').html(html);
                        }
                });
        }

})