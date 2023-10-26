<template>
<div class="div-2">
  <div class="column">
    <div class="div-3">
        <div class="div-4">G</div>
        <div class="div-5">A</div>
        <div class="div-6">M</div>
        <div class="div-7">E</div>
    </div>
  </div>
  <div class="column-2">
    <div class="div-8">
      <div style="display: flex">
        <div class="div-9 ">O</div>
      </div>
      <div style="display: flex">
        <div class="div-10">V</div>
      </div>
      <div style="display: flex">
        <div class="div-11 ">E</div>
      </div>
      <div style="display: flex">
        <div class="div-12 ">R</div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .div-2 {
    gap: 20px;
    margin-top: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .column {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .div-3 {
    display: flex;
    gap: 10px;
  }

  .div-4,
  .div-5,
  .div-6,
	.div-7
	{
    justify-content: center;
		color: red;

    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 10rem;
    font-weight: 700;
    margin-top: -20vh;
    -webkit-text-stroke: 3px #000;

    @media (max-width: 991px) {
      font-size: 3rem;
      margin-top: -20vh;
      margin-bottom: 20vh;
    }

    animation: emphasis 
  }

  .column-2 {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
    @media (max-width: 991px) {
      margin-left: 0;
      width: 100%;
    }
  }

  .div-8 {
    display: flex;
    gap: 10px;
  }

  .div-9,
  .div-10,
  .div-11,
  .div-12 {
    justify-content: center;
    color: red;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 10rem;
    font-weight: 700;
    margin-top: -20vh;
    -webkit-text-stroke: 3px black;

    @media (max-width: 991px) {
      font-size: 3rem;
      margin-top: -20vh;
      margin-bottom: 20vh;
    }
  }
</style>