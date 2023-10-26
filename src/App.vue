
<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">

.container {
  height: 100%;
  width: 100%;
}
.header {
    top: 0;
    height: 10%;
    pointer-events: unset;
    z-index: 999;
    background-color: #D9D9D9;
}

.footer {
  background-color: #666;
  width: 100%;
  height: 20%;
}

.main {
  height: 70%;
}
.div {
  text-align: center;
}

</style>
