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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.008 5L6.5 10.5v11l9.492 5.5 9.493-5.5.002-10.707a.331.331 0 00-.032-.258l.03-.034L15.992 5zm-4.93 14.216l4.596 2.647.004.378v3.799l-8.155-4.725 3.555-2.099zm9.887-.006l3.546 2.094-8.169 4.733v-4.176l4.623-2.65zm-9.55-5.483l4.257 2.47.001 4.9-4.253-2.45-.005-4.92zm9.173.016l.001 4.917-4.247 2.435v-4.896l4.246-2.456zm-13.41-2.475l3.572 2.073.008 5.293-3.58 2.115v-9.481zm17.658.017v9.44l-3.582-2.116-.001-5.251 3.583-2.073zm-8.832-.612l4.256 2.48-4.255 2.46-1.772-1.029-2.488-1.442 4.26-2.469zm.38-4.688l8.138 4.715-3.269 1.891v-.012l-.33.19-4.511-2.628-.028-4.156zm-.664-.051l.027 4.121-4.665 2.703-.332-.185-3.242-1.881 8.212-4.758z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#7C7CFF" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M16.365 5.365l.032 4.971-.664.005-.032-4.971zm4.746 13.17l4.211 2.487-.337.572-4.21-2.487zm-10.2 0l.337.572-4.21 2.487-.337-.572z"/><path d="M21.567 13.155l-5.577-3.25-5.585 3.237 5.584 3.238 5.578-3.225zm-5.579-2.482l4.256 2.48-4.255 2.46-4.26-2.47 4.26-2.47z"/><path d="M16.321 15.805l-5.587-3.24.008 6.467 5.58 3.214v-6.441zM11.4 13.718l4.258 2.468v4.911l-4.253-2.45-.005-4.929z"/><path d="M21.238 19.045v-6.466l-5.58 3.225v6.44l5.58-3.199zm-.665-5.316v4.93l-4.252 2.44v-4.912l4.252-2.458z"/><path d="M25.485 10.5L15.992 5 6.5 10.5v11l9.492 5.5 9.493-5.5v-11zm-9.493-4.733l8.829 5.116v10.234l-8.829 5.115-8.83-5.116V10.884l8.83-5.117z"/><path d="M25.002 10.414a.332.332 0 01.394.529l-.062.046-9.342 5.404-9.312-5.405a.332.332 0 01.263-.605l.07.031 8.98 5.21 9.01-5.21z"/><path d="M15.994 15.677c.16 0 .295.114.325.265l.007.067v10.607a.332.332 0 01-.657.067l-.007-.067V16.01c0-.183.149-.332.332-.332z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#7C7CFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M16.365 4.365l.032 4.971-.664.005-.032-4.971zm4.746 13.17l4.211 2.487-.337.572-4.21-2.487zm-10.2 0l.337.572-4.21 2.487-.337-.572z"/><path d="M21.567 12.155l-5.577-3.25-5.585 3.237 5.584 3.238 5.578-3.225zm-5.579-2.482l4.256 2.48-4.255 2.46-4.26-2.47 4.26-2.47z"/><path d="M16.321 14.805l-5.587-3.24.008 6.467 5.58 3.214v-6.441zM11.4 12.718l4.258 2.468v4.911l-4.253-2.45-.005-4.929z"/><path d="M21.238 18.045v-6.466l-5.58 3.225v6.44l5.58-3.199zm-.665-5.316v4.93l-4.252 2.44v-4.912l4.252-2.458z"/><path d="M25.485 9.5L15.992 4 6.5 9.5v11l9.492 5.5 9.493-5.5v-11zm-9.493-4.733l8.829 5.116v10.234l-8.829 5.115-8.83-5.116V9.884l8.83-5.117z"/><path d="M25.002 9.414a.332.332 0 01.394.529l-.062.046-9.342 5.404L6.68 9.988a.332.332 0 01.263-.605l.07.031 8.98 5.21 9.01-5.21z"/><path d="M15.994 14.677c.16 0 .295.114.325.265l.007.067v10.607a.332.332 0 01-.657.067l-.007-.067V15.01c0-.183.149-.332.332-.332z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.008 5L6.5 10.5v11l9.492 5.5 9.493-5.5.002-10.707a.331.331 0 00-.032-.258l.03-.034L15.992 5zm-4.93 14.216l4.596 2.647.004.378v3.799l-8.155-4.725 3.555-2.099zm9.887-.006l3.546 2.094-8.169 4.733v-4.176l4.623-2.65zm-9.55-5.483l4.257 2.47.001 4.9-4.253-2.45-.005-4.92zm9.173.016l.001 4.917-4.247 2.435v-4.896l4.246-2.456zm-13.41-2.475l3.572 2.073.008 5.293-3.58 2.115v-9.481zm17.658.017v9.44l-3.582-2.116-.001-5.251 3.583-2.073zm-8.832-.612l4.256 2.48-4.255 2.46-1.772-1.029-2.488-1.442 4.26-2.469zm.38-4.688l8.138 4.715-3.269 1.891v-.012l-.33.19-4.511-2.628-.028-4.156zm-.664-.051l.027 4.121-4.665 2.703-.332-.185-3.242-1.881 8.212-4.758z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'fida';
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
@prop export let ariaLabel = 'fida';
-->
