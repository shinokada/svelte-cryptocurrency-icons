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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.691-20v8h2.738c1.322 0 3.683-.803 3.683-4s-2.36-4-3.683-4zm1.51 6.38v-4.76h1.134c.944 0 2.077.578 2.077 2.38s-1.133 2.38-2.077 2.38zM20.77 12v8h.566v-6.872L26.433 20H27v-8h-.567v7.026L21.335 12zM5 12v2h1.888v-2zm2.833 0v2H9.72v-2zm2.832 0v2h1.889v-2zm0 3v2h1.889v-2zm0 3v2h1.889v-2zm-2.832-3v2H9.72v-2z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4f7aa2" r="16"/><path d="M13.309 12h2.738c1.322 0 3.683.803 3.683 4s-2.36 4-3.683 4H13.31zm1.51 6.38h1.134c.944 0 2.077-.578 2.077-2.38s-1.133-2.38-2.077-2.38H14.82zM20.77 12h.566l5.098 7.026V12H27v8h-.567l-5.098-6.872V20h-.567zM5 12h1.888v2H5zm2.833 0H9.72v2H7.833zm2.832 0h1.889v2h-1.889zm0 3h1.889v2h-1.889zm0 3h1.889v2h-1.889zm-2.832-3H9.72v2H7.833z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="143.8%" x="-8%" y="-15.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M13.309 11h2.738c1.322 0 3.683.803 3.683 4s-2.36 4-3.683 4H13.31v-8zm1.51 6.38h1.134c.944 0 2.077-.578 2.077-2.38s-1.133-2.38-2.077-2.38H14.82v4.76zM20.77 11h.566l5.098 7.026V11H27v8h-.567l-5.098-6.872V19h-.567v-8zM5 11h1.888v2H5v-2zm2.833 0H9.72v2H7.833v-2zm2.832 0h1.889v2h-1.889v-2zm0 3h1.889v2h-1.889v-2zm0 3h1.889v2h-1.889v-2zm-2.832-3H9.72v2H7.833v-2z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4F7AA2" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.691-20v8h2.738c1.322 0 3.683-.803 3.683-4s-2.36-4-3.683-4zm1.51 6.38v-4.76h1.134c.944 0 2.077.578 2.077 2.38s-1.133 2.38-2.077 2.38zM20.77 12v8h.566v-6.872L26.433 20H27v-8h-.567v7.026L21.335 12zM5 12v2h1.888v-2zm2.833 0v2H9.72v-2zm2.832 0v2h1.889v-2zm0 3v2h1.889v-2zm0 3v2h1.889v-2zm-2.832-3v2H9.72v-2z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'xdn';
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
@prop export let ariaLabel = 'xdn';
-->
