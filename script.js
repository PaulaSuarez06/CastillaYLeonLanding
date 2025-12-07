
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');

        if (window.scrollY > 50) {
            nav.classList.add('transparent');
        } else {
            nav.classList.remove('transparent');
        }
    });

    document.querySelector('.hambuerger').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('open')
    })

