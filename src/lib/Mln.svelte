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
    '<path fill-rule="evenodd" d="M8.627 20.124l1.36-.786-.178-.309-1.342.775v-7.851l6.82 4.042v11.56L16 28l.714-.445v-11.56l6.819-4.042v7.852l-1.343-.776-.178.31 1.36.785-5.27 3.092v1.729L25 20.885v-10.59L16 5l-9 5.295v10.59l6.899 4.06v-1.73l-5.272-3.091zm7.175-13.31v1.581h.357V6.791l6.66 3.908L16 14.742l-6.82-4.043 6.622-3.885zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.198-22.594v1.657h.357V9.406h-.357zm0 2.668v1.657l.178.081.179-.08v-1.658h-.357zm5.56 6.45l-1.435-.829-.179.31 1.436.828.178-.309zm-2.265-1.334l-1.436-.828-.159.114-.02.195 1.436.828.179-.309zm-8.46 1.334l.179.31 1.435-.83-.179-.309-1.435.83zm2.266-1.334l.178.31 1.435-.83-.019-.194-.159-.114-1.435.828z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#0B1529"/><path fill="#FFF" d="M8.627 20.124l5.272 3.092v1.729L7 20.885v-10.59L16 5l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091-1.36-.786.178-.309 1.343.776v-7.852l-6.82 4.042v11.56L16 28l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775.178.31-1.36.785zm7.175-13.31L9.18 10.699 16 14.742l6.82-4.043-6.661-3.908v1.604h-.357V6.814zm0 2.592h.357v1.657h-.357V9.406zm0 2.668h.357v1.657l-.179.081-.178-.08v-1.658zm5.56 6.45l-.178.31-1.436-.83.179-.309 1.435.83zm-2.265-1.334l-.179.31-1.435-.83.02-.194.158-.114 1.436.828zm-8.46 1.334l1.435-.829.179.31-1.435.828-.179-.309zm2.266-1.334l1.435-.828.16.114.018.195-1.435.828-.178-.309z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="115.2%" x="-9.7%" y="-5.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M8.627 19.124l5.272 3.092v1.729L7 19.885V9.296L16 4l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091-1.36-.786.178-.309 1.343.776v-7.852l-6.82 4.042v11.56L16 27l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775.178.31-1.36.785zm7.175-13.31L9.18 9.699 16 13.742l6.82-4.043-6.661-3.908v1.604h-.357V5.814zm0 2.592h.357v1.657h-.357V8.406zm0 2.668h.357v1.657l-.179.081-.178-.08v-1.658zm5.56 6.45l-.178.31-1.436-.83.179-.309 1.435.83zm-2.265-1.334l-.179.31-1.435-.83.02-.194.158-.114 1.436.828zm-8.46 1.334l1.435-.829.179.31-1.435.828-.179-.309zm2.266-1.334l1.435-.828.16.114.018.195-1.435.828-.178-.309z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0B1529" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M8.627 20.124l1.36-.786-.178-.309-1.342.775v-7.851l6.82 4.042v11.56L16 28l.714-.445v-11.56l6.819-4.042v7.852l-1.343-.776-.178.31 1.36.785-5.27 3.092v1.729L25 20.885v-10.59L16 5l-9 5.295v10.59l6.899 4.06v-1.73l-5.272-3.091zm7.175-13.31v1.581h.357V6.791l6.66 3.908L16 14.742l-6.82-4.043 6.622-3.885zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.198-22.594v1.657h.357V9.406h-.357zm0 2.668v1.657l.178.081.179-.08v-1.658h-.357zm5.56 6.45l-1.435-.829-.179.31 1.436.828.178-.309zm-2.265-1.334l-1.436-.828-.159.114-.02.195 1.436.828.179-.309zm-8.46 1.334l.179.31 1.435-.83-.179-.309-1.435.83zm2.266-1.334l.178.31 1.435-.83-.019-.194-.159-.114-1.435.828z"/>';
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
  export let ariaLabel = 'mln';
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
@prop export let ariaLabel = 'mln';
-->
