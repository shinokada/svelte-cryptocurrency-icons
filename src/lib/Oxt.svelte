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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.663 7.55a8.58 8.58 0 00-1.656.057 7.086 7.086 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.314 2.437l-.133-.19-.101-.143c-.804-1.208-.607-2.99-.608-3.013a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836 8.549 8.549 0 00-.47-17.021zm-7.99 2.64a1.425 1.425 0 10.129.068zm1.28-2.591a1.099 1.099 0 10.107.056zm-3.625-.038a.776.776 0 10.094.048z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#5F45BA" cx="16" cy="16" r="16"/><path d="M10.443 9.16a1.099 1.099 0 11-.383-1.505c.521.31.693.983.383 1.505m-3.75-.488a.777.777 0 11-.27-1.063c.368.22.49.695.27 1.063m10.439 15.9a8.549 8.549 0 10-2.125-16.965 7.088 7.088 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.447 2.246v.001c-.92-1.205-.708-3.131-.709-3.156a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836M9.3 12.21a1.424 1.424 0 11-.498-1.952c.676.402.898 1.276.497 1.952" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-18.8%" y="-20.8%" width="137.5%" height="141.7%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#5F45BA" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(5.25 6.5)" fill="#FFF" fill-rule="nonzero"><path d="M5.193 1.66A1.099 1.099 0 114.81.155c.521.31.693.983.383 1.505m-3.75-.488A.777.777 0 111.173.11c.368.22.49.695.27 1.063m10.439 15.899A8.549 8.549 0 109.757.107a7.088 7.088 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.447 2.246v.001c-.92-1.205-.708-3.131-.709-3.156a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836M4.05 4.71a1.424 1.424 0 11-.498-1.952c.676.402.898 1.276.497 1.952"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.663 7.55a8.58 8.58 0 00-1.656.057 7.086 7.086 0 00-2.089.524c-.775.38-1.275 1.013-1.275 1.86 0 1.1.892 1.994 1.994 1.994.184 0 .821-.202.973-.254a4.606 4.606 0 016.114 4.644 4.608 4.608 0 01-8.314 2.437l-.133-.19-.101-.143c-.804-1.208-.607-2.99-.608-3.013a1.997 1.997 0 00-3.922-.451c-.045.167-.068.656-.061.721a8.547 8.547 0 009.547 8.836 8.549 8.549 0 00-.47-17.021zm-7.99 2.64a1.425 1.425 0 10.129.068zm1.28-2.591a1.099 1.099 0 10.107.056zm-3.625-.038a.776.776 0 10.094.048z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'oxt';
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
@prop export let ariaLabel = 'oxt';
-->
