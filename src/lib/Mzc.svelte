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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.811-20.433a5.695 5.695 0 013.184-.963c1.85 0 4.367 1.134 4.367 6.035 0 2.245-.809 3.912-2.428 5a.194.194 0 00-.051.276.207.207 0 00.205.082C23.134 21.805 26 20.16 26 15.903c0-3.2-1.486-6.55-4.23-6.55-1.792 0-3.545.588-5.259 1.764C15.615 9.706 14.325 9 12.641 9 9.89 9 6 11.605 6 16.124c0 2.058.54 3.888 1.622 5.49l1.38-1.604c-.798-1.217-1.198-2.699-1.198-4.445 0-2.62 1.956-5.255 4.428-5.255 1.29 0 2.3.397 3.033 1.19v1.93h-1.486l-1.001 1.148h2.487v1.443h-.789l-.97 1.148h1.759v4.68l1.273-1.736v-2.944h.789l.758-1.148h-1.547v-1.443h1.486l1.001-1.148h-2.214v-1.863z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FFAA05"/><path fill="#FFF" d="M16.811 11.567v1.863h2.214l-1 1.148h-1.487v1.443h1.547l-.758 1.148h-.789v2.944l-1.273 1.736v-4.68h-1.76l.971-1.148h.789v-1.443h-2.487l1-1.148h1.487V11.5c-.733-.793-1.744-1.19-3.033-1.19-2.472 0-4.428 2.635-4.428 5.255 0 1.746.4 3.228 1.198 4.445l-1.38 1.604C6.541 20.012 6 18.182 6 16.124 6 11.605 9.89 9 12.641 9c1.684 0 2.974.706 3.87 2.117 1.714-1.176 3.467-1.764 5.259-1.764 2.744 0 4.23 3.35 4.23 6.55 0 4.258-2.866 5.902-3.912 6.094a.207.207 0 01-.205-.082.194.194 0 01.051-.276c1.619-1.088 2.428-2.755 2.428-5 0-4.901-2.517-6.035-4.367-6.035a5.693 5.693 0 00-3.184.963z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="126.9%" x="-8.8%" y="-9.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.811 10.567v1.863h2.214l-1 1.148h-1.487v1.443h1.547l-.758 1.148h-.789v2.944l-1.273 1.736v-4.68h-1.76l.971-1.148h.789v-1.443h-2.487l1-1.148h1.487V10.5c-.733-.793-1.744-1.19-3.033-1.19-2.472 0-4.428 2.635-4.428 5.255 0 1.746.4 3.228 1.198 4.445l-1.38 1.604C6.541 19.012 6 17.182 6 15.124 6 10.605 9.89 8 12.641 8c1.684 0 2.974.706 3.87 2.117 1.714-1.176 3.467-1.764 5.259-1.764 2.744 0 4.23 3.35 4.23 6.55 0 4.258-2.866 5.902-3.912 6.094a.207.207 0 01-.205-.082.194.194 0 01.051-.276c1.619-1.088 2.428-2.755 2.428-5 0-4.901-2.517-6.035-4.367-6.035a5.693 5.693 0 00-3.184.963z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFAA05" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.811-20.433a5.695 5.695 0 013.184-.963c1.85 0 4.367 1.134 4.367 6.035 0 2.245-.809 3.912-2.428 5a.194.194 0 00-.051.276.207.207 0 00.205.082C23.134 21.805 26 20.16 26 15.903c0-3.2-1.486-6.55-4.23-6.55-1.792 0-3.545.588-5.259 1.764C15.615 9.706 14.325 9 12.641 9 9.89 9 6 11.605 6 16.124c0 2.058.54 3.888 1.622 5.49l1.38-1.604c-.798-1.217-1.198-2.699-1.198-4.445 0-2.62 1.956-5.255 4.428-5.255 1.29 0 2.3.397 3.033 1.19v1.93h-1.486l-1.001 1.148h2.487v1.443h-.789l-.97 1.148h1.759v4.68l1.273-1.736v-2.944h.789l.758-1.148h-1.547v-1.443h1.486l1.001-1.148h-2.214v-1.863z"/>';
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
  export let ariaLabel = 'mzc';
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
@prop export let ariaLabel = 'mzc';
-->
