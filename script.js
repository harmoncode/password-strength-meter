document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const strengthMeter = document.querySelector('.strength-meter-fill');
    const strengthText = document.getElementById('strengthText');
    const requirements = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.querySelector('i').classList.toggle('fa-eye');
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Check password strength
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strength = 0;
        let validRequirements = 0;

        // Check length
        if (password.length >= 8) {
            requirements.length.classList.add('valid');
            validRequirements++;
        } else {
            requirements.length.classList.remove('valid');
        }

        // Check uppercase
        if (/[A-Z]/.test(password)) {
            requirements.uppercase.classList.add('valid');
            validRequirements++;
        } else {
            requirements.uppercase.classList.remove('valid');
        }

        // Check lowercase
        if (/[a-z]/.test(password)) {
            requirements.lowercase.classList.add('valid');
            validRequirements++;
        } else {
            requirements.lowercase.classList.remove('valid');
        }

        // Check number
        if (/[0-9]/.test(password)) {
            requirements.number.classList.add('valid');
            validRequirements++;
        } else {
            requirements.number.classList.remove('valid');
        }

        // Check special character
        if (/[^A-Za-z0-9]/.test(password)) {
            requirements.special.classList.add('valid');
            validRequirements++;
        } else {
            requirements.special.classList.remove('valid');
        }

        // Calculate strength
        if (password.length > 0) {
            strength = Math.min(4, Math.floor(validRequirements * 0.8));
        }

        // Update strength meter
        strengthMeter.setAttribute('data-strength', strength);

        // Update strength text
        switch (strength) {
            case 0:
                strengthText.textContent = 'Enter a password';
                strengthText.style.color = '#666';
                break;
            case 1:
                strengthText.textContent = 'Very Weak';
                strengthText.style.color = 'var(--danger-color)';
                break;
            case 2:
                strengthText.textContent = 'Weak';
                strengthText.style.color = 'var(--warning-color)';
                break;
            case 3:
                strengthText.textContent = 'Strong';
                strengthText.style.color = 'var(--primary-color)';
                break;
            case 4:
                strengthText.textContent = 'Very Strong';
                strengthText.style.color = 'var(--success-color)';
                break;
        }
    });
}); 