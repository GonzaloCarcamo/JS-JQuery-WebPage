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
    })

});

