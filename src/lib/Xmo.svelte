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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16a11.86 11.86 0 00-2.381-7.153l-1.96 1.96A9.272 9.272 0 0125.253 16c0 5.11-4.153 9.262-9.262 9.262-5.11 0-9.263-4.153-9.263-9.262a9.22 9.22 0 011.594-5.194l-1.96-1.96A11.969 11.969 0 004 16c0 6.628 5.372 12 12 12s12-5.372 12-12zm-5.363 0a6.65 6.65 0 00-.871-3.29L16 18.474l-5.766-5.766A6.644 6.644 0 009.363 16 6.644 6.644 0 0016 22.637 6.644 6.644 0 0022.637 16zm1.21-9.075A11.925 11.925 0 0016 4c-3 0-5.747 1.097-7.847 2.925l1.866 1.866L16 14.762l7.847-7.837z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F60"/><g fill="#FFF"><path d="M28 16c0 6.628-5.372 12-12 12S4 22.628 4 16c0-2.681.881-5.156 2.362-7.153l1.96 1.96A9.222 9.222 0 006.728 16c0 5.11 4.153 9.262 9.263 9.262 5.109 0 9.262-4.153 9.262-9.262a9.272 9.272 0 00-1.594-5.194l1.96-1.96A11.86 11.86 0 0128 16"/><path d="M22.637 16A6.644 6.644 0 0116 22.637 6.644 6.644 0 019.362 16c0-1.153.3-2.287.872-3.29L16 18.474l5.766-5.766A6.644 6.644 0 0122.638 16"/><path d="M23.847 6.925L16 14.762l-5.981-5.971-1.866-1.866A11.907 11.907 0 0116 4c3 0 5.738 1.097 7.847 2.925"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F60" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M27 15c0 6.076-4.924 11-11 11S5 21.076 5 15c0-2.458.808-4.727 2.166-6.557l1.796 1.796A8.453 8.453 0 007.5 15c0 4.684 3.807 8.49 8.49 8.49 4.684 0 8.491-3.806 8.491-8.49a8.5 8.5 0 00-1.46-4.76l1.795-1.797A10.872 10.872 0 0127 15"/><path d="M22.084 15A6.09 6.09 0 0116 21.084 6.09 6.09 0 019.916 15a6.09 6.09 0 01.799-3.016L16 17.269l5.285-5.285c.524.92.8 1.959.8 3.016"/><path d="M23.193 6.681L16 13.866 10.517 8.39l-1.71-1.71A10.915 10.915 0 0116 4c2.75 0 5.26 1.005 7.193 2.681"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16a11.86 11.86 0 00-2.381-7.153l-1.96 1.96A9.272 9.272 0 0125.253 16c0 5.11-4.153 9.262-9.262 9.262-5.11 0-9.263-4.153-9.263-9.262a9.22 9.22 0 011.594-5.194l-1.96-1.96A11.969 11.969 0 004 16c0 6.628 5.372 12 12 12s12-5.372 12-12zm-5.363 0a6.65 6.65 0 00-.871-3.29L16 18.474l-5.766-5.766A6.644 6.644 0 009.363 16 6.644 6.644 0 0016 22.637 6.644 6.644 0 0022.637 16zm1.21-9.075A11.925 11.925 0 0016 4c-3 0-5.747 1.097-7.847 2.925l1.866 1.866L16 14.762l7.847-7.837z" fill="#FFF"/>';
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
  export let ariaLabel = 'xmo';
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
@prop export let ariaLabel = 'xmo';
-->
