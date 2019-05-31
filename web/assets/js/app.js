$(function (){
    $('#burger').on('click', function(){
        $('#side-menu').toggleClass('side-menu--closed');
        $('#nav-bar').toggleClass('nav-bar--closed');
        $('#nav-bar--right').toggleClass('nav-bar--right--closed');
        $('#section-container').toggleClass('section-container--closed');
    });
    var basename = $('#side-menu').find('li.active span').text();
    $('#basename')
    .text(basename)
    .attr('href', `/${basename.toLowerCase()}.html`)
})

$(function (){
    $('#notifications').on('click', function(){
        $('#side-menu-right').toggleClass('side-menu--right--closed');
    })
})
