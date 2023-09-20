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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 22.998h13.095l1.893-3.839H7.894L6 23zm2.51-5.09h13.096l1.888-3.828H10.4l-1.888 3.828zm2.507-5.08H24.11L26 9H12.905l-1.888 3.829z"/><path fill-opacity=".4" d="M7.894 19.16h8.781l-1.894 3.838H6l1.894-3.839zm.617-1.252L10.4 14.08h8.78l-1.888 3.828H8.51zm2.506-5.08L12.905 9h8.781l-1.889 3.829h-8.78z"/><path fill-opacity=".4" d="M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#0CF"/><g fill="#FFF"><path fill-opacity=".4" d="M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z"/><path fill-opacity=".6" d="M12.277 19.16h4.398l-1.894 3.838h-4.398l1.894-3.839zm2.506-5.08h4.397l-1.888 3.828h-4.398l1.889-3.828zM17.288 9h4.398l-1.889 3.829H15.4L17.288 9z"/><path d="M16.59 19.16h4.398l-1.893 3.838h-4.398l1.894-3.839zm2.506-5.08h4.398l-1.888 3.828h-4.398l1.888-3.828zM21.602 9H26l-1.889 3.829h-4.397L21.602 9z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="125%" x="-8.8%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0CF" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(6 8)"><path fill-opacity=".4" d="M1.894 10.161H6.29L4.399 14H0l1.894-3.839zm2.505-5.08h4.398L6.91 8.91h-4.4l1.889-3.83zM6.905.001h4.398l-1.889 3.83H5.018L6.905 0z"/><path fill-opacity=".6" d="M6.277 10.16h4.398L8.78 13.997H4.383l1.894-3.839zm2.506-5.08h4.397l-1.888 3.828H6.894L8.783 5.08zM11.288 0h4.398l-1.889 3.829H9.4L11.288 0z"/><path d="M10.59 10.16h4.398l-1.893 3.838H8.697l1.894-3.839zm2.506-5.08h4.398l-1.888 3.828h-4.398l1.888-3.828zM15.602 0H20l-1.889 3.829h-4.397L15.602 0z"/></g></g>';
  let svgwhite =
    '<g fill="#FFF"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 22.998h13.095l1.893-3.839H7.894L6 23zm2.51-5.09h13.096l1.888-3.828H10.4l-1.888 3.828zm2.507-5.08H24.11L26 9H12.905l-1.888 3.829z"/><path fill-opacity=".4" d="M7.894 19.16h8.781l-1.894 3.838H6l1.894-3.839zm.617-1.252L10.4 14.08h8.78l-1.888 3.828H8.51zm2.506-5.08L12.905 9h8.781l-1.889 3.829h-8.78z"/><path fill-opacity=".4" d="M7.894 19.161h4.397L10.398 23H6l1.894-3.839zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397L12.905 9z"/></g>';
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
  export let ariaLabel = 'emc2';
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
@prop export let ariaLabel = 'emc2';
-->
