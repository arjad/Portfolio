<template>
  <div class="project-detail min-vh-100 container" v-if="project">
    <!-- Header Type & Category -->
    <div class="row pb-3">
      <div class="col-12" data-aos="fade-down">
        <span class="text-success fw-bold small text-uppercase tracking-wider mr-3" v-if="project.type">{{ project.type }}</span>
        <span v-if="project.category" class="badge rounded-pill bg-success-light text-success px-3 py-1">{{ project.category }}</span>
      </div>
    </div>

    <div class="row mb-5">
      <!-- Left Column: Content (Smaller) -->
      <div class="col-lg-5 pr-lg-4" data-aos="fade-right">
        <h2 class="fw-bold mb-3 main-title">{{ project.title }}</h2>
        <p class="text-muted mb-4 description-text">{{ project.description }}</p>
        
        <div class="sections-container mb-5">
          <div v-if="project.problem" class="section-card d-flex align-items-start mb-4">
            <div class="icon-circle bg-danger-light text-danger mr-4">
              <img v-if="project.problem_icon" :src="project.problem_icon" class="img-fluid rounded-circle" />
              <i v-else class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div class="section-content">
              <h5 class="fw-bold mb-1">The Problem</h5>
              <p class="small text-secondary">{{ project.problem }}</p>
            </div>
          </div>

          <div v-if="project.solution" class="section-card d-flex align-items-start mb-4">
            <div class="icon-circle bg-indigo-light text-indigo mr-4">
              <img v-if="project.solution_icon" :src="project.solution_icon" class="img-fluid rounded-circle" />
              <i v-else class="fa-solid fa-lightbulb"></i>
            </div>
            <div class="section-content">
              <h5 class="fw-bold mb-1">The Solution</h5>
              <p class="small text-secondary">{{ project.solution }}</p>
            </div>
          </div>

          <div v-if="project.result" class="section-card d-flex align-items-start mb-4">
            <div class="icon-circle bg-warning-light text-warning mr-4">
              <img v-if="project.result_icon" :src="project.result_icon" class="img-fluid rounded-circle" />
              <i v-else class="fa-solid fa-chart-line"></i>
            </div>
            <div class="section-content">
              <h5 class="fw-bold mb-1">The Result</h5>
              <p class="small text-secondary">{{ project.result }}</p>
            </div>
          </div>
        </div>

        <div class="tech-section mb-5">
          <h6 class="text-uppercase tracking-wider fw-bold text-muted mb-3">Technologies</h6>
          <div class="d-flex flex-wrap mt-3">
            <span v-for="(tech, i) in project.technologies" :key="i" class="tech-pill mx-1 mb-2">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="d-flex mt-4 flex-wrap actions-container">
          <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-outline-dark rounded-pill px-4 mr-3 mb-2">
            <i class="fa-brands fa-github mr-2"></i> Code
          </a>
          <a v-if="project.live" :href="project.live" target="_blank" class="btn btn-outline-success rounded-pill px-4 mb-2">
            <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i> View
          </a>
        </div>
      </div>

      <!-- Right Column: Media (Larger) -->
      <div class="col-lg-7 mt-lg-0" data-aos="fade-left">
        <!-- Media Tabs -->
        <div class="media-tabs mb-4">
          <button 
            @click="activeMediaTab = 'screenshot'" 
            :class="['tab-btn', { active: activeMediaTab === 'screenshot' }]"
          >
            Screenshot
          </button>
          <button 
            v-if="project.gif_preview"
            @click="activeMediaTab = 'animated'" 
            :class="['tab-btn', { active: activeMediaTab === 'animated' }]"
          >
            <i class="fa-solid fa-play small mr-1"></i> Animated Preview
          </button>
          <button 
            v-if="project.video_file || project.video_demo"
            @click="activeMediaTab = 'video'" 
            :class="['tab-btn', { active: activeMediaTab === 'video' }]"
          >
            <i class="fa-solid fa-film small mr-1"></i> Video Demo
          </button>
        </div>

        <!-- Browser Frame -->
        <div class="browser-frame shadow-lg mb-5">
          <div class="browser-header">
            <div class="dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="address-bar">{{ project.id }}.app</div>
          </div>
          <div class="browser-content">
            <img v-if="activeMediaTab === 'screenshot'" :src="project.image" :alt="project.title" class="img-fluid" />
            <img v-else-if="activeMediaTab === 'animated'" :src="project.gif_preview" :alt="project.title + ' GIF'" class="img-fluid" />
            <video v-if="activeMediaTab === 'video' && project.video_file" :src="project.video_file" controls class="w-100" style="display: block;"></video>
            <div v-else-if="activeMediaTab === 'video' && project.video_demo" class="video-container">
              <iframe 
                :src="youtubeEmbedUrl" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="w-100 h-100"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Key Features Section -->
        <div v-if="project.key_features && project.key_features.length > 0" class="key-features-container">
          <h6 class="text-uppercase tracking-wider fw-bold text-muted mb-4">Key Features</h6>
          <div v-for="(feature, idx) in project.key_features" :key="idx" class="feature-card d-flex align-items-center mb-3">
            <div class="feature-icon mr-3">
              <i :class="feature.icon"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0 feature-title">{{ feature.title }}</h6>
              <p class="small text-muted mb-0">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Testimonial / Review Section -->
    <div v-if="project.review" class="row mt-5 mb-5" data-aos="fade-up">
      <div class="col-12">
        <div class="testimonial-card p-4 text-center">
          <p class="mb-0 italic-review">"{{ project.review }}"</p>
        </div>
      </div>
    </div>
  </div>
  <div class="project-detail min-vh-100 container d-flex justify-content-center align-items-center" v-else>
    <h2>Project not found</h2>
  </div>
</template>

<script>
import projectsData from "../data/projects.json";

export default {
  name: "ProjectDetail",
  props: ['id'],
  data() {
    return {
      activeMediaTab: 'screenshot'
    }
  },
  computed: {
    project() {
      return projectsData.find(p => p.id === this.id);
    },
    youtubeEmbedUrl() {
      if (!this.project || !this.project.video_demo) return '';
      const url = this.project.video_demo;
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
      } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1].split('&')[0];
      } else if (url.includes('youtube.com/embed/')) {
        videoId = url.split('youtube.com/embed/')[1];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.project-detail {
  padding-top: 80px;
  padding-bottom: 60px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.main-title {
  font-weight: 800;
  color: #1a1a1a;
  font-size: 2.2rem;
}

.description-text {
  font-size: 1rem;
  line-height: 1.5;
}

/* Sections & Icons */
.icon-circle {
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  overflow: hidden;
  position: relative;
}

.icon-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-danger-light { background-color: rgba(220, 53, 69, 0.1); }
.bg-indigo-light { background-color: rgba(99, 102, 241, 0.1); }
.text-indigo { color: #6366F1; }
.bg-warning-light { background-color: rgba(255, 193, 7, 0.1); }

.tracking-wider { letter-spacing: 0.05em; }

/* Tech Pills */
.tech-pill {
  background-color: #f3f4f6;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  color: #374151;
  font-weight: 500;
}

/* Media Tabs */
.media-tabs {
  background: #f3f4f6;
  padding: 4px;
  border-radius: 30px;
  display: inline-flex;
}

.tab-btn {
  border: none;
  background: transparent;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: white;
  color: #111827;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Browser Frame */
.browser-frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.browser-header {
  background: #f9fafb;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
}

.dots { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.address-bar {
  margin-left: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  padding: 2px 20px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #9ca3af;
  flex-grow: 1;
}

.browser-content img {
  width: 100%;
  display: block;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Feature Cards */
.feature-card {
  background: white;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #f3f4f6;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #e5e7eb;
}

.feature-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 10px;
  background: rgba(40, 167, 69, 0.05);
  color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.feature-title {
  color: #111827;
}

/* Testimonial */
.testimonial-card {
  background: #f9fafb;
  border-radius: 16px;
  border-left: 4px solid #6366F1;
}

.italic-review {
  font-style: italic;
  font-size: 1.2rem;
  color: #374151;
}

/* Dark Mode Overrides */
.dark-mode .main-title { color: white; }
.dark-mode .tech-pill { background: #2d2d2d; color: #ccc; }
.dark-mode .media-tabs { background: #1a1a1a; }
.dark-mode .tab-btn.active { background: #333; color: white; }
.dark-mode .feature-card { background: #1a1a1a; border-color: #333; }
.dark-mode .feature-title { color: #eee; }
.dark-mode .browser-frame { border-color: #333; }
.dark-mode .browser-header { background: #222; border-color: #333; }
.dark-mode .address-bar { background: #111; border-color: #333; color: #666; }
.dark-mode .testimonial-card { background: #1a1a1a; border-left-color: #6366F1; }
.dark-mode .italic-review { color: #ccc; }
</style>
