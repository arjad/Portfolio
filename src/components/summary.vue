<template>
  <section id="summary" class="hero-section">
    <!-- Glowing background orbs -->
    <div class="orb orb-purple"></div>
    <div class="orb orb-blue"></div>

    <div class="hero-content d-flex flex-column align-items-center justify-content-center text-center">
      <!-- Floating Dev Joke Card (Left) -->
      <div class="floating-card card-left">
        <transition name="fade" mode="out-in">
          <p :key="currentJoke">{{ currentJoke }}</p>
        </transition>
      </div>

      <!-- Main Heading & Subtitle -->
      <h1 class="hero-title">Arjad Gohar</h1>
      <h2 class="hero-subtitle">Agentic AI & Full Stack Developer</h2>
      <p class="hero-tagline">I build fast, modern websites designed to <span class="highlight-text">help businesses grow.</span></p>

      <!-- Call to Action Buttons -->
      <div class="hero-buttons d-flex gap-3 mt-4 mb-4">
        <button class="btn-hero btn-filled" @click="scrollToSection('projects')">VIEW WORK</button>
        <button class="btn-hero btn-outlined" @click="scrollToSection('contact')">CONTACT</button>
      </div>

      <!-- Floating Quote Card (Right) -->
      <div class="floating-card-quote card-right">
        <transition name="fade" mode="out-in">
          <span :key="currentQuote" class="quote-text">
            " {{ currentQuote }} "
          </span>
        </transition>
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
  data() {
    return {
      jokes: [
        "My code works... on my machine.",
        "I debug by yelling at my screen.",
        "Professional coffee drinker.",
        "There are 10 types of people: those who understand binary, and those who don't."
      ],
      quotes: [
        "The only way to do great work is to love what you do.",
        "Don't stop when you're tired. Stop when you're done.",
        "Believe you can and you're halfway there.",
        "Coding is the closest thing we have to magic."
      ],
      currentJokeIndex: 0,
      currentQuoteIndex: 0,
      jokeTimer: null,
      quoteTimer: null
    };
  },
  computed: {
    currentJoke() {
      return this.jokes[this.currentJokeIndex];
    },
    currentQuote() {
      return this.quotes[this.currentQuoteIndex];
    }
  },
  mounted() {
    this.jokeTimer = setInterval(() => {
      this.currentJokeIndex = (this.currentJokeIndex + 1) % this.jokes.length;
    }, 4000);

    this.quoteTimer = setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    }, 4500);
  },
  beforeDestroy() {
    clearInterval(this.jokeTimer);
    clearInterval(this.quoteTimer);
  },
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
  background: radial-gradient(circle at 50% 50%, #150f30 0%, #090514 100%);
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
  background: rgba(18, 12, 38, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid rgba(168, 85, 247, 0.4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(168, 85, 247, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 45px rgba(168, 85, 247, 0.45);
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
  background: linear-gradient(135deg, #c084fc 0%, #ffffff 60%, #cbd5e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.highlight-text {
  color: #c084fc;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(192, 132, 252, 0.4);
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.hero-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
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
  background: #ffffff;
  color: #0d0c15;
  border: 1px solid #ffffff;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);

  &:hover {
    background: transparent;
    color: #ffffff;
    box-shadow: 0 4px 25px rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
}

.btn-outlined {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
}

/* Floating Card Left (Dev Joke) */
.floating-card {
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 1.25rem;
  width: 260px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
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
    color: rgba(255, 255, 255, 0.65);
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
/* Non-scoped: @keyframes MUST be non-scoped in Vue 2 or they silently break */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
  will-change: transform;
  transition: none !important;
}

.orb-purple {
  width: 350px;
  height: 350px;
  background: #a855f7;
  bottom: 10%;
  left: 10%;
  animation: floatPurple 4s ease-in-out infinite !important;
}

.orb-blue {
  width: 400px;
  height: 400px;
  background: #3b82f6;
  top: 15%;
  right: 10%;
  animation: floatBlue 5s ease-in-out infinite !important;
}

@keyframes floatPurple {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  33%  { transform: translate3d(120px, -60px, 0) scale(1.25); }
  66%  { transform: translate3d(-60px, 80px, 0) scale(0.9); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

@keyframes floatBlue {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-150px, 100px, 0) scale(1.2); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}
</style>
