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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10-18.807c0-.399-.024-.797-.074-1.193H9.774a6.112 6.112 0 00-.117 1.193c0 3.427 2.845 6.217 6.34 6.217 2.718-.003 5.132-1.7 6.007-4.221H20.08c-.891 1.756-2.847 2.738-4.822 2.42-1.974-.319-3.506-1.863-3.777-3.807h12.721c-.317 4.163-3.873 7.455-8.199 7.455-4.533 0-8.221-3.617-8.221-8.062 0-.399.03-.798.09-1.193H6.074c-.05.396-.074.795-.074 1.193C6 18.601 10.487 23 16 23s10-4.4 10-9.807z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#16b9ad" r="16"/><path d="M26 13.193C26 18.601 21.513 23 16 23S6 18.6 6 13.195c0-.398.024-.797.074-1.193H7.87c-.06.395-.09.794-.09 1.193 0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807 1.975.318 3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216 0-.4.04-.8.117-1.193h16.152c.05.396.074.794.074 1.193z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="131.8%" x="-8.8%" y="-11.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M26 12.193C26 17.601 21.513 22 16 22S6 17.6 6 12.195c0-.398.024-.797.074-1.193H7.87c-.06.395-.09.794-.09 1.193 0 4.445 3.688 8.062 8.221 8.062 4.326 0 7.882-3.292 8.2-7.455H11.48c.27 1.944 1.803 3.488 3.777 3.807 1.975.318 3.93-.664 4.822-2.42h1.925c-.875 2.522-3.29 4.218-6.006 4.22-3.496 0-6.341-2.789-6.341-6.216 0-.4.04-.8.117-1.193h16.152c.05.396.074.794.074 1.193z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#16B9AD" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10-18.807c0-.399-.024-.797-.074-1.193H9.774a6.112 6.112 0 00-.117 1.193c0 3.427 2.845 6.217 6.34 6.217 2.718-.003 5.132-1.7 6.007-4.221H20.08c-.891 1.756-2.847 2.738-4.822 2.42-1.974-.319-3.506-1.863-3.777-3.807h12.721c-.317 4.163-3.873 7.455-8.199 7.455-4.533 0-8.221-3.617-8.221-8.062 0-.399.03-.798.09-1.193H6.074c-.05.396-.074.795-.074 1.193C6 18.601 10.487 23 16 23s10-4.4 10-9.807z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'gvt';
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
@prop export let ariaLabel = 'gvt';
-->
