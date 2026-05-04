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
        let top = wingow.scrollY;
        let offset = sec.offsetTop - 100; // Верхняя граница секции (с учетом смещения)
        let height = sec.offsetHeight; // Высота секции
        let id = sec.getAttribute('id'); // Получаем ID секции

        if (top >= offset && top < offset + height) {
            // Активируем ссылку в навигации
            navLinks.forEach(links => {
                link.classList.remove("active");
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
