$(document).ready(function(){
    
});

$.getJSON("products.json", function(data) {
    var products = data.products;

    $.each(products,function(index,value){
        var query = '';
        //console.log(index + ':' + value.name);

        query += '<a href="'+ value.link +' onDragStart={event => event.preventDefault()">';
            query += '<img src="'+ value.thumbnail +'">';
            query += '<div class="products-content">';
                query += '<p class="product-title">'+ value.name +'</p>';
                query += '<hr>';
                query += '<div class="prices">';
                    query += '<p>'+ value.semJuros +'X <span>sem juros</span></p>';
                    query += '<p> <sup>R$</sup>'+ value.priceSemJuros +'</p>';
                    query += '<div class="cards">';
                        query += '<img src="img/brand-cards/visa.png"> <img src="img/brand-cards/master-card.png">';
                    query += '</div>';
                    query += '<p>'+ value.comJuros +'X <span>com juros</span></p>';
                    query += '<p> <sup>R$</sup>'+ value.priceComJuros +'</p>';
                    query += '<sub>ou R$'+ value.inCash +' à vista</sub>';
                query += '</div>';
                query += '<hr>';
            query += '</div>';
        query += '</a>';
        
        $(".section-products").append(query);
    });   

    slider();
});

function slider() {
    $('.section-products').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
