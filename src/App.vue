<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <Nav />
    <Summary />
    <About />
    <Skills />
    <Project/>
    <Contact />

    <ChatBot/>
    <CanvasAnimation />
  </div>
</template>

<script>
import Nav from "./components/nav.vue";
import Summary from "./components/summary.vue";
import About from "./components/about.vue";
import Skills from "./components/skills.vue";
import Project from "./components/project.vue";
import Contact from "./components/contact.vue";
import CanvasAnimation from "./components/features/canvas.vue";
import { onMounted } from "vue";
import AOS from "aos";
import ChatBot from "./components/features/chatbot.vue";

export default {
  components: {
    Nav,
    Summary,
    About,
    Skills,
    Project,
    Contact,
    ChatBot,
    CanvasAnimation,
  },
  data() {
    return {
      isScrollDown: false,
      darkMode: sessionStorage.getItem('darkMode') === 'true',
    };
  },
  mounted() {
    Zoomtastic.mount({
      size: '95%',
      easing: 'ease',
      duration: 300,
      background: 'rgba(0, 0, 0, 0.9)',
      filter: 'drop-shadow(0 2px 16px rgba(0, 0, 0, 0.3))',
      animation: 'slide'
    });

    Zoomtastic.listen('[zoomtastic]', 'src');

    AOS.init();
  },
};
</script>

<style lang="scss">
* { 
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  transition: width 1s ease, height 1s ease, background-color 1s ease;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px;
}
::selection {
  background-color: lightgrey;
}

.dark-mode {
  background: black;
  color:white;
  #navigation{
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5) !important;
  }
  .vue-typer {
    .custom.char {
      color: white;
    }
  }
  .btn, .btn-color-2{
    color: white !important;
  }
}


</style>
