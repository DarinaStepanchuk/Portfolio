// Read More / Show Less toggle
let readMoreBtn = document.querySelector('#read-more-btn');
let aboutExtra = document.querySelector('#about-extra');

readMoreBtn.onclick = (e) => {
    e.preventDefault();
    if (aboutExtra.classList.contains('open')) {
        aboutExtra.classList.remove('open');
        readMoreBtn.textContent = 'Read More';
    } else {
        aboutExtra.classList.add('open');
        readMoreBtn.textContent = 'Show Less';
    }
};

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections and active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    let top = window.scrollY; // Текущая прокрутка страницы

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
       
            // Добавляем анимацию для секции
            sec.classList.add('show-animate');
        } else {
            // Убираем анимацию, если секция не активна
            sec.classList.remove('show-animate');
        }
    });

    // Логика для липкого хедера
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Убираем иконку меню и скрываем navbar при клике на ссылку
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    // Анимация футера при прокрутке до конца
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
