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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-12.101V9.559c-2.025-1.133-4.615-.46-5.784 1.5l-3.219 5.4-3.213-5.39C11.615 9.107 9.025 8.435 7 9.568v10.33C7 22.165 8.896 24 11.234 24v-7.33l1.23 2.063c.505.74.977 1.166 1.416 1.277l.22.123a4.33 4.33 0 001.9.435 4.267 4.267 0 003.536-1.844l1.229-2.06V24c2.339 0 4.234-1.836 4.234-4.101z"/><path d="M7 9.568l4.234 7.103V24C8.896 24 7 22.164 7 19.899z" fill-opacity=".5"/><path d="M20.765 16.663l4.232-7.099h.002V19.9C25 22.164 23.104 24 20.765 24z" fill-opacity=".4"/><path d="M15.997 16.458L13.88 20.01c-.439-.11-.911-.536-1.416-1.277L7 9.568c2.025-1.133 4.615-.46 5.784 1.5z" fill-opacity=".198"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#104fca" r="16"/><g fill="#fff"><path d="M7 9.568l4.234 7.103V24C8.896 24 7 22.164 7 19.899z" fill-opacity=".5"/><path d="M20.765 16.663l4.232-7.099h.002V19.9C25 22.164 23.104 24 20.765 24z" fill-opacity=".6"/><path d="M15.997 16.458L13.88 20.01c-.439-.11-.911-.536-1.416-1.277L7 9.568c2.025-1.133 4.615-.46 5.784 1.5z" fill-opacity=".8"/><path d="M19.216 11.06C20.385 9.098 22.975 8.426 25 9.559l-5.464 9.165A4.267 4.267 0 0116 20.568a4.33 4.33 0 01-1.9-.435l-.22-.123z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="123.3%" x="-9.7%" y="-8.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#104FCA" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(7 8)"><path fill-opacity=".5" d="M0 .568L4.234 7.67V15C1.896 15 0 13.164 0 10.899V.568z"/><path fill-opacity=".6" d="M13.765 7.663L17.997.564h.002V10.9C18 13.164 16.104 15 13.765 15V7.663z"/><path fill-opacity=".8" d="M8.997 7.458L6.88 11.01c-.439-.11-.911-.536-1.416-1.277L0 .568c2.025-1.133 4.615-.46 5.784 1.5l3.213 5.39z"/><path d="M12.216 2.06C13.385.098 15.975-.574 18 .559l-5.464 9.165A4.267 4.267 0 019 11.568a4.33 4.33 0 01-1.9-.435l-.22-.123 5.336-8.95z"/></g></g>';
  let svgwhite =
    '<g fill="#fff"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-12.101V9.559c-2.025-1.133-4.615-.46-5.784 1.5l-3.219 5.4-3.213-5.39C11.615 9.107 9.025 8.435 7 9.568v10.33C7 22.165 8.896 24 11.234 24v-7.33l1.23 2.063c.505.74.977 1.166 1.416 1.277l.22.123a4.33 4.33 0 001.9.435 4.267 4.267 0 003.536-1.844l1.229-2.06V24c2.339 0 4.234-1.836 4.234-4.101z"/><path d="M7 9.568l4.234 7.103V24C8.896 24 7 22.164 7 19.899z" fill-opacity=".5"/><path d="M20.765 16.663l4.232-7.099h.002V19.9C25 22.164 23.104 24 20.765 24z" fill-opacity=".6"/><path d="M15.997 16.458L13.88 20.01c-.439-.11-.911-.536-1.416-1.277L7 9.568c2.025-1.133 4.615-.46 5.784 1.5z" fill-opacity=".805"/></g>';
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
  export let ariaLabel = 'mth';
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
@prop export let ariaLabel = 'mth';
-->
