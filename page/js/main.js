/**  description
 *   author tangyue
 *   date 2016/1/5
 */
var mainObj = {};
(function () {
    require(['utils'], function (utils) {
        var menuObj = {'targetStr': '#menuList', 'curClass': 'menuShow'},
            shopObj = {'targetStr': '#shoppingList', 'curClass': 'shopShow'};
        mainObj.showMenuList = function () {
            utils.hideElement({'hideStr': shopObj.targetStr, 'deleClass': shopObj.curClass});
            utils.showOrhide(menuObj);
        }
        mainObj.showShopList = function () {
            utils.hideElement({'hideStr': menuObj.targetStr, 'deleClass': menuObj.curClass});
            utils.showOrhide(shopObj);
        }
    });
})();
$(function () {
    /*加载头部和尾部*/
    //$('#header').load('partial/header/header.html');
    //$('#footer').load('partial/footer/footer.html');
    setTimeout(function () {
        /**
         * 设置菜单选中激活样式
         * */
        var locationUrl = location.href;
        $(".menu-list .list-con a").each(function () {
            if (locationUrl.indexOf($(this).attr('href')) > 0) {
                $(this).addClass('menu-active');
            } else {
                $(this).removeClass('menu-active');
            }
        });
    }, 50);
    /*-----------------问题列表点击展开/收缩 start-----------------*/
    $('.question-item').click(function (e) {
        var objThis = $(this),
            queResult = objThis.parent().find('.question-result');
        if (objThis.hasClass('currentItem')) {
            queResult.slideUp(400, function () {
                $(this).parent().find('.question-item').removeClass('currentItem')
                    .find('.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');
            });
        } else {
            queResult.slideDown(400, function () {
                $(this).parent().find('.question-item').addClass('currentItem')
                    .find('.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
            });
        }
        return false;
    });
    /*-----------------问题列表点击展开/收缩 end-----------------*/
    /*-----------------下拉框 start----------------------------*/
    /**
     * 隐藏其他显示的下拉框
     */
    function hideOtherDrop() {
        $('.drop-text').each(function () {
            if ($(this).hasClass('drop-text-active')) {
                $(this).next('.drop-item-outer').slideUp(300, function () {
                    $(this).prev('.drop-text').removeClass('drop-text-active')
                        .find('.fa').addClass('fa-chevron-down').removeClass('fa-chevron-up');
                });
            }
        });
    };
    $('.drop-text').click(function () {
        hideOtherDrop();
        var dropObj = $(this),
            droplist = dropObj.next('.drop-item-outer');
        if (dropObj.hasClass('drop-text-active')) {//已经激活
            droplist.slideUp(300, function () {
                $(this).prev('.drop-text').removeClass('drop-text-active')
                    .find('.fa').addClass('fa-chevron-down').removeClass('fa-chevron-up');
            });
        } else {//未激活
            droplist.slideDown(300, function () {
                $(this).prev('.drop-text').addClass('drop-text-active')
                    .find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            });
        }
    });
    $('.drop-item').click(function () {
        var dropItem = $(this),
            textValue = dropItem.attr('data-value');
        dropItem.parent().slideUp(300, function () {
            $(this).parent().find('.drop-text').removeClass('drop-text-active')
                .find('.fa').addClass('fa-chevron-down').removeClass('fa-chevron-up');
        });
        dropItem.parent().prev('.drop-text').find('span').text(textValue);
        dropItem.parent().next('.drop-input').val(textValue);
    });
    /*-----------------下拉框 end------------------------------*/
    /*------------------gallery start---------------------------*/
    $('.gallery-item').click(function () {
        var cur = $(this);
        $('.item-img').each(function () {
            $(this).removeClass('thumbCurrent');
        });
        cur.find('.item-img').addClass('thumbCurrent');
        $('.galleryCurrent').attr('src', cur.attr('data-url'));
    });
    /*------------------gallery end---------------------------*/
    /*------------------expand start---------------------------*/
    $('.expand').click(function (e) {
        e.preventDefault();
        var objthis = $(this);
        $('.expand-box').css({'top': $(document).scrollTop() + 100});
        $('#expand-contains, #expand-box').fadeIn(500);
        $('.expand-img').hide();
        $('.loading').css({'height': $('.expand-img').css('height')});
        $('.loading').fadeIn(500);
        setTimeout(function () {
            $('.loading').hide();
            $('.expand-img').attr('src', objthis.attr('href'));
            $('.expand-img').show();
        }, 400);
    });
    $('.expand-close, #expand-contains').click(function () {
        $('#expand-contains, #expand-box').fadeOut(500);
    });
    /*------------------expand end---------------------------*/
    /*------------------面包屑过滤 start---------------------------*/
    $('.crumbs-item').click(function (e) {
        e.preventDefault();
        $('.crumbs-item').each(function () {
            $(this).removeClass('crumbs-active');
        });
        $(this).addClass('crumbs-active');
        var curText = $(this).attr('href');
        if (curText != 'all') {
            $('.portfolio-wrapper,.two-portfolio-item').each(function () {
                var curType = $(this).attr('data-type');
                if (curType.indexOf(',') > 0) {
                    var splitData = curType.split(','),eqNum=0;
                    for (var i = 0; i < splitData.length; i++) {
                        if (splitData[i] == curText) {//统计相同的个数
                            eqNum++;
                        }
                    }
                    if(eqNum>0){
                        $(this).removeClass('opacity-2');
                    }else{
                        $(this).addClass('opacity-2');
                    }
                } else {
                    if (curType == curText) {
                        $(this).removeClass('opacity-2');
                    } else {
                        $(this).addClass('opacity-2');
                    }
                }
            });
        }else{
            $('.portfolio-wrapper,.two-portfolio-item').each(function () {
                $(this).removeClass('opacity-2');
            });
        }
    });
    /*------------------面包屑过滤 end---------------------------*/
});

