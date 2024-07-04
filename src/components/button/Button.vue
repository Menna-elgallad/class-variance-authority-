<template lang="pug">
button( :class="buttonVarient({outline , intent , size , disabled })" :disabled="disabled"  )
  slot

</template>

<script lang="ts" setup>
import  {cva , type VariantProps} from "class-variance-authority";
import {buttonVarient} from "."



type ButtonProps = VariantProps<typeof buttonVarient>

const props = defineProps<{  intent : ButtonProps["intent"] , size : ButtonProps["size"] , disabled : ButtonProps["disabled"] , outline : ButtonProps["outline"] }>()

</script>
