<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="social-links">
        <a href="https://www.instagram.com/arjad.codes/" target="_blank" class="social-link">Instagram</a>
        <a href="https://www.linkedin.com/in/arjad/" target="_blank" class="social-link">LinkedIn</a>
        <a href="https://github.com/arjad" target="_blank" class="social-link">GitHub</a>
        <a href="mailto:arjadgohar14@gmail.com" class="social-link">Email</a>
        <a href="https://www.tiktok.com/@arjad.code?lang=en" target="_blank" class="social-link">TikTok</a>
        <a href="https://www.youtube.com/@arjadcodes" target="_blank" class="social-link">YouTube</a>
      </div>
      <div class="page-links">
        <router-link to="/essora" class="nav-link">Essora</router-link>
        <router-link to="/simple" class="nav-link">Simple</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.app-footer {
  padding: 3rem 2rem;
  background: #111;
  color: #fff;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.social-links, .page-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.social-link, .nav-link {
  color: #a0aab2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover, .nav-link:hover {
  color: #00f2fe;
}
</style>
