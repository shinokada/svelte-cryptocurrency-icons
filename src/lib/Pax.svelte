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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.603 6.912c-2.142-1.509-4.019-1.012-5.647.515h-.002l-.285-.006c-5.57-.045-3.936 4.199-5.83 8.51-2.18 4.96.175 6.904 3.76 7.539l.194.033.208.237a6.71 6.71 0 002.004 1.51c5.343 2.61 5.68-2.237 11.333-4.696 3.175-1.38 3.186-4.08 1.72-6.572l-.018.045.017-.045-.18-.292c.063.097.123.194.18.292.962-2.738.515-4.889-1.591-5.28-2.315-.426-4.125-.563-5.863-1.79zm-5.507 4.432c2.77-1.99 6.325-1.204 7.62 1.653 1.264 2.788.914 6.007-1.644 7.667a5.493 5.493 0 01-7.62-1.655c-1.65-2.573-.834-5.886 1.644-7.665z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#398260" cx="16" cy="16" r="16"/><path d="M18.603 6.912c1.738 1.227 3.548 1.364 5.863 1.79 2.106.391 2.553 2.542 1.591 5.28a9.384 9.384 0 00-.18-.292l.18.292-.017.045.017-.045c1.467 2.492 1.456 5.191-1.719 6.572-5.653 2.46-5.99 7.305-11.333 4.697A6.71 6.71 0 0111 23.74l-.208-.237-.193-.033c-3.586-.635-5.94-2.579-3.762-7.539 1.927-4.383.206-8.696 6.116-8.504h.002c1.628-1.527 3.505-2.024 5.647-.515zm-5.507 4.432c-2.478 1.779-3.294 5.092-1.644 7.665a5.493 5.493 0 007.62 1.655c2.558-1.66 2.908-4.88 1.644-7.667-1.295-2.857-4.85-3.642-7.62-1.653z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#398260" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M18.603 5.912c1.738 1.227 3.548 1.364 5.863 1.79 2.106.391 2.553 2.542 1.591 5.28a9.384 9.384 0 00-.18-.292l.18.292-.017.045.017-.045c1.467 2.492 1.456 5.191-1.719 6.572-5.653 2.46-5.99 7.305-11.333 4.697A6.71 6.71 0 0111 22.74l-.208-.237-.193-.033c-3.586-.635-5.94-2.579-3.762-7.539 1.927-4.383.206-8.696 6.116-8.504h.002c1.628-1.527 3.505-2.024 5.647-.515zm-5.507 4.432c-2.478 1.779-3.294 5.092-1.644 7.665a5.493 5.493 0 007.62 1.655c2.558-1.66 2.908-4.88 1.644-7.667-1.295-2.857-4.85-3.642-7.62-1.653z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.603 6.912c-2.142-1.509-4.019-1.012-5.647.515h-.002l-.285-.006c-5.57-.045-3.936 4.199-5.83 8.51-2.18 4.96.175 6.904 3.76 7.539l.194.033.208.237a6.71 6.71 0 002.004 1.51c5.343 2.61 5.68-2.237 11.333-4.696 3.175-1.38 3.186-4.08 1.72-6.572l-.018.045.017-.045-.18-.292c.063.097.123.194.18.292.962-2.738.515-4.889-1.591-5.28-2.315-.426-4.125-.563-5.863-1.79zm-5.507 4.432c2.77-1.99 6.325-1.204 7.62 1.653 1.264 2.788.914 6.007-1.644 7.667a5.493 5.493 0 01-7.62-1.655c-1.65-2.573-.834-5.886 1.644-7.665z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'pax';
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
@prop export let ariaLabel = 'pax';
-->
