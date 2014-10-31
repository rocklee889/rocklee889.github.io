/**
 * Created by rock on 31/10/14.
 */
require.config({
    paths: {
        jquery: 'jquery-1.8.2.min',
        less: 'less-1.7.5.min'
    }
});

require(['jquery','less'], function($) {
    $(function(){

            var $container =  $('.container');
            var $window = $(window);


            $container.css({height:$window.height()});
    });
});