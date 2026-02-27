import React, { useState } from 'react';

const APK_DOWNLOAD_URL =
  import.meta.env.VITE_LAKBAY_APK_URL ||
  'https://expo.dev/artifacts/eas/27eg5cwARSDqfjbd5QRGiT.apk';

type Page = 'home' | 'about' | 'contact' | 'download';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleDownload = () => {
    window.location.href = APK_DOWNLOAD_URL;
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-brand" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <div className="nav-logo">LC</div>
          <div className="nav-text">
            <span className="nav-title">Lakbay CamSur</span>
            <span className="nav-subtitle">Smart Travel Companion</span>
          </div>
        </div>
        <nav className="nav-menu">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => navigateTo('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => navigateTo('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => navigateTo('contact')}
          >
            Contact
          </button>
          <button 
            className={`nav-link ${currentPage === 'download' ? 'active' : ''}`}
            onClick={() => navigateTo('download')}
          >
            Download
          </button>
        </nav>
      </header>

      <main className="main-content">
        {currentPage === 'home' && <HomePage onDownload={handleDownload} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'download' && <DownloadPage onDownload={handleDownload} />}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">LC</div>
              <div className="footer-brand-text">
                <h3>Lakbay CamSur</h3>
                <p>Smart Travel Companion</p>
              </div>
            </div>
            <p className="footer-description">
              Your intelligent travel companion for exploring the beautiful province of Camarines Sur. 
              Discover hidden gems, plan perfect itineraries, and navigate with confidence.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => navigateTo('home')}>Home</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('about')}>About</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>Contact</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('download')}>Download</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><span>Nature & Adventure</span></li>
              <li><span>Local Cuisine</span></li>
              <li><span>Heritage Sites</span></li>
              <li><span>Resorts & Relaxation</span></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-contact-icon">📧</span>
                <a href="mailto:support@lakbaycamsur.com">support@lakbaycamsur.com</a>
              </li>
              <li>
                <span className="footer-contact-icon">💬</span>
                <a href="mailto:feedback@lakbaycamsur.com">feedback@lakbaycamsur.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lakbay CamSur. All rights reserved.</p>
          <p className="footer-sub">
            Admins manage destinations and analytics in the separate Admin Web Panel.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
function HomePage({ onDownload }: { onDownload: () => void }) {
  return (
    <>
      <section className="hero">
        <section className="hero-left">
          <span className="pill">Discover • Plan • Explore</span>
          <h1>Experience CamSur with a smart, guided itinerary.</h1>
          <p className="hero-lead">
            Lakbay CamSur helps travelers and locals discover hidden gems,
            plan accurate itineraries, and navigate with confidence—powered by
            real data from the admin portal and your mobile app.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onDownload}>
              Download Lakbay CamSur APK
            </button>
            <div className="hero-note">
              <span className="dot" />
              <span>Android only • Install the APK to get started</span>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-label-top">CURATED</span>
              <span className="stat-label-main">DESTINATIONS</span>
              <span className="stat-value">80+</span>
              <span className="stat-meta">Nature, food, heritage, resorts</span>
            </div>
            <div className="stat-card">
              <span className="stat-label-top">SMART</span>
              <span className="stat-label-main">ITINERARIES</span>
              <span className="stat-value">Auto</span>
              <span className="stat-meta">
                Budget, distance, popularity &amp; time of day
              </span>
            </div>
            <div className="stat-card">
              <span className="stat-label-top">REAL‑TIME</span>
              <span className="stat-label-main">INSIGHTS</span>
              <span className="stat-value">Live</span>
              <span className="stat-meta">Views, visits &amp; confirmed trips</span>
            </div>
          </div>
        </section>

        <section className="hero-right">
          <div className="phone-shell">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="screen-header">
                <span className="screen-title">Lakbay CamSur</span>
                <span className="screen-subtitle">Home • Recommended for you</span>
              </div>

              <div className="screen-card primary">
                <div className="screen-card-tag">Plan your trip</div>
                <h2>Create a smart itinerary in minutes.</h2>
                <p>
                  Choose your category, budget, municipality and group size. The
                  app builds a realistic route that respects opening hours and
                  your budget per person.
                </p>
                <ul className="screen-list">
                  <li>Multi‑stop itinerary with travel time</li>
                  <li>Teal gradient design to match the mobile app</li>
                  <li>One‑tap navigation via Google Maps</li>
                </ul>
              </div>

              <div className="screen-row">
                <div className="screen-mini-card">
                  <span className="mini-label">Real‑time analytics</span>
                  <span className="mini-value">17 views • 2 visits</span>
                  <span className="mini-meta">Synced from the admin dashboard</span>
                </div>
                <div className="screen-mini-card">
                  <span className="mini-label">Offline‑friendly</span>
                  <span className="mini-meta">
                    Events are queued and synced when you reconnect.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Lakbay CamSur?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Smart Itinerary Planning</h3>
              <p>
                Our advanced algorithm creates personalized itineraries based on your preferences,
                budget, and time constraints. Get the most out of your CamSur adventure.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>80+ Curated Destinations</h3>
              <p>
                Discover hidden gems, popular attractions, heritage sites, and local favorites
                across Naga, Pili, and Libmanan municipalities.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Budget-Friendly Planning</h3>
              <p>
                Set your budget per person and let the app suggest destinations that fit
                your financial plan without compromising on experience.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Real-Time Information</h3>
              <p>
                Get up-to-date operating hours, best times to visit, and real-time insights
                from other travelers to plan your perfect trip.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3>Seamless Navigation</h3>
              <p>
                One-tap integration with Google Maps for easy navigation. Get suggested stops
                along your route to maximize your journey.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Offline Capable</h3>
              <p>
                Access destination information even without internet. Your data syncs when
                you reconnect, ensuring you never lose your travel plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations-preview">
        <div className="section-container">
          <h2 className="section-title">Explore Camarines Sur</h2>
          <p className="section-subtitle">
            From pristine waterfalls to historical landmarks, CamSur offers diverse experiences
            for every type of traveler.
          </p>
          <div className="destinations-grid">
            <div className="destination-preview-card">
              <div className="preview-icon">🏞️</div>
              <h3>Nature & Adventure</h3>
              <p>
                Discover Malabsay Falls, Libmanan Caves, Poro Beach, and more natural wonders
                perfect for adventure seekers and nature lovers.
              </p>
            </div>
            <div className="destination-preview-card">
              <div className="preview-icon">🍜</div>
              <h3>Local Cuisine</h3>
              <p>
                Taste authentic Bicolano dishes, local restaurants, and must-try food spots
                that showcase the region's rich culinary heritage.
              </p>
            </div>
            <div className="destination-preview-card">
              <div className="preview-icon">🏛️</div>
              <h3>Heritage Sites</h3>
              <p>
                Visit historical landmarks, churches, museums, and cultural sites that tell
                the story of Camarines Sur's rich history.
              </p>
            </div>
            <div className="destination-preview-card">
              <div className="preview-icon">🏖️</div>
              <h3>Resorts & Relaxation</h3>
              <p>
                Unwind at beautiful resorts, hot springs, and recreational facilities perfect
                for families and groups looking to relax and recharge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="page-content">
      <section className="about-hero">
        <div className="section-container">
          <h1>About Lakbay CamSur</h1>
          <p className="lead-text">
            Your intelligent travel companion for exploring the beautiful province of Camarines Sur.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <h2>Our Mission</h2>
          <p>
            Lakbay CamSur was created to make travel planning effortless and enjoyable for both
            locals and tourists exploring Camarines Sur. We believe that everyone should have
            access to accurate, up-to-date information about destinations, making it easier to
            discover hidden gems and plan memorable trips.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <h2>About Camarines Sur</h2>
          <p>
            Camarines Sur, often called "CamSur," is a province in the Bicol Region of the Philippines.
            Known for its stunning natural landscapes, rich cultural heritage, and warm hospitality,
            CamSur offers diverse experiences for every traveler.
          </p>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>🏛️ Historical Significance</h3>
              <p>
                Home to historical landmarks like the Naga Metropolitan Cathedral, Peñafrancia Shrine,
                and various museums that preserve the region's rich cultural heritage.
              </p>
            </div>
            <div className="info-card">
              <h3>🏞️ Natural Wonders</h3>
              <p>
                From the world-class CamSur Watersports Complex (CWC) to serene waterfalls like
                Malabsay Falls and Engkanto Falls, nature enthusiasts will find plenty to explore.
              </p>
            </div>
            <div className="info-card">
              <h3>🍜 Culinary Delights</h3>
              <p>
                Experience authentic Bicolano cuisine known for its spicy flavors, coconut-based dishes,
                and unique local specialties that reflect the region's culinary traditions.
              </p>
            </div>
            <div className="info-card">
              <h3>🏖️ Resorts & Recreation</h3>
              <p>
                Numerous resorts, hot springs, and recreational facilities offer perfect spots for
                relaxation, family outings, and group activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <h2>Key Municipalities</h2>
          <div className="municipality-grid">
            <div className="municipality-card">
              <h3>Naga City</h3>
              <p>
                The heart of CamSur, Naga City is known for its religious sites, urban parks,
                and vibrant local culture. Visit the Naga Metropolitan Cathedral, explore the
                Naga Ecological Park, or discover local food spots.
              </p>
            </div>
            <div className="municipality-card">
              <h3>Pili</h3>
              <p>
                Home to the famous CamSur Watersports Complex (CWC), Pili offers adventure activities,
                resorts, and natural attractions like Shower Falls and Lago del Rey.
              </p>
            </div>
            <div className="municipality-card">
              <h3>Libmanan</h3>
              <p>
                Known for its natural attractions including Libmanan Caves National Park, Poro Beach,
                and hidden springs. Perfect for nature lovers and adventure seekers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-container">
          <h2>How It Works</h2>
          <div className="how-it-works">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Download & Install</h3>
              <p>Get the Lakbay CamSur APK and install it on your Android device.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Set Your Preferences</h3>
              <p>Choose your interests and personalize your experience during onboarding.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Discover Destinations</h3>
              <p>Browse through 80+ curated destinations across different categories.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Plan Your Trip</h3>
              <p>Use our smart itinerary planner to create your perfect travel route.</p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <h3>Explore & Navigate</h3>
              <p>Navigate with Google Maps integration and discover suggested stops along the way.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="page-content">
      <section className="contact-hero">
        <div className="section-container">
          <h1>Get in Touch</h1>
          <p className="lead-text">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>For general inquiries and support</p>
              <a href="mailto:support@lakbaycamsur.com" className="contact-link">
                support@lakbaycamsur.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Feedback & Suggestions</h3>
              <p>Help us improve Lakbay CamSur</p>
              <a href="mailto:feedback@lakbaycamsur.com" className="contact-link">
                feedback@lakbaycamsur.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Follow Us</h3>
              <p>Stay updated with our latest news</p>
              <div className="social-links">
                <span className="social-placeholder">Social media links coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Is Lakbay CamSur free to use?</h3>
              <p>
                Yes! Lakbay CamSur is completely free to download and use. There are no hidden fees
                or subscription costs.
              </p>
            </div>
            <div className="faq-item">
              <h3>What devices are supported?</h3>
              <p>
                Currently, Lakbay CamSur is available for Android devices. You can download the APK
                file and install it directly on your Android phone or tablet.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need internet to use the app?</h3>
              <p>
                While internet connection enhances the experience with real-time updates, many features
                work offline. Destination information is cached for offline access.
              </p>
            </div>
            <div className="faq-item">
              <h3>How accurate is the itinerary planning?</h3>
              <p>
                Our algorithm considers operating hours, distance, budget constraints, and popularity
                to generate realistic and optimized itineraries. However, we recommend verifying
                operating hours before your visit.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I suggest new destinations?</h3>
              <p>
                Absolutely! We welcome suggestions for new destinations. Please contact us through
                our feedback email with details about the location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Download Page Component
function DownloadPage({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="page-content">
      <section className="download-hero">
        <div className="section-container">
          <h1>Download Lakbay CamSur</h1>
          <p className="lead-text">
            Get started on your CamSur adventure today. Download the app and start exploring!
          </p>
        </div>
      </section>

      <section className="download-section">
        <div className="section-container">
          <div className="download-card">
            <div className="download-icon">📱</div>
            <h2>Android APK Download</h2>
            <p>
              Lakbay CamSur is currently available for Android devices. Download the APK file
              and install it directly on your device.
            </p>
            
            <button className="btn-primary btn-large" onClick={onDownload}>
              Download APK Now
            </button>

            <div className="download-instructions">
              <h3>Installation Instructions</h3>
              <ol className="instructions-list">
                <li>
                  <strong>Enable Unknown Sources:</strong> Go to Settings → Security → Enable
                  "Install from Unknown Sources" or "Allow from this source"
                </li>
                <li>
                  <strong>Download the APK:</strong> Click the download button above to get the APK file
                </li>
                <li>
                  <strong>Install:</strong> Open the downloaded APK file and follow the installation prompts
                </li>
                <li>
                  <strong>Launch:</strong> Once installed, open Lakbay CamSur and start exploring!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="section-container">
          <h2>System Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <div className="requirement-icon">📱</div>
              <h3>Operating System</h3>
              <p>Android 6.0 (Marshmallow) or higher</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">💾</div>
              <h3>Storage Space</h3>
              <p>At least 50 MB of free storage</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">📶</div>
              <h3>Internet Connection</h3>
              <p>Recommended for full features (offline mode available)</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">📍</div>
              <h3>Location Services</h3>
              <p>Optional but recommended for navigation features</p>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="section-container">
          <h2>What's Next After Installation?</h2>
          <div className="next-steps">
            <div className="step-item">
              <div className="step-icon">1️⃣</div>
              <div>
                <h3>Complete Onboarding</h3>
                <p>Set your preferences and interests to personalize your experience</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">2️⃣</div>
              <div>
                <h3>Browse Destinations</h3>
                <p>Explore 80+ curated destinations across Nature, Food, Heritage, and Resorts</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">3️⃣</div>
              <div>
                <h3>Plan Your First Trip</h3>
                <p>Use the smart itinerary planner to create your perfect CamSur adventure</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">4️⃣</div>
              <div>
                <h3>Start Exploring</h3>
                <p>Navigate to destinations with integrated Google Maps and discover hidden gems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="section-container">
          <div className="download-note">
            <h3>⚠️ Important Notes</h3>
            <ul>
              <li>
                Make sure to download the APK only from this official website to ensure security
              </li>
              <li>
                The app may require location permissions for navigation features - you can grant
                or deny these permissions
              </li>
              <li>
                If you encounter any installation issues, ensure your device meets the system
                requirements and that "Unknown Sources" is enabled
              </li>
              <li>
                For the best experience, keep the app updated to the latest version
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}