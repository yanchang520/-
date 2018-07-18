$(function () {
    var keyArr = [];
    if (localStorage.getItem('keyArr')) {
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template("searchBox", { data: keyArr});
        $('#ulBox').html(html);
    }
    $('#search-btn').on('click', function () {
        var keyword = $('#search-txt').val();
        if (!keyword) {
            // alert('请输入关键字')
            // var str = '暂无记录';
            // $('#ulBox').html(str);
            $('#ulBox').html('暂无记录');
        } else {
            if (keyArr.indexOf(keyword) !== -1) {
                  location.href = "search-result.html?key=" + keyword;
                return;
            }
            keyArr.push(keyword);
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
             location.href = "search-result.html?key=" + keyword;
            if (localStorage.getItem('keyArr')) {
                keyArr = JSON.parse(localStorage.getItem('keyArr'));
                var html = template("searchBox", { data: keyArr});
                $('#ulBox').html(html);
            }

        }
    })

   
    //清空历史
    $('#clearBtn').on('click', function () {
        // var str = '暂无记录';
        // $('#ulBox').html(str);
        $('#searchBtn').text('暂无记录')
         $('#ulBox').html("");
        localStorage.removeItem('keyArr');
    })
})