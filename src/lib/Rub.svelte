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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-16.762v1.808h1.764v2.608H10.5v1.705h1.764V25h1.988v-3.641h4v-1.705h-4v-2.608h2.509a7.91 7.91 0 002.26-.31c.696-.207 1.3-.52 1.814-.943.514-.421.92-.95 1.218-1.588.298-.637.447-1.386.447-2.247 0-.86-.14-1.6-.422-2.22-.282-.62-.671-1.133-1.168-1.537s-1.093-.706-1.789-.904A8.426 8.426 0 0016.811 7h-4.547v8.238zm6.31 0h-2.558v-6.43h2.559c1.142 0 2.041.25 2.695.749.654.499.982 1.3.982 2.401 0 1.102-.328 1.924-.982 2.467-.654.542-1.553.813-2.695.813z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#64d1ff" r="16"/><path d="M10.5 15.238h1.764V7h4.547c.844 0 1.614.099 2.31.297.696.198 1.292.5 1.789.904s.886.917 1.168 1.536c.281.62.422 1.36.422 2.221s-.15 1.61-.447 2.247a4.478 4.478 0 01-1.218 1.588 5.113 5.113 0 01-1.813.943 7.91 7.91 0 01-2.261.31h-2.51v2.608h4v1.705h-4V25h-1.987v-3.641H10.5v-1.705h1.764v-2.608H10.5zm6.31 0c1.143 0 2.042-.271 2.696-.813.654-.543.982-1.365.982-2.467 0-1.101-.328-1.902-.982-2.401-.654-.5-1.553-.75-2.695-.75h-2.56v6.431z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="129.2%" height="119.4%" x="-14.6%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M10.5 14.238h1.764V6h4.547c.844 0 1.614.099 2.31.297.696.198 1.292.5 1.789.904.497.404.886.917 1.168 1.536.281.62.422 1.36.422 2.221s-.15 1.61-.447 2.247a4.478 4.478 0 01-1.218 1.588 5.113 5.113 0 01-1.813.943 7.91 7.91 0 01-2.261.31h-2.51v2.608h4v1.705h-4V24h-1.987v-3.641H10.5v-1.705h1.764v-2.608H10.5v-1.808zm6.31 0c1.143 0 2.042-.271 2.696-.813.654-.543.982-1.365.982-2.467 0-1.101-.328-1.902-.982-2.401-.654-.5-1.553-.75-2.695-.75h-2.56v6.431h2.56z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#64D1FF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-16.762v1.808h1.764v2.608H10.5v1.705h1.764V25h1.988v-3.641h4v-1.705h-4v-2.608h2.509a7.91 7.91 0 002.26-.31c.696-.207 1.3-.52 1.814-.943.514-.421.92-.95 1.218-1.588.298-.637.447-1.386.447-2.247 0-.86-.14-1.6-.422-2.22-.282-.62-.671-1.133-1.168-1.537s-1.093-.706-1.789-.904A8.426 8.426 0 0016.811 7h-4.547v8.238zm6.31 0h-2.558v-6.43h2.559c1.142 0 2.041.25 2.695.749.654.499.982 1.3.982 2.401 0 1.102-.328 1.924-.982 2.467-.654.542-1.553.813-2.695.813z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'rub';
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
@prop export let ariaLabel = 'rub';
-->
