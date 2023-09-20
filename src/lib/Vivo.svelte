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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.049-21.723c-1.664 2.772-6.527 9.835-7.036 10.44-.488-.596-5.058-7.27-7.081-10.472A1.573 1.573 0 006.73 9.76a1.647 1.647 0 00-.475 2.248c2.047 3.241 3.84 5.985 5.27 8.036C13.932 23.497 14.312 24.5 16 24.5s2.194-1.136 4.535-4.447c1.603-2.268 3.526-5.238 5.23-8.076a1.646 1.646 0 00-.526-2.237c-.75-.47-1.73-.23-2.19.537z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#408af1" r="16"/><path d="M23.049 10.277a1.574 1.574 0 012.19-.537c.75.47.986 1.47.526 2.237-1.704 2.838-3.627 5.808-5.23 8.076-2.34 3.31-2.847 4.447-4.535 4.447s-2.068-1.003-4.475-4.456c-1.43-2.05-3.223-4.795-5.27-8.036A1.647 1.647 0 016.73 9.76a1.573 1.573 0 012.202.485c2.023 3.202 6.593 9.876 7.081 10.471.51-.604 5.372-7.667 7.036-10.44z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="123.3%" x="-8.8%" y="-8.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23.049 9.277a1.574 1.574 0 012.19-.537c.75.47.986 1.47.526 2.237-1.704 2.838-3.627 5.808-5.23 8.076-2.34 3.31-2.847 4.447-4.535 4.447-1.688 0-2.068-1.003-4.475-4.456-1.43-2.05-3.223-4.795-5.27-8.036A1.647 1.647 0 016.73 8.76a1.573 1.573 0 012.202.485c2.023 3.202 6.593 9.876 7.081 10.471.51-.604 5.372-7.667 7.036-10.44z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#408AF1" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.049-21.723c-1.664 2.772-6.527 9.835-7.036 10.44-.488-.596-5.058-7.27-7.081-10.472A1.573 1.573 0 006.73 9.76a1.647 1.647 0 00-.475 2.248c2.047 3.241 3.84 5.985 5.27 8.036C13.932 23.497 14.312 24.5 16 24.5s2.194-1.136 4.535-4.447c1.603-2.268 3.526-5.238 5.23-8.076a1.646 1.646 0 00-.526-2.237c-.75-.47-1.73-.23-2.19.537z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'vivo';
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
@prop export let ariaLabel = 'vivo';
-->
