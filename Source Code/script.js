// Create decorative floating particles
const container = document.querySelector('.loader-container');

for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position around the circle
    const angle = Math.random() * Math.PI * 2;
    const radius = 100 + Math.random() * 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    // Random animation targets
    const tx = (Math.random() - 0.5) * 300;
    const ty = -100 - Math.random() * 200;
    
    // Apply styles
    particle.style.left = `calc(50% + ${x}px)`;
    particle.style.top = `calc(50% + ${y}px)`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    // Random size and color variation
    const size = 4 + Math.random() * 8;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random color variation
    const hue = 270 + Math.random() * 60;
    particle.style.background = `hsla(${hue}, 100%, 70%, ${0.4 + Math.random() * 0.4})`;
    
    container.appendChild(particle);
}
