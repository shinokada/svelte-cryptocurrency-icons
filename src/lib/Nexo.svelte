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
    '<path d="M5 10.16l5.485 3.147v.012l10.923 6.31v-6.313L15.94 10.16l5.467 3.157-10.732-6.19h.009a.42.42 0 00-.42 0L5 10.158zm5.485 3.167v6.319l10.711 6.18a.44.44 0 00.42 0l5.265-3.034-2.993-1.73-2.48-1.427v-.006.006l-10.923-6.308zm13.403 7.735l3.004 1.73V10.403a.42.42 0 00-.22-.367L21.408 7v12.63l2.48 1.432zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036v-6.305l-.02-.011v-6.32l.02.012v-.008l-.02-.012v.008L5 10.16z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#1A4199"/><g fill="#FFF"><path d="M10.676 7.125l10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 01.42 0" opacity=".7"/><path opacity=".9" d="M21.408 7l-5.467 3.16 5.467 3.156z"/><path d="M21.408 7l5.264 3.036a.42.42 0 01.22.367v12.389l-5.484-3.157V7z"/><path d="M26.881 22.792l-5.264 3.033a.44.44 0 01-.42 0l-10.732-6.19v-6.328l16.416 9.485z" opacity=".9"/><path d="M5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036V13.307L5 10.16z" opacity=".6"/><path opacity=".7" d="M10.476 25.95l5.465-3.158-5.465-3.157z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" offset="0%"/><stop offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1A4199" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M11.16 7.114l9.756 5.628v5.744L6 9.872l4.786-2.758a.382.382 0 01.382 0" opacity=".7"/><path opacity=".9" d="M20.916 7l-4.97 2.872 4.97 2.87z"/><path d="M20.916 7l4.786 2.76c.123.066.2.194.2.334v11.262l-4.986-2.87V7z"/><path d="M25.892 21.356l-4.786 2.758a.4.4 0 01-.382 0l-9.756-5.628v-5.752l14.924 8.622z" opacity=".9"/><path d="M6 9.872v11.262c0 .14.077.268.2.334l4.786 2.76V12.734L6 9.872z" opacity=".6"/><path opacity=".7" d="M10.978 24.228l4.968-2.872-4.968-2.87z"/></g></g>';
  let svgwhite =
    '<path d="M5 10.16l5.485 3.147v.012l10.923 6.31v-6.313L15.94 10.16l5.467 3.157-10.732-6.19h.009a.42.42 0 00-.42 0L5 10.158zm5.485 3.167v6.319l10.711 6.18a.44.44 0 00.42 0l5.265-3.034-2.993-1.73-2.48-1.427v-.006.006l-10.923-6.308zm13.403 7.735l3.004 1.73V10.403a.42.42 0 00-.22-.367L21.408 7v12.63l2.48 1.432zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036v-6.305l-.02-.011v-6.32l.02.012v-.008l-.02-.012v.008L5 10.16z" fill="#FFF"/>';
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
  export let ariaLabel = 'nexo';
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
@prop export let ariaLabel = 'nexo';
-->
