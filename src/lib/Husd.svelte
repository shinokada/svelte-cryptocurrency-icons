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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM9.356 19.803v5.744h3.42v-2.325l-.006-.188a3.42 3.42 0 00-3.414-3.231zm3.302-13.11h-3.42v7.6l.005.188a3.42 3.42 0 003.415 3.232h4.916l.17.008a1.71 1.71 0 011.54 1.702v5.89h3.419v-7.6l-.006-.2a3.419 3.419 0 00-3.412-3.22h-4.918l-.147-.006a1.71 1.71 0 01-1.562-1.703v-5.89zm9.928.236h-3.42v2.325l.005.187a3.42 3.42 0 003.415 3.232V6.93z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#005FFA" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M20.694 14.598a3.407 3.407 0 00-1.41-.305h-4.917a1.71 1.71 0 01-1.71-1.71v-5.89H9.239v7.6a3.42 3.42 0 003.42 3.42h4.916a1.71 1.71 0 011.71 1.71v5.89h3.419v-7.6a3.419 3.419 0 00-2.01-3.115zM9.356 19.803v5.744h3.42v-2.325a3.42 3.42 0 00-3.42-3.419zM19.88 6.929h-.714v2.325a3.42 3.42 0 003.42 3.42V6.928H19.88z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#005FFA" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M20.694 13.598a3.407 3.407 0 00-1.41-.305h-4.917a1.71 1.71 0 01-1.71-1.71v-5.89H9.239v7.6a3.42 3.42 0 003.42 3.42h4.916a1.71 1.71 0 011.71 1.71v5.89h3.419v-7.6a3.419 3.419 0 00-2.01-3.115zM9.356 18.803v5.744h3.42v-2.325a3.42 3.42 0 00-3.42-3.419zM19.88 5.929h-.714v2.325a3.42 3.42 0 003.42 3.42V5.928H19.88z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM9.356 19.803v5.744h3.42v-2.325l-.006-.188a3.42 3.42 0 00-3.414-3.231zm3.302-13.11h-3.42v7.6l.005.188a3.42 3.42 0 003.415 3.232h4.916l.17.008a1.71 1.71 0 011.54 1.702v5.89h3.419v-7.6l-.006-.2a3.419 3.419 0 00-3.412-3.22h-4.918l-.147-.006a1.71 1.71 0 01-1.562-1.703v-5.89zm9.928.236h-3.42v2.325l.005.187a3.42 3.42 0 003.415 3.232V6.93z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'husd';
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
@prop export let ariaLabel = 'husd';
-->
