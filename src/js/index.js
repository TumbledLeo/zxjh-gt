

$(function () {
    // tab切换
    function tabCtrl(ele) {
        $(ele + '.tabContents .tabContent').hide().eq(0).show();
        $(ele + ' .tabs .tab').eq(0).addClass('active');
        $(ele + ' .tabs .tab').click(function (e) {
            // e.stopPropagation();
            // e.preventDefault();
            if ($(this).hasClass('active')) {
                return;
            }
            $(this).addClass('active').siblings().removeClass('active');
            let me = $(this);
            let index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
        });
    }

    tabCtrl('.dmtt');
});

