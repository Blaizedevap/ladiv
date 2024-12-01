$(document).ready(function(){
    const img_r = localStorage.getItem('img_root');
    const product_n = localStorage.getItem('product_name');
    const product_price = localStorage.getItem('product_price');
    $('#desc').text(product_n);
    $('.element img').attr('src', img_r);

    $('#desc').append('<h1>'+product_n+'</h1>');
    $('#desc').append('<p>'+product_price+'</p>');

})