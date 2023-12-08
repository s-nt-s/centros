<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import type { Tables } from './lib/database.types'

const centros = ref([] as Tables<'centro'>[])

async function getCentros() {
  const { data } = await supabase.from('centro').select()
  centros.value = (data || []);
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