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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.473-20.52l2.667-.612 1.033-1.7-1.02-1.674-1.306-.902L18.164 6l-1.655.933-2.648-.472-3.636 2.52-.283 2.941-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.34.828 1.733 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.17-1.516-2.4 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#383939" r="16"/><path d="M19.473 11.479l2.667-.611 1.033-1.701-1.02-1.673-1.306-.902L18.164 6l-1.655.933-2.648-.472-3.636 2.519-.283 2.942-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.339.828 1.734 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.171-1.516-2.399 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="117.5%" x="-10.9%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M19.473 10.479l2.667-.611 1.033-1.701-1.02-1.673-1.306-.902L18.164 5l-1.655.933-2.648-.472-3.636 2.519-.283 2.942-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.339.828 1.734 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.171-1.516-2.399 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#383939" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.473-20.52l2.667-.612 1.033-1.7-1.02-1.674-1.306-.902L18.164 6l-1.655.933-2.648-.472-3.636 2.52-.283 2.941-1.543.644.178 2.729-1.077.858 1.076 3.072.162.322 1.138 3.163 2.34.828 1.733 1.764 1.994.698.902-.26 1.431-.165 2.098-.601 3.126-1.765-.818-3.232-1.574-.62-.784.897-2.205.542-3.207-.508-1.035-1.197.36-1.17-1.516-2.4 1.275-1.556.136-2.645 1.826-1.048 1.252-.5 1.7.307z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'cnd';
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
@prop export let ariaLabel = 'cnd';
-->
