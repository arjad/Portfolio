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

    <!-- Key Metrics / Achievements Stats Grid -->
    <div class="stats-grid row justify-content-center g-3 g-md-4 my-4 my-md-5" data-aos="fade-up">
      <div class="col-6 col-md-3">
        <div class="stat-card p-3 text-center">
          <h3 class="stat-number mb-1">7+</h3>
          <p class="stat-label m-0">Years of Experience</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card p-3 text-center">
          <h3 class="stat-number mb-1">20+</h3>
          <p class="stat-label m-0">Projects Delivered</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card p-3 text-center">
          <h3 class="stat-number mb-1 d-flex align-items-center justify-content-center gap-1">
            5.0 <i class="fa-solid fa-star text-warning fs-5"></i>
          </h3>
          <p class="stat-label m-0">Rating</p>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card p-3 text-center">
          <h3 class="stat-number mb-1">15+</h3>
          <p class="stat-label m-0">Clients Worked With</p>
        </div>
      </div>
    </div>

    <Heading :title="'What I Do'" :subtitle="'Services & Capabilities'" />

    <div class="what-i-do-grid row justify-content-center g-4 my-4">
      <div 
        v-for="(service, index) in services" 
        :key="service.id" 
        class="col-12 col-lg-6 d-flex align-items-stretch my-3" 
        data-aos="fade-up" 
        :data-aos-duration="600 + index * 150"
      >
        <div 
          class="service-card p-3 p-md-4 text-start w-100 position-relative d-flex flex-column" 
          :class="{ 'is-expanded': expandedServiceId === service.id }"
          @click="handleCardClick(service.id)"
        >
          <!-- Single Row Header: Icon + Heading + Plus Icon -->
          <div class="service-row-header d-flex align-items-center justify-content-between w-100 gap-3">
            <div class="d-flex align-items-center gap-3">
              <div class="service-icon-wrapper flex-shrink-0 me-3">
                <i :class="service.icon + ' service-icon'"></i>
              </div>
              <h4 class="service-title m-0 ms-1">{{ service.title }}</h4>
            </div>

            <!-- Plus/Minus Toggle Button (Shown on Mobile and Tablet) -->
            <button 
              class="expand-btn d-inline-flex d-lg-none align-items-center justify-content-center flex-shrink-0 ms-auto"
              @click.stop="toggleService(service.id)"
              :title="expandedServiceId === service.id ? 'Collapse details' : 'Expand details'"
            >
              <i :class="expandedServiceId === service.id ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
            </button>
          </div>

          <!-- Content (Description + Details): Hidden on mobile/tablet when collapsed, visible when expanded or on desktop -->
          <div 
            class="service-content-body w-100 mt-3"
            :class="{ 'd-none d-lg-block': expandedServiceId !== service.id }"
          >
            <p class="service-desc mb-3">{{ service.desc }}</p>

            <div class="service-details-container">
              <ul class="details-list text-start ps-0 m-0 border-top pt-3 mt-2">
                <li v-for="(detail, i) in service.details" :key="i" class="detail-item mb-2 d-flex align-items-center">
                  <i class="fa-solid fa-check text-dark-accent me-3 flex-shrink-0"></i>
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
      expandedServiceId: null,
      iconClients: [
        { name: 'Lala', icon: '/projects/lala-icon.png' },
        { name: 'Genuity', icon: '/projects/genuity-icon.png' },
        { name: 'Evee', icon: '/projects/evee-icon.jpeg' },
        { name: 'Azoom', icon: '/projects/azoom-icon.png' },
        { name: 'Priwall', icon: '/projects/priwall-icon.png' },
      ],
      services: [
        {
          id: 'ui-ux',
          title: 'UI / UX Design',
          icon: 'fa-solid fa-palette',
          desc: 'Crafting intuitive, high-converting digital user interfaces and modern responsive user experiences.',
          details: [
            'Interactive Wireframing & Prototyping',
            'Design Systems & Component Libraries',
            'User Journey Mapping & Usability Testing',
            'Mobile-First Responsive Layouts'
          ]
        },
        {
          id: 'web-dev',
          title: 'Web Development',
          icon: 'fa-solid fa-code',
          desc: 'Building fast, scalable, and secure full-stack web applications using modern web technologies.',
          details: [
            'Vue.js & React Frontend Architecture',
            'Ruby on Rails & Node.js Backend APIs',
            'Database Optimization (PostgreSQL/MongoDB)',
            'Performance Tuning & SEO Best Practices'
          ]
        },
        {
          id: 'ai-integration',
          title: 'AI Integration',
          icon: 'fa-solid fa-brain',
          desc: 'Integrating LLM models, intelligent workflows, and automated AI agents into business platforms.',
          details: [
            'OpenAI / Claude / Llama API Integration',
            'Custom AI Agents & Workflow Automation',
            'RAG (Retrieval-Augmented Generation)',
            'Smart Chatbots & Predictive Analytics'
          ]
        },
        {
          id: 'app-dev',
          title: 'App Development',
          icon: 'fa-solid fa-mobile-screen-button',
          desc: 'Developing cross-platform mobile apps and progressive web applications tailored for all devices.',
          details: [
            'Progressive Web Applications (PWA)',
            'Cross-Platform Mobile UI Design',
            'Offline-First Capability & Local Storage',
            'Fast Asset Loading & App Performance'
          ]
        }
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
    handleCardClick(id) {
      if (window.innerWidth < 992) {
        this.toggleService(id);
      }
    },
    toggleService(id) {
      this.expandedServiceId = this.expandedServiceId === id ? null : id;
    }
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

.stat-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(17, 24, 39, 0.2);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
}

.stat-number {
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b5563;
  letter-spacing: 0.01em;
}

.text-warning {
  color: #f59e0b !important;
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

.service-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    transform: skewX(-25deg);
    transition: left 0.75s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 5;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(17, 24, 39, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

    &::before {
      left: 150%;
    }
  }
}

.service-icon-wrapper {
  width: 52px;
  height: 52px;
  margin-right: 1.25rem;
  border-radius: 14px;
  background: rgba(17, 24, 39, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-dark-accent {
  color: #111827;
}

.service-icon {
  font-size: 1.5rem;
  color: #111827;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.service-desc {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
}

.expand-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(17, 24, 39, 0.06);
  border: 1px solid rgba(17, 24, 39, 0.15);
  color: #111827;
  font-size: 0.9rem;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s ease;

  &:hover {
    background: #111827;
    color: #ffffff;
    border-color: #111827;
    transform: scale(1.08);
  }
}

.service-card.is-expanded {
  border-color: rgba(17, 24, 39, 0.3) !important;
}

.expanded-details {
  border-color: rgba(17, 24, 39, 0.1) !important;
  animation: fadeInDown 0.35s ease forwards;
}

.details-list {
  list-style: none !important;
  padding-left: 0 !important;
}

.detail-item {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.5;
  font-weight: 500;

  i {
    margin-right: 0.85rem !important;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 991.98px) {
  #about {
    margin-top: 100px;
  }

  .service-card {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0.85rem 0 !important;

    &::before {
      display: none !important;
    }
  }

  .service-icon-wrapper {
    width: 44px !important;
    height: 44px !important;
    border-radius: 12px !important;
  }

  .service-icon {
    font-size: 1.2rem !important;
  }

  .service-title {
    font-size: 1.15rem !important;
  }

  .stat-number {
    font-size: 1.65rem !important;
  }

  .stat-label {
    font-size: 0.78rem !important;
  }

  .stat-card {
    padding: 0.85rem 0.5rem !important;
    border-radius: 14px !important;
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

  .service-card {
    background: rgba(18, 12, 38, 0.6) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;

    &::before {
      background: linear-gradient(
        120deg,
        transparent 0%,
        rgba(168, 85, 247, 0.35) 50%,
        transparent 100%
      ) !important;
    }

    &:hover {
      border-color: rgba(168, 85, 247, 0.5) !important;
      box-shadow: 0 15px 40px rgba(168, 85, 247, 0.25) !important;
    }
  }

  @media screen and (max-width: 991.98px) {
    .service-card {
      background: transparent !important;
      border: none !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      box-shadow: none !important;
    }
  }

  .service-title {
    color: #ffffff !important;
  }

  .service-desc {
    color: rgba(255, 255, 255, 0.7) !important;
  }

  .stat-card {
    background: rgba(18, 12, 38, 0.6) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;

    &:hover {
      border-color: rgba(255, 255, 255, 0.25) !important;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4) !important;
    }
  }

  .stat-number {
    color: #ffffff !important;
  }

  .stat-label {
    color: rgba(255, 255, 255, 0.7) !important;
  }
}
</style>
