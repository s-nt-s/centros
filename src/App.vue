<script setup lang="ts">
import { ref, onMounted, watch, inject } from 'vue'
import { DB } from './lib/supabaseClient'
import type { Tables } from './lib/database.types'

const concurso = ref('');
const concursos = ref({} as {[id: string]: Tables<'concurso'>});
const anexos = ref([] as Tables<'concurso_anexo'>[]);
const centros = ref(0);
const GLB = inject('GLOBAL') as any;

function yJoin(s: string) {
  const arr = s.trim().split(/\s+/).sort();
  if (arr.length==0) return ''
  if (arr.length==1) return arr[0];
  return arr.slice(0, arr.length-1).join(', ') + ' y '+arr[arr.length-1];
}

async function setConcursos() {
  concursos.value = {};
  (await DB.concursos()).forEach(function (c: Tables<'concurso'>) {
    concursos.value[c.id] = c;
  })
}

watch(concurso, async function () {
  if (['', '-1'].includes(concurso.value)) {
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
        <option value="-1">Ninguno de los anteriores</option>
      </select>
    </legend>
    <p v-if="concurso == ''">
      Esta web te ayudará a rellenar el concurso de traslados de la Comunidad de Madrid.
    </p>
    <p v-else-if="concurso == '-1'">
      Si no encuentras tu concurso de traslados escribe a <a :href="'mailto:'+GLB.mail">{{ GLB.mail }}</a>
      pidiendo que actualice la web.<br/>
      Mientras tanto puedes usar el concurso disponible más similar al tuyo, ya que la mayoría
      de los centros serán los mismos.
    </p>
    <div v-else-if="concurso != ''">
      <ol>
        <li>Concurso: <a :href="concursos[concurso].url??undefined">{{ concursos[concurso].txt }}</a></li>
        <li>Cuerpo{{ concursos[concurso].cuerpo.includes(' ')?'s':'' }}: {{ yJoin(concursos[concurso].cuerpo) }}</li>
        <li v-for="a in anexos"
          :value="a.anexo"
          :key="a.anexo">
          <span v-if="a.anexo==0">Resolución</span>
          <span v-else>
          <abbr
            title="Anexo"
            >An</abbr> <code class="anx">{{ a.anexo.toString().padStart(2, ' ') }}</code>
          </span>: <a :href="a.url??undefined">{{ a.txt }}</a>
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
