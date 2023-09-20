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
    '<g fill-rule="evenodd"><path d="M16.895 17.299L8.27 23.993 22 18.118l.796-.338-.001-.003 1.285-.55.065-3.264 1.855.513-1.414-3.146-3.818 2.963-2.719-4.674L6 9l9.183 2.461.233.795-8.028-.413 7.224 1.935 1.247 4.325zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><g fill-rule="nonzero"><path d="M16.895 17.299l-1.036.804-1.247-4.325-7.224-1.935 8.028.413z" fill-opacity=".7"/><path d="M16.895 17.299l.778 2.652L22 18.118 8.27 23.993zm3.873-3.006l3.818-2.963L26 14.476l-1.855-.513-.065 3.264-1.285.55z" fill-opacity=".3"/></g></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0dc9f7" r="16"/><g fill="#fff" fill-rule="nonzero"><path d="M18.904 15.739l-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z" fill-opacity=".305"/><path d="M8.27 23.993L24.586 11.33 26 14.476l-1.855-.513-.065 3.264z" fill-opacity=".7"/><path d="M22.796 17.78l-4.747-8.161L6 9l9.183 2.461 2.49 8.49z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="123.3%" x="-8.8%" y="-8.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0DC9F7" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" fill-rule="nonzero" filter="url(#d)" transform="translate(6 8)"><path fill-opacity=".305" d="M12.904 6.739L9.859 9.103 8.612 4.778 1.388 2.843l9.481.487z"/><path fill-opacity=".7" d="M2.27 14.993L18.586 2.33 20 5.476l-1.855-.513-.065 3.264z"/><path d="M16.796 8.78L12.049.619 0 0l9.183 2.461 2.49 8.49z"/></g></g>';
  let svgwhite =
    '<g fill="#fff" fill-rule="evenodd"><path d="M16.895 17.299L8.27 23.993 22 18.118l.796-.338-.001-.003 1.285-.55.065-3.264 1.855.513-1.414-3.146-3.818 2.963-2.719-4.674L6 9l9.183 2.461.233.795-8.028-.413 7.224 1.935 1.247 4.325zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><g fill-rule="nonzero"><path d="M16.895 17.299l-1.036.804-1.247-4.325-7.224-1.935 8.028.413z" fill-opacity=".7"/><path d="M16.895 17.299l.778 2.652L22 18.118 8.27 23.993zm3.873-3.006l3.818-2.963L26 14.476l-1.855-.513-.065 3.264-1.285.55z" fill-opacity=".3"/></g></g>';
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
  export let ariaLabel = 'wings';
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
@prop export let ariaLabel = 'wings';
-->
