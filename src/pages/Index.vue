<template lang="pug">
.home( class="container flex flex-col gap-5 py-5 mx-auto h-[100vh] overflow-hidden")
  .flex.gap-5
    Button( intent="primary" size="large" )
      p Click Me
    Button( intent="secondary" size="large" )
      p Click Me

    Button( :disabled="true" size="large" )
      p Click Me
  .flex.gap-5
    Button( intent="primary" size="medium" )
      p Click Me
    Button( intent="secondary" size="medium" )
      p Click Me

    Button( intent="outline" size="medium" )
      p Click Me
    Button( :disabled="true" size="medium" )
      p Click Me

  .flex.gap-5
    Button( intent="primary" size="small" )
      p Click Me
    Button( intent="secondary" size="small" )
      p Click Me

    Button( intent="outline" size="small"  )
      p Click Me
    Button( :disabled="true" size="small" )
      p Click Me

</template>
<script setup>
import {Button} from "../components/Button"
</script>
<style scoped>

</style>
