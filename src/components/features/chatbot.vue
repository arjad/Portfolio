<template>
  <div></div>
</template>

<script>
export default {
  name: 'Chatbot',
  mounted() {
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('data-id', '6549438642');
    script.setAttribute('id', 'chatling-embed-script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://chatling.ai/js/embed.js');
    
    document.head.appendChild(script);
  },
  beforeUnmount() {
    const script = document.getElementById('chatling-embed-script');
    if (script) {
      script.remove();
    }
    if (window.chtlConfig) {
      delete window.chtlConfig;
    }
  }
}
</script>