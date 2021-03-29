<template>
  <div class="app-default">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
}

body {
  background: #f2f2f2;
  padding: 10px;
  margin: 0;
}
.app-default {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.app-heading {
  padding: 10px;
  font-weight: bold;
}
.app-footer {
  text-align: center;
  padding: 10px;
}
</style>
