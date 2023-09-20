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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.294-12.704l.525-2.29h1.529L12.497 24h4.875c3.017 0 4.876-1.347 5.332-3.873l.228-1.265c.295-1.636-.1-2.77-1.272-3.371 1.184-.579 1.873-1.582 2.146-3.09l.1-.556C24.373 9.255 23.109 8 19.99 8h-4.606l-1.142 6.329-4.578-.003-.51 2.443H4zm5.066-2.747h1.49c1.513 0 2.047.614 1.769 2.157l-.245 1.354c-.218 1.207-.86 1.719-2.013 1.719h-1.945zm1.143-6.329h1.595c1.18 0 1.647.62 1.422 1.868l-.157.867c-.23 1.278-.984 1.83-2.272 1.83H17.09z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2d2d2d" r="16"/><path d="M11.706 19.296L4 16.77h5.155l.51-2.443 4.578.003L15.385 8h4.606c3.118 0 4.382 1.255 3.915 3.845l-.1.555c-.273 1.509-.962 2.512-2.146 3.091 1.173.6 1.567 1.735 1.272 3.37l-.228 1.266C22.248 22.653 20.39 24 17.372 24h-4.875l1.263-6.993h-1.53zm5.066-2.747l-.944 5.23h1.945c1.154 0 1.795-.512 2.013-1.72l.245-1.353c.278-1.543-.256-2.157-1.769-2.157zm1.143-6.329l-.824 4.564h1.412c1.288 0 2.041-.55 2.272-1.83l.157-.866c.225-1.247-.241-1.868-1.422-1.868H18.1z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="121.9%" x="-8.8%" y="-7.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.706 18.296L4 15.77h5.155l.51-2.443 4.578.003L15.385 7h4.606c3.118 0 4.382 1.255 3.915 3.845l-.1.555c-.273 1.509-.962 2.512-2.146 3.091 1.173.6 1.567 1.735 1.272 3.37l-.228 1.266C22.248 21.653 20.39 23 17.372 23h-4.875l1.263-6.993h-1.53l-.524 2.29zm5.066-2.747l-.944 5.23h1.945c1.154 0 1.795-.512 2.013-1.72l.245-1.353c.278-1.543-.256-2.157-1.769-2.157h-1.49zm1.143-6.329l-.824 4.564h1.412c1.288 0 2.041-.55 2.272-1.83l.157-.866c.225-1.247-.241-1.868-1.422-1.868h-1.595z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2D2D2D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.294-12.704l.525-2.29h1.529L12.497 24h4.875c3.017 0 4.876-1.347 5.332-3.873l.228-1.265c.295-1.636-.1-2.77-1.272-3.371 1.184-.579 1.873-1.582 2.146-3.09l.1-.556C24.373 9.255 23.109 8 19.99 8h-4.606l-1.142 6.329-4.578-.003-.51 2.443H4zm5.066-2.747h1.49c1.513 0 2.047.614 1.769 2.157l-.245 1.354c-.218 1.207-.86 1.719-2.013 1.719h-1.945zm1.143-6.329h1.595c1.18 0 1.647.62 1.422 1.868l-.157.867c-.23 1.278-.984 1.83-2.272 1.83H17.09z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'burst';
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
@prop export let ariaLabel = 'burst';
-->
