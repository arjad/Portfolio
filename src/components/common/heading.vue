<template>
  <section id="heading-comp" class="container">
    <p id="skills" class="text-center mt-5">{{ subtitle }}</p>
    <h1 class="title text-center mb-5">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'experience',
    };
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  #heading-comp{
    margin-top:100px;
    h1{
      font-family: 'Helvetica', sans-serif;
      font-weight: bold;
    }
  }
</style>
