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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.027 16.24a.243.243 0 00-.341-.082l-1.24.805a.25.25 0 00-.079.337l1.088 1.845a.125.125 0 01-.04.168l-6.35 4.125a.118.118 0 01-.131 0l-6.349-4.125a.127.127 0 01-.04-.168l1.089-1.845a.25.25 0 00-.079-.337l-1.24-.805a.243.243 0 00-.341.082L7.07 19.468a.5.5 0 00.156.674l8.51 5.53a.484.484 0 00.53 0l8.51-5.53a.504.504 0 00.155-.674zM16.564 5.75h-1.128a.49.49 0 00-.421.242l-4.784 8.111a.25.25 0 00.08.337l1.239.805a.243.243 0 00.342-.082l4.003-6.786a.122.122 0 01.21 0l4.003 6.786c.07.12.227.157.342.082l1.24-.805a.25.25 0 00.078-.337l-4.784-8.111a.49.49 0 00-.42-.242z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#0E0E21" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M11.55 15.245l-1.24-.805a.25.25 0 01-.079-.337l4.784-8.111a.49.49 0 01.42-.242h1.129a.49.49 0 01.42.242l4.784 8.111a.25.25 0 01-.079.337l-1.24.805a.244.244 0 01-.341-.082l-4.003-6.786a.122.122 0 00-.21 0l-4.003 6.786a.243.243 0 01-.342.082zm11.477.995l1.904 3.228a.504.504 0 01-.155.674l-8.51 5.53a.484.484 0 01-.53 0l-8.51-5.53a.5.5 0 01-.156-.674l1.904-3.228a.243.243 0 01.342-.082l1.239.805a.25.25 0 01.079.337l-1.088 1.845a.127.127 0 00.04.168l6.348 4.125c.04.027.09.027.131 0l6.35-4.125a.125.125 0 00.04-.168L21.367 17.3a.25.25 0 01.079-.337l1.24-.805a.243.243 0 01.341.082z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-20.8%" y="-18.8%" width="141.7%" height="137.5%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0E0E21" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(7 5)"><path d="M4.55 9.495L3.31 8.69a.25.25 0 01-.079-.337L8.015.242A.49.49 0 018.435 0h1.129a.49.49 0 01.42.242l4.784 8.111a.25.25 0 01-.079.337l-1.24.805a.244.244 0 01-.341-.082L9.105 2.627a.122.122 0 00-.21 0L4.892 9.413a.243.243 0 01-.342.082zm11.477.995l1.904 3.228a.504.504 0 01-.155.674l-8.51 5.53a.484.484 0 01-.53 0l-8.51-5.53a.5.5 0 01-.156-.674l1.904-3.228a.243.243 0 01.342-.082l1.24.805a.25.25 0 01.078.337l-1.088 1.845a.127.127 0 00.04.168l6.348 4.125c.04.027.09.027.131 0l6.35-4.125a.125.125 0 00.04-.168l-1.088-1.845a.25.25 0 01.079-.337l1.24-.805a.243.243 0 01.341.082z" fill="#FFF"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.027 16.49a.243.243 0 00-.341-.082l-1.24.805a.25.25 0 00-.079.337l1.088 1.845a.125.125 0 01-.04.168l-6.35 4.125a.118.118 0 01-.131 0l-6.349-4.125a.127.127 0 01-.04-.168l1.089-1.845a.25.25 0 00-.079-.337l-1.24-.805a.243.243 0 00-.341.082L7.07 19.718a.5.5 0 00.156.674l8.51 5.53a.484.484 0 00.53 0l8.51-5.53a.504.504 0 00.155-.674zM16.564 6h-1.128a.49.49 0 00-.421.242l-4.784 8.111a.25.25 0 00.08.337l1.239.805a.243.243 0 00.342-.082l4.003-6.786a.122.122 0 01.21 0l4.003 6.786c.07.12.227.157.342.082l1.24-.805a.25.25 0 00.078-.337l-4.784-8.111a.49.49 0 00-.42-.242z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'repv2';
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
@prop export let ariaLabel = 'repv2';
-->
