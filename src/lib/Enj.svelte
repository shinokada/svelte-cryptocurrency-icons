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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.313-23c-3.022 0-6.043 0-9.052.006-.83.082-1.672.12-2.495.297-2.318.491-3.371 1.6-3.647 3.857-.047.353-.08.712-.119 1.071v3.636c.06.46.105.927.184 1.387.35 1.992 1.383 3 3.457 3.41.882.17 1.777.277 2.673.296 2.91.057 5.82.05 8.73 0 .697-.007 1.402-.057 2.073-.265.784-.24 1.133-1.172.685-1.84-.23-.347-.6-.397-.994-.397-3.101 0-6.195.006-9.296-.013-.889-.006-1.778-.057-2.64-.29-.777-.208-1.258-.674-1.455-1.424-.105-.403-.132-.813-.165-1.23-.04-.453-.046-.453.435-.453h12.99c.183 0 .374-.006.559-.038.44-.082.698-.308.724-.718.033-.51.178-1.065-.402-1.418a1.124 1.124 0 00-.573-.151H10.957c-.744 0-.744 0-.685-.713.132-1.518.724-2.142 2.298-2.388a8.84 8.84 0 011.422-.12c3.173-.013 6.353-.019 9.526-.025a5.12 5.12 0 00.698-.05c.388-.064.632-.297.698-.675.164-.933-.152-1.393-1.12-1.576-.487-.088-.987-.12-1.48-.176z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#624dbf" r="16"/><path d="M22.313 9c.494.057.994.088 1.482.176.967.183 1.283.643 1.119 1.576-.066.378-.31.611-.698.674a5.12 5.12 0 01-.698.05c-3.173.007-6.353.013-9.526.026-.48 0-.955.044-1.422.12-1.574.246-2.166.87-2.298 2.388-.06.713-.06.713.685.713h13.028c.205.006.402.044.573.15.58.354.435.908.402 1.419-.026.41-.283.636-.724.718a3.341 3.341 0 01-.56.038h-12.99c-.48 0-.473 0-.434.454.033.416.06.826.165 1.229.197.75.678 1.216 1.455 1.424.862.233 1.751.284 2.64.29 3.1.019 6.195.013 9.296.013.395 0 .763.05.994.397.448.668.099 1.6-.685 1.84-.671.208-1.376.258-2.074.265-2.91.05-5.82.057-8.73 0a15.91 15.91 0 01-2.672-.296c-2.074-.41-3.108-1.418-3.457-3.41-.079-.46-.125-.926-.184-1.387v-3.636c.04-.36.072-.718.119-1.071.276-2.257 1.33-3.366 3.647-3.857.823-.177 1.665-.215 2.495-.297C16.27 9 19.29 9 22.313 9z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="125%" x="-9.7%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M22.313 8c.494.057.994.088 1.482.176.967.183 1.283.643 1.119 1.576-.066.378-.31.611-.698.674a5.12 5.12 0 01-.698.05c-3.173.007-6.353.013-9.526.026-.48 0-.955.044-1.422.12-1.574.246-2.166.87-2.298 2.388-.06.713-.06.713.685.713h13.028c.205.006.402.044.573.15.58.354.435.908.402 1.419-.026.41-.283.636-.724.718a3.341 3.341 0 01-.56.038h-12.99c-.48 0-.473 0-.434.454.033.416.06.826.165 1.229.197.75.678 1.216 1.455 1.424.862.233 1.751.284 2.64.29 3.1.019 6.195.013 9.296.013.395 0 .763.05.994.397.448.668.099 1.6-.685 1.84-.671.208-1.376.258-2.074.265-2.91.05-5.82.057-8.73 0a15.91 15.91 0 01-2.672-.296c-2.074-.41-3.108-1.418-3.457-3.41-.079-.46-.125-.926-.184-1.387v-3.636c.04-.36.072-.718.119-1.071.276-2.257 1.33-3.366 3.647-3.857.823-.177 1.665-.215 2.495-.297C16.27 8 19.29 8 22.313 8z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#624DBF" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.313-23c-3.022 0-6.043 0-9.052.006-.83.082-1.672.12-2.495.297-2.318.491-3.371 1.6-3.647 3.857-.047.353-.08.712-.119 1.071v3.636c.06.46.105.927.184 1.387.35 1.992 1.383 3 3.457 3.41.882.17 1.777.277 2.673.296 2.91.057 5.82.05 8.73 0 .697-.007 1.402-.057 2.073-.265.784-.24 1.133-1.172.685-1.84-.23-.347-.6-.397-.994-.397-3.101 0-6.195.006-9.296-.013-.889-.006-1.778-.057-2.64-.29-.777-.208-1.258-.674-1.455-1.424-.105-.403-.132-.813-.165-1.23-.04-.453-.046-.453.435-.453h12.99c.183 0 .374-.006.559-.038.44-.082.698-.308.724-.718.033-.51.178-1.065-.402-1.418a1.124 1.124 0 00-.573-.151H10.957c-.744 0-.744 0-.685-.713.132-1.518.724-2.142 2.298-2.388a8.84 8.84 0 011.422-.12c3.173-.013 6.353-.019 9.526-.025a5.12 5.12 0 00.698-.05c.388-.064.632-.297.698-.675.164-.933-.152-1.393-1.12-1.576-.487-.088-.987-.12-1.48-.176z" fill="#fff"/>';
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
  export let ariaLabel = 'enj';
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
@prop export let ariaLabel = 'enj';
-->
