<template>
<div>
  <div class="wrapper">
  </div>
  <PrinterList :printers="printers" />
</div>
</template>

<script>
import PrinterList from "../components/PrinterList.vue"
export default {
  name: 'printersView',
  components: {
    PrinterList
  },
  computed: {
    printers() {
        return this.$root.$data.printers;
    }
  },
   data() {
    return {
      searchText: '',
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
