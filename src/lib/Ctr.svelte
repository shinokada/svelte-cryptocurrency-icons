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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.546a9.454 9.454 0 110-18.908 9.454 9.454 0 010 18.908zm.072-2.913c2.788 0 4.39-1.204 5.577-2.84l-2.627-1.868c-.755.916-1.529 1.527-2.842 1.527-1.763 0-3.004-1.473-3.004-3.36v-.036c0-1.833 1.241-3.324 3.004-3.324 1.205 0 2.033.575 2.752 1.473l2.627-2.03c-1.116-1.545-2.77-2.624-5.343-2.624-3.813 0-6.638 2.875-6.638 6.541v.036c0 3.755 2.897 6.505 6.494 6.505z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#fdde6c" fill-rule="nonzero" r="16"/><path d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm0-1.546a9.454 9.454 0 100-18.908 9.454 9.454 0 000 18.908zm.072-2.913c-3.597 0-6.494-2.75-6.494-6.505V16c0-3.666 2.825-6.54 6.638-6.54 2.572 0 4.227 1.078 5.343 2.623l-2.627 2.03c-.72-.898-1.547-1.473-2.752-1.473-1.763 0-3.004 1.491-3.004 3.324V16c0 1.887 1.241 3.36 3.004 3.36 1.313 0 2.087-.61 2.842-1.527l2.627 1.869c-1.188 1.635-2.789 2.839-5.577 2.839z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16 26C9.925 26 5 21.075 5 15S9.925 4 16 4s11 4.925 11 11-4.925 11-11 11zm0-1.546a9.454 9.454 0 100-18.908 9.454 9.454 0 000 18.908zm.072-2.913c-3.597 0-6.494-2.75-6.494-6.505V15c0-3.666 2.825-6.54 6.638-6.54 2.572 0 4.227 1.078 5.343 2.623l-2.627 2.03c-.72-.898-1.547-1.473-2.752-1.473-1.763 0-3.004 1.491-3.004 3.324V15c0 1.887 1.241 3.36 3.004 3.36 1.313 0 2.087-.61 2.842-1.527l2.627 1.869c-1.188 1.635-2.789 2.839-5.577 2.839z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FDDE6C" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.546a9.454 9.454 0 110-18.908 9.454 9.454 0 010 18.908zm.072-2.913c2.788 0 4.39-1.204 5.577-2.84l-2.627-1.868c-.755.916-1.529 1.527-2.842 1.527-1.763 0-3.004-1.473-3.004-3.36v-.036c0-1.833 1.241-3.324 3.004-3.324 1.205 0 2.033.575 2.752 1.473l2.627-2.03c-1.116-1.545-2.77-2.624-5.343-2.624-3.813 0-6.638 2.875-6.638 6.541v.036c0 3.755 2.897 6.505 6.494 6.505z" fill="#fff"/>';
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
  export let ariaLabel = 'ctr';
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
@prop export let ariaLabel = 'ctr';
-->
