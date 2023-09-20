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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.079-10l-1.513 1.576C11.456 24.909 13.2 26 14.831 26c3.99 0 5.935-2.652 5.935-5.635 0-2.838-1.456-4.415-4.318-5.677-2.334-1.032-3.363-1.92-3.363-3.728 0-1.319.88-2.896 3.188-2.896 1.532 0 2.195.865 2.747 1.209l1.397-1.455C19.835 7.091 18.08 6 16.348 6c-3.288 0-5.472 2.236-5.472 5.247 0 2.724 1.707 4.359 4.468 5.477 2.284 1.004 3.188 2.036 3.188 3.842 0 1.95-1.305 3.298-3.54 3.298-1.506 0-2.954-1.5-3.07-1.864zm1.862-10.303s5.819-.849 5.703 4.121c0 0 .698.243 1.396 1.576 0 0 1.63-8.606-7.215-7.151 0 0-.233.727.116 1.454zm3.957 7.879s-6.399 1.333-6.21-4.433c0 0-.663-.331-1.197-1.744.002 0-2.718 9.207 7.353 7.909 0 0 .405-.883.054-1.732z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FDA616"/><path fill="#FFF" fill-rule="nonzero" d="M11.921 22c.117.364 1.565 1.864 3.072 1.864 2.234 0 3.539-1.348 3.539-3.298 0-1.806-.904-2.838-3.188-3.842-2.761-1.118-4.468-2.753-4.468-5.477C10.876 8.237 13.06 6 16.348 6c1.732 0 3.487 1.09 4.069 1.818L19.02 9.273c-.552-.344-1.215-1.209-2.747-1.209-2.309 0-3.188 1.577-3.188 2.896 0 1.807 1.03 2.696 3.363 3.728 2.862 1.262 4.318 2.839 4.318 5.677 0 2.983-1.944 5.635-5.935 5.635-1.632 0-3.375-1.09-4.423-2.424L11.921 22zm1.862-10.303c-.349-.727-.116-1.454-.116-1.454 8.844-1.455 7.215 7.15 7.215 7.15-.698-1.332-1.396-1.575-1.396-1.575.116-4.97-5.703-4.121-5.703-4.121zm3.957 7.879c.35.849-.054 1.732-.054 1.732-10.07 1.298-7.35-7.91-7.353-7.91.534 1.414 1.198 1.745 1.198 1.745-.19 5.766 6.209 4.433 6.209 4.433z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="131.8%" height="117.5%" x="-15.9%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.921 21c.117.364 1.565 1.864 3.072 1.864 2.234 0 3.539-1.348 3.539-3.298 0-1.806-.904-2.838-3.188-3.842-2.761-1.118-4.468-2.753-4.468-5.477C10.876 7.237 13.06 5 16.348 5c1.732 0 3.487 1.09 4.069 1.818L19.02 8.273c-.552-.344-1.215-1.209-2.747-1.209-2.309 0-3.188 1.577-3.188 2.896 0 1.807 1.03 2.696 3.363 3.728 2.862 1.262 4.318 2.839 4.318 5.677 0 2.983-1.944 5.635-5.935 5.635-1.632 0-3.375-1.09-4.423-2.424L11.921 21zm1.862-10.303c-.349-.727-.116-1.454-.116-1.454 8.844-1.455 7.215 7.15 7.215 7.15-.698-1.332-1.396-1.575-1.396-1.575.116-4.97-5.703-4.121-5.703-4.121zm3.957 7.879c.35.849-.054 1.732-.054 1.732-10.07 1.298-7.35-7.91-7.353-7.91.534 1.414 1.198 1.745 1.198 1.745-.19 5.766 6.209 4.433 6.209 4.433z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FDA616" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.079-10l-1.513 1.576C11.456 24.909 13.2 26 14.831 26c3.99 0 5.935-2.652 5.935-5.635 0-2.838-1.456-4.415-4.318-5.677-2.334-1.032-3.363-1.92-3.363-3.728 0-1.319.88-2.896 3.188-2.896 1.532 0 2.195.865 2.747 1.209l1.397-1.455C19.835 7.091 18.08 6 16.348 6c-3.288 0-5.472 2.236-5.472 5.247 0 2.724 1.707 4.359 4.468 5.477 2.284 1.004 3.188 2.036 3.188 3.842 0 1.95-1.305 3.298-3.54 3.298-1.506 0-2.954-1.5-3.07-1.864zm1.862-10.303s5.819-.849 5.703 4.121c0 0 .698.243 1.396 1.576 0 0 1.63-8.606-7.215-7.151 0 0-.233.727.116 1.454zm3.957 7.879s-6.399 1.333-6.21-4.433c0 0-.663-.331-1.197-1.744.002 0-2.718 9.207 7.353 7.909 0 0 .405-.883.054-1.732z"/>';
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
  export let ariaLabel = 'slr';
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
@prop export let ariaLabel = 'slr';
-->
