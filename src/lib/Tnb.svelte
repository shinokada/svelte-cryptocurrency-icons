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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.402-20.143l.075-.357H8.34l-2.178 9h2.396l1.646-7.286h2.932L11.389 20.5h2.179l1.713-7.286h.03l.26-1.228.03-.129zm4.141-.357l-2.178 8.929h4.567a5.35 5.35 0 001.621-.243c.867-.275 1.922-.852 2.09-2.043h.653l.218-.857h-.8s.073-1.286-1.596-1.5c0 0 1.452-.429 1.67-1.215h.726l.29-.857h-.799s.29-2.071-2.831-2.214zM7.323 13.214L7.76 11.5H5.436L5 13.214zm9.948 6.286l.798-3.643-1.887-4.214-.8 3.428zm5.554-4.429h-1.851l.435-1.928h1.416c.26 0 .51.101.693.282s.287.426.287.682c0 .256-.103.501-.287.682s-.433.283-.693.282zm-.489 3.715H20.11l.524-2.215h1.702c.654 0 1.179.496 1.179 1.108 0 .611-.528 1.107-1.179 1.107z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffc04e" r="16"/><path d="M15.598 11.857h.003l-.03.13-.26 1.227h-.03L13.568 20.5h-2.179l1.747-7.286h-2.932L8.558 20.5H6.162l2.178-9h7.333zm4.141-.357h3.63c3.123.143 2.832 2.214 2.832 2.214H27l-.29.857h-.727c-.217.786-1.67 1.215-1.67 1.215 1.67.214 1.598 1.5 1.598 1.5h.799l-.218.857h-.654c-.167 1.19-1.222 1.768-2.089 2.043a5.35 5.35 0 01-1.62.243H17.56zM7.323 13.214H5l.436-1.714h2.323zm9.948 6.286l-1.888-4.429.799-3.428 1.887 4.214zm5.554-4.429c.26 0 .51-.1.693-.282s.287-.426.287-.682c0-.256-.103-.501-.287-.682s-.433-.282-.693-.282H21.41l-.435 1.928zm-.489 3.715c.651 0 1.179-.496 1.179-1.107 0-.612-.525-1.108-1.179-1.108h-1.702l-.524 2.215z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="138.9%" x="-8%" y="-13.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.598 10.857h.003l-.03.13-.26 1.227h-.03L13.568 19.5h-2.179l1.747-7.286h-2.932L8.558 19.5H6.162l2.178-9h7.333l-.075.357zm4.141-.357h3.63c3.123.143 2.832 2.214 2.832 2.214H27l-.29.857h-.727c-.217.786-1.67 1.215-1.67 1.215 1.67.214 1.598 1.5 1.598 1.5h.799l-.218.857h-.654c-.167 1.19-1.222 1.768-2.089 2.043a5.35 5.35 0 01-1.62.243H17.56l2.18-8.929zM7.323 12.214H5l.436-1.714h2.323l-.436 1.714zm9.948 6.286l-1.888-4.429.799-3.428 1.887 4.214-.798 3.643zm5.554-4.429c.26 0 .51-.1.693-.282a.956.956 0 000-1.364.988.988 0 00-.693-.282H21.41l-.435 1.928h1.851zm-.489 3.715c.651 0 1.179-.496 1.179-1.107 0-.612-.525-1.108-1.179-1.108h-1.702l-.524 2.215h2.226z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFC04E" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.402-20.143l.075-.357H8.34l-2.178 9h2.396l1.646-7.286h2.932L11.389 20.5h2.179l1.713-7.286h.03l.26-1.228.03-.129zm4.141-.357l-2.178 8.929h4.567a5.35 5.35 0 001.621-.243c.867-.275 1.922-.852 2.09-2.043h.653l.218-.857h-.8s.073-1.286-1.596-1.5c0 0 1.452-.429 1.67-1.215h.726l.29-.857h-.799s.29-2.071-2.831-2.214zM7.323 13.214L7.76 11.5H5.436L5 13.214zm9.948 6.286l.798-3.643-1.887-4.214-.8 3.428zm5.554-4.429h-1.851l.435-1.928h1.416c.26 0 .51.101.693.282s.287.426.287.682c0 .256-.103.501-.287.682s-.433.283-.693.282zm-.489 3.715H20.11l.524-2.215h1.702c.654 0 1.179.496 1.179 1.108 0 .611-.528 1.107-1.179 1.107z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'tnb';
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
@prop export let ariaLabel = 'tnb';
-->
