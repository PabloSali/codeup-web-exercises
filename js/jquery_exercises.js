"use strict";
// window.load

(function(){
    $(document).ready(function(){
//---------------------------------------------------------------------
//  Selectors
        // let h1contents = $('#head').html();
        // alert(h1contents);

        // $('.codeup').css('border', 'solid 1px red');
        //
        // $('li').css('font-size',  ' 20px');
        // $('li, p , h1').css('background-color', 'yellow');
//---------------------------------------------------------------------
//  Mouse Event Listeners
        // 1
        $('h1').click(function() {
            $('h1').css('background-color', 'yellow');
        });
        // 2
        $('p').dblclick(function() {
                $('p').css('font-size',  ' 18px');
            });
        // 3
        $('li').hover(
            function() {
                $(this).css('color', 'red');
            },
            function() {
                $(this).css('color', 'black');
            });

    })
})();