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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.065 6.888h-3.19v3.196a10.93 10.93 0 013.19-3.196zm15.004 3.11v-3.11h-3.134a10.93 10.93 0 013.134 3.11zm-3.088 15.084h3.088v-3.08a10.933 10.933 0 01-3.088 3.08zM6.875 21.916v3.166h3.144a10.93 10.93 0 01-3.144-3.166zM26 16c0-5.514-4.486-10-10-10S6 10.486 6 16s4.486 10 10 10 10-4.486 10-10zm-10 7.292c-4.02 0-7.292-3.271-7.292-7.292 0-4.02 3.271-7.292 7.292-7.292 4.02 0 7.292 3.271 7.292 7.292 0 4.02-3.271 7.292-7.292 7.292z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1c347a" r="16"/><path d="M10.065 6.888a10.93 10.93 0 00-3.19 3.196V6.888zm15.004 3.11a10.93 10.93 0 00-3.134-3.11h3.134zm-3.088 15.084a10.933 10.933 0 003.088-3.08v3.08zM6.875 21.916a10.93 10.93 0 003.144 3.166H6.875zM26 16c0 5.514-4.486 10-10 10S6 21.514 6 16 10.486 6 16 6s10 4.486 10 10zm-10 7.292c4.02 0 7.292-3.271 7.292-7.292 0-4.02-3.271-7.292-7.292-7.292-4.02 0-7.292 3.271-7.292 7.292 0 4.02 3.271 7.292 7.292 7.292z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.065 5.888a10.93 10.93 0 00-3.19 3.196V5.888h3.19zm15.004 3.11a10.93 10.93 0 00-3.134-3.11h3.134v3.11zm-3.088 15.084a10.933 10.933 0 003.088-3.08v3.08h-3.088zM6.875 20.916a10.93 10.93 0 003.144 3.166H6.875v-3.166zM26 15c0 5.514-4.486 10-10 10S6 20.514 6 15 10.486 5 16 5s10 4.486 10 10zm-10 7.292c4.02 0 7.292-3.271 7.292-7.292 0-4.02-3.271-7.292-7.292-7.292-4.02 0-7.292 3.271-7.292 7.292 0 4.02 3.271 7.292 7.292 7.292z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1C347A" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.065 6.888h-3.19v3.196a10.93 10.93 0 013.19-3.196zm15.004 3.11v-3.11h-3.134a10.93 10.93 0 013.134 3.11zm-3.088 15.084h3.088v-3.08a10.933 10.933 0 01-3.088 3.08zM6.875 21.916v3.166h3.144a10.93 10.93 0 01-3.144-3.166zM26 16c0-5.514-4.486-10-10-10S6 10.486 6 16s4.486 10 10 10 10-4.486 10-10zm-10 7.292c-4.02 0-7.292-3.271-7.292-7.292 0-4.02 3.271-7.292 7.292-7.292 4.02 0 7.292 3.271 7.292 7.292 0 4.02-3.271 7.292-7.292 7.292z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'omni';
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
@prop export let ariaLabel = 'omni';
-->
