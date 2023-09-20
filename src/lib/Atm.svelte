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
    '<path d="M20.167 18.702a4.369 4.369 0 001.586-5.783L18.53 6.857a4.369 4.369 0 00-5.909-1.806l-.124.066a4.369 4.369 0 00-1.806 5.908l.956 1.798c.072-.044.145-.086.22-.126l.124-.066a4.369 4.369 0 015.909 1.806zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.167-13.298a4.438 4.438 0 01-.22.126l-.124.065a4.369 4.369 0 01-5.909-1.806l-2.267-4.264a4.369 4.369 0 00-1.586 5.782l3.222 6.06a4.369 4.369 0 005.908 1.806l.124-.066a4.369 4.369 0 001.807-5.908z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#346fce" r="16"/><path d="M20.16 18.706l.956 1.797a4.369 4.369 0 01-1.806 5.908l-.124.066a4.369 4.369 0 01-5.909-1.806l-3.223-6.062a4.369 4.369 0 011.592-5.787l-.956-1.797a4.369 4.369 0 011.807-5.908l.124-.066a4.369 4.369 0 015.908 1.806l3.223 6.062a4.369 4.369 0 01-1.591 5.787zm0 0l-2.267-4.265a4.369 4.369 0 00-5.908-1.806l-.124.065c-.073.04-.145.08-.215.122l2.268 4.265a4.369 4.369 0 005.908 1.806l.124-.065c.073-.04.145-.08.215-.122z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="142.3%" height="129.5%" x="-21.2%" y="-10.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.104987545 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="e" width="126.9%" height="115.9%" x="-13.5%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="f" d="M8.878 15.596v2.035A4.369 4.369 0 014.509 22h-.14A4.369 4.369 0 010 17.631v-6.865a4.369 4.369 0 014.122-4.362V4.369A4.369 4.369 0 018.491 0h.14A4.369 4.369 0 0113 4.369v6.865a4.369 4.369 0 01-4.122 4.362zm0 0v-4.83a4.369 4.369 0 00-4.369-4.369h-.14a4.05 4.05 0 00-.247.007v4.83a4.369 4.369 0 004.369 4.369h.14c.083 0 .165-.002.247-.007z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#346FCE" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g filter="url(#d)" transform="rotate(-28 18.75 -5.975)"><use fill="#000" filter="url(#e)" xlink:href="#f"/><use fill="#FFF" xlink:href="#f"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M20.167 18.702a4.369 4.369 0 001.586-5.783L18.53 6.857a4.369 4.369 0 00-5.909-1.806l-.124.066a4.369 4.369 0 00-1.806 5.908l.956 1.798c.072-.044.145-.086.22-.126l.124-.066a4.369 4.369 0 015.909 1.806l2.267 4.265zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.167-13.298a4.438 4.438 0 01-.22.126l-.124.065a4.369 4.369 0 01-5.909-1.806l-2.267-4.264a4.369 4.369 0 00-1.586 5.782l3.222 6.06a4.369 4.369 0 005.908 1.806l.124-.066a4.369 4.369 0 001.807-5.908l-.955-1.795z"/>';
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
  export let ariaLabel = 'atm';
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
[Go to docs](https://svelte-cryptocurrency-icons.vercel.app)
## Props
@prop export let size: string = ctx.size || '32';
@prop export let role: string = ctx.role || 'img';
@prop export let variation: 'black' | 'color' | 'icon' | 'white' = ctx.variation || 'color';
@prop export let ariaLabel = 'atm';
-->
