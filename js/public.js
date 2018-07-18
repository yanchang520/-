


    $(function () {
            $('body').on('click','a',function (event) {
                if (event.cancelable) {
                    // 判断默认行为是否已经被禁用
                    if (!event.defaultPrevented) {
                        event.preventDefault();
                    }
                }

                 mui.openWindow({
                     url:$(this).attr('href')
                 });
            });
            

    });