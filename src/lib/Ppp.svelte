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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.312-24.956a1.255 1.255 0 00-1.802 0L19.183 9.43 16.2 6.377a1.204 1.204 0 00-.2-.166 1.147 1.147 0 00-1.488.139l-.025.026h-.001l-.001.002-7.624 7.819a.198.198 0 01-.014.015l-.016.015c-.44.45-.44 1.181 0 1.632l2.306 2.354c.44.443 1.146.44 1.582-.007a1.17 1.17 0 00.007-1.62l-1.45-1.483 6.005-6.16 3.118 3.195c.382.39.97.477 1.442.21a1.29 1.29 0 00.342-.25l3.13-3.208a1.33 1.33 0 000-1.846zm1.858 9.102l-.028-.029-.003-.002-.002-.002-2.273-2.325a1.105 1.105 0 00-1.582.007 1.17 1.17 0 00-.007 1.62l1.45 1.483-5.994 6.144-3.126-3.198a1.193 1.193 0 00-1.12-.336c-.249.05-.478.176-.656.362l-3.13 3.208c-.324.329-.451.81-.334 1.262.118.452.462.805.904.925s.911-.01 1.233-.342l2.313-2.378 2.917 2.984a1.148 1.148 0 001.754.122l7.654-7.848a.198.198 0 01.015-.015l.016-.015a1.165 1.165 0 00-.001-1.627z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#348f8d" r="16"/><path d="M23.312 7.044a1.33 1.33 0 010 1.846l-3.13 3.209a1.29 1.29 0 01-.342.25 1.19 1.19 0 01-1.442-.211L15.28 8.944l-6.005 6.159 1.45 1.483a1.17 1.17 0 01-.007 1.62 1.105 1.105 0 01-1.582.007L6.83 15.86a1.174 1.174 0 010-1.632l.016-.015a.198.198 0 00.014-.015l7.624-7.82h.001l.001-.001.025-.026A1.147 1.147 0 0116 6.21c.072.049.14.104.2.167l2.984 3.053 2.327-2.386a1.255 1.255 0 011.802 0zm1.858 9.102a1.165 1.165 0 01.001 1.627l-.016.015a.198.198 0 00-.015.015l-7.654 7.847a1.148 1.148 0 01-1.754-.121l-2.917-2.984-2.313 2.378c-.322.332-.792.463-1.233.342s-.786-.473-.904-.925c-.117-.451.01-.933.335-1.262l3.129-3.208c.178-.186.407-.312.657-.362.404-.09.826.036 1.119.336l3.126 3.198 5.994-6.144-1.45-1.483a1.17 1.17 0 01.007-1.62 1.105 1.105 0 011.582-.007l2.273 2.325.002.002.003.002z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="117.5%" x="-9.2%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23.312 6.044a1.33 1.33 0 010 1.846l-3.13 3.209a1.29 1.29 0 01-.342.25 1.19 1.19 0 01-1.442-.211L15.28 7.944l-6.005 6.159 1.45 1.483a1.17 1.17 0 01-.007 1.62 1.105 1.105 0 01-1.582.007L6.83 14.86a1.174 1.174 0 010-1.632l.016-.015a.198.198 0 00.014-.015l7.624-7.82h.001l.001-.001.025-.026A1.147 1.147 0 0116 5.21c.072.049.14.104.2.167l2.984 3.053 2.327-2.386a1.255 1.255 0 011.802 0zm1.858 9.102a1.165 1.165 0 01.001 1.627l-.016.015a.198.198 0 00-.015.015l-7.654 7.847a1.148 1.148 0 01-1.754-.121l-2.917-2.984-2.313 2.378a1.254 1.254 0 01-1.233.342 1.29 1.29 0 01-.904-.925c-.117-.451.01-.933.335-1.262l3.129-3.208c.178-.186.407-.312.657-.362.404-.09.826.036 1.119.336l3.126 3.198 5.994-6.144-1.45-1.483a1.17 1.17 0 01.007-1.62 1.105 1.105 0 011.582-.007l2.273 2.325.002.002.003.002.028.03z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#348F8D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.312-24.956a1.255 1.255 0 00-1.802 0L19.183 9.43 16.2 6.377a1.204 1.204 0 00-.2-.166 1.147 1.147 0 00-1.488.139l-.025.026h-.001l-.001.002-7.624 7.819a.198.198 0 01-.014.015l-.016.015c-.44.45-.44 1.181 0 1.632l2.306 2.354c.44.443 1.146.44 1.582-.007a1.17 1.17 0 00.007-1.62l-1.45-1.483 6.005-6.16 3.118 3.195c.382.39.97.477 1.442.21a1.29 1.29 0 00.342-.25l3.13-3.208a1.33 1.33 0 000-1.846zm1.858 9.102l-.028-.029-.003-.002-.002-.002-2.273-2.325a1.105 1.105 0 00-1.582.007 1.17 1.17 0 00-.007 1.62l1.45 1.483-5.994 6.144-3.126-3.198a1.193 1.193 0 00-1.12-.336c-.249.05-.478.176-.656.362l-3.13 3.208c-.324.329-.451.81-.334 1.262.118.452.462.805.904.925s.911-.01 1.233-.342l2.313-2.378 2.917 2.984a1.148 1.148 0 001.754.122l7.654-7.848a.198.198 0 01.015-.015l.016-.015a1.165 1.165 0 00-.001-1.627z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ppp';
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
@prop export let ariaLabel = 'ppp';
-->
