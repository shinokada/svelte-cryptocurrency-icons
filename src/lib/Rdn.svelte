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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10 6.006c.083.046.173.078.258.118 1.55.682 3.04 1.526 4.361 2.595 1.214.98 2.282 2.162 3.047 3.531.715 1.278 1.169 2.72 1.212 4.192a5 5 0 01-.022.624h4.134c.062-1.56-.167-3.13-.649-4.614a15.153 15.153 0 00-1.972-3.945 14.88 14.88 0 00-2.046-2.391c-.064-.05-.114-.14-.212-.11H10zm3.002 7.327L13 26c1.72-1.103 3.435-2.215 5.156-3.317-.33-.607-.667-1.211-1-1.817a4715.11 4715.11 0 00-4.155-7.533z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#2A2A2A"/><path fill="#FFF" d="M10 6.006h8.111c.098-.03.148.06.212.11a14.88 14.88 0 012.046 2.39 15.153 15.153 0 011.972 3.946c.482 1.484.71 3.054.65 4.614h-4.135a5 5 0 00.022-.624c-.043-1.471-.497-2.914-1.212-4.192-.765-1.369-1.833-2.55-3.047-3.531-1.322-1.069-2.81-1.913-4.36-2.595-.086-.04-.176-.072-.259-.118zm3.002 7.327a4715.11 4715.11 0 014.155 7.533c.333.606.67 1.21 1 1.817C16.436 23.785 14.72 24.897 13 26V13.333z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="126.9%" height="117.5%" x="-13.5%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10 5.006h8.111c.098-.03.148.06.212.11a14.88 14.88 0 012.046 2.39 15.153 15.153 0 011.972 3.946c.482 1.484.71 3.054.65 4.614h-4.135a5 5 0 00.022-.624c-.043-1.471-.497-2.914-1.212-4.192-.765-1.369-1.833-2.55-3.047-3.531-1.322-1.069-2.81-1.913-4.36-2.595-.086-.04-.176-.072-.259-.118zm3.002 7.327a4715.11 4715.11 0 014.155 7.533c.333.606.67 1.21 1 1.817C16.436 22.785 14.72 23.897 13 25V12.333z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2A2A2A" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10 6.006c.083.046.173.078.258.118 1.55.682 3.04 1.526 4.361 2.595 1.214.98 2.282 2.162 3.047 3.531.715 1.278 1.169 2.72 1.212 4.192a5 5 0 01-.022.624h4.134c.062-1.56-.167-3.13-.649-4.614a15.153 15.153 0 00-1.972-3.945 14.88 14.88 0 00-2.046-2.391c-.064-.05-.114-.14-.212-.11H10zm3.002 7.327L13 26c1.72-1.103 3.435-2.215 5.156-3.317-.33-.607-.667-1.211-1-1.817a4715.11 4715.11 0 00-4.155-7.533z"/>';
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
  export let ariaLabel = 'rdn';
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
@prop export let ariaLabel = 'rdn';
-->
