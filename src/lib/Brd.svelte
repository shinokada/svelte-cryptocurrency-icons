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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 9.039v13.922C8 23.535 8.472 24 9.054 24h7.432c4.684 0 6.424-.755 7.49-1.806a3.604 3.604 0 001.02-2.696c0-2.124-1.32-3.18-3.918-3.634 2.69-.551 3.687-1.806 3.687-3.657a3.43 3.43 0 00-.98-2.606C22.697 8.528 21.118 8 16.642 8H9.054C8.472 8 8 8.465 8 9.039zm5.761 5.962v1.817a.687.687 0 00.204.51c.136.136.323.21.516.205h2.38c1.526 0 2.661.04 3.197.568.243.26.368.606.346.96a1.22 1.22 0 01-.346.936c-.53.528-1.665.642-3.197.642h-4.5v-9.232h4.546c1.411 0 2.454.085 2.944.567.22.237.33.555.3.875.021.328-.096.65-.323.891-.484.5-1.527.568-2.921.568h-2.443a.698.698 0 00-.703.693z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#fe5d86" r="16"/><path d="M8 9.039C8 8.465 8.472 8 9.054 8h7.588c4.476 0 6.055.528 7.143 1.601a3.43 3.43 0 01.98 2.606c0 1.851-.997 3.106-3.687 3.657 2.598.454 3.917 1.51 3.917 3.634a3.604 3.604 0 01-1.02 2.696C22.91 23.244 21.17 24 16.487 24H9.054A1.047 1.047 0 018 22.961zm5.761 5.962c0-.383.315-.693.703-.693h2.443c1.394 0 2.437-.068 2.92-.568a1.18 1.18 0 00.323-.891c.03-.32-.078-.638-.3-.875-.49-.482-1.532-.567-2.943-.567H12.36v9.232h4.5c1.532 0 2.667-.114 3.197-.642.244-.25.37-.59.346-.937.022-.353-.103-.7-.346-.96-.536-.527-1.67-.567-3.197-.567h-2.38a.708.708 0 01-.516-.205.687.687 0 01-.204-.51z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="120.6%" height="121.9%" x="-10.3%" y="-7.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M8 8.039C8 7.465 8.472 7 9.054 7h7.588c4.476 0 6.055.528 7.143 1.601a3.43 3.43 0 01.98 2.606c0 1.851-.997 3.106-3.687 3.657 2.598.454 3.917 1.51 3.917 3.634a3.604 3.604 0 01-1.02 2.696C22.91 22.244 21.17 23 16.487 23H9.054A1.047 1.047 0 018 21.961V8.039zm5.761 5.962c0-.383.315-.693.703-.693h2.443c1.394 0 2.437-.068 2.92-.568a1.18 1.18 0 00.323-.891c.03-.32-.078-.638-.3-.875-.49-.482-1.532-.567-2.943-.567H12.36v9.232h4.5c1.532 0 2.667-.114 3.197-.642.244-.25.37-.59.346-.937.022-.353-.103-.7-.346-.96-.536-.527-1.67-.567-3.197-.567h-2.38a.708.708 0 01-.516-.205.687.687 0 01-.204-.51V14z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FE5D86" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 9.039v13.922C8 23.535 8.472 24 9.054 24h7.432c4.684 0 6.424-.755 7.49-1.806a3.604 3.604 0 001.02-2.696c0-2.124-1.32-3.18-3.918-3.634 2.69-.551 3.687-1.806 3.687-3.657a3.43 3.43 0 00-.98-2.606C22.697 8.528 21.118 8 16.642 8H9.054C8.472 8 8 8.465 8 9.039zm5.761 5.962v1.817a.687.687 0 00.204.51c.136.136.323.21.516.205h2.38c1.526 0 2.661.04 3.197.568.243.26.368.606.346.96a1.22 1.22 0 01-.346.936c-.53.528-1.665.642-3.197.642h-4.5v-9.232h4.546c1.411 0 2.454.085 2.944.567.22.237.33.555.3.875.021.328-.096.65-.323.891-.484.5-1.527.568-2.921.568h-2.443a.698.698 0 00-.703.693z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'brd';
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
@prop export let ariaLabel = 'brd';
-->
