Template.products2.rendered = function () {
    $('.product-item').each(function(i, el) {
        $(el).find('.content-product').hover(function() {
            $(this).addClass('animate');
            console.log('animate')
        }, function() {
            $(this).removeClass('animate');
            console.log('remove animate')
        });
        // Lift card and show stats on Mouseover
/*        $(el).find('.make3D').hover(function () {
            $(this).parent().css('z-index', "2");
            $(this).addClass('animate');
        }, function () {
            $(this).removeClass('animate');
            $(this).parent().css('z-index', "1");
        });*/
    });
/*    $('.product-item').hover(function(){
       alert("hola");
    });*/

}