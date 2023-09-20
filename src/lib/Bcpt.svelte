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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.102c-5.466 0-9.898-4.432-9.898-9.898S10.534 6.102 16 6.102s9.898 4.432 9.898 9.898-4.432 9.898-9.898 9.898zm6.043-13.778s0-3.326-5.1-3.548h-6.098V23.43h6.763s4.822-.169 4.822-4.491c0 0 .166-2.66-2.938-3.104 0 0 2.716-.776 2.55-3.714zm-7.706-.887h2.605c1.663.11 1.663 1.274 1.663 1.274v.887c-.11 1.386-1.829 1.441-1.829 1.441h-2.439zm4.6 8.15c-.11 1.386-1.828 1.44-1.828 1.44h-2.773V17.22h2.939c1.663.111 1.663 1.276 1.663 1.276z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#404040" r="16"/><path d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm0-1.102c5.466 0 9.898-4.432 9.898-9.898S21.466 6.102 16 6.102 6.102 10.534 6.102 16s4.432 9.898 9.898 9.898zm6.043-13.778c.165 2.938-2.55 3.714-2.55 3.714 3.103.443 2.937 3.104 2.937 3.104 0 4.322-4.822 4.491-4.822 4.491h-6.763V8.572h6.098c5.1.222 5.1 3.548 5.1 3.548zm-7.706-.887v3.602h2.44s1.718-.055 1.828-1.441v-.887s0-1.163-1.663-1.274zm4.6 8.15v-.888s0-1.165-1.662-1.276h-2.939v3.605h2.773s1.718-.055 1.829-1.442z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm0-1.102c5.466 0 9.898-4.432 9.898-9.898 0-5.466-4.432-9.898-9.898-9.898-5.466 0-9.898 4.432-9.898 9.898 0 5.466 4.432 9.898 9.898 9.898zm6.043-13.778c.165 2.938-2.55 3.714-2.55 3.714 3.103.443 2.937 3.104 2.937 3.104 0 4.322-4.822 4.491-4.822 4.491h-6.763V7.572h6.098c5.1.222 5.1 3.548 5.1 3.548zm-7.706-.887v3.602h2.44s1.718-.055 1.828-1.441v-.887s0-1.163-1.663-1.274h-2.605zm4.6 8.15v-.888s0-1.165-1.662-1.276h-2.939v3.605h2.773s1.718-.055 1.829-1.442z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#404040" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.102c-5.466 0-9.898-4.432-9.898-9.898S10.534 6.102 16 6.102s9.898 4.432 9.898 9.898-4.432 9.898-9.898 9.898zm6.043-13.778s0-3.326-5.1-3.548h-6.098V23.43h6.763s4.822-.169 4.822-4.491c0 0 .166-2.66-2.938-3.104 0 0 2.716-.776 2.55-3.714zm-7.706-.887h2.605c1.663.11 1.663 1.274 1.663 1.274v.887c-.11 1.386-1.829 1.441-1.829 1.441h-2.439zm4.6 8.15c-.11 1.386-1.828 1.44-1.828 1.44h-2.773V17.22h2.939c1.663.111 1.663 1.276 1.663 1.276z" fill="#fff"/>';
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
  export let ariaLabel = 'bcpt';
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
@prop export let ariaLabel = 'bcpt';
-->
