document.addEventListener('DOMContentLoaded', () => {
    // Contact Button Alert
    const contactBtn = document.getElementById('contactBtn');
    
    contactBtn.addEventListener('click', () => {
        alert('Thank you for reaching out! I will get back to you shortly.');
    });

    // Smooth Scroll effect for Nav Links
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
});