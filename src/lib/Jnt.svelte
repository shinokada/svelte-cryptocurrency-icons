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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-6c.648 0 1.284-.174 1.844-.505l5.306-3.12a3.797 3.797 0 001.85-3.26v-6.23a3.785 3.785 0 00-1.85-3.259l-5.306-3.12A3.585 3.585 0 0016.008 6c-.65 0-1.29.175-1.852.505L8.85 9.626A3.797 3.797 0 007 12.885v6.23a3.785 3.785 0 001.85 3.26l5.306 3.12c.56.33 1.196.505 1.844.505zm-3.052-6.429c.26.267.612.417.981.418.765 0 1.385-.631 1.385-1.41v-7.984h1.382v4.696c.001.776.62 1.405 1.382 1.407.369 0 .723-.15.983-.416l.982 1a2.663 2.663 0 01-1.965.812 2.715 2.715 0 01-1.382-.376v.852c-.002 1.559-1.243 2.821-2.774 2.823a2.69 2.69 0 01-1.957-.822z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0050db" r="16"/><path d="M16 26a3.626 3.626 0 01-1.844-.505l-5.306-3.12A3.785 3.785 0 017 19.114v-6.23a3.797 3.797 0 011.85-3.259l5.306-3.12A3.664 3.664 0 0116.008 6c.645 0 1.28.174 1.836.505l5.306 3.121A3.785 3.785 0 0125 12.885v6.23a3.797 3.797 0 01-1.85 3.26l-5.306 3.12c-.56.33-1.196.505-1.844.505zm-3.052-6.429l-.983 1a2.69 2.69 0 001.957.822c1.53-.002 2.772-1.264 2.774-2.823v-.852c.42.247.897.377 1.382.376a2.663 2.663 0 001.965-.812l-.982-1c-.26.266-.614.416-.983.416a1.397 1.397 0 01-1.382-1.407v-4.696h-1.382v7.984c0 .779-.62 1.41-1.385 1.41a1.37 1.37 0 01-.981-.418z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16 25a3.626 3.626 0 01-1.844-.505l-5.306-3.12A3.785 3.785 0 017 18.114v-6.23a3.797 3.797 0 011.85-3.259l5.306-3.12A3.664 3.664 0 0116.008 5c.645 0 1.28.174 1.836.505l5.306 3.121A3.785 3.785 0 0125 11.885v6.23a3.797 3.797 0 01-1.85 3.26l-5.306 3.12c-.56.33-1.196.505-1.844.505zm-3.052-6.429l-.983 1a2.69 2.69 0 001.957.822c1.53-.002 2.772-1.264 2.774-2.823v-.852c.42.247.897.377 1.382.376a2.663 2.663 0 001.965-.812l-.982-1c-.26.266-.614.416-.983.416a1.397 1.397 0 01-1.382-1.407V9.595h-1.382v7.984c0 .779-.62 1.41-1.385 1.41a1.37 1.37 0 01-.981-.418z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0050DB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-6c.648 0 1.284-.174 1.844-.505l5.306-3.12a3.797 3.797 0 001.85-3.26v-6.23a3.785 3.785 0 00-1.85-3.259l-5.306-3.12A3.585 3.585 0 0016.008 6c-.65 0-1.29.175-1.852.505L8.85 9.626A3.797 3.797 0 007 12.885v6.23a3.785 3.785 0 001.85 3.26l5.306 3.12c.56.33 1.196.505 1.844.505zm-3.052-6.429c.26.267.612.417.981.418.765 0 1.385-.631 1.385-1.41v-7.984h1.382v4.696c.001.776.62 1.405 1.382 1.407.369 0 .723-.15.983-.416l.982 1a2.663 2.663 0 01-1.965.812 2.715 2.715 0 01-1.382-.376v.852c-.002 1.559-1.243 2.821-2.774 2.823a2.69 2.69 0 01-1.957-.822z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'jnt';
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
@prop export let ariaLabel = 'jnt';
-->
