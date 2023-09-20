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
    '<path d="M16.02 16.945l-.529 1.64h-.788l1.317-4.107V7.945h7.344l-1.397 15.39-5.947 1.602zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-7.364-7.531L15.98 26.5l7.384-2.031L25 6.5H7zm5.163-6.793l-3.526-1.432v-.592l3.526-1.433v.742l-2.469.99 2.47.984zm7.933-1.432v-.592l-3.527-1.433v.742l2.47.987-2.47.987v.741zm-5.712.7l1.1-3.413h-.796l-.304.947z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#cfa967" r="16"/><path d="M16.02 16.945v7.993l5.947-1.602 1.397-15.39H16.02v6.532l.304-.947h.796zm-7.384 7.524L7 6.5h18l-1.636 17.969L15.98 26.5zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592zm7.933-1.432l-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433zm-5.712.7v-2.466l-1.317 4.107h.788z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.02 15.945v7.992l5.947-1.601 1.397-15.39H16.02v6.532l.304-.947h.796l-1.1 3.414zm-7.384 7.524L7 5.5h18l-1.636 17.969L15.98 25.5l-7.344-2.031zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592l3.526 1.432zm7.933-1.432l-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433v.592zm-5.712.7v-2.466l-1.317 4.107h.788l.529-1.64z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#CFA967" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16.02 16.945l-.529 1.64h-.788l1.317-4.107V7.945h7.344l-1.397 15.39-5.947 1.602zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-7.364-7.531L15.98 26.5l7.384-2.031L25 6.5H7zm5.163-6.793l-3.526-1.432v-.592l3.526-1.433v.742l-2.469.99 2.47.984zm7.933-1.432v-.592l-3.527-1.433v.742l2.47.987-2.47.987v.741zm-5.712.7l1.1-3.413h-.796l-.304.947z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'html';
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
@prop export let ariaLabel = 'html';
-->
