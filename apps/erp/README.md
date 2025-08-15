# Dreampi ERP

A modern, feature-rich ERP application built with Remix, React, and TypeScript, featuring a contemporary design system that sets new standards for enterprise software aesthetics.

## ✨ **Modern Design Features**

- **🎨 Contemporary UI/UX**: Clean, intuitive interface with the latest design trends
- **🌈 Glassmorphism Effects**: Modern backdrop blur and transparency effects
- **🎭 Enhanced Animations**: Smooth transitions, floating elements, and micro-interactions
- **🎯 Improved Visual Hierarchy**: Better spacing, typography, and component organization
- **🌙 Dark/Light Mode**: Seamless theme switching with enhanced contrast
- **📱 Responsive Design**: Optimized for all devices with modern breakpoints

## 🎨 **Theme System**

The application supports multiple modern themes:

- **Dreampi** (Default): Contemporary purple-blue gradient theme with glassmorphism
- **Zinc**: Clean, neutral theme with subtle shadows
- **Neutral**: Professional, understated theme
- **Red**: Bold, energetic theme for high-impact applications
- **Orange**: Warm, friendly theme with excellent accessibility
- **Yellow**: Bright, optimistic theme for creative workflows

## 🚀 **Modern Design Elements**

### **Visual Enhancements**

- Glassmorphism cards with backdrop blur effects
- Gradient borders and modern shadows
- Floating particle animations
- Pulse glow effects on interactive elements
- Smooth hover transitions and micro-interactions

### **Typography & Spacing**

- Enhanced font weights and letter spacing
- Improved line heights for better readability
- Consistent spacing system using modern scale
- Gradient text effects for headings

### **Component Improvements**

- Modern button styles with gradient backgrounds
- Enhanced input fields with focus states
- Improved card designs with hover effects
- Better visual feedback on all interactive elements

## 🛠 **Getting Started**

### Prerequisites

- Node.js 18+
- npm or yarn
- Modern browser with CSS backdrop-filter support

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## 🎯 **Key Features**

- **Modern Authentication**: Streamlined login with magic links and OAuth
- **Responsive Layout**: Adaptive design that works on all screen sizes
- **Theme Switching**: Dynamic theme selection with instant preview
- **Performance Optimized**: Fast loading with modern build tools
- **Accessibility First**: WCAG compliant with keyboard navigation support

## 🎨 **Customization**

### **Adding New Themes**

Themes can be easily customized in `packages/utils/src/themes.ts`:

```typescript
{
  name: "custom-theme",
  label: "Custom Theme",
  activeColor: { light: "220 70% 50%", dark: "220 70% 50%" },
  cssVars: {
    light: { /* light mode variables */ },
    dark: { /* dark mode variables */ }
  }
}
```

### **CSS Customization**

Modern CSS utilities are available in `app/styles/tailwind.css`:

- `.glass` - Glassmorphism effect
- `.modern-card` - Enhanced card styling
- `.gradient-text` - Gradient text effects
- `.btn-modern` - Modern button styles

## 🔧 **Development**

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

### **File Structure**

```
app/
├── components/     # Reusable UI components
├── routes/        # Application routes
├── styles/        # Global styles and theme CSS
├── utils/         # Utility functions
└── hooks/         # Custom React hooks
```

## 🌟 **Design Philosophy**

Our modern design approach focuses on:

- **Simplicity**: Clean, uncluttered interfaces
- **Accessibility**: Inclusive design for all users
- **Performance**: Fast, responsive interactions
- **Consistency**: Unified design language across components
- **Innovation**: Embracing modern web technologies

## 📱 **Browser Support**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 **Contributing**

We welcome contributions! Please see our contributing guidelines for details on:

- Code style and standards
- Design system principles
- Testing requirements
- Pull request process

## 📄 **License**

This project is licensed under the MIT License.

## 🆘 **Support**

For support and questions:

- Check our documentation
- Open an issue on GitHub
- Join our community discussions

---

**Built with ❤️ using modern web technologies**
