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
    '<path fill-rule="evenodd" d="M4.876 27.5h.223c.84-3.16 2.045-6.633 3.39-10.164 1.233-3.217 2.634-5.893 4.119-8.114.896 0 1.82.057 2.773.114 1.177.086 2.41.228 3.67.399 3.867.54 5.94 1.423 6.949 2.477-.925-3.274-4.259-6.064-10.843-6.036h-.14c2.942-3.246 5.968-4.555 8.21-3.644a.871.871 0 01.28.142c-.57-.757-1.243-1.34-2.018-1.708C27.622 3.206 32 9.092 32 16c0 8.837-7.163 16-16 16a15.947 15.947 0 01-11.124-4.5zm-.028-.027A15.952 15.952 0 010 16c0-1.047.1-2.07.292-3.06 1.617-1.804 4.744-3.064 9.01-3.518-1.009 1.992-1.905 4.27-2.662 6.86-1.146 3.976-1.706 7.81-1.792 11.19zM.385 12.497C1.982 5.345 8.367 0 16 0c1.492 0 2.937.204 4.307.586-2.946-.55-6.385 1.546-9.324 5.932-5.357.86-9.025 3.172-10.598 5.979zm17.378 3.985c-1.793 0-3.25 1.48-3.25 3.36 0 1.85 1.457 3.359 3.25 3.359s3.25-1.509 3.25-3.36c0-1.85-1.457-3.359-3.25-3.359z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1D9AD7"/><path fill="#FFF" d="M26 12.212c-1.009-1.054-3.082-1.936-6.948-2.477a59.901 59.901 0 00-3.67-.399c-.953-.057-1.878-.114-2.774-.114-1.485 2.22-2.886 4.897-4.119 8.114C7.144 20.866 5.94 24.34 5.1 27.5h-.252c.084-3.388.644-7.231 1.793-11.217.757-2.59 1.653-4.869 2.662-6.861-4.54.484-7.79 1.879-9.302 3.871 1.289-3.16 5.127-5.836 10.983-6.775 3.11-4.641 6.78-6.72 9.834-5.808 1.064.313 1.961.996 2.69 1.964-.085-.057-.169-.114-.28-.142-2.242-.911-5.268.398-8.21 3.644h.14c6.584-.028 9.918 2.762 10.843 6.036zm-8.237 4.27c1.793 0 3.25 1.509 3.25 3.36 0 1.85-1.457 3.359-3.25 3.359s-3.25-1.509-3.25-3.36c0-1.878 1.457-3.359 3.25-3.359z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="114.6%" height="114%" x="-7.3%" y="-5%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M25 10.844c-.931-.975-2.845-1.792-6.414-2.293a55.13 55.13 0 00-3.388-.37c-.879-.052-1.732-.105-2.56-.105-1.37 2.056-2.664 4.534-3.802 7.513-1.241 3.269-2.353 6.485-3.13 9.411h-.232c.078-3.137.595-6.696 1.655-10.386.699-2.4 1.526-4.508 2.457-6.353C5.396 8.709 2.396 10 1 11.846 2.19 8.92 5.733 6.442 11.138 5.572c2.87-4.297 6.259-6.221 9.078-5.378.982.29 1.81.923 2.482 1.82a.803.803 0 00-.258-.133c-2.07-.843-4.862.37-7.578 3.375h.13c6.077-.027 9.155 2.557 10.008 5.588zm-7.603 3.954c1.655 0 3 1.397 3 3.11 0 1.714-1.345 3.111-3 3.111-1.656 0-3-1.397-3-3.11 0-1.74 1.344-3.11 3-3.11z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1D9AD7" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M4.876 27.5h.223c.84-3.16 2.045-6.633 3.39-10.164 1.233-3.217 2.634-5.893 4.119-8.114.896 0 1.82.057 2.773.114 1.177.086 2.41.228 3.67.399 3.867.54 5.94 1.423 6.949 2.477-.925-3.274-4.259-6.064-10.843-6.036h-.14c2.942-3.246 5.968-4.555 8.21-3.644a.871.871 0 01.28.142c-.57-.757-1.243-1.34-2.018-1.708C27.622 3.206 32 9.092 32 16c0 8.837-7.163 16-16 16a15.947 15.947 0 01-11.124-4.5zm-.028-.027A15.952 15.952 0 010 16c0-1.047.1-2.07.292-3.06 1.617-1.804 4.744-3.064 9.01-3.518-1.009 1.992-1.905 4.27-2.662 6.86-1.146 3.976-1.706 7.81-1.792 11.19zM.385 12.497C1.982 5.345 8.367 0 16 0c1.492 0 2.937.204 4.307.586-2.946-.55-6.385 1.546-9.324 5.932-5.357.86-9.025 3.172-10.598 5.979zm17.378 3.985c-1.793 0-3.25 1.48-3.25 3.36 0 1.85 1.457 3.359 3.25 3.359s3.25-1.509 3.25-3.36c0-1.85-1.457-3.359-3.25-3.359z"/>';
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
  export let ariaLabel = 'fsn';
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
@prop export let ariaLabel = 'fsn';
-->
