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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.94-8.126l1.709 1.722a1.377 1.377 0 001.949 0l1.719-1.722-2.694-2.697zm6.95-9.242l2.693-2.697-2.692-2.697-2.693 2.697zm-.669 8.363l6.255-6.265a1.382 1.382 0 000-1.953l-1.718-1.721-7.23 7.242zm-7.403-.278l7.218-7.23-2.692-2.697-7.218 7.23zm-3.822-3.8l2.705-2.698-2.693-2.698-1.718 1.722a1.382 1.382 0 00-.013 1.952zM18.883 8.129l-1.719-1.725a1.377 1.377 0 00-1.949 0L8.96 12.67l2.693 2.697z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#242424" r="16"/><path d="M13.06 23.874l2.683-2.697 2.694 2.697-1.719 1.722a1.377 1.377 0 01-1.95 0zm6.95-9.242l-2.692-2.697 2.693-2.697 2.692 2.697zm-.669 8.363l-2.693-2.697 7.23-7.242 1.718 1.721c.539.54.539 1.413 0 1.953zm-7.403-.278L9.246 20.02l7.218-7.23 2.692 2.697zm-3.822-3.8l-1.719-1.722a1.382 1.382 0 01.013-1.952l1.718-1.722 2.693 2.698zM18.883 8.129l-7.23 7.238L8.96 12.67l6.255-6.266a1.377 1.377 0 011.95 0z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="117.5%" x="-8.8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M13.06 22.874l2.683-2.697 2.694 2.697-1.719 1.722a1.377 1.377 0 01-1.95 0l-1.709-1.722zm6.95-9.242l-2.692-2.697 2.693-2.697 2.692 2.697-2.692 2.697zm-.669 8.363l-2.693-2.697 7.23-7.242 1.718 1.721c.539.54.539 1.413 0 1.953l-6.255 6.265zm-7.403-.278L9.246 19.02l7.218-7.23 2.692 2.697-7.218 7.23zm-3.822-3.8l-1.719-1.722a1.382 1.382 0 01.013-1.952l1.718-1.722 2.693 2.698-2.705 2.698zM18.883 7.129l-7.23 7.238L8.96 11.67l6.255-6.266a1.377 1.377 0 011.95 0l1.718 1.725z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#242424" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.94-8.126l1.709 1.722a1.377 1.377 0 001.949 0l1.719-1.722-2.694-2.697zm6.95-9.242l2.693-2.697-2.692-2.697-2.693 2.697zm-.669 8.363l6.255-6.265a1.382 1.382 0 000-1.953l-1.718-1.721-7.23 7.242zm-7.403-.278l7.218-7.23-2.692-2.697-7.218 7.23zm-3.822-3.8l2.705-2.698-2.693-2.698-1.718 1.722a1.382 1.382 0 00-.013 1.952zM18.883 8.129l-1.719-1.725a1.377 1.377 0 00-1.949 0L8.96 12.67l2.693 2.697z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'edo';
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
@prop export let ariaLabel = 'edo';
-->
