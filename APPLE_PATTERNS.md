# Apple Website Design Patterns

## 1. Hero Section Design Patterns

### Full-Viewport Hero
```css
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
}
```

### Hero Typography
```css
.hero-title {
  font-size: clamp(48px, 10vw, 96px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(24px, 5vw, 48px);
  font-weight: 400;
  color: #86868b;
  margin-top: 10px;
}
```

### Product Hero (Dark Background)
```css
.hero-product {
  background: #000;
  color: #f5f5f7;
}

.hero-product .cta-button {
  background: #0071e3;
  border-radius: 980px;
  padding: 12px 24px;
  font-size: 17px;
  transition: background 0.3s ease;
}

.hero-product .cta-button:hover {
  background: #0077ed;
}
```

---

## 2. Navigation Blur Effects

### Sticky Blur Navigation
```css
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Light Theme Navigation
```css
.nav-light {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}
```

### Nav Link Styles
```css
.nav-link {
  color: #f5f5f7;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}
```

---

## 3. Scroll Animations

### Fade-In-Up Animation
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
```

### Staggered Animation Delays
```css
.animate-delay-1 { animation-delay: 0.1s; }
.animate-delay-2 { animation-delay: 0.2s; }
.animate-delay-3 { animation-delay: 0.3s; }
.animate-delay-4 { animation-delay: 0.4s; }
```

### Intersection Observer Implementation
```javascript
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Parallax Effect
```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.parallax-layer-back {
  transform: translateZ(-1px) scale(2);
}
```

---

## 4. Card / Glassmorphism Styles

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

### Dark Glass Card
```css
.glass-card-dark {
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Feature Card
```css
.feature-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
}

.feature-card h3 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
}

.feature-card p {
  font-size: 19px;
  line-height: 1.4;
  color: #86868b;
}
```

---

## 5. Common Utilities

### Container
```css
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
}

.container-wide {
  max-width: 1080px;
}

.container-full {
  max-width: 100%;
}
```

### Typography Scale
```css
/* Large headlines */
.headline-large {
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.005em;
}

/* Section titles */
.headline-section {
  font-size: 48px;
  font-weight: 600;
}

/* Body text */
.body-text {
  font-size: 19px;
  line-height: 1.5;
  color: #86868b;
}

/* Caption */
.caption {
  font-size: 12px;
  font-weight: 400;
  color: #86868b;
}
```

### Buttons
```css
.btn-primary {
  display: inline-block;
  background: #0071e3;
  color: #fff;
  padding: 12px 20px;
  border-radius: 980px;
  font-size: 17px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #0077ed;
  text-decoration: none;
}

.btn-secondary {
  display: inline-block;
  color: #0071e3;
  font-size: 17px;
  text-decoration: none;
}

.btn-secondary:hover {
  text-decoration: underline;
}

.cta-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
```

---

## 6. Color Palette

```css
:root {
  /* Primary */
  --apple-blue: #0071e3;
  --apple-blue-hover: #0077ed;

  /* Dark Theme */
  --bg-dark: #000000;
  --text-light: #f5f5f7;
  --text-gray: #86868b;
  --nav-dark: rgba(0, 0, 0, 0.8);

  /* Light Theme */
  --bg-light: #ffffff;
  --bg-light-gray: #f5f5f7;
  --text-dark: #1d1d1f;
  --nav-light: rgba(255, 255, 255, 0.72);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-subtle-light: rgba(0, 0, 0, 0.1);
}
```

---

## 7. Responsive Considerations

### Mobile-First Breakpoints
```css
/* Base styles (mobile) */
.section {
  padding: 60px 20px;
}

/* Tablet */
@media (min-width: 768px) {
  .section {
    padding: 80px 40px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .section {
    padding: 100px 60px;
  }
}
```

### Typography Fluid Scaling
```css
.fluid-type {
  font-size: clamp(32px, 5vw, 64px);
  line-height: 1.1;
}
```
