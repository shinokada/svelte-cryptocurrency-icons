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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.78-16.411a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.698 0a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm-3.699 3.699a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.699 0a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.698-4.11a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm0 3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm-11.232-3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm0 3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm3.835 3.698a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm3.699 0a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zM14.219 11.48a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm3.699 0a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm-3.699-4.11a.685.685 0 100-1.369.685.685 0 000 1.37zm3.699 0a.685.685 0 100-1.369.685.685 0 000 1.37zm7.397 7.398a.685.685 0 100-1.37.685.685 0 000 1.37zm0 3.699a.685.685 0 100-1.37.685.685 0 000 1.37zm-18.63-3.699a.685.685 0 100-1.37.685.685 0 000 1.37zm0 3.699a.685.685 0 100-1.37.685.685 0 000 1.37zM14.219 26a.685.685 0 100-1.37.685.685 0 000 1.37zm3.699 0a.685.685 0 100-1.37.685.685 0 000 1.37z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1e252c" r="16"/><path d="M14.22 15.589a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.698 0a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm-3.699 3.699a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.699 0a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.698-4.11a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm0 3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm-11.232-3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm0 3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm3.835 3.698a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm3.699 0a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zM14.219 11.48a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm3.699 0a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm-3.699-4.11a.685.685 0 110-1.369.685.685 0 010 1.37zm3.699 0a.685.685 0 110-1.369.685.685 0 010 1.37zm7.397 7.398a.685.685 0 110-1.37.685.685 0 010 1.37zm0 3.699a.685.685 0 110-1.37.685.685 0 010 1.37zm-18.63-3.699a.685.685 0 110-1.37.685.685 0 010 1.37zm0 3.699a.685.685 0 110-1.37.685.685 0 010 1.37zM14.219 26a.685.685 0 110-1.37.685.685 0 010 1.37zm3.699 0a.685.685 0 110-1.37.685.685 0 010 1.37z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M14.22 14.589a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.698 0a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm-3.699 3.699a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.699 0a1.507 1.507 0 110-3.014 1.507 1.507 0 010 3.014zm3.698-4.11a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm0 3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm-11.232-3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm0 3.699a1.096 1.096 0 110-2.192 1.096 1.096 0 010 2.192zm3.835 3.698a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm3.699 0a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zM14.219 10.48a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm3.699 0a1.096 1.096 0 110-2.191 1.096 1.096 0 010 2.191zm-3.699-4.11a.685.685 0 110-1.369.685.685 0 010 1.37zm3.699 0a.685.685 0 110-1.369.685.685 0 010 1.37zm7.397 7.398a.685.685 0 110-1.37.685.685 0 010 1.37zm0 3.699a.685.685 0 110-1.37.685.685 0 010 1.37zm-18.63-3.699a.685.685 0 110-1.37.685.685 0 010 1.37zm0 3.699a.685.685 0 110-1.37.685.685 0 010 1.37zM14.219 25a.685.685 0 110-1.37.685.685 0 010 1.37zm3.699 0a.685.685 0 110-1.37.685.685 0 010 1.37z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1E252C" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.78-16.411a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.698 0a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm-3.699 3.699a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.699 0a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014zm3.698-4.11a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm0 3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm-11.232-3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm0 3.699a1.096 1.096 0 100-2.192 1.096 1.096 0 000 2.192zm3.835 3.698a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm3.699 0a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zM14.219 11.48a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm3.699 0a1.096 1.096 0 100-2.191 1.096 1.096 0 000 2.191zm-3.699-4.11a.685.685 0 100-1.369.685.685 0 000 1.37zm3.699 0a.685.685 0 100-1.369.685.685 0 000 1.37zm7.397 7.398a.685.685 0 100-1.37.685.685 0 000 1.37zm0 3.699a.685.685 0 100-1.37.685.685 0 000 1.37zm-18.63-3.699a.685.685 0 100-1.37.685.685 0 000 1.37zm0 3.699a.685.685 0 100-1.37.685.685 0 000 1.37zM14.219 26a.685.685 0 100-1.37.685.685 0 000 1.37zm3.699 0a.685.685 0 100-1.37.685.685 0 000 1.37z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'mds';
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
@prop export let ariaLabel = 'mds';
-->
