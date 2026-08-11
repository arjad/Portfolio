<template>
  <div id="navigation" class="nav-container">
    <div class="navbar-pill d-flex justify-content-between align-items-center">
      <!-- Profile Brand -->
      <div class="profile-brand d-flex align-items-center" @click="scrollToSection('summary')">
        <img src="../assets/me.png" alt="Profile" class="profile-img" />
        <span class="profile-name">Arjad Gohar</span>
      </div>

      <!-- Desktop Nav Links (Hidden on Mobile) -->
      <ul class="d-none d-md-flex mb-0 align-items-center nav-links">
        <li class="p-2 scroll-to" @click="scrollToSection('about')">About</li>
        <li class="p-2 scroll-to" @click="scrollToSection('practicle_skills')">Skills</li>
        <li class="p-2 scroll-to" @click="scrollToSection('projects')">Projects</li>
        <li class="p-2 scroll-to" @click="scrollToSection('journey')">Journey</li>
        <li class="p-2 scroll-to" @click="scrollToSection('contact')">Contact</li>

        <li class="pt-1 pl-3">
          <input type="checkbox" class="checkbox" id="checkbox" v-model="darkMode" @change="toggleDarkMode()">
          <label for="checkbox" class="checkbox-label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
          </label>
        </li>
      </ul>

      <!-- Mobile Hamburger Toggle Button -->
      <button class="hamburger-btn d-flex d-md-none align-items-center justify-content-center" @click="isMenuOpen = true" aria-label="Open Navigation Menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Side Popup Drawer -->
    <transition name="slide-side">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <div class="drawer-header d-flex justify-content-between align-items-center p-4 border-bottom border-secondary border-opacity-25">
          <span class="profile-name text-white fw-bold fs-5">Arjad Gohar</span>
          <button class="close-btn" @click="isMenuOpen = false" aria-label="Close Navigation Menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul class="drawer-links list-unstyled p-4 mb-0">
          <li class="drawer-item py-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center" @click="handleMobileNav('about')">
            <i class="fa-solid fa-user me-3 text-muted"></i><span>About</span>
          </li>
          <li class="drawer-item py-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center" @click="handleMobileNav('practicle_skills')">
            <i class="fa-solid fa-code me-3 text-muted"></i><span>Skills</span>
          </li>
          <li class="drawer-item py-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center" @click="handleMobileNav('projects')">
            <i class="fa-solid fa-briefcase me-3 text-muted"></i><span>Projects</span>
          </li>
          <li class="drawer-item py-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center" @click="handleMobileNav('journey')">
            <i class="fa-solid fa-timeline me-3 text-muted"></i><span>Journey</span>
          </li>
          <li class="drawer-item py-3 border-bottom border-secondary border-opacity-25 d-flex align-items-center" @click="handleMobileNav('contact')">
            <i class="fa-solid fa-envelope me-3 text-muted"></i><span>Contact</span>
          </li>
          
          <li class="drawer-item pt-4 d-flex justify-content-between align-items-center">
            <span class="text-white">Dark Mode</span>
            <div>
              <input type="checkbox" class="checkbox" id="checkbox-mobile" v-model="darkMode" @change="toggleDarkMode()">
              <label for="checkbox-mobile" class="checkbox-label">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <span class="ball"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Backdrop Overlay for Mobile Drawer -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="drawer-backdrop" @click="isMenuOpen = false"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: sessionStorage.getItem('darkMode') !== 'false',
      isMenuOpen: false
    };
  },
  mounted() {
    // Force dark mode on mount to align with the premium dark theme
    if (sessionStorage.getItem('darkMode') === null) {
      this.darkMode = true;
      this.toggleDarkMode();
    }
  },
  methods: {
    toggleDarkMode() {
      sessionStorage.setItem('darkMode', this.darkMode.toString());
      const appEl = document.getElementById('app');
      if (this.darkMode) {
        if (appEl) appEl.classList.add('dark-mode');
      } else {
        if (appEl) appEl.classList.remove('dark-mode');
      }
    },
    handleMobileNav(sectionId) {
      this.isMenuOpen = false;
      this.scrollToSection(sectionId);
    },
    scrollToSection(sectionId) {
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/', hash: '#' + sectionId });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.navbar-pill {
  background: rgba(18, 12, 38, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 0.5rem 2rem;
  width: 100%;
  max-width: 1100px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s ease;
}

.profile-brand {
  cursor: pointer;
  gap: 0.75rem;

  .profile-img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .profile-name {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
  }
}

.nav-links {
  list-style: none;
  gap: 1.5rem;

  li.scroll-to {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
}

.hamburger-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 290px;
  max-width: 85vw;
  height: 100vh;
  background: rgba(18, 12, 38, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  flex-direction: column;
}

.drawer-header {
  .close-btn {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }
}

.drawer-item {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  i {
    margin-right: 1.25rem !important;
    width: 22px;
    text-align: center;
  }

  &:hover {
    color: #ffffff;
    padding-left: 0.5rem;
  }
}

.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1999;
}

.slide-side-enter-active, .slide-side-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-side-enter, .slide-side-leave-to {
  transform: translateX(100%);
}

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;

  .ball {
    background-color: #fff;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
}

.fa-moon { color: #f1c40f; font-size: 0.85rem; }
.fa-sun { color: #f39c12; font-size: 0.85rem; }

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

@media screen and (max-width: 768px) {
  .navbar-pill {
    padding: 0.5rem 1.25rem;
  }
}
</style>

<style lang="scss">
.dark-mode {
  .navbar-pill {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>

