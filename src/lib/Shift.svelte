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
    '<path d="M20.52 16.42l4.478-4.478L16.056 3l-8.937 8.937H16l-.002.002H7.057l4.472 4.471.026-.026.006.006-4.49 4.488 8.943 8.943 8.943-8.943h-8.895 8.915l-4.456-4.459zm-4.471 4.457h-.014l.007-.006-.007.006h.014zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#964B9C"/><g fill="#FFF"><path opacity=".6" d="M20.507 16.406l-4.472 4.471h8.942l-4.47-4.471z"/><path opacity=".7" d="M11.528 16.41L16 11.94H7.057l4.472 4.471z"/><path opacity=".4" d="M16.035 20.878l4.46-4.46-4.48-4.482-8.943 8.942 8.942 8.943 8.943-8.943h-.002z"/><path opacity=".8" d="M16.056 3l-8.937 8.937H16l-4.446 4.446 4.502 4.501 8.942-8.942z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#964B9C" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path opacity=".6" d="M20.006 14.916l-3.975 3.975h7.949l-3.974-3.975z"/><path opacity=".7" d="M12.025 14.92L16 10.945H8.05l3.976 3.975z"/><path opacity=".4" d="M16.03 18.891l3.966-3.965-3.983-3.983-7.95 7.949 7.95 7.949 7.948-7.949z"/><path opacity=".8" d="M16.05 3l-7.945 7.944H16l-3.952 3.952 4.001 4.001 7.949-7.948z"/></g></g>';
  let svgwhite =
    '<path d="M20.52 16.42l4.478-4.478L16.056 3l-8.937 8.937H16l-.002.002H7.057l4.472 4.471.026-.026.006.006-4.49 4.488 8.943 8.943 8.943-8.943h-8.895 8.915l-4.456-4.459zm-4.471 4.457h-.014l.007-.006-.007.006h.014zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="#FFF"/>';
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
  export let ariaLabel = 'shift';
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
@prop export let ariaLabel = 'shift';
-->
