<template>
  <section id="practicle_skills">
    <Heading :title="'Practical Skills'" :subtitle="'Explore My'" />
    <div class="container">
      <div class="d-flex justify-content-center flex-wrap">
        <article
          class="position-relative"
          v-for="(skill, index) in skills"
          :key="index"
          data-aos="zoom-in" :data-aos-duration="getAosDuration(index)"
          @mouseover="toggleSkillLevel(index, true)"
          @mouseout="toggleSkillLevel(index, false)"
        >
          <h3>
            <img 
              :src="`/icons/${skill.imageSrc}.png`" 
              class="skill-image mr-3"
            />

            {{ skill.name }}
          </h3>
        </article>
      </div>
     
    </div>
  </section>
</template>

<script>
import Heading from "./common/heading.vue";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      skills: [
        { name: 'HTML', imageSrc: 'html' },
        { name: 'CSS', imageSrc: 'css' },
        { name: 'Bootstrap', imageSrc: 'bootstrap' },
        { name: 'SASS', imageSrc: 'sass' },
        { name: 'Tailwind', imageSrc: 'tailwind' },
        { name: 'JavaScript', imageSrc: 'js' },
        { name: 'React', imageSrc: 'react' },
        { name: 'Next', imageSrc: 'next' },
        { name: 'Vue', imageSrc: 'vue' },
        { name: 'Vite', imageSrc: 'vite' },
        { name: 'Rails', imageSrc: 'ruby' },
        { name: 'Python', imageSrc: 'python' },
        { name: 'AWS services', imageSrc: 'aws' },
        { name: 'Git', imageSrc: 'git' },
        { name: 'GitHub', imageSrc: 'github' },
      ],
    };
  },
  methods: {
    toggleSkillLevel(index) {
      this.$set(this.skills, index, { ...this.skills[index], showLevel: !this.skills[index].showLevel });
    },
    getAosDuration(index) {
      return index * 400;
    },
  },
};
</script>

<style scoped>

article {
  width: 15rem;
  height: 5rem;
  gap: 0.5rem;

}
.skill-image{
  height:30px;
  width:30px;
}
</style>