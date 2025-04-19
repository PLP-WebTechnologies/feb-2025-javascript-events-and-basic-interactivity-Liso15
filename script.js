// Event Listeners Section
document.addEventListener('DOMContentLoaded', function() {
    // Click event listener
    const clickMeBtn = document.getElementById('clickMeBtn');
    const hoverMeBtn = document.getElementById('hoverMeBtn');
    const eventOutput = document.getElementById('eventOutput');
    
    clickMeBtn.addEventListener('click', function() {
        eventOutput.textContent = 'Button was clicked!';
        eventOutput.style.color = 'blue';
    });
    
    // Mouseover and mouseout events
    hoverMeBtn.addEventListener('mouseover', function() {
        this.textContent = 'Mouse is over me!';
        this.style.backgroundColor = '#ff9800';
    });
    
    hoverMeBtn.addEventListener('mouseout', function() {
        this.textContent = 'Hover Over Me';
        this.style.backgroundColor = '';
    });
    
    // Form Validation Section
    const demoForm = document.getElementById('demoForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formSuccess = document.getElementById('formSuccess');
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        // Password validation
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
        
        // If form is valid
        if (isValid) {
            formSuccess.textContent = 'Form submitted successfully!';
            // In a real app, you would submit the form data here
            demoForm.reset();
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                formSuccess.textContent = '';
            }, 3000);
        }
    });
    
    // Interactive Elements Section
    const interactiveBox = document.getElementById('interactiveBox');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
    
    // Box hover effects
    interactiveBox.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e0e0e0';
        this.textContent = 'Mouse entered!';
    });
    
    interactiveBox.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f0f0f0';
        this.textContent = 'Hover or Click Me!';
    });
    
    // Box click effect
    interactiveBox.addEventListener('click', function() {
        this.textContent = 'Clicked!';
        this.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Change color button
    changeColorBtn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        interactiveBox.style.backgroundColor = randomColor;
    });
    
    // Toggle visibility button
    toggleVisibilityBtn.addEventListener('click', function() {
        if (interactiveBox.style.visibility === 'hidden') {
            interactiveBox.style.visibility = 'visible';
            interactiveBox.style.opacity = '1';
            this.textContent = 'Toggle Visibility';
        } else {
            interactiveBox.style.visibility = 'hidden';
            interactiveBox.style.opacity = '0';
            this.textContent = 'Show Box';
        }
    });
});