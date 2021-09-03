<template>
  <div>
    <div v-for="(v, i) in data" :key="i">
      <div v-for="(v, k, i) in v" :key="i">
        <strong>{{ k }}</strong>
        <ul>
          <li v-for="(v, i) in v" :key="i">{{ v.size }}---->{{ v.num }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          黑色: [
            { size: "s", num: 100 },
            { size: "x", num: 300 },
          ],
          绿色: [
            { size: "s", num: 100 },
            { size: "x", num: 300 },
          ],
        },
        {
          白色: [
            { size: "s", num: 100 },
            { size: "m", num: 200 },
            { size: "x", num: 300 },
          ],
        },
        {
          红色: [{ size: "x", num: 300 }],
        },
      ],
    };
  },
};
</script>