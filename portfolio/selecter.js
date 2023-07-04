document.addEventListener('DOMContentLoaded', function() {
    const selectButton = document.querySelector('.select-button');
    const startButton = document.querySelector('.start-button');
    const navbarWrapper = document.querySelector('.navbar-wrapper');

    // selectButton.addEventListener('click', function() {
    //     navbarWrapper.classList.toggle('hidden');
    // });

    startButton.addEventListener('click', function() {
        navbarWrapper.classList.toggle('hidden');
    });

    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('mouseover', (event) => {
        const target = event.target.closest('li');
        if (target) {
            // Remove active class from all items
            const items = navbar.querySelectorAll('li');
            items.forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the hovered item
            target.classList.add('active');
        }
    });

    navbar.addEventListener('mouseout', (event) => {
        const target = event.target.closest('li');
        if (target) {
            // Remove active class from the hovered item
            target.classList.remove('active');
        }
    });

    const exitLink = document.getElementById('exit-link');

    exitLink.addEventListener('click', () => {
        navbarWrapper.classList.add('hidden');
    });
});