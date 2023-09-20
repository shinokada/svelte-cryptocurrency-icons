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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.858-6.5c1.288 0 1.653-1.194 1.653-2.106s-.065-1.325-.065-1.737c0-.65.328-2.273.923-2.953 1.159-1.325 1.889-2.512 1.889-4.234 1.008-.521 2.79-.999 3.476-1.78S26 10.8 26 9.214c0-.405-.086-.977-.258-1.715-.395 1.234-1.003 2.08-1.824 2.54-1.201.674-2.555 1.173-3.712 1.173h-8.412c-1.157 0-2.51-.5-3.712-1.173-.82-.46-1.429-1.306-1.824-2.54C6.086 8.238 6 8.81 6 9.215c0 1.585.58 2.693 1.266 3.474s2.468 1.26 3.476 1.78c0 1.723.73 2.91 1.889 4.235.595.68.923 2.303.923 2.953 0 .412-.065.825-.065 1.737s.365 2.106 1.653 2.106z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4392cd" fill-rule="nonzero" r="16"/><path d="M16.858 25.5h-1.716c-1.288 0-1.653-1.194-1.653-2.106s.065-1.325.065-1.737c0-.65-.328-2.273-.923-2.953-1.159-1.325-1.889-2.512-1.889-4.234-1.008-.521-2.79-.999-3.476-1.78S6 10.8 6 9.214c0-.405.086-.977.258-1.715.395 1.234 1.003 2.08 1.824 2.54 1.201.674 2.555 1.173 3.712 1.173h8.412c1.157 0 2.51-.5 3.712-1.173.82-.46 1.429-1.306 1.824-2.54.172.738.258 1.31.258 1.715 0 1.585-.58 2.693-1.266 3.474s-2.468 1.26-3.476 1.78c0 1.723-.73 2.91-1.889 4.235-.595.68-.923 2.303-.923 2.953 0 .412.065.825.065 1.737s-.365 2.106-1.653 2.106z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.858 24.5h-1.716c-1.288 0-1.653-1.194-1.653-2.106 0-.912.065-1.325.065-1.737 0-.65-.328-2.273-.923-2.953-1.159-1.325-1.889-2.512-1.889-4.234-1.008-.521-2.79-.999-3.476-1.78C6.58 10.907 6 9.8 6 8.214c0-.405.086-.977.258-1.715.395 1.234 1.003 2.08 1.824 2.54 1.201.674 2.555 1.173 3.712 1.173h8.412c1.157 0 2.51-.5 3.712-1.173.82-.46 1.429-1.306 1.824-2.54.172.738.258 1.31.258 1.715 0 1.585-.58 2.693-1.266 3.474-.687.782-2.468 1.26-3.476 1.78 0 1.723-.73 2.91-1.889 4.235-.595.68-.923 2.303-.923 2.953 0 .412.065.825.065 1.737 0 .912-.365 2.106-1.653 2.106z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4392CD" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.858-6.5c1.288 0 1.653-1.194 1.653-2.106s-.065-1.325-.065-1.737c0-.65.328-2.273.923-2.953 1.159-1.325 1.889-2.512 1.889-4.234 1.008-.521 2.79-.999 3.476-1.78S26 10.8 26 9.214c0-.405-.086-.977-.258-1.715-.395 1.234-1.003 2.08-1.824 2.54-1.201.674-2.555 1.173-3.712 1.173h-8.412c-1.157 0-2.51-.5-3.712-1.173-.82-.46-1.429-1.306-1.824-2.54C6.086 8.238 6 8.81 6 9.215c0 1.585.58 2.693 1.266 3.474s2.468 1.26 3.476 1.78c0 1.723.73 2.91 1.889 4.235.595.68.923 2.303.923 2.953 0 .412-.065.825-.065 1.737s.365 2.106 1.653 2.106z" fill="#fff"/>';
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
  export let ariaLabel = 'ox';
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
@prop export let ariaLabel = 'ox';
-->
