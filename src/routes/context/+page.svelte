<script>
  import { setContext } from 'svelte';
  import { Xzc, Zil, Wings } from '$lib';
  const iconCtx = {
    size: '200',
    variation: 'color'
  };
  setContext('iconCtx', iconCtx);
</script>

<Xzc />
<Zil />
<Wings />
