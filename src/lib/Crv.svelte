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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.003 7.25c-3.896 0-5.247 4.61-5.247 7.737 0 3.128.677 5.36 1.205 6.676.529 1.317 1.57 3.587 3.81 3.587s2.763-2.854 3.211-3.597c.448-.744 7.637-1.82 8.556-2.635.92-.815 2.765-4.99-1.345-7.962-4.11-2.971-8.439-3.806-10.19-3.806zm-1.394 8.279l.135.004c1.266.092 2.516 1.486 2.788 4.122.29 2.824-1.167 4.13-2.15 4.13-.983 0-2.613-1.842-2.756-4.004-.143-2.162.494-4.146 1.847-4.247l.136-.005zm3.646-2.986c-.884-1.936 1.915-1.266 3.81-.529 1.894.738 4.313 1.797 3.256 2.666-.706.58-2.82.999-6.345 1.259-.183-1.612-.423-2.744-.721-3.396z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#40649F" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M12.997 7.25c1.751 0 6.08.835 10.19 3.806 4.11 2.971 2.264 7.147 1.345 7.962-.92.815-8.108 1.891-8.556 2.635-.448.743-.97 3.597-3.21 3.597s-3.282-2.27-3.81-3.587c-.53-1.317-1.206-3.548-1.206-6.676S9.1 7.25 12.997 7.25zm-1.394 8.279l-.136.005c-1.353.101-1.99 2.085-1.847 4.247.143 2.162 1.773 4.004 2.756 4.004.983 0 2.44-1.306 2.15-4.13-.291-2.825-1.706-4.223-3.059-4.121zm7.456-3.515c-1.895-.737-4.694-1.407-3.81.53.298.651.538 1.783.721 3.395 3.524-.26 5.64-.68 6.345-1.26 1.057-.868-1.362-1.927-3.256-2.665z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#40649F" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M12.997 6.25c1.751 0 6.08.835 10.19 3.806 4.11 2.971 2.264 7.147 1.345 7.962-.92.815-8.108 1.891-8.556 2.635-.448.743-.97 3.597-3.21 3.597s-3.282-2.27-3.81-3.587c-.53-1.317-1.206-3.548-1.206-6.676S9.1 6.25 12.997 6.25zm-1.394 8.279l-.136.005c-1.353.101-1.99 2.085-1.847 4.247.143 2.162 1.773 4.004 2.756 4.004.983 0 2.44-1.306 2.15-4.13-.291-2.825-1.706-4.223-3.059-4.121zm7.456-3.515c-1.895-.737-4.694-1.407-3.81.53.298.651.538 1.783.721 3.395 3.524-.26 5.64-.68 6.345-1.26 1.057-.868-1.362-1.927-3.256-2.665z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.003 7.25c-3.896 0-5.247 4.61-5.247 7.737 0 3.128.677 5.36 1.205 6.676.529 1.317 1.57 3.587 3.81 3.587s2.763-2.854 3.211-3.597c.448-.744 7.637-1.82 8.556-2.635.92-.815 2.765-4.99-1.345-7.962-4.11-2.971-8.439-3.806-10.19-3.806zm-1.394 8.279l.135.004c1.266.092 2.516 1.486 2.788 4.122.29 2.824-1.167 4.13-2.15 4.13-.983 0-2.613-1.842-2.756-4.004-.143-2.162.494-4.146 1.847-4.247l.136-.005zm3.646-2.986c-.884-1.936 1.915-1.266 3.81-.529 1.894.738 4.313 1.797 3.256 2.666-.706.58-2.82.999-6.345 1.259-.183-1.612-.423-2.744-.721-3.396z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'crv';
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
@prop export let ariaLabel = 'crv';
-->
