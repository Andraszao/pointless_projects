# 🎮 React Radial Menu

**A sleek, radial menu component for React applications. Perfect for games, sci-fi interfaces, or anywhere you want to add some cyberpunk flair!**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript Ready](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)

---

## 🌟 Features

- 🎯 Fully responsive radial menu with smooth animations
- 🎹 Keyboard shortcuts support (Alt + key)
- 🔊 Cyberpunk-style hover sounds
- 🌈 Customizable gradient colors
- ♿ Accessibility compliant with ARIA support
- 📱 Mobile-friendly with touch support
- 🎨 Built with Tailwind CSS for easy styling
- ⚡ Lightweight with minimal dependencies

## 🎥 Demo & Examples

### 🖥️ Desktop View
- Opening animation with ripple effect
- Hover effects with sound feedback
- Keyboard shortcut tooltips
- Smooth transitions

### 📱 Mobile View
- Touch-optimized interface
- Responsive layout
- Maintains all visual effects

## 🚀 Quick Start

1. Install the dependencies:
```bash
npm install lucide-react
# or
yarn add lucide-react
```

2. Copy the component into your project:
```bash
# Create a new component file
mkdir -p src/components
touch src/components/RadialMenu.tsx
```

3. Add required Tailwind animations to your `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
```

4. Import and use the component:
```jsx
import RadialMenu from './components/RadialMenu';

function App() {
  return (
    <div className="app">
      <RadialMenu />
    </div>
  );
}
```

## ⚙️ Customization

### Menu Items
Customize the menu items by modifying the `menuItems` array:

```javascript
const menuItems = [
  {
    label: 'CUSTOM',
    icon: '🔮',
    color: 'from-purple-400 to-pink-500',
    description: 'Your custom action',
    shortcut: 'Alt+C'
  },
  // Add more items...
];
```

### Styling
The component uses Tailwind CSS classes for styling. Modify the classes to match your design:

```jsx
// Example: Change button style
<button
  className="bg-gradient-to-r from-your-color to-your-color-2
    px-6 py-3 rounded-xl ..."
>
```

## 🎮 Keyboard Controls

| Shortcut | Action |
|----------|--------|
| Alt + H | HACK |
| Alt + S | SCAN |
| Alt + Y | SYNC |
| Alt + L | LOAD |
| Alt + K | KILL |
| ESC | Close Menu |

## 🔧 Props & Configuration

```typescript
interface MenuItemProps {
  label: string;
  icon: string;
  color: string;
  description: string;
  shortcut: string;
}

interface RadialMenuProps {
  items?: MenuItemProps[];
  radius?: number;
  sound?: boolean;
}
```

## 🎨 Theme Customization

The menu supports custom themes through Tailwind CSS classes. Here are some example color schemes:

### Cyberpunk Yellow
```javascript
const menuItems = [
  {
    color: 'from-yellow-400 to-orange-500',
    // ...
  }
];
```

### Neon Purple
```javascript
const menuItems = [
  {
    color: 'from-purple-500 to-pink-600',
    // ...
  }
];
```

## 📚 Tips & Best Practices

1. **Performance**: The menu uses CSS transforms for animations, ensuring smooth performance.
2. **Accessibility**: All buttons have proper ARIA labels and keyboard support.
3. **Sound**: Sound effects are optional and can be disabled for quiet environments.
4. **Mobile**: The menu automatically adjusts to stay within viewport bounds.

## 🤝 Contributing

Feel free to submit issues and enhancement requests! Follow these steps to contribute:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is MIT licensed.

## 🙏 Credits

- Icons from [Lucide Icons](https://lucide.dev/)
- Inspired by cyberpunk UI designs
- Built with React & Tailwind CSS

---

⭐ If you like this project, please give it a star on GitHub! ⭐

🐛 Found a bug? [Open an issue](https://github.com/yourusername/react-cyberpunk-menu/issues)!