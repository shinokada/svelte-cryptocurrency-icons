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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.192 8c.245 1.016.744 2.109 1.854 2.42 2.444.51 5.071-.33 7.45.593 2.33.973 2.246 4.832-.066 5.776-1.576.64-3.32.387-4.98.43-1.1.04-2.382-.202-3.287.576-.773.586-.92 1.595-.883 2.496.058 3.26.216 4.709.216 4.709s1.715-.644 2.089-1.183c.93-1.128.557-2.68.63-4.015 2.708-.115 5.658.442 8.124-.969 2.674-1.49 3.264-5.162 2.077-7.773-.949-2.05-3.312-2.933-5.46-3.06h-7.764zM7 12.43v.62c.363 1.124 1.29 2.144 2.546 2.217 2.045.09 4.094.014 6.138.025-.154-1.364-1.121-2.698-2.594-2.81-2.026-.123-4.06-.015-6.09-.051z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#333"/><path fill="#FFF" fill-rule="nonzero" d="M11.192 8h7.764c2.148.127 4.511 1.01 5.46 3.06 1.187 2.611.597 6.283-2.077 7.773-2.466 1.41-5.416.854-8.124.97-.073 1.334.3 2.886-.63 4.014-.374.54-2.089 1.183-2.089 1.183s-.158-1.449-.216-4.71c-.037-.9.11-1.91.883-2.495.905-.778 2.188-.535 3.287-.575 1.66-.044 3.404.21 4.98-.43 2.312-.945 2.396-4.804.066-5.777-2.379-.922-5.006-.083-7.45-.593-1.11-.311-1.609-1.404-1.854-2.42zM7 12.43c2.03.037 4.064-.071 6.09.051 1.473.113 2.44 1.447 2.594 2.811-2.044-.01-4.093.065-6.138-.025C8.29 15.194 7.363 14.174 7 13.049v-.618z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="120.6%" x="-9.7%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M11.192 7h7.764c2.148.127 4.511 1.01 5.46 3.06 1.187 2.611.597 6.283-2.077 7.773-2.466 1.41-5.416.854-8.124.97-.073 1.334.3 2.886-.63 4.014-.374.54-2.089 1.183-2.089 1.183s-.158-1.449-.216-4.71c-.037-.9.11-1.91.883-2.495.905-.778 2.188-.535 3.287-.575 1.66-.044 3.404.21 4.98-.43 2.312-.945 2.396-4.804.066-5.777-2.379-.922-5.006-.083-7.45-.593-1.11-.311-1.609-1.404-1.854-2.42zM7 11.43c2.03.037 4.064-.071 6.09.051 1.473.113 2.44 1.447 2.594 2.811-2.044-.01-4.093.065-6.138-.025C8.29 14.194 7.363 13.174 7 12.049v-.618z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#333" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.192 8c.245 1.016.744 2.109 1.854 2.42 2.444.51 5.071-.33 7.45.593 2.33.973 2.246 4.832-.066 5.776-1.576.64-3.32.387-4.98.43-1.1.04-2.382-.202-3.287.576-.773.586-.92 1.595-.883 2.496.058 3.26.216 4.709.216 4.709s1.715-.644 2.089-1.183c.93-1.128.557-2.68.63-4.015 2.708-.115 5.658.442 8.124-.969 2.674-1.49 3.264-5.162 2.077-7.773-.949-2.05-3.312-2.933-5.46-3.06h-7.764zM7 12.43v.62c.363 1.124 1.29 2.144 2.546 2.217 2.045.09 4.094.014 6.138.025-.154-1.364-1.121-2.698-2.594-2.81-2.026-.123-4.06-.015-6.09-.051z"/>';
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
  export let ariaLabel = 'pura';
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
@prop export let ariaLabel = 'pura';
-->
