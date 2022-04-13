<template>
<div class="wrapper">
  <div class="printers">
      <div class="printer" v-for="printer in printers" :key="printer.id">
      <div class="info">
        <h1>{{printer.name}}</h1>
      </div>
      <div class="image">
          <a :href= printer.url>
            <img :src="'/images/'+printer.image">
        </a>
      </div>
      <div class="actions">
        <p class="description">{{printer.description}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PrinterList',
  props: {
    printers: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.printers {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.printer {
  margin-top: 50px;
  width: 800px;
  margin: 0rem 1rem 1rem 1rem
}

.printer img {
  height: 400px;
  width: 800px;
  margin-bottom: -6px;
  object-fit: contain;
  overflow: hidden;
  border:solid;
  border-width: 1px;
  border-color:#000;
}

.printer .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #99cfffd7;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.info h1 {
  font-size: 18px;
}

.info h2 {
  
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.actions {
  display: flex;
  font-size: 1rem;
  background: rgb(233, 233, 233);
  padding: .5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.description {
  display: flex;
  font-size: 1rem;
}

button {
  height: 25px;
  padding: 0rem .7rem 0rem .7rem;
  margin: 0rem .3rem 0rem .3rem;
  border-radius: .5rem;
  background: rgb(86, 86, 86);
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>