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
    '<path d="M24.963 14.512l-.02-1.949L13.791 6l-2.713 1.674-.006-.003L8 9.484v13.022l2.811 1.801h.001l.019.013v-.002L13.823 26 25 19.479l-.017-4.968zm-3.275 3.112l-7.854 4.618-2.292-1.363 7.807-4.594zm-2.866-1.64l-4.837 2.923.021-5.681zm-4.814-3.366l.01-2.689 7.732 4.515v2.705zM10.82 23.57l-2.334-1.395V9.896l2.346 1.401v9.572l.018-.01zm.416-3.001v-9.273l2.345-1.401v9.256zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.884-9.399l10.42-6.12-.03 2.82-10.437 6.136zm7.793-8.584l-10.432-6.1 2.406-1.39 10.455 6.104z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#74d269" r="16"/><path d="M24.963 14.512h.02L25 19.478 13.823 26l-2.992-1.682v.002l-.019-.012L8 22.505V9.484l3.073-1.813.006.003L13.792 6l11.15 6.563zm-3.275 3.112l-2.339-1.339-7.807 4.594 2.292 1.363zm-2.866-1.64l-4.816-2.758-.021 5.681zm-4.814-3.366l7.742 4.531v-2.705l-7.732-4.515zM10.82 23.57l.03-2.713-.018.011v-9.572l-2.347-1.4v12.28zm.416-3.001l2.345-1.418V9.896l-2.345 1.401zm2.881 2.031l-.047 2.836L24.506 19.3l.03-2.82zm7.793-8.584l2.429-1.386-10.455-6.105-2.406 1.392z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M24.963 13.512h.02L25 18.478 13.823 25l-2.992-1.682v.002l-.019-.012L8 21.505V8.484l3.073-1.813.006.003L13.792 5l11.15 6.563.021 1.95zm-3.275 3.112l-2.339-1.339-7.807 4.594 2.292 1.363 7.854-4.618zm-2.866-1.64l-4.816-2.758-.021 5.681 4.837-2.923zm-4.814-3.366l7.742 4.531v-2.705l-7.732-4.515-.01 2.689zM10.82 22.57l.03-2.713-.018.011v-9.572l-2.347-1.4v12.28l2.334 1.395zm.416-3.001l2.345-1.418V8.896l-2.345 1.401v9.273zm2.881 2.031l-.047 2.836L24.506 18.3l.03-2.82-10.42 6.12zm7.793-8.584l2.429-1.386-10.455-6.105-2.406 1.392 10.432 6.1z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#74D269" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M24.963 14.512l-.02-1.949L13.791 6l-2.713 1.674-.006-.003L8 9.484v13.022l2.811 1.801h.001l.019.013v-.002L13.823 26 25 19.479l-.017-4.968zm-3.275 3.112l-7.854 4.618-2.292-1.363 7.807-4.594zm-2.866-1.64l-4.837 2.923.021-5.681zm-4.814-3.366l.01-2.689 7.732 4.515v2.705zM10.82 23.57l-2.334-1.395V9.896l2.346 1.401v9.572l.018-.01zm.416-3.001v-9.273l2.345-1.401v9.256zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.884-9.399l10.42-6.12-.03 2.82-10.437 6.136zm7.793-8.584l-10.432-6.1 2.406-1.39 10.455 6.104z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'dta';
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
@prop export let ariaLabel = 'dta';
-->
