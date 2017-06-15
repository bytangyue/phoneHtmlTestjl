/**  description
 *   author tangyue
 *   date 2016/1/10
 */
define(function(){
    /**
     * 显示或隐藏元素【带有动画效果】
     * */
     function showOrhide(paramObj){
        var oThis=$(paramObj.targetStr);
        if(oThis.hasClass(paramObj.curClass)){
            oThis.slideUp(400,function(){
                $(this).removeClass('otherClass');
                $(this).removeClass(paramObj.curClass);
            });
        }else{
            oThis.slideDown(400,function(){
                $(this).addClass(paramObj.curClass);
                $(this).addClass('otherClass');
            });
        }
    }
    /**
     * 显示元素【带有动画效果】
     * */
    function hideElement(paramObj){
        var hideObj=$(paramObj.hideStr);
        if(hideObj.css('display')=='block'){
            hideObj.slideUp(400,function(){
                $(this).removeClass(paramObj.deleClass);
            });
        }
    }
    return {
        showOrhide:showOrhide,
        hideElement:hideElement
    }
});