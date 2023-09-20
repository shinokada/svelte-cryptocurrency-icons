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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 12.391h8.417v-.356H6zm0-1.035h8.417V11H6zm3.55 10.64h.338v-8.893H9.55zm.98 0h.337v-8.893h-.337zm15.232-.728l.238-.252-3.798-4.012-.238.251zM16.519 11l-.238.252 3.798 4.012.238-.251zm8.55 11l.238-.252-3.798-4.013-.238.252zm-9.242-10.268l-.239.252 3.798 4.012.239-.252zm5.421 4.768l-.454.48-.238.252-4.275 4.516.238.252 4.275-4.516.239-.252.454-.48.238-.252L26 11.984l-.238-.252-4.275 4.516zm-.454-.984l-.238.252-.455.48-.238.252-4.275 4.516.239.252 4.274-4.516.239-.252.454-.48.238-.252 4.275-4.516L25.07 11z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#00b098" r="16"/><path d="M6 12.391v-.356h8.417v.356zm0-1.035V11h8.417v.356zm3.55 10.64v-8.893h.338v8.893zm.98 0v-8.893h.337v8.893zm15.232-.728l-3.798-4.013.238-.251L26 21.016zM16.519 11l3.798 4.013-.238.251-3.798-4.012zm8.55 11l-3.798-4.013.238-.252 3.798 4.013zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 22l-.238-.252 4.275-4.516.238-.252zm-.454-.984L25.07 11l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="131.8%" x="-8.8%" y="-11.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M6 11.391v-.356h8.417v.356H6zm0-1.035V10h8.417v.356H6zm3.55 10.64v-8.893h.338v8.893H9.55zm.98 0v-8.893h.337v8.893h-.337zm15.232-.728l-3.798-4.013.238-.251L26 20.016l-.238.252zM16.519 10l3.798 4.013-.238.251-3.798-4.012.238-.252zm8.55 11l-3.798-4.013.238-.252 3.798 4.013-.238.252zm-9.242-10.268l3.798 4.012-.239.252-3.798-4.012.239-.252zm5.421 4.768l.239-.252 4.275-4.516.238.252-4.275 4.516-.238.252-.454.48-.239.252L16.52 21l-.238-.252 4.275-4.516.238-.252.454-.48zm-.454-.984L25.07 10l.238.252-4.275 4.516-.238.252-.454.48-.239.252-4.274 4.516-.239-.252 4.275-4.516.238-.252.455-.48.238-.252z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00B098" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 12.391h8.417v-.356H6zm0-1.035h8.417V11H6zm3.55 10.64h.338v-8.893H9.55zm.98 0h.337v-8.893h-.337zm15.232-.728l.238-.252-3.798-4.012-.238.251zM16.519 11l-.238.252 3.798 4.012.238-.251zm8.55 11l.238-.252-3.798-4.013-.238.252zm-9.242-10.268l-.239.252 3.798 4.012.239-.252zm5.421 4.768l-.454.48-.238.252-4.275 4.516.238.252 4.275-4.516.239-.252.454-.48.238-.252L26 11.984l-.238-.252-4.275 4.516zm-.454-.984l-.238.252-.455.48-.238.252-4.275 4.516.239.252 4.274-4.516.239-.252.454-.48.238-.252 4.275-4.516L25.07 11z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'sphtx';
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
@prop export let ariaLabel = 'sphtx';
-->
