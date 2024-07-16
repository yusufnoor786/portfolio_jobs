document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.animation = 'fadeInUp 1s ease-in-out';

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-in-out forwards';
                
                const heading = entry.target.querySelector('h2');
                if (heading) {
                    heading.style.animation = 'fadeInUp 1s ease-in-out forwards';
                }
                
                const listItems = entry.target.querySelectorAll('li');
                listItems.forEach((item, index) => {
                    item.style.animation = `fadeInUp 0.5s ease-in-out ${index * 0.1}s forwards`;
                });
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Skill tags random movement
    const skillTags = document.querySelectorAll('.skills-list li');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            tag.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.1)`;
        });
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'translate(0, 0) scale(1)';
        });
    });
});
