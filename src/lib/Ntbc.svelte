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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.965 7.51h-2.08l-.112.006a1.036 1.036 0 00-.922 1.03v11.102l-.006.112c-.085.842-1.124 1.243-1.752.629l-4.355-4.258-.084-.074c-.662-.527-1.674-.064-1.674.815v6.691l.006.11c.054.465.45.827.93.827h5.74l-.014-.01h4.323l.113-.006c.518-.057.922-.496.922-1.03V8.546l-.006-.113a1.036 1.036 0 00-1.029-.923zm-5.66-.01h-5.173l.008.01H8.147l-.125.007A1.148 1.148 0 007 8.658v14.684l.007.125a1.147 1.147 0 001.14 1.023h1.855l.125-.007a1.148 1.148 0 001.022-1.141V12.618l.006-.12c.091-.935 1.245-1.383 1.942-.701l3.975 3.886.097.086c.63.497 1.544.188 1.79-.526l.03-.11.017-.087c.01-.06.014-.12.014-.184l-.03-6.677-.008-.101a.684.684 0 00-.676-.584z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#EEC315" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M18.99 8.185a.684.684 0 00-.684-.685h-5.174l.008.01H8.147C7.513 7.51 7 8.024 7 8.658v14.684c0 .634.513 1.148 1.147 1.148h1.855c.634 0 1.147-.514 1.147-1.148V12.618c0-1.016 1.222-1.531 1.948-.821l3.975 3.886c.659.644 1.725.28 1.918-.55.02-.086.03-.176.03-.271l-.03-6.677z"/><path d="M23.965 7.51h-2.08c-.57 0-1.034.464-1.034 1.036v11.102c0 .917-1.103 1.382-1.758.74l-4.355-4.257c-.656-.64-1.758-.176-1.758.741v2.364c0 .036.002.072.005.108l-.005-.005v4.224c0 .518.419.937.936.937h5.74l-.014-.01h4.323c.572 0 1.035-.464 1.035-1.036V8.546c0-.572-.463-1.036-1.035-1.036z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#EEC315" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M18.99 7.185a.684.684 0 00-.684-.685h-5.174l.008.01H8.147C7.513 6.51 7 7.024 7 7.658v14.684c0 .634.513 1.148 1.147 1.148h1.855c.634 0 1.147-.514 1.147-1.148V11.618c0-1.016 1.222-1.531 1.948-.821l3.975 3.886c.659.644 1.725.28 1.918-.55.02-.086.03-.176.03-.271l-.03-6.677z"/><path d="M23.965 6.51h-2.08c-.57 0-1.034.464-1.034 1.036v11.102c0 .917-1.103 1.382-1.758.74l-4.355-4.257c-.656-.64-1.758-.176-1.758.741v2.364c0 .036.002.072.005.108l-.005-.005v4.224c0 .518.419.937.936.937h5.74l-.014-.01h4.323c.572 0 1.035-.464 1.035-1.036V7.546c0-.572-.463-1.036-1.035-1.036z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.965 7.51h-2.08l-.112.006a1.036 1.036 0 00-.922 1.03v11.102l-.006.112c-.085.842-1.124 1.243-1.752.629l-4.355-4.258-.084-.074c-.662-.527-1.674-.064-1.674.815v6.691l.006.11c.054.465.45.827.93.827h5.74l-.014-.01h4.323l.113-.006c.518-.057.922-.496.922-1.03V8.546l-.006-.113a1.036 1.036 0 00-1.029-.923zm-5.66-.01h-5.173l.008.01H8.147l-.125.007A1.148 1.148 0 007 8.658v14.684l.007.125a1.147 1.147 0 001.14 1.023h1.855l.125-.007a1.148 1.148 0 001.022-1.141V12.618l.006-.12c.091-.935 1.245-1.383 1.942-.701l3.975 3.886.097.086c.63.497 1.544.188 1.79-.526l.03-.11.017-.087c.01-.06.014-.12.014-.184l-.03-6.677-.008-.101a.684.684 0 00-.676-.584z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'ntbc';
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
@prop export let ariaLabel = 'ntbc';
-->
