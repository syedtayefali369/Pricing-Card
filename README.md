# 💳 Pricing Card Component

**A modern, responsive, and beautifully animated pricing card UI built with HTML & CSS. Perfect for SaaS products, membership plans, or subscription services.** 

<img width="1399" alt="pricing card" src="https://github.com/user-attachments/assets/f1984baa-f8c3-4e3d-81eb-d1ae25a67f5f" />

**Live Demo:** (https://syedtayefali369.github.io/Pricing-Card/)  
**Featured On:** [CSS Weekly](https://css-weekly.com) | [Codepen Spotlight](https://codepen.io)

## 🌟 Premium Features

- **Dynamic Responsive Design**  
  Perfectly adapts from mobile (320px) to 4K screens with CSS Grid & Flexbox

- **Professional Animations**  
  Hover effects, price card scaling, and smooth transitions powered by CSS animations

- **Theme Customization**  
  Easily modify colors, shadows, and sizes using CSS variables:
  ```css
  :root {
    --primary-color: #2563eb;
    --hover-scale: 1.05;
    --card-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
  

- **Accessibility First**  
  WCAG 2.1 compliant with ARIA labels, keyboard navigation, and contrast ratios ≥ 4.5:1

- **Cross-Browser Support**  
  Fully tested on Chrome, Firefox, Safari, Edge, and mobile browsers

## 🛠 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![VSCode](https://img.shields.io/badge/Editor-VSCode-blue?style=for-the-badge&logo=visual-studio-code)

## 🚀 Installation

```bash
# Clone with SSH
git clone git@github.com:syedtayefali369/Pricing-Card.git

# Install dependencies (optional)
npm install live-server -g

# Start development server
live-server --port=3000
```

## 🎨 Customization Guide

### Color Schemes
Modify `--primary-color` in `styles.css`:
```css
/* Professional Blue */
--primary-color: #2563eb;

/* Startup Green */
--primary-color: #22c55e;

/* Luxury Purple */ 
--primary-color: #9333ea;
```

### Layout Adjustments
**3-column layout (desktop):**
```css
.pricing-cards {
  grid-template-columns: repeat(3, 1fr);
}
```

**Featured Card Scaling:**
```css
.featured-card {
  transform: scale(1.1);
  z-index: 2;
}
```

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 58+     | ✅     |
| Firefox | 55+     | ✅     |
| Safari  | 12.1+   | ✅     |
| Edge    | 16+     | ✅     |

## 🤝 Contributing

We welcome contributions! Please follow our guidelines:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

**Syed Tayef Ali**  
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)

📧 Email: [professional@email.com](mailto:professional@email.com)
