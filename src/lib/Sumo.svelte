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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.061-22.916H13.99C10.977 12.446 9.514 13.828 7 15.9l10.81 2.338-1.86 2.09c-2.483-1.47-4.183-1.659-7.24-1.94 2.297 1.058 3.49 1.908 5.279 4.526h4.072c2.115-2.627 3.573-4.152 6.939-7.014l-10.76-2.39 1.71-1.99c2.709 1.422 4.331 1.626 7.206 1.986-.827-.227-1.691-.857-5.095-4.423zm-3.821-.497h3.57C16.919 7.475 16.54 6.912 16.05 6c-.499.885-.88 1.442-1.81 2.587zm3.57 14.826h-3.57c.89 1.112 1.27 1.675 1.76 2.587.498-.885.879-1.442 1.81-2.587z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#2D9CDB"/><path fill="#FFF" d="M18.061 9.084c3.404 3.566 4.268 4.196 5.095 4.423-2.875-.36-4.497-.564-7.206-1.986l-1.71 1.99L25 15.9c-3.366 2.862-4.824 4.387-6.939 7.014H13.99c-1.789-2.618-2.982-3.468-5.28-4.527 3.058.282 4.758.47 7.24 1.94l1.861-2.09L7 15.9c2.514-2.072 3.977-3.454 6.989-6.816h4.072zm-3.821-.497c.93-1.145 1.31-1.702 1.81-2.587.49.912.869 1.475 1.76 2.587h-3.57zm3.57 14.826C16.879 24.558 16.498 25.115 16 26c-.49-.912-.87-1.475-1.76-2.587h3.57z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.061 8.084c3.404 3.566 4.268 4.196 5.095 4.423-2.875-.36-4.497-.564-7.206-1.986l-1.71 1.99L25 14.9c-3.366 2.862-4.824 4.387-6.939 7.014H13.99c-1.789-2.618-2.982-3.468-5.28-4.527 3.058.282 4.758.47 7.24 1.94l1.861-2.09L7 14.9c2.514-2.072 3.977-3.454 6.989-6.816h4.072zm-3.821-.497c.93-1.145 1.31-1.702 1.81-2.587.49.912.869 1.475 1.76 2.587h-3.57zm3.57 14.826C16.879 23.558 16.498 24.115 16 25c-.49-.912-.87-1.475-1.76-2.587h3.57z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#2D9CDB" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-linejoin="square" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.061-22.916H13.99C10.977 12.446 9.514 13.828 7 15.9l10.81 2.338-1.86 2.09c-2.483-1.47-4.183-1.659-7.24-1.94 2.297 1.058 3.49 1.908 5.279 4.526h4.072c2.115-2.627 3.573-4.152 6.939-7.014l-10.76-2.39 1.71-1.99c2.709 1.422 4.331 1.626 7.206 1.986-.827-.227-1.691-.857-5.095-4.423zm-3.821-.497h3.57C16.919 7.475 16.54 6.912 16.05 6c-.499.885-.88 1.442-1.81 2.587zm3.57 14.826h-3.57c.89 1.112 1.27 1.675 1.76 2.587.498-.885.879-1.442 1.81-2.587z"/>';
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
  export let ariaLabel = 'sumo';
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
@prop export let ariaLabel = 'sumo';
-->
