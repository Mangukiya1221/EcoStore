function revealProducts() {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productTop = product.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (productTop < windowHeight - 50) {
            product.classList.add('reveal');
        }
    });
}


window.addEventListener('scroll', revealProducts);
window.addEventListener('load', revealProducts);


const calculatorForm = document.getElementById('calculatorForm');
if (calculatorForm) {
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const plastic = document.getElementById('plastic').value;
        const water = document.getElementById('water').value;
        
        
        const carbonFootprint = (plastic * 0.5) + (water * 0.3);
        
        document.getElementById('result').innerHTML = `
            <h3>Your estimated carbon footprint:</h3>
            <p>${carbonFootprint.toFixed(2)} kg CO2 per month</p>
        `;
    });
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}


