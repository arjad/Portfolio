<template>
  <div id="navigation" class="py-3 shadow nav">
    <div class="container d-flex- justify-content-between">
      <h2 class="d-inline">Arjad's Portfolio</h2>
      <ul class="d-flex mb-0">
        <li class="p-2 scroll-to" @click="scrollToSection('summary')">Summary</li>
        <li class="p-2 scroll-to" @click="scrollToSection('about')">About</li>
        <li class="p-2 scroll-to" @click="scrollToSection('practicle_skills')">Skills</li>
        <li class="p-2 scroll-to" @click="scrollToSection('projects')">Projects</li>
        <li class="p-2 scroll-to" @click="scrollToSection('contact')">Contact</li>

        <li class="pt-2 pl-3">
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
  methods: {
    toggleDarkMode() {
      sessionStorage.setItem('darkMode', this.darkMode.toString());

      if (this.darkMode) {
        $('#app').addClass('dark-mode');
      } else {
        $('#app').removeClass('dark-mode');
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
#navigation {
  ul {
    float: right;
    list-style: none;

    li {
      cursor: pointer;
      &:hover {
        color: #47BA87;
        text-decoration: underline;
      }
    }

    .checkbox {
      opacity: 0;
      position: absolute;
    }

    .checkbox-label {
      background-color: #111;
      width: 50px;
      height: 26px;
      border-radius: 50px;
      position: relative;
      padding: 5px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .ball {
        background-color: #fff;
        width: 22px;
        height: 22px;
        position: absolute;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        transition: transform 0.2s linear;
      }
    }

    .fa-moon {color: #f1c40f;}
    .fa-sun {color: #f39c12;}

    .checkbox:checked + .checkbox-label .ball {
      transform: translateX(24px);
    }
  }

  @media screen and (max-width: 375px) {
    ul li:first-child {
      display: none;
    }
  }
}
</style>
