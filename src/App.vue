<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const centros = ref([])

async function getCentros() {
  const { data } = await supabase.from('centro').select()
  centros.value = data
}

onMounted(() => {
  getCentros()
})
</script>

<template>
  <ul>
    <li v-for="centro in centros" :key="centro.id">{{ centro.nombre }}</li>
  </ul>
</template>