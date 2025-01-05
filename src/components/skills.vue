<template>
  <section>
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
        { name: 'HTML', imageSrc: 'html',  level: 'Experienced', showLevel: false  },
        { name: 'CSS', imageSrc: 'css', level: 'Experienced' },
        { name: 'Bootstrap', imageSrc: 'bootstrap', level: 'Intermediate' },
        { name: 'SASS', imageSrc: 'sass', level: 'Experienced' },
        { name: 'JavaScript', imageSrc: 'js', level: 'Intermediate' },
        { name: 'React', imageSrc: 'react', level: 'Intermediate' },
        { name: 'Vue', imageSrc: 'vue', level: 'Intermediate' },
        { name: 'Rails', imageSrc: 'ruby', level: 'Intermediate' },
        { name: 'Python', imageSrc: 'python', level: 'Intermediate' },
        { name: 'AWS services', imageSrc: 'aws', level: 'Intermediate' },
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