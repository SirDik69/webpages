# JACKBOYS - Travis Scott Website

A modern, responsive recreation of the Jackboys website featuring Travis Scott's collective. Built with clean, semantic HTML, CSS, and JavaScript.

## 🎵 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Aesthetic**: Minimalist dark theme matching the Jackboys brand
- **Interactive Audio Player**: Custom audio player with track selection and progress tracking
- **Smooth Animations**: Subtle scroll animations and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Hero Video Background**: Fullscreen video background with overlay
- **Music Section**: Album artwork and track listing
- **Merchandise Section**: Product grid with hover effects
- **Tour Dates**: Interactive tour date listings
- **Modern Typography**: Inter font family for clean, readable text

## 📁 Project Structure

```
jackboys-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── images/             # Image assets
│   │   ├── album-cover.jpg
│   │   ├── merch-1.jpg
│   │   ├── merch-2.jpg
│   │   └── merch-3.jpg
│   ├── videos/             # Video assets
│   │   └── hero-bg.mp4
│   └── audio/              # Audio assets
│       ├── gang-gang.mp3
│       ├── had-enough.mp3
│       ├── out-west.mp3
│       └── gatti.mp3
└── README.md               # Project documentation
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Add Assets**: Place your images, videos, and audio files in the respective `assets/` directories
3. **Open**: Open `index.html` in a web browser
4. **Deploy**: Upload all files to your web hosting service

## 🎨 Design Features

### Color Palette
- **Primary**: #000000 (Black)
- **Secondary**: #111111 (Dark Gray)
- **Accent**: #ff0000 (Red)
- **Text**: #ffffff (White)
- **Muted**: #888888 (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Letter Spacing**: Enhanced for readability

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions (0.3s ease)
- Parallax scrolling effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎵 Audio Player Features

- Play/pause functionality
- Progress bar with click-to-seek
- Track selection from album
- Time display (current/total)
- Auto-hide/show on interaction

## 🔧 Customization

### Colors
Edit the CSS custom properties in `css/style.css`:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #111111;
    --accent-color: #ff0000;
    --text-color: #ffffff;
    --muted-color: #888888;
}
```

### Content
- Update text content in `index.html`
- Replace images in `assets/images/`
- Add video background in `assets/videos/`
- Include audio tracks in `assets/audio/`

### Styling
- Modify `css/style.css` for visual changes
- Add new animations in the CSS animations section
- Update responsive breakpoints as needed

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📦 Deployment

### Static Hosting
Upload all files to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Web Server
Place files in your web server's document root:
```bash
# Example for Apache
cp -r * /var/www/html/

# Example for Nginx
cp -r * /usr/share/nginx/html/
```

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## ⚡ Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Compressed assets recommended
- Minimal external dependencies
- Efficient animations

## 🛠️ Development

### Local Development
1. Use a local web server (e.g., Live Server in VS Code)
2. Test on multiple devices and browsers
3. Validate HTML and CSS
4. Check accessibility features

### Testing
- Test responsive design on various screen sizes
- Verify all interactive elements work
- Check audio player functionality
- Test navigation and smooth scrolling

## 📄 License

This project is for educational and demonstration purposes. Please ensure you have proper licensing for any music, images, or videos used in production.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Check the documentation in each asset directory
- Review browser console for errors
- Ensure all assets are properly placed
- Verify file paths are correct

---

**Built with ❤️ for the Jackboys collective**