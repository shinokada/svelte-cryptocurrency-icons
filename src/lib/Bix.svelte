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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.941-7.423l6.238-3.543c.191.209.468.34.776.34.577 0 1.045-.46 1.045-1.028 0-.487-.344-.895-.805-1.001l.018-7.021c.452-.113.787-.517.787-.997 0-.568-.468-1.028-1.045-1.028a1.05 1.05 0 00-.854.435l-6.108-3.469A1.037 1.037 0 0015.976 6a1.037 1.037 0 00-1.015 1.272L8.889 10.72a1.049 1.049 0 00-.844-.422A1.04 1.04 0 007 11.327c0 .48.333.882.784.996v7.027a1.032 1.032 0 00-.784.996c0 .568.468 1.028 1.045 1.028.295 0 .561-.12.751-.314l6.211 3.527a1.01 1.01 0 00-.076.385c0 .568.468 1.028 1.045 1.028s1.045-.46 1.045-1.028c0-.14-.028-.273-.08-.395zm-.279-.38a1.05 1.05 0 00-.686-.253c-.266 0-.51.098-.694.26L9.04 20.659a1.012 1.012 0 00.004-.616l5.977-4.027a1.246 1.246 0 001.883.088l6.066 3.9a1.012 1.012 0 00-.02.621zm.119-16.513l6.141 3.488a1.033 1.033 0 00.816 1.16l-.018 7.012c-.19.043-.36.137-.494.266l-6.071-3.903c.052-.134.08-.28.08-.431a1.22 1.22 0 00-1.017-1.196l.016-6.055c.217-.055.408-.176.547-.34zm-1.605.005c.147.172.35.297.583.345l-.016 6.053a1.22 1.22 0 00-.935 1.507l-6.005 4.044a1.048 1.048 0 00-.544-.299v-7.005a1.033 1.033 0 00.816-1.18z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#000" r="16"/><path d="M16.941 24.577c.052.122.08.255.08.395 0 .568-.468 1.028-1.045 1.028s-1.045-.46-1.045-1.028c0-.136.027-.266.076-.385l-6.21-3.527a1.05 1.05 0 01-.752.314c-.577 0-1.045-.46-1.045-1.028 0-.48.333-.882.784-.996v-7.027A1.032 1.032 0 017 11.327c0-.568.468-1.028 1.045-1.028.346 0 .653.166.844.422l6.072-3.45a.975.975 0 01-.03-.243C14.931 6.46 15.4 6 15.976 6a1.037 1.037 0 011.017 1.265l6.108 3.47c.19-.264.501-.436.854-.436.577 0 1.045.46 1.045 1.028 0 .48-.335.884-.787.997l-.018 7.02c.461.107.805.515.805 1.002 0 .568-.468 1.028-1.045 1.028a1.05 1.05 0 01-.776-.34zm-.279-.38l6.287-3.572a1.013 1.013 0 01.02-.622l-6.065-3.9a1.24 1.24 0 01-.904.388 1.24 1.24 0 01-.979-.475l-5.977 4.027a1.013 1.013 0 01-.004.616l6.242 3.545a1.05 1.05 0 01.694-.26c.263 0 .503.095.686.252zm.119-16.513a1.05 1.05 0 01-.547.34l-.016 6.056a1.221 1.221 0 011.017 1.196c0 .151-.028.297-.08.43l6.07 3.904c.135-.13.305-.223.495-.266l.018-7.011a1.033 1.033 0 01-.816-1.16zm-1.605.005l-6.101 3.465a1.033 1.033 0 01-.816 1.18v7.005c.212.044.4.15.544.3l6.005-4.045a1.22 1.22 0 01.935-1.506l.016-6.054a1.047 1.047 0 01-.583-.345z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.941 23.577c.052.122.08.255.08.395 0 .568-.468 1.028-1.045 1.028s-1.045-.46-1.045-1.028c0-.136.027-.266.076-.385l-6.21-3.527a1.05 1.05 0 01-.752.314c-.577 0-1.045-.46-1.045-1.028 0-.48.333-.882.784-.996v-7.027A1.032 1.032 0 017 10.327C7 9.76 7.468 9.3 8.045 9.3c.346 0 .653.166.844.422l6.072-3.45a.975.975 0 01-.03-.243C14.931 5.46 15.4 5 15.976 5a1.037 1.037 0 011.017 1.265l6.108 3.47c.19-.264.501-.436.854-.436.577 0 1.045.46 1.045 1.028 0 .48-.335.884-.787.997l-.018 7.02c.461.107.805.515.805 1.002 0 .568-.468 1.028-1.045 1.028a1.05 1.05 0 01-.776-.34l-6.238 3.543zm-.279-.38l6.287-3.572a1.013 1.013 0 01.02-.622l-6.065-3.9a1.24 1.24 0 01-.904.388 1.24 1.24 0 01-.979-.475l-5.977 4.027a1.013 1.013 0 01-.004.616l6.242 3.545a1.05 1.05 0 01.694-.26c.263 0 .503.095.686.252zm.119-16.513a1.05 1.05 0 01-.547.34l-.016 6.056a1.221 1.221 0 011.017 1.196c0 .151-.028.297-.08.43l6.07 3.904c.135-.13.305-.223.495-.266l.018-7.011a1.033 1.033 0 01-.816-1.16l-6.141-3.489zm-1.605.005l-6.101 3.465a1.033 1.033 0 01-.816 1.18v7.005c.212.044.4.15.544.3l6.005-4.045a1.22 1.22 0 01.935-1.506l.016-6.054a1.047 1.047 0 01-.583-.345z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#272727" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.941-7.423l6.238-3.543c.191.209.468.34.776.34.577 0 1.045-.46 1.045-1.028 0-.487-.344-.895-.805-1.001l.018-7.021c.452-.113.787-.517.787-.997 0-.568-.468-1.028-1.045-1.028a1.05 1.05 0 00-.854.435l-6.108-3.469A1.037 1.037 0 0015.976 6a1.037 1.037 0 00-1.015 1.272L8.889 10.72a1.049 1.049 0 00-.844-.422A1.04 1.04 0 007 11.327c0 .48.333.882.784.996v7.027a1.032 1.032 0 00-.784.996c0 .568.468 1.028 1.045 1.028.295 0 .561-.12.751-.314l6.211 3.527a1.01 1.01 0 00-.076.385c0 .568.468 1.028 1.045 1.028s1.045-.46 1.045-1.028c0-.14-.028-.273-.08-.395zm-.279-.38a1.05 1.05 0 00-.686-.253c-.266 0-.51.098-.694.26L9.04 20.659a1.012 1.012 0 00.004-.616l5.977-4.027a1.246 1.246 0 001.883.088l6.066 3.9a1.012 1.012 0 00-.02.621zm.119-16.513l6.141 3.488a1.033 1.033 0 00.816 1.16l-.018 7.012c-.19.043-.36.137-.494.266l-6.071-3.903c.052-.134.08-.28.08-.431a1.22 1.22 0 00-1.017-1.196l.016-6.055c.217-.055.408-.176.547-.34zm-1.605.005c.147.172.35.297.583.345l-.016 6.053a1.22 1.22 0 00-.935 1.507l-6.005 4.044a1.048 1.048 0 00-.544-.299v-7.005a1.033 1.033 0 00.816-1.18z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'bix';
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
@prop export let ariaLabel = 'bix';
-->
