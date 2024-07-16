document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.animation = 'popUp 1s ease-in-out';

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out forwards';
                
                // Animate the heading
                const heading = entry.target.querySelector('h2');
                if (heading) {
                    heading.style.animation = 'typewriter 2s steps(40, end) forwards, blink 0.8s infinite';
                }
                
                // Animate list items
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

    // Add hover effect to header
    header.addEventListener('mouseover', () => {
        header.style.transform = 'translateY(-5px)';
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });

    header.addEventListener('mouseout', () => {
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = 'none';
    });
});
