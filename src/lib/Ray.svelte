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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 5l-9.5 5.5v11L16 27l9.5-5.5v-8.814l-.995.57v7.673l-8.508 4.927-8.512-4.927v-9.854L16 6.14l6.539 3.79.988-.57L16 5zm.943 6.284h-4.748v1.457h4.745a1.6 1.6 0 01.647.127c.204.086.39.213.544.371a1.657 1.657 0 01.5 1.196c-.004.45-.18.883-.496 1.203a1.693 1.693 0 01-1.195.508h-4.745v4.79h1.422v-3.337h2.848a5.485 5.485 0 001.697-.257 3.115 3.115 0 001.367-1.124 3.08 3.08 0 00.555-1.783 3.182 3.182 0 00-.927-2.223 3.152 3.152 0 00-2.214-.928zm1.65 6.985a5.359 5.359 0 01-1.484.306l1.28 2.24h1.66zm5.902-8.335l-.982.57v1.158l.982.546.98-.546v-1.158l-.98-.57z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#6C45DC" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M24.505 13.256v7.673l-8.508 4.927-8.512-4.927v-9.854L16 6.14l6.539 3.79.988-.57L16 5l-9.5 5.5v11L16 27l9.5-5.5v-8.814z"/><path d="M13.617 20.936h-1.422v-4.79h4.745a1.693 1.693 0 001.195-.508c.317-.32.492-.753.496-1.203a1.657 1.657 0 00-.5-1.196 1.682 1.682 0 00-.544-.37 1.6 1.6 0 00-.647-.128h-4.745v-1.457h4.748c.83.004 1.63.34 2.214.928.59.59.92 1.388.927 2.223a3.08 3.08 0 01-.555 1.783c-.337.498-.812.89-1.367 1.124a5.485 5.485 0 01-1.697.257h-2.848v3.337zm6.433-.121h-1.66l-1.281-2.24a5.359 5.359 0 001.484-.306l1.456 2.546zm3.463-9.153l.982.546.98-.546v-1.158l-.98-.57-.982.57z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#6C45DC" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M24.505 12.256v7.673l-8.508 4.927-8.512-4.927v-9.854L16 5.14l6.539 3.79.988-.57L16 4 6.5 9.5v11L16 26l9.5-5.5v-8.814z"/><path d="M13.617 19.936h-1.422v-4.79h4.745a1.693 1.693 0 001.195-.508c.317-.32.492-.753.496-1.203a1.657 1.657 0 00-.5-1.196 1.682 1.682 0 00-.544-.37 1.6 1.6 0 00-.647-.128h-4.745v-1.457h4.748c.83.004 1.63.34 2.214.928.59.59.92 1.388.927 2.223a3.08 3.08 0 01-.555 1.783c-.337.498-.812.89-1.367 1.124a5.485 5.485 0 01-1.697.257h-2.848v3.337zm6.433-.121h-1.66l-1.281-2.24a5.359 5.359 0 001.484-.306l1.456 2.546zm3.463-9.153l.982.546.98-.546V9.504l-.98-.57-.982.57z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 5l-9.5 5.5v11L16 27l9.5-5.5v-8.814l-.995.57v7.673l-8.508 4.927-8.512-4.927v-9.854L16 6.14l6.539 3.79.988-.57L16 5zm.943 6.284h-4.748v1.457h4.745a1.6 1.6 0 01.647.127c.204.086.39.213.544.371a1.657 1.657 0 01.5 1.196c-.004.45-.18.883-.496 1.203a1.693 1.693 0 01-1.195.508h-4.745v4.79h1.422v-3.337h2.848a5.485 5.485 0 001.697-.257 3.115 3.115 0 001.367-1.124 3.08 3.08 0 00.555-1.783 3.182 3.182 0 00-.927-2.223 3.152 3.152 0 00-2.214-.928zm1.65 6.985a5.359 5.359 0 01-1.484.306l1.28 2.24h1.66zm5.902-8.335l-.982.57v1.158l.982.546.98-.546v-1.158l-.98-.57z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ray';
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
@prop export let ariaLabel = 'ray';
-->
