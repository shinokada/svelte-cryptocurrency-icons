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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.14-22.086l1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 00-5.867.45 4.464 4.464 0 00-.454 5.817l-2.006 1.99a7.844 7.844 0 01-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 001.216-.986 1.307 1.307 0 00-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 004.92-.976 4.463 4.463 0 00.985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 01-6.13 2.279.978.978 0 00-1.03.888l-.028.32a1.038 1.038 0 00.991 1.13 10.306 10.306 0 007.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89zm-7.001 7.535a2.18 2.18 0 01-3.06 0 2.135 2.135 0 010-3.033 2.179 2.179 0 013.06 0 2.135 2.135 0 010 3.033z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#E9570F"/><path fill="#FFF" d="M24.14 9.914l1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 00-5.867.45 4.464 4.464 0 00-.454 5.817l-2.006 1.99a7.844 7.844 0 01-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 001.216-.986 1.307 1.307 0 00-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 004.92-.976 4.463 4.463 0 00.985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 01-6.13 2.279.978.978 0 00-1.03.888l-.028.32a1.038 1.038 0 00.991 1.13 10.306 10.306 0 007.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89m-7.001 7.536a2.18 2.18 0 01-3.06 0 2.135 2.135 0 010-3.033 2.179 2.179 0 013.06 0 2.135 2.135 0 010 3.033"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M24.14 8.914l1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 00-5.867.45 4.464 4.464 0 00-.454 5.817l-2.006 1.99a7.844 7.844 0 01-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 001.216-.986 1.307 1.307 0 00-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 004.92-.976 4.463 4.463 0 00.985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 01-6.13 2.279.978.978 0 00-1.03.888l-.028.32a1.038 1.038 0 00.991 1.13 10.306 10.306 0 007.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89m-7.001 7.536a2.18 2.18 0 01-3.06 0 2.135 2.135 0 010-3.033 2.179 2.179 0 013.06 0 2.135 2.135 0 010 3.033"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#E9570F" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.14-22.086l1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 00-5.867.45 4.464 4.464 0 00-.454 5.817l-2.006 1.99a7.844 7.844 0 01-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 001.216-.986 1.307 1.307 0 00-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 004.92-.976 4.463 4.463 0 00.985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 01-6.13 2.279.978.978 0 00-1.03.888l-.028.32a1.038 1.038 0 00.991 1.13 10.306 10.306 0 007.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89zm-7.001 7.535a2.18 2.18 0 01-3.06 0 2.135 2.135 0 010-3.033 2.179 2.179 0 013.06 0 2.135 2.135 0 010 3.033z"/>';
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
  export let ariaLabel = 'data';
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
@prop export let ariaLabel = 'data';
-->
