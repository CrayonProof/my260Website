<template>
<div class="wrapper">
  <div class="designs">
      <div class="design" v-for="design in designs" :key="design.id">
      <div class="info">
        <h1>{{design.name}}</h1>
        <p>{{design.author}}</p>
      </div>
      <div class="image">
          <a :href= design.url>
            <img :src="'/images/'+design.image">
        </a>
      </div>
      <div class="actions">
        <p class="description">{{design.description}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DesignList',
  props: {
    designs: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.designs {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.design {
  margin-top: 50px;
  width: 300px;
  margin: 0rem 1rem 1rem 1rem
}

.design img {
  height: 250px;
  width: 300px;
  margin-bottom: -6px;
  object-fit: cover;
  overflow: hidden;
}

.design .image {
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
  font-size: 14px;
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