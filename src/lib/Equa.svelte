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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.72-21.922c3.093-.606 3.265 1.471 3.265 1.471.172 2.337-1.805 2.424-1.805 2.424l-.582.04c-.91.027-1.672.7-1.818 1.604a1.922 1.922 0 00.413 1.527c.35.425.866.677 1.414.69l.573.033c4.126-.26 5.33-3.635 5.33-3.635 1.719-4.24-1.634-6.837-1.634-6.837-2.505-1.967-5.39-1.493-7.36-.756a10.172 10.172 0 00-4.278 3.072c-4.794 5.812-.395 12.137-.395 12.137 2.246 3.044 5.707 4.31 8.286 4.136a2.014 2.014 0 001.856-2.022c0-.538-.212-1.054-.59-1.434a2.007 2.007 0 00-1.424-.594h-.258a4.36 4.36 0 01-1.113-.143c-5.246-1.386-4.608-6.52-4.608-6.52.601-4.587 4.727-5.193 4.727-5.193z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F68922"/><path fill="#FFF" d="M16.72 10.078s-4.127.606-4.728 5.193c0 0-.638 5.134 4.608 6.52a4.36 4.36 0 001.113.143h.258c.534 0 1.046.214 1.424.594.378.38.59.896.59 1.434a2.014 2.014 0 01-1.856 2.022c-2.579.174-6.04-1.092-8.286-4.136 0 0-4.399-6.325.395-12.137a10.172 10.172 0 014.277-3.072c1.97-.737 4.856-1.211 7.361.756 0 0 3.353 2.597 1.634 6.837 0 0-1.204 3.375-5.33 3.635l-.573-.032a1.895 1.895 0 01-1.414-.691 1.922 1.922 0 01-.413-1.527 1.904 1.904 0 011.818-1.605l.582-.04s1.977-.086 1.805-2.423c0 0-.172-2.077-3.266-1.47"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.72 9.078s-4.127.606-4.728 5.193c0 0-.638 5.134 4.608 6.52a4.36 4.36 0 001.113.143h.258c.534 0 1.046.214 1.424.594.378.38.59.896.59 1.434a2.014 2.014 0 01-1.856 2.022c-2.579.174-6.04-1.092-8.286-4.136 0 0-4.399-6.325.395-12.137a10.172 10.172 0 014.277-3.072c1.97-.737 4.856-1.211 7.361.756 0 0 3.353 2.597 1.634 6.837 0 0-1.204 3.375-5.33 3.635l-.573-.032a1.895 1.895 0 01-1.414-.691 1.922 1.922 0 01-.413-1.527 1.904 1.904 0 011.818-1.605l.582-.04s1.977-.086 1.805-2.423c0 0-.172-2.077-3.266-1.47"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F68922" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.72-21.922c3.093-.606 3.265 1.471 3.265 1.471.172 2.337-1.805 2.424-1.805 2.424l-.582.04c-.91.027-1.672.7-1.818 1.604a1.922 1.922 0 00.413 1.527c.35.425.866.677 1.414.69l.573.033c4.126-.26 5.33-3.635 5.33-3.635 1.719-4.24-1.634-6.837-1.634-6.837-2.505-1.967-5.39-1.493-7.36-.756a10.172 10.172 0 00-4.278 3.072c-4.794 5.812-.395 12.137-.395 12.137 2.246 3.044 5.707 4.31 8.286 4.136a2.014 2.014 0 001.856-2.022c0-.538-.212-1.054-.59-1.434a2.007 2.007 0 00-1.424-.594h-.258a4.36 4.36 0 01-1.113-.143c-5.246-1.386-4.608-6.52-4.608-6.52.601-4.587 4.727-5.193 4.727-5.193z" fill="#fff"/>';
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
  export let ariaLabel = 'equa';
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
@prop export let ariaLabel = 'equa';
-->
