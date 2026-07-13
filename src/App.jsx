import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, Truck, Zap, Activity, Battery, CheckCircle, X, Check } from 'lucide-react';
import './index.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Web3Forms API Integration
    // Replace this string with your actual access key from web3forms.com
    const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
    const data = new FormData();
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "🚨 NEW COD ORDER: AuraPosture BD");
    data.append("Customer Name", formData.name);
    data.append("Phone Number", formData.phone);
    data.append("Full Address", formData.address);
    data.append("Product", "Smart Posture Corrector (৳1,490)");
    data.append("Payment", "Cash on Delivery");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
      } else {
        alert("Something went wrong. Please check your internet connection.");
        setFormStatus('idle');
      }
    } catch (error) {
      alert("Error submitting the order. Please try again.");
      setFormStatus('idle');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setFormStatus('idle'), 500); // Reset form status after modal closes
  };

  return (
    <>
      <header>
        <nav>
          <a href="#" className="logo">
            <Activity color="#2563eb" />
            <span>AuraPosture BD</span>
          </a>
          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            অর্ডার করুন
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
                🚚 ক্যাশ অন ডেলিভারি সারা বাংলাদেশে
              </div>
              <h1>Stop Slouching. Start Living.</h1>
              <p>
                The Smart Posture Corrector gently trains your muscles to maintain perfect alignment, eliminating back pain and boosting your confidence—all with a discreet, intelligent design.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <ShoppingCart size={20} style={{ marginRight: '0.5rem' }} />
                  Order Now (Cash on Delivery)
                </button>
                <span style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  ৳1,490 <span style={{ textDecoration: 'line-through', opacity: 0.5, fontSize: '0.875rem', fontWeight: 'normal' }}>৳2,500</span>
                </span>
              </div>
            </div>
            
            <div className="hero-image glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)' }}>
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
            <span>১০০% কোয়ালিটি গ্যারান্টি</span>
          </div>
          <div className="trust-item">
            <Truck size={24} color="#60a5fa" />
            <span>সারা বাংলাদেশে হোম ডেলিভারি</span>
          </div>
          <div className="trust-item">
            <CheckCircle size={24} color="#60a5fa" />
            <span>প্রোডাক্ট হাতে পেয়ে টাকা দিন</span>
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
            <p style={{ marginBottom: '2rem' }}>Order today and pay when the product reaches your door.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ transform: 'scale(1.1)' }}>
              Order Now - ৳1,490
            </button>
          </div>
        </section>

        {/* Secure Checkout Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content glass-panel">
              <button className="close-modal" onClick={closeModal}>
                <X size={24} />
              </button>
              
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', marginBottom: '1.5rem' }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ marginBottom: '1rem', color: '#4ade80' }}>Order Confirmed!</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                    Thank you, {formData.name}. Your order has been securely received. We will call you shortly to confirm delivery!
                  </p>
                  <button onClick={closeModal} className="btn btn-primary" style={{ width: '100%' }}>
                    Back to Store
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Secure Checkout 🔒</h3>
                  <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    Please provide your delivery details. You will pay <strong>৳1,490</strong> via Cash on Delivery when the courier arrives.
                  </p>
                  
                  <form onSubmit={submitOrder} className="checkout-form">
                    <div className="form-group">
                      <label>Full Name (আপনার নাম)</label>
                      <input type="text" name="name" required placeholder="e.g. Rahim Rahman" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label>Phone Number (মোবাইল নাম্বার)</label>
                      <input type="tel" name="phone" required placeholder="01XXXXXXXXX" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label>Full Delivery Address (সম্পূর্ণ ঠিকানা)</label>
                      <textarea name="address" required placeholder="House, Road, Area, City" rows="3" onChange={handleInputChange}></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', opacity: formStatus === 'submitting' ? 0.7 : 1 }} disabled={formStatus === 'submitting'}>
                      {formStatus === 'submitting' ? 'Processing...' : 'Confirm Secure Order'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
