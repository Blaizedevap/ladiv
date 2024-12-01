$(document).ready(function(){

    $('.sidenav').sidenav();
});




$(document).ready(function(){

    $("#le").click(function(){$(this).hide();});
});

$(document).ready(function(event){
    $('.carousel').carousel({
        indicators:true
        
    });

    autoplay();
    function autoplay(){
        $('.carousel').carousel('next');
        // setTimeout(autoplay, 10000);
    }
})



$(document).ready(function() {
    var lastScrollTop = 0; // Position du dernier scroll
    var navbar = $("#lanav"); // La navbar à cacher/montrer

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop(); // Position actuelle du scroll

        // Si on fait défiler vers le bas, cacher la navbar
        if (currentScroll > lastScrollTop) {
            navbar.hide(); // Masquer la navbar (déplacement vers le haut)  css("top", "-100px")
            $("#a").hide();
            $("#b").hide();
        } 
        else {
             navbar.show(); // Réafficher la navbar (déplacement vers le bas)  css("top", "1%")
                 $("#a").show();
                //  $("#b").show();
         }

        // Mettre à jour la position du dernier scroll
        lastScrollTop = currentScroll;
    });
});


let Data = [
    {id:1, nom:"C-renewing", prix:500},
    {id:2, nom:"C-foamin", prix:150},
    {id:3, nom:"C-moisturising", prix:500},
    {id:4, nom:"C-dally", prix:26},
]

$(document).ready(function(){
    $('.box button').click(function(){

       let img_root = $(this).attr('class');
        let img_id = $(this).attr('id');
            for(let i = 0; i<Data.length; i++){
                if(img_id == Data[i].id){
                    localStorage.setItem('img_id', Data[i].id); // l id de l image
                        localStorage.setItem('img_root', img_root); // le nom de l image avec extension
                            localStorage.setItem('product_name', Data[i].nom);
                                localStorage.setItem('product_price', Data[i].prix);

                      window.location.href = "product.html";

                }
            }
        
      
        //             window.location.href = "produit.html";

    })
})



// $(document).ready(function(){
//     $('.prix').click(function(){
//         alert("ddd");

//     })
// })