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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.301-20.994h-4.7c-.995 0-2.141.325-3.054.973C6.717 12.851 6 14.217 6 16.003s.717 3.152 1.945 4.024a5.447 5.447 0 003.053.973H13v-2.06h-2c-.61 0-1.361-.214-1.92-.61C8.386 17.838 8 17.102 8 16.003s.387-1.835 1.08-2.327a3.507 3.507 0 011.92-.61h4.7zm-5 6.182H13.7V21h2v-5.873h-5zM19 13.06h5v5.878h-5.002v-5.872h-2V21H26V11h-7.002z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#1666af" r="16"/><path d="M15.699 11.006v2.06h-4.7c-.61 0-1.361.214-1.92.61-.693.492-1.08 1.229-1.08 2.327s.387 1.835 1.08 2.327c.559.396 1.31.61 1.92.61h2V21h-2a5.448 5.448 0 01-3.054-.973C6.717 19.155 6 17.789 6 16.003s.717-3.152 1.945-4.024a5.447 5.447 0 013.053-.973zm-5 6.182v-2.06h5V21H13.7v-3.812zM19 13.06V11h7v10h-9.002v-7.933h2v5.872H24v-5.878z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="135%" x="-8.8%" y="-12.5%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.699 10.006v2.06h-4.7c-.61 0-1.361.214-1.92.61-.693.492-1.08 1.229-1.08 2.327 0 1.099.387 1.835 1.08 2.327.559.396 1.31.61 1.92.61h2V20h-2a5.448 5.448 0 01-3.054-.973C6.717 18.155 6 16.789 6 15.003s.717-3.152 1.945-4.024a5.447 5.447 0 013.053-.973h4.7zm-5 6.182v-2.06h5V20H13.7v-3.812h-3zM19 12.06V10h7v10h-9.002v-7.933h2v5.872H24v-5.878h-5.002z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1666AF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.301-20.994h-4.7c-.995 0-2.141.325-3.054.973C6.717 12.851 6 14.217 6 16.003s.717 3.152 1.945 4.024a5.447 5.447 0 003.053.973H13v-2.06h-2c-.61 0-1.361-.214-1.92-.61C8.386 17.838 8 17.102 8 16.003s.387-1.835 1.08-2.327a3.507 3.507 0 011.92-.61h4.7zm-5 6.182H13.7V21h2v-5.873h-5zM19 13.06h5v5.878h-5.002v-5.872h-2V21H26V11h-7.002z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'gbx';
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
@prop export let ariaLabel = 'gbx';
-->
