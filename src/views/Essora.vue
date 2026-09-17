<template>
  <div class="essora-container">
    <div class="essora-header">
      <h1 class="title">Content Creation</h1>
      <p class="subtitle">A glimpse into the content I create.</p>
    </div>

    <div class="content-grid">
      <section class="glass-card">
        <h2>My Journey</h2>
        <p class="content-text">
          Beyond coding, I'm passionate about sharing knowledge and creating engaging content. 
          I explore modern web design, share development tips, and document my journey in tech.
        </p>
        <div class="stats-grid">
          <div class="stat-item">
            <h3>Articles</h3>
            <p>15+</p>
          </div>
          <div class="stat-item">
            <h3>Videos</h3>
            <p>20+</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Essora'
}
</script>

<style scoped>
.essora-container {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.essora-header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #a0aab2;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.glass-card h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.content-text {
  line-height: 1.8;
  color: #d1d8e0;
  margin-bottom: 2rem;
}

.stats-grid {
  display: flex;
  gap: 2rem;
}

.stat-item h3 {
  font-size: 1rem;
  color: #a0aab2;
  margin-bottom: 0.5rem;
}

.stat-item p {
  font-size: 2rem;
  font-weight: 700;
  color: #00f2fe;
}
</style>
