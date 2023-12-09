<script setup lang="ts">
import { ref, onMounted, watch, unref } from 'vue'
import { DB } from './lib/supabaseClient'
import type { Tables } from './lib/database.types'

const concurso = ref('');
const concursos = ref([] as Tables<'concurso'>[]);
const anexos = ref([] as Tables<'concurso_anexo'>[]);
const centros = ref(0);

async function setConcursos() {
  concursos.value = await DB.concursos();
}

watch(concurso, async function () {
  if (concurso.value == '') {
    anexos.value = [];
    return;
  }
  const anx = await DB.anexos(concurso.value);
  anexos.value = anx
  if (anx.length == 0) {
    centros.value = 0;
    return;
  }
  const { data } = await DB.supabase.from('concurso_anexo_centro')
    .select('centro')
    .filter('anexo', 'in', '('+(anx.map(a=>a.anexo).join(", "))+')');
  const values = (data??[]).map(d=>d.centro)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((a,b)=>a-b)
  centros.value = values.length;
})

onMounted(() => {
  setConcursos();
})
</script>

<template>
  <fieldset>
    <legend>
      <select v-model="concurso">
        <option value="">Elige tu concurso de traslados</option>
        <option 
          v-for="c in concursos"
          :value="c.id" :key="c.id"
        >{{ c.txt }}</option>
      </select>
    </legend>
    <p v-if="concurso == ''">
        Esta web te ayudará a rellenar el concurso de traslados de la Comunidad de Madrid.
    </p>
    <div v-if="concurso != ''">
      <ol>
        <li v-for="a in anexos"
          :value="a.anexo"
          :key="a.anexo">
          <span v-if="a.anexo>0">
          <abbr
            title="Anexo"
            >An</abbr> <code class="anx">{{ a.anexo.toString().padStart(2, ' ') }}</code>:
          </span> <a :href="a.url??undefined" target="_blank">{{ a.txt }}</a>
        </li>
      </ol>
      <button :disabled="centros==0">Ver mapa ({{ centros }} centros)</button>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  margin-top: 1em;
  margin-bottom: 1em;
}
code.anx {
  white-space: pre;
  font-size: 1.3em;
}
ol {
  list-style-type: circle;
  margin-left: 1.5em;
  padding-left: 0em;
}
</style>
