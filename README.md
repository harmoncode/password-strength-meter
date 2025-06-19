# Password Strength Meter

A real-time password strength indicator with visual feedback and suggestions. Perfect for registration forms, password change screens, or any application that requires secure password creation.

## ✨ Features

- **Real-time Analysis**: Instant password strength evaluation
- **Visual Feedback**: Color-coded strength indicators
- **Multiple Criteria**: Length, complexity, common patterns
- **Suggestions**: Helpful tips for improving password strength
- **Customizable**: Easy to adjust strength criteria
- **Responsive**: Works perfectly on all devices
- **Accessible**: Built with accessibility in mind
- **Lightweight**: Pure CSS and JavaScript, no dependencies

## 🚀 Live Demo

[View on CodePen](https://codepen.io/harmoncode/pen/KwpKeEZ)

## 📁 Files

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - JavaScript functionality

## 🛠️ Usage

### Basic Implementation

```html
<div class="password-container">
    <input type="password" id="password" placeholder="Enter password">
    <div class="strength-meter">
        <div class="strength-bar">
            <div class="strength-fill" id="strengthFill"></div>
        </div>
        <div class="strength-text" id="strengthText">Enter a password</div>
    </div>
    <div class="suggestions" id="suggestions"></div>
</div>
```

### JavaScript Initialization

```javascript
// Initialize password strength meter
const passwordMeter = new PasswordStrengthMeter({
    input: '#password',
    strengthBar: '#strengthFill',
    strengthText: '#strengthText',
    suggestions: '#suggestions'
});
```

## 🎨 Strength Levels

- **Very Weak**: Red - Basic passwords
- **Weak**: Orange - Simple patterns
- **Fair**: Yellow - Moderate complexity
- **Good**: Light Green - Good complexity
- **Strong**: Green - High complexity
- **Very Strong**: Dark Green - Excellent complexity

## ⚙️ Configuration

```javascript
const config = {
    minLength: 8,           // Minimum password length
    requireUppercase: true, // Require uppercase letters
    requireLowercase: true, // Require lowercase letters
    requireNumbers: true,   // Require numbers
    requireSymbols: true,   // Require special characters
    checkCommon: true,      // Check against common passwords
    showSuggestions: true   // Show improvement suggestions
};
```

## 📱 Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- IE11+ ✅

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Created by

**HarmonCode** - [harmoncode.com](https://harmoncode.com)

---

⭐ If you find this useful, please give it a star! 