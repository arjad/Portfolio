<template>
  <section id="about" class="container">
    <div class="marquee-section mb-5">
      <h5 class="text-center text-uppercase text-muted tracking-wider mb-4 fw-bold">Previously Worked With</h5>
      <div class="marquee-container">
        <div class="marquee-track">
          <div 
            v-for="(client, index) in repeatedClients" 
            :key="index" 
            class="company-badge"
          >
            <img :src="client.icon" :alt="client.name" class="company-icon-img" />
            <span class="company-name">{{ client.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <Heading :title="'About Me'" :subtitle="'Want to know me'" />

    <div class="position-relative">
      <div class="verticle-line position-absolute"></div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'> <i class="fa-solid fa-briefcase"></i> Experience - {{calculatedExperience}}+ year(s)</h2>
        <div class='w-100 text-green'>
          <h4 class='d-inline'> Software Engineer - 2022-present</h4>
        </div>
        <h6> <a class='text-blue' href= 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://codingcops.com/&ved=2ahUKEwj45KjR6OGKAxWXF2IAHS9oO-MQFnoECDcQAQ&usg=AOvVaw0qDV81i0KjT34kPmA7ojBM'> Coding Cops, Lahore. </a></h6>
        <ul>
          <li> Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. </li>
          <li> Continuously enhancing skills by pursuing certifications in AWS, DevOps & python. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Vue JS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">React JS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Ruby on Rails</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Python </span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">AWS services</span>
        </div>

        <h4 class='text-green'> Front End Developer - 2021-2022 </h4>
        <h6> <a class='text-blue'href= 'https://theunitedsoftware.com/'>United Insurance, Lahore. </a> </h6>
        <ul>
          <li> Created visually appealing, user-friendly interfaces, using CSS grid and flexbox layouts for responsive design. </li>
          <li> Utilized react components & npm modules to develop modular, reusable UI elements for efficient front-end development. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">HTML</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">CSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">SCSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">JavaScript</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Bootstrap</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Tailwind CSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">React JS</span>
        </div>

        <h4 class='text-green'> Freelancer - 2019-2021 </h4>
        <h6> <a class='text-blue'href= 'https://www.upwork.com/freelancers/~01a73a1abd70f9f27f'>Upwork </a> </h6>
        <ul>
          <li> Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. </li>
          <li>Continuously enhancing skills by pursuing certifications in AWS, DevOps & Python. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Front End Optimization</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">AWS Deployment</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Backend Optimization</span>
        </div>
      </div>
    </div>
    <br/>

    <div class="position-relative mt-5">
      <div class="verticle-line position-absolute"></div>

      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'><i class="fa-solid fa-user-graduate"></i> Education </h2>
        
        <h4 class='text-green'> Bachelor in Information Technology (BIT) - 2022-present </h4>
        <h6><a class='text-blue' href='https://pucit.edu.pk/'> Punjab University (PUCIT) Lahore, Pakistan. </a></h6>
        <p> Obtained comprehensive knowledge in computer science and information technology, enhancing skills in software development, and passed it with 3.06 CGPA. </p>

        <h4 class='text-green'> Mern Stack Certification - 2022</h4>
        <h6><a class='text-blue' href='https://nextbridge.com/'>Next Bridge, Lahore, Pakistan.</a>  </h6>
        <p>Acquired advanced mern-stack, leveraging industry best practices to create dynamic and interactive web applications.</p>
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
      activeSection: 'experience',
      startDate: "2019-01-01",
      iconClients: [
        { name: 'Lala', icon: '/projects/lala-icon.png' },
        { name: 'Genuity', icon: '/projects/genuity-icon.png' },
        { name: 'Evee', icon: '/projects/evee-icon.jpeg' },
        { name: 'Azoom', icon: '/projects/azoom-icon.png' },
        { name: 'Priwall', icon: '/projects/priwall-icon.png' },
      ]
    };
  },
  computed: {
    calculatedExperience() {
      const startDate = new Date(this.startDate);
      const currentDate = new Date();
      const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
      const isFullYear = currentDate.getMonth() >= startDate.getMonth() && currentDate.getDate() >= startDate.getDate();

      return isFullYear ? yearsDifference : yearsDifference - 1;
    },
    repeatedClients() {
      return [
        ...this.iconClients, 
        ...this.iconClients, 
        ...this.iconClients, 
        ...this.iconClients
      ];
    }
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
#about {
  margin-top: 40vh;
}

.about-containers {
  gap: 2rem;
}
.details-container {
  padding: 1.5rem;
  flex: 1;
  width: 15vw;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}
.details-container:hover {
  cursor: pointer;
  background: lightgrey;
}

ul {
  line-height: 30px;
  font-size: 1.2rem;
}

.verticle-line{
  width: 15px;
  height: 100%;
  background: linear-gradient(to right, #a855f7 50%, #34495E 50%);
}
.verticle-line-right{
  right:0;
}

.text-green{
  color: #a855f7;
}
.text-blue{
  color: #34495E;
  text-decoration: underline;
}

.marquee-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #f1f5f9;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 2.5rem 0;
  overflow: hidden;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  animation: marqueeScroll 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.company-icon-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 0 !important;
}

.company-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  background: transparent;
  border: none !important;
  border-radius: 0 !important;
  color: #374151;
  font-weight: 600;
  font-size: 1.1rem;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #a855f7;
    transform: translateY(-2px);
    background: transparent;
    border: none !important;
    box-shadow: none;
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  #about {
    margin-top: 100px;
  }
}

@media screen and (max-width: 375px) {
  .details-container h3 {
    font-size: 14px;
  }
}
</style>

<style lang="scss">
.dark-mode {
  .marquee-section {
    background: rgba(18, 12, 38, 0.6) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .company-badge {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    color: #e2e8f0 !important;

    &:hover {
      background: transparent !important;
      border: none !important;
      color: #a855f7 !important;
    }
  }
}
</style>
