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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.378-27c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0012.622 27c3.87 0 7.17-2.976 7.57-6.807 3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0019.378 5zm5.836 8.476a5.93 5.93 0 01-4.97 4.97v-4.97h4.97zM6.786 18.524a5.93 5.93 0 014.97-4.983v4.97h-4.97v.013zm11.673 1.72a5.895 5.895 0 01-5.837 5.035 5.894 5.894 0 01-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895 5.895 0 015.837-5.035 5.894 5.894 0 015.836 5.034z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#00DCFA"/><path d="M19.378 5c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0012.622 27c3.87 0 7.17-2.976 7.57-6.807 3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0019.378 5zm5.836 8.476a5.93 5.93 0 01-4.97 4.97v-4.97h4.97zM6.786 18.524a5.93 5.93 0 014.97-4.983v4.97h-4.97v.013zm11.673 1.72a5.895 5.895 0 01-5.837 5.035 5.894 5.894 0 01-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895 5.895 0 015.837-5.035 5.894 5.894 0 015.836 5.034z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00DCFA" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M19.07 5c-3.517 0-6.505 2.706-6.882 6.188C8.706 11.565 6 14.553 6 18.071A6.934 6.934 0 0012.93 25c3.517 0 6.517-2.706 6.882-6.188C23.294 18.435 26 15.447 26 11.929A6.934 6.934 0 0019.07 5zm5.306 7.706a5.392 5.392 0 01-4.517 4.518v-4.518h4.517zM7.624 17.294a5.392 5.392 0 014.517-4.53v4.518H7.624v.012zm10.611 1.565a5.359 5.359 0 01-5.306 4.576 5.358 5.358 0 01-5.305-4.576h10.611zm.06-6.153v4.576h-4.59v-4.576h4.59zm6.081-1.565H13.765a5.359 5.359 0 015.306-4.576 5.358 5.358 0 015.305 4.576z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.378-27c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0012.622 27c3.87 0 7.17-2.976 7.57-6.807 3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0019.378 5zm5.836 8.476a5.93 5.93 0 01-4.97 4.97v-4.97h4.97zM6.786 18.524a5.93 5.93 0 014.97-4.983v4.97h-4.97v.013zm11.673 1.72a5.895 5.895 0 01-5.837 5.035 5.894 5.894 0 01-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035h5.048zm6.69-1.72H13.541a5.895 5.895 0 015.837-5.035 5.894 5.894 0 015.836 5.034z" fill="#FFF"/>';
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
  export let ariaLabel = 'gusd';
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
@prop export let ariaLabel = 'gusd';
-->
