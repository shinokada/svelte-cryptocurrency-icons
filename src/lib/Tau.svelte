<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    variation?: 'black' | 'color' | 'icon' | 'white';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '32';
  export let role: string = ctx.role || 'img';
  export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
  let svgpath: string;
  let svgblack =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.094 13.678L6 15.788h4.203zm2.11 2.55H6l2.094 2.094zm2.852-2.853l-2.11-2.11v4.204zm-2.55 2.094v-4.203l-2.093 2.109zm2.854-2.413l2.109-2.094h-4.203zm0-4.643l-2.094 2.109h4.203zm4.962-.304L16.212 6v4.203zm-2.55 2.094V6l-2.094 2.11zm-2.716 8.437l-2.11-2.109v4.203zm-4.643 0l2.094 2.094v-4.203zm10.212-5.584l2.11-2.094H16.53zm-2.094-2.534h4.203l-2.109-2.11zM15.47 21.493h-4.203l2.094 2.094zm-2.11-2.55l-2.093 2.11h4.203zm10.228-5.568l-2.109-2.11v4.204zm-4.643 0l2.094 2.094v-4.203zm-5.266 10.53L15.772 26v-4.203zm2.534-2.108V26l2.11-2.094zm2.413 1.79l2.11-2.094H16.53zm0-4.643l-2.094 2.11h4.203zm2.853-2.413v4.203l2.11-2.094zm-2.534 2.11l2.094 2.093v-4.203zm4.947-.32L26 16.229h-4.203zm0-4.643l-2.094 2.11H26z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#7b346e" r="16"/><path d="M8.094 13.678l2.11 2.11H6zm2.11 2.55l-2.11 2.094L6 16.228zm2.852-2.853l-2.11 2.094v-4.203zm-2.55 2.094l-2.093-2.094 2.094-2.11zm2.854-2.413l-2.094-2.094h4.203zm0-4.643l2.109 2.109h-4.203zm4.962-.304l-2.11 2.094V6zm-2.55 2.094L13.678 8.11 15.772 6zm-2.716 8.437l-2.11 2.094v-4.203zm-4.643 0l2.094-2.109v4.203zm10.212-5.584l-2.094-2.094h4.203zm-2.094-2.534l2.094-2.11 2.11 2.11zM15.47 21.493l-2.11 2.094-2.093-2.094zm-2.11-2.55l2.11 2.11h-4.203zm10.228-5.568l-2.109 2.094v-4.203zm-4.643 0l2.094-2.11v4.204zm-5.266 10.53l2.094-2.108V26zm2.534-2.108l2.11 2.109L16.212 26zm2.413 1.79l-2.094-2.094h4.203zm0-4.643l2.11 2.11H16.53zm2.853-2.413l2.11 2.11-2.11 2.093zm-2.534 2.11l2.094-2.11v4.203zm4.947-.32l-2.094-2.093H26zm0-4.643L26 15.788h-4.203z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M8.094 12.678l2.11 2.11H6l2.094-2.11zm2.11 2.55l-2.11 2.094L6 15.228h4.203zm2.852-2.853l-2.11 2.094v-4.203l2.11 2.109zm-2.55 2.094l-2.093-2.094 2.094-2.11v4.204zm2.854-2.413l-2.094-2.094h4.203l-2.11 2.094zm0-4.643l2.109 2.109h-4.203l2.094-2.11zm4.962-.304l-2.11 2.094V5l2.11 2.11zm-2.55 2.094L13.678 7.11 15.772 5v4.203zm-2.716 8.437l-2.11 2.094v-4.203l2.11 2.11zm-4.643 0l2.094-2.109v4.203L8.413 17.64zm10.212-5.584l-2.094-2.094h4.203l-2.109 2.094zm-2.094-2.534l2.094-2.11 2.11 2.11H16.53zM15.47 20.493l-2.11 2.094-2.093-2.094h4.203zm-2.11-2.55l2.11 2.11h-4.203l2.094-2.11zm10.228-5.568l-2.109 2.094v-4.203l2.11 2.109zm-4.643 0l2.094-2.11v4.204l-2.094-2.094zm-5.266 10.53l2.094-2.108V25l-2.094-2.094zm2.534-2.108l2.11 2.109L16.212 25v-4.203zm2.413 1.79l-2.094-2.094h4.203l-2.109 2.094zm0-4.643l2.11 2.11H16.53l2.094-2.11zm2.853-2.413l2.11 2.11-2.11 2.093v-4.203zm-2.534 2.11l2.094-2.11v4.203l-2.094-2.094zm4.947-.32l-2.094-2.093H26l-2.11 2.094zm0-4.643L26 14.788h-4.203l2.094-2.11z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#7B346E" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.094 13.678L6 15.788h4.203zm2.11 2.55H6l2.094 2.094zm2.852-2.853l-2.11-2.11v4.204zm-2.55 2.094v-4.203l-2.093 2.109zm2.854-2.413l2.109-2.094h-4.203zm0-4.643l-2.094 2.109h4.203zm4.962-.304L16.212 6v4.203zm-2.55 2.094V6l-2.094 2.11zm-2.716 8.437l-2.11-2.109v4.203zm-4.643 0l2.094 2.094v-4.203zm10.212-5.584l2.11-2.094H16.53zm-2.094-2.534h4.203l-2.109-2.11zM15.47 21.493h-4.203l2.094 2.094zm-2.11-2.55l-2.093 2.11h4.203zm10.228-5.568l-2.109-2.11v4.204zm-4.643 0l2.094 2.094v-4.203zm-5.266 10.53L15.772 26v-4.203zm2.534-2.108V26l2.11-2.094zm2.413 1.79l2.11-2.094H16.53zm0-4.643l-2.094 2.11h4.203zm2.853-2.413v4.203l2.11-2.094zm-2.534 2.11l2.094 2.093v-4.203zm4.947-.32L26 16.229h-4.203zm0-4.643l-2.094 2.11H26z" fill="#fff" fill-rule="evenodd"/>';
  switch (variation) {
    case 'black':
      svgpath = svgblack;
      break;
    case 'color':
      svgpath = svgcolor;
      break;
    case 'icon':
      svgpath = svgicon;
      break;
    case 'white':
      svgpath = svgwhite;
      break;
    default:
      svgpath = svgcolor;
  }
  export let ariaLabel = 'tau';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 32 32"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {@html svgpath}
</svg>

<!--
@component
[Go to docs](https://svelte-cryptocurrency-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'tau';
-->
