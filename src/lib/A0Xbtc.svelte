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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-4.742c6.218 0 11.258-5.04 11.258-11.258 0-6.218-5.04-11.258-11.258-11.258C9.782 4.742 4.742 9.782 4.742 16c0 6.218 5.04 11.258 11.258 11.258zm0-.662c-5.852 0-10.596-4.744-10.596-10.596S10.148 5.404 16 5.404 26.596 10.148 26.596 16 21.852 26.596 16 26.596zm-1.91-2.464c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FF914D" fill-rule="nonzero"/><g fill="#FFF"><path d="M16 27.258c-6.218 0-11.258-5.04-11.258-11.258C4.742 9.782 9.782 4.742 16 4.742c6.218 0 11.258 5.04 11.258 11.258 0 6.218-5.04 11.258-11.258 11.258zm0-.662c5.852 0 10.596-4.744 10.596-10.596S21.852 5.404 16 5.404 5.404 10.148 5.404 16 10.148 26.596 16 26.596z"/><path d="M14.09 24.132c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z" fill-rule="nonzero"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FF914D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M16 26.258c-6.218 0-11.258-5.04-11.258-11.258C4.742 8.782 9.782 3.742 16 3.742c6.218 0 11.258 5.04 11.258 11.258 0 6.218-5.04 11.258-11.258 11.258zm0-.662c5.852 0 10.596-4.744 10.596-10.596S21.852 4.404 16 4.404 5.404 9.148 5.404 15 10.148 25.596 16 25.596z"/><path d="M14.09 23.132c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z" fill-rule="nonzero"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-4.742c6.218 0 11.258-5.04 11.258-11.258 0-6.218-5.04-11.258-11.258-11.258C9.782 4.742 4.742 9.782 4.742 16c0 6.218 5.04 11.258 11.258 11.258zm0-.662c-5.852 0-10.596-4.744-10.596-10.596S10.148 5.404 16 5.404 26.596 10.148 26.596 16 21.852 26.596 16 26.596zm-1.91-2.464c.248-.102 1.218-.85 2.155-1.655a51.685 51.685 0 003.348-3.113c1.026-1.026 1.407-1.467 1.47-1.695.222-.801-2.205-9.606-2.699-9.795-.301-.116-2.993 2.123-5.377 4.467-1.398 1.374-1.785 1.831-1.815 2.13-.02.231.06.81.209 1.496.593 2.722 1.672 6.483 2.218 7.718.229.524.255.547.49.447z" fill="#FFF"/>';
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
  export let ariaLabel = '0xbtc';
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
@prop export let ariaLabel = '0xbtc';
-->
