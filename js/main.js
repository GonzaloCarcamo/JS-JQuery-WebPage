$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    
    // Posts json

    var posts = [

        {
            title: 'Artículo con JSON 1',
            date: 'Publicado el '+ moment().day()+ ' de '+ moment().format("MMMM")+ ' de '+ moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam quidem quibusdam pariatur quasi, assumenda officia in perspiciatis id recusandae non"
        },

        {
            title: 'Artículo con JSON 2',
            date: 'Publicado el '+ moment().day()+ ' de '+ moment().format("MMMM")+ ' de '+ moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam quidem quibusdam pariatur quasi, assumenda officia in perspiciatis id recusandae non"
        },

        {
            title: 'Artículo con JSON 3',
            date: 'Publicado el '+ moment().day()+ ' de '+ moment().format("MMMM")+ ' de '+ moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam quidem quibusdam pariatur quasi, assumenda officia in perspiciatis id recusandae non"
        }

    ];

    posts.forEach((item, index) => {
        var post = `
        
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a class="button-more" href="">Leer más</a>
        </article>

        `;

        $("#posts").append(post);
    });

    // Scroll

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    })

    // Login falso

    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);
    })

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != undefined){
        var about_parrafo = $('#about p');
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append(' '+"<a href='#' id='logout'>Cerrar Sesion</a>");
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        })
    }

});

