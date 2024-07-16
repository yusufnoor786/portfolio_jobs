document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.animation = 'popUp 1s ease-in-out';

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out 
forwards';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
