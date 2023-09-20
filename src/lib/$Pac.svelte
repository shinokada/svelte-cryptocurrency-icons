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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.065-28C9.342 4.001 4 9.347 4 15.94c.001 6.592 5.347 11.936 11.94 11.935 6.592-.002 11.936-5.347 11.935-11.94A11.937 11.937 0 0015.935 4zm-4.847 5.23a.123.123 0 01.125-.12h4.973a6.98 6.98 0 013.027.628c.18.088.357.186.528.292l-3.237 1.853h-1.689a.123.123 0 00-.12.126v.932l-3.607 2.086V9.23zM9.749 19.708l-2.162-2.184 7.12-4.108v2.662a.123.123 0 00.125.12h1.017l-6.093 3.51h-.007zm10.662-2.03c-1.044.872-2.477 1.308-4.299 1.308h-1.297a.123.123 0 00-.123.123v2.688l-1.81 1.042-1.69.977-.107.06v-4.455l5.603-3.224a2.056 2.056 0 001.297-.513 1.74 1.74 0 00.318-.432l3.578-2.071c.06.328.09.66.089.994.004 1.463-.516 2.63-1.56 3.503zm-1.92-3.019c.024-.153.036-.309.037-.464a2.417 2.417 0 00-.563-1.674A1.823 1.823 0 0017.15 12l4.973-2.871 2.182 2.183-5.814 3.347z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F5EB16"/><path d="M15.935 4C9.342 4.001 4 9.347 4 15.94c.001 6.592 5.347 11.936 11.94 11.935 6.592-.002 11.936-5.347 11.935-11.94A11.937 11.937 0 0015.935 4zm-4.847 5.23a.123.123 0 01.125-.12h4.973a6.98 6.98 0 013.027.628c.18.088.357.186.528.292l-3.237 1.853h-1.689a.123.123 0 00-.12.126v.932l-3.607 2.086V9.23zM9.749 19.708l-2.162-2.184 7.12-4.108v2.662a.123.123 0 00.125.12h1.017l-6.093 3.51h-.007zm10.662-2.03c-1.044.872-2.477 1.308-4.299 1.308h-1.297a.123.123 0 00-.123.123v2.688l-1.81 1.042-1.69.977-.107.06v-4.455l5.603-3.224a2.056 2.056 0 001.297-.513 1.74 1.74 0 00.318-.432l3.578-2.071c.06.328.09.66.089.994.004 1.463-.516 2.63-1.56 3.503zm-1.92-3.019c.024-.153.036-.309.037-.464a2.417 2.417 0 00-.563-1.674A1.823 1.823 0 0017.15 12l4.973-2.871 2.182 2.183-5.814 3.347z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F5EB16" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M15.94 4C9.898 4.001 5 8.901 5 14.945c.001 6.043 4.901 10.941 10.945 10.94 6.043-.001 10.941-4.901 10.94-10.944A10.943 10.943 0 0015.941 4zm-4.443 4.794a.113.113 0 01.115-.11h4.558a6.398 6.398 0 012.775.576c.166.08.328.17.484.268l-2.967 1.698h-1.548a.113.113 0 00-.111.115v.854l-3.306 1.913V8.794zM10.27 18.4l-1.982-2.002 6.527-3.765v2.44a.113.113 0 00.115.11h.931L10.276 18.4h-.006zm9.773-1.861c-.956.8-2.27 1.2-3.94 1.2h-1.19a.113.113 0 00-.112.112v2.464l-1.659.955-1.55.896-.097.055v-4.085l5.135-2.955c.44-.013.86-.179 1.19-.47a1.59 1.59 0 00.29-.396l3.281-1.899a5 5 0 01.081.912c.004 1.341-.472 2.412-1.429 3.211zm-1.76-2.767a2.88 2.88 0 00.034-.426 2.216 2.216 0 00-.515-1.534 1.67 1.67 0 00-.748-.478l4.559-2.632 2 2.002-5.33 3.068z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.065-28C9.342 4.001 4 9.347 4 15.94c.001 6.592 5.347 11.936 11.94 11.935 6.592-.002 11.936-5.347 11.935-11.94A11.937 11.937 0 0015.935 4zm-4.847 5.23a.123.123 0 01.125-.12h4.973a6.98 6.98 0 013.027.628c.18.088.357.186.528.292l-3.237 1.853h-1.689a.123.123 0 00-.12.126v.932l-3.607 2.086V9.23zM9.749 19.708l-2.162-2.184 7.12-4.108v2.662a.123.123 0 00.125.12h1.017l-6.093 3.51h-.007zm10.662-2.03c-1.044.872-2.477 1.308-4.299 1.308h-1.297a.123.123 0 00-.123.123v2.688l-1.81 1.042-1.69.977-.107.06v-4.455l5.603-3.224a2.056 2.056 0 001.297-.513 1.74 1.74 0 00.318-.432l3.578-2.071c.06.328.09.66.089.994.004 1.463-.516 2.63-1.56 3.503zm-1.92-3.019c.024-.153.036-.309.037-.464a2.417 2.417 0 00-.563-1.674A1.823 1.823 0 0017.15 12l4.973-2.871 2.182 2.183-5.814 3.347z" fill="#FFF"/>';
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
  export let ariaLabel = '$pac';
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
@prop export let ariaLabel = '$pac';
-->
