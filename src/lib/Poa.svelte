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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 24h22L16 5zm6.872-9.676L16 7.194l4.128 7.13c-1.285-.858-2.663-1.291-4.128-1.291s-2.843.433-4.128 1.291zm-1.951 3.37c1.81 1.99 3.843 3 6.079 3s4.27-1.01 6.08-3l2.996 5.177H6.924zM16 19.565c-1.938 0-3.711-.89-5.338-2.7 1.627-1.813 3.4-2.702 5.338-2.702s3.711.89 5.338 2.701c-1.627 1.812-3.4 2.702-5.338 2.702zm0-.483c1.16 0 2.101-.975 2.101-2.178 0-1.202-.94-2.177-2.101-2.177s-2.101.975-2.101 2.177c0 1.203.94 2.178 2.101 2.178zm0-1.13c-.559 0-1.012-.469-1.012-1.048 0-.579.453-1.048 1.012-1.048s1.012.47 1.012 1.048c0 .58-.453 1.049-1.012 1.049z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#444fa1" r="16"/><path d="M5 24L16 5l11 19zm6.872-9.676c1.285-.858 2.663-1.291 4.128-1.291s2.843.433 4.128 1.291L16 7.194zm-1.951 3.37l-2.997 5.177h18.152l-2.997-5.176c-1.81 1.989-3.843 2.999-6.079 2.999s-4.27-1.01-6.08-3zM16 19.565c1.938 0 3.711-.89 5.338-2.7-1.627-1.813-3.4-2.702-5.338-2.702s-3.711.89-5.338 2.701c1.627 1.812 3.4 2.702 5.338 2.702zm0-.483c-1.16 0-2.101-.975-2.101-2.178 0-1.202.94-2.177 2.101-2.177s2.101.975 2.101 2.177c0 1.203-.94 2.178-2.101 2.178zm0-1.13c.559 0 1.012-.469 1.012-1.048 0-.579-.453-1.048-1.012-1.048s-1.012.47-1.012 1.048c0 .58.453 1.049 1.012 1.049z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="118.4%" x="-8%" y="-6.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M5 23L16 4l11 19H5zm6.872-9.676c1.285-.858 2.663-1.291 4.128-1.291 1.465 0 2.843.433 4.128 1.291L16 6.194l-4.128 7.13zm-1.951 3.37l-2.997 5.177h18.152l-2.997-5.176c-1.81 1.989-3.843 2.999-6.079 2.999-2.236 0-4.27-1.01-6.08-3zM16 18.565c1.938 0 3.711-.89 5.338-2.7-1.627-1.813-3.4-2.702-5.338-2.702-1.938 0-3.711.89-5.338 2.701 1.627 1.812 3.4 2.702 5.338 2.702zm0-.483c-1.16 0-2.101-.975-2.101-2.178 0-1.202.94-2.177 2.101-2.177 1.16 0 2.101.975 2.101 2.177 0 1.203-.94 2.178-2.101 2.178zm0-1.13c.559 0 1.012-.469 1.012-1.048 0-.579-.453-1.048-1.012-1.048-.559 0-1.012.47-1.012 1.048 0 .58.453 1.049 1.012 1.049z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#444FA1" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 24h22L16 5zm6.872-9.676L16 7.194l4.128 7.13c-1.285-.858-2.663-1.291-4.128-1.291s-2.843.433-4.128 1.291zm-1.951 3.37c1.81 1.99 3.843 3 6.079 3s4.27-1.01 6.08-3l2.996 5.177H6.924zM16 19.565c-1.938 0-3.711-.89-5.338-2.7 1.627-1.813 3.4-2.702 5.338-2.702s3.711.89 5.338 2.701c-1.627 1.812-3.4 2.702-5.338 2.702zm0-.483c1.16 0 2.101-.975 2.101-2.178 0-1.202-.94-2.177-2.101-2.177s-2.101.975-2.101 2.177c0 1.203.94 2.178 2.101 2.178zm0-1.13c-.559 0-1.012-.469-1.012-1.048 0-.579.453-1.048 1.012-1.048s1.012.47 1.012 1.048c0 .58-.453 1.049-1.012 1.049z" fill="#fff"/>';
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
  export let ariaLabel = 'poa';
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
@prop export let ariaLabel = 'poa';
-->
