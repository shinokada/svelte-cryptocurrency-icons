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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.985-12.832a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm0-10.005a6.957 6.957 0 00-5.003 2.115 6.954 6.954 0 011.977 4.864 6.955 6.955 0 01-1.977 4.864 6.98 6.98 0 105.003-11.844zM10.98 19.168a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm5.003-7.89a6.98 6.98 0 100 9.728 6.955 6.955 0 01-1.976-4.864c0-1.892.754-3.607 1.976-4.864zm-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.954 6.954 0 001.976-4.864 6.954 6.954 0 00-1.976-4.864 6.954 6.954 0 00-1.977 4.864z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#DA1157" cx="16" cy="16" r="16"/><path d="M20.985 19.168a3.026 3.026 0 100-6.052 3.026 3.026 0 000 6.052zm0-10.005a6.98 6.98 0 11-5.003 11.843 6.955 6.955 0 001.977-4.864 6.954 6.954 0 00-1.977-4.864 6.957 6.957 0 015.003-2.115zM10.98 19.168a3.026 3.026 0 100-6.052 3.026 3.026 0 000 6.052zm5.003-7.89a6.955 6.955 0 00-1.976 4.864c0 1.892.754 3.607 1.976 4.864a6.98 6.98 0 110-9.728zm-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.954 6.954 0 001.976-4.864 6.954 6.954 0 00-1.976-4.864 6.954 6.954 0 00-1.977 4.864z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#DA1157" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M20.98 17.89a3.026 3.026 0 100-6.053 3.026 3.026 0 000 6.052zm0-10.006a6.98 6.98 0 11-5.003 11.843 6.955 6.955 0 001.976-4.864A6.954 6.954 0 0015.977 10a6.957 6.957 0 015.003-2.115zM10.974 17.889a3.026 3.026 0 100-6.052 3.026 3.026 0 000 6.052zM15.977 10A6.955 6.955 0 0014 14.863c0 1.892.755 3.607 1.977 4.864a6.98 6.98 0 110-9.728zM14 14.864c0 1.892.754 3.607 1.976 4.864a6.954 6.954 0 001.977-4.864A6.954 6.954 0 0015.976 10 6.954 6.954 0 0014 14.864z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.985-12.832a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm0-10.005a6.957 6.957 0 00-5.003 2.115 6.954 6.954 0 011.977 4.864 6.955 6.955 0 01-1.977 4.864 6.98 6.98 0 105.003-11.844zM10.98 19.168a3.026 3.026 0 110-6.052 3.026 3.026 0 010 6.052zm5.003-7.89a6.98 6.98 0 100 9.728 6.955 6.955 0 01-1.976-4.864c0-1.892.754-3.607 1.976-4.864zm-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.954 6.954 0 001.976-4.864 6.954 6.954 0 00-1.976-4.864 6.954 6.954 0 00-1.977 4.864z" fill="#FFF"/>';
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
  export let ariaLabel = 'mft';
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
@prop export let ariaLabel = 'mft';
-->
