import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, Truck, Zap, Activity, Battery, CheckCircle } from 'lucide-react';
import './index.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header>
        <nav>
          <a href="#" className="logo">
            <Activity color="#2563eb" />
            <span>AuraPosture</span>
          </a>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            Buy Now
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg-glow"></div>
          <div className="container hero-content">
            <div className="hero-text">
              <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(37, 99, 235, 0.1)', color: '#60a5fa', borderRadius: '999px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                🌟 10,000+ Happy Customers
              </div>
              <h1>Stop Slouching. Start Living.</h1>
              <p>
                The Smart Posture Corrector gently trains your muscles to maintain perfect alignment, eliminating back pain and boosting your confidence—all with a discreet, intelligent design.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="#checkout" 
                  className="btn btn-primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ShoppingCart size={20} style={{ marginRight: '0.5rem' }} />
                  Claim 50% Off Today
                </a>
                <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  Only $39.99 <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>$79.99</span>
                </span>
              </div>
            </div>
            
            <div className="hero-image glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)' }}>
              {/* Placeholder for the actual product image. We use a sleek abstract representation or an unspalsh image */}
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Smart Posture Corrector in use" 
                style={{ 
                  borderRadius: '1rem', 
                  filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                  transition: 'all 0.3s ease'
                }} 
              />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="trust-bar">
          <div className="trust-item">
            <ShieldCheck size={24} color="#60a5fa" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="trust-item">
            <Truck size={24} color="#60a5fa" />
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="trust-item">
            <CheckCircle size={24} color="#60a5fa" />
            <span>Medical Grade Materials</span>
          </div>
        </div>

        {/* Features Section */}
        <section className="container" id="features">
          <h2>Why It Works Better Than Traditional Braces</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Traditional braces weaken your muscles by holding you up. Our smart sensor trains your own muscles to hold perfect posture naturally.
          </p>
          
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Intelligent Biofeedback</h3>
              <p>Vibrates gently the second you slouch past 25 degrees, creating instant muscle memory.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Activity size={32} />
              </div>
              <h3>Invisible Design</h3>
              <p>Ultra-sleek and lightweight. Wear it under your shirt to the office or the gym without anyone knowing.</p>
            </div>

            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Battery size={32} />
              </div>
              <h3>15-Day Battery Life</h3>
              <p>A single 1-hour USB charge lasts up to 15 days of continuous use. Charger included.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container" style={{ textAlign: 'center', paddingBottom: '6rem' }}>
          <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(15, 23, 42, 0) 100%)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to stand taller?</h2>
            <p style={{ marginBottom: '2rem' }}>Join 10,000+ others living pain-free.</p>
            <a href="#checkout" className="btn btn-primary" style={{ transform: 'scale(1.1)' }}>
              Get Yours For $39.99
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>Sale ends at midnight.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
