<template>
  <div id="navigation" class="nav-container">
    <div class="navbar-pill d-flex justify-content-between align-items-center">
      <div class="profile-brand d-flex align-items-center" @click="scrollToSection('summary')">
        <img src="../assets/me.png" alt="Profile" class="profile-img" />
        <span class="profile-name">My Profile</span>
      </div>
      <ul class="d-flex mb-0 align-items-center nav-links">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: sessionStorage.getItem('darkMode') === 'true',
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
  .nav-links {
    gap: 0.5rem;
    li.scroll-to {
      font-size: 0.8rem;
      padding: 0.25rem !important;
    }
  }
  .navbar-pill {
    padding: 0.5rem 1rem;
  }
  .profile-name {
    display: none;
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

