<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DB } from './lib/supabaseClient'
import type { Tables } from './lib/database.types'

const concursos = ref([] as Tables<'concurso'>[]);
const anexos = ref([] as Tables<'concurso_anexo'>[]);
const centros = ref(0);

async function setConcursos() {
  concursos.value = await DB.concursos();
  anexos.value = await DB.anexos();
}

async function setAnexos() {
  const gAll = (s:string) => Array.from(document.querySelectorAll(s)) as HTMLInputElement[];
  const inputs = gAll("input[name='anexo']");
  const anexos = inputs.filter(n=>n.checked).map(n=>Number(n.value));
  if (anexos.length == 0) {
    centros.value = 0;
    return;
  }
  //inputs.forEach(i=>i.disabled=true);
  const { data } = await DB.supabase.from('concurso_anexo_centro')
    .select('centro')
    .filter('anexo', 'in', '('+(anexos.join(", "))+')');
  const values = (data??[]).map(d=>d.centro)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((a,b)=>a-b)
  centros.value = values.length;
  //inputs.forEach(i=>i.disabled=false);
}

onMounted(() => {
  setConcursos();
})
</script>

<template>
  <p>
    Esta web te ayudará a rellenar el concurso de traslados de la Comunidad de Madrid.<br/>
    Elige los anexos que te interesen de la convocotaria que te aplique.
  </p>
  <fieldset v-for="concurso in concursos" :key="concurso.id">
    <legend><a :href="concurso.url??undefined" target="_blank">{{ concurso.txt }}</a></legend>
    <ol>
      <li :value="anexo.anexo" v-for="anexo in anexos.filter(a=>a.concurso==concurso.id)" :key="anexo.anexo">
        [<a :href="anexo.url??undefined" target="_blank">pdf</a>]
        <input 
          name="anexo" type="checkbox" 
          @click="setAnexos()"
          :value="anexo.anexo" :id="anexo.anexo.toString()"
        />
        <label :for="anexo.anexo.toString()">{{ anexo.txt }}</label>
      </li>
    </ol>
  </fieldset>
  <button :disabled="centros==0">Ver mapa ({{ centros }} centros)</button>
</template>

<style scoped>
fieldset {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
