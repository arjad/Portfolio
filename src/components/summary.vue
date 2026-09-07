<template>
  <section id="summary" class="hero-section">
    <div class="hero-content d-flex flex-column align-items-center justify-content-center text-center">
      <!-- Main Heading & Subtitle -->
      <h1 class="hero-title">Arjad Gohar</h1>
      <h2 class="hero-subtitle">Agentic AI & Full Stack Developer</h2>
      <p class="hero-tagline">I build fast, modern websites designed to <span class="highlight-text">help businesses grow.</span></p>

      <!-- Call to Action Buttons -->
      <div class="hero-buttons d-flex gap-3 mt-4 mb-4">
        <button class="btn-hero btn-filled" @click="scrollToSection('projects')">VIEW WORK</button>
        <button class="btn-hero btn-outlined" @click="scrollToSection('contact')">CONTACT</button>
      </div>

      </div>
    </div>

    <!-- Featured Overlapping Video Showcase (Half on Hero, Half Below) -->
    <div class="overlapping-video-wrapper">
      <div class="video-showcase-card">
        <video autoplay loop muted playsinline controls class="showcase-video">
          <source src="/ok.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 90vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 100px 20px 160px 20px;
  margin-bottom: 220px;
}

.overlapping-video-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 20;
  width: 90%;
  max-width: 860px;
}

.video-showcase-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid rgba(66, 184, 131, 0.4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(66, 184, 131, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 45px rgba(66, 184, 131, 0.45);
  }
}

.showcase-video {
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  display: block;
}



.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main typography and elements */
.hero-title {
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111827;
  margin-bottom: 1rem;
}

.highlight-text {
  color: #42b883;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(66, 184, 131, 0.4);
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #111827;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.hero-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: #374151;
  max-width: 650px;
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
  line-height: 1.5;
}

/* Hero CTA buttons */
.hero-buttons {
  gap: 1.5rem;
}

.btn-hero {
  padding: 0.85rem 2.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
}

.btn-filled {
  background: #42b883;
  color: #ffffff;
  border: 1px solid #42b883;
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.3);

  &:hover {
    background: transparent;
    color: #42b883;
    border-color: #42b883;
    box-shadow: 0 4px 25px rgba(66, 184, 131, 0.4);
    transform: translateY(-2px);
  }
}

.btn-outlined {
  background: transparent;
  color: #111827;
  border: 1px solid rgba(17, 24, 39, 0.3);

  &:hover {
    border-color: #111827;
    background: rgba(17, 24, 39, 0.05);
    transform: translateY(-2px);
  }
}

/* Floating Card Left (Dev Joke) */
.floating-card {
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 1.25rem;
  width: 260px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  p {
    margin: 0;
    color: #4b5563;
    font-size: 0.95rem;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
  }
}

/* Floating Card Right (Quotes) */
.floating-card-quote {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 280px;
  text-align: right;

  .quote-text {
    display: block;
    color: #4b5563;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media screen and (max-width: 992px) {
  .hero-title {
    font-size: 4rem;
  }
  .floating-card, .floating-card-quote {
    position: static;
    transform: none;
    margin: 1.5rem auto;
    width: 90%;
    max-width: 350px;
    text-align: center;
  }
  .floating-card-quote {
    text-align: center;
  }
  .hero-content {
    flex-direction: column;
  }
}

@media screen and (max-width: 576px) {
  .hero-title {
    font-size: 3rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 250px;
  }
}
</style>

<style lang="scss">
.dark-mode .hero-title {
  color: #ffffff;
}
.dark-mode .hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.dark-mode .hero-tagline {
  color: rgba(255, 255, 255, 0.7);
}
.dark-mode #summary .btn-outlined {
  color: #ffffff;
  border-color: #ffffff;
}
.dark-mode #summary .btn-outlined:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
