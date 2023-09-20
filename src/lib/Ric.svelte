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
    '<path d="M10.144 20.024h-3.05a.093.093 0 00-.094.093v.637c0 .051.042.093.093.093h2.514a177.13 177.13 0 00-2 3.153h7.319c-1.909-.936-2.887-1.987-2.936-3.153h2.749a.093.093 0 00.093-.093v-.637a.093.093 0 00-.093-.093h-2.631c.097-.364.252-.8.46-1.28h3.01a.093.093 0 00.093-.093v-.636a.093.093 0 00-.093-.093h-2.624c1.52-3.012 4.687-7.038 8.405-7.038 2.368 0 2.412 2.103 3.59 2.103S27 12.673 27 12.073c0-.6-.746-2.788-3.543-2.788-4.655 0-6.57 3.564-8.811 3.564-1.9 0-2.75-1.645-2.75-2.604 0-1.435 1.63-2.925 2.377-2.97.279-.018.186-.275-.42-.275-1.306 0-3.543 1.68-3.543 3.062 0 2.542 2.145 3.473 3.45 3.473.66 0 .7.091.7.274 0 .12-.97 1.284-2.906 4.113H7.932a.093.093 0 00-.093.093v.636c0 .052.042.094.093.094h3.064c-.268.398-.552.824-.852 1.28zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#60e4dd" r="16"/><path d="M10.144 20.024c.3-.455.584-.881.852-1.28H7.932a.093.093 0 01-.093-.093v-.636c0-.051.042-.093.093-.093h3.622c1.937-2.829 2.905-3.994 2.905-4.113 0-.183-.04-.274-.7-.274-1.304 0-3.449-.931-3.449-3.473C10.31 8.679 12.547 7 13.853 7c.606 0 .699.257.42.274-.746.046-2.378 1.536-2.378 2.97 0 .96.852 2.605 2.75 2.605 2.242 0 4.157-3.564 8.812-3.564 2.797 0 3.543 2.188 3.543 2.788 0 .6-.873.914-2.051.914-1.178 0-1.222-2.103-3.59-2.103-3.718 0-6.884 4.026-8.405 7.038h2.624c.052 0 .093.042.093.093v.636a.093.093 0 01-.093.094h-3.01c-.208.48-.363.915-.46 1.28h2.63c.052 0 .094.04.094.092v.637a.093.093 0 01-.093.093H11.99c.049 1.166 1.027 2.217 2.936 3.153h-7.32a185.324 185.324 0 012-3.153H7.094A.093.093 0 017 20.754v-.637c0-.051.042-.093.093-.093z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.144 19.024c.3-.455.584-.881.852-1.28H7.932a.093.093 0 01-.093-.093v-.636c0-.051.042-.093.093-.093h3.622c1.937-2.829 2.905-3.994 2.905-4.113 0-.183-.04-.274-.7-.274-1.304 0-3.449-.931-3.449-3.473C10.31 7.679 12.547 6 13.853 6c.606 0 .699.257.42.274-.746.046-2.378 1.536-2.378 2.97 0 .96.852 2.605 2.75 2.605 2.242 0 4.157-3.564 8.812-3.564 2.797 0 3.543 2.188 3.543 2.788 0 .6-.873.914-2.051.914-1.178 0-1.222-2.103-3.59-2.103-3.718 0-6.884 4.026-8.405 7.038h2.624c.052 0 .093.042.093.093v.636a.093.093 0 01-.093.094h-3.01c-.208.48-.363.915-.46 1.28h2.63c.052 0 .094.04.094.092v.637a.093.093 0 01-.093.093H11.99c.049 1.166 1.027 2.217 2.936 3.153h-7.32a185.324 185.324 0 012-3.153H7.094A.093.093 0 017 19.754v-.637c0-.051.042-.093.093-.093h3.051z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#60E4DD" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M10.144 20.024h-3.05a.093.093 0 00-.094.093v.637c0 .051.042.093.093.093h2.514a177.13 177.13 0 00-2 3.153h7.319c-1.909-.936-2.887-1.987-2.936-3.153h2.749a.093.093 0 00.093-.093v-.637a.093.093 0 00-.093-.093h-2.631c.097-.364.252-.8.46-1.28h3.01a.093.093 0 00.093-.093v-.636a.093.093 0 00-.093-.093h-2.624c1.52-3.012 4.687-7.038 8.405-7.038 2.368 0 2.412 2.103 3.59 2.103S27 12.673 27 12.073c0-.6-.746-2.788-3.543-2.788-4.655 0-6.57 3.564-8.811 3.564-1.9 0-2.75-1.645-2.75-2.604 0-1.435 1.63-2.925 2.377-2.97.279-.018.186-.275-.42-.275-1.306 0-3.543 1.68-3.543 3.062 0 2.542 2.145 3.473 3.45 3.473.66 0 .7.091.7.274 0 .12-.97 1.284-2.906 4.113H7.932a.093.093 0 00-.093.093v.636c0 .052.042.094.093.094h3.064c-.268.398-.552.824-.852 1.28zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ric';
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
@prop export let ariaLabel = 'ric';
-->
