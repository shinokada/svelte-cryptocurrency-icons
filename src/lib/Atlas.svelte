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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.5 21.312h-5L16 26.25l2.5-4.938zM16.64 6.25h-1.28c-.325 0-.417.19-.564.448l-7.22 15.544c-.206.442.028.551.451.551l2.953-.001c.325 0 .402-.247.55-.551L16 12.748l4.47 9.493c.148.304.225.55.55.55l2.953.002c.423 0 .657-.109.451-.55l-7.22-15.545c-.148-.258-.24-.448-.565-.448z"/>';
  let svgcolor =
    '<defs><path id="a" d="M2.5 4.938L0 0h5z"/><path d="M8.5 6.498L4.03 15.99c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55L7.296.447C7.445.19 7.537 0 7.862 0H9.14c.325 0 .417.19.565.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551L8.5 6.498z" id="b"/></defs><g fill="none" fill-rule="evenodd"><circle fill="#31FAFB" fill-rule="nonzero" cx="16" cy="16" r="16"/><use fill="#FFF" xlink:href="#a" transform="translate(13.5 21.312)"/><use fill="#FFF" xlink:href="#b" transform="translate(7.5 6.25)"/></g>';
  let svgicon =
    '<defs><path id="d" d="M2.5 4.938L0 0h5z"/><path d="M8.5 6.498L4.03 15.99c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55L7.296.447C7.445.19 7.537 0 7.862 0H9.14c.325 0 .417.19.565.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551L8.5 6.498z" id="e"/><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#31FAFB" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF"><use xlink:href="#d" transform="translate(13.5 20.312)"/><use xlink:href="#e" transform="translate(7.5 5.25)"/></g></g>';
  let svgwhite =
    '<path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm2.5-10.688L16 26.25l-2.5-4.938h5zM16.64 6.25c.324 0 .416.19.564.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551L16 12.748l-4.47 9.493c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55l7.22-15.545c.148-.258.24-.448.565-.448h1.278z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'atlas';
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
@prop export let ariaLabel = 'atlas';
-->
