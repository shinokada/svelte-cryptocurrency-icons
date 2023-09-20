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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.984-14.369h-4.928l-.88-2.64h5.8a.748.748 0 100-1.496H18.7l-2.517-7.673a1.074 1.074 0 00-2.12-.07l-6.02 18.303c-.016.1-.016.2 0 .3a1.012 1.012 0 001.989.246l5.051-15.4 1.443 4.294h-1.25a.748.748 0 100 1.496h1.76l.88 2.64h-2.64a.748.748 0 100 1.496h3.16l1.425 4.224h-7.559a1.056 1.056 0 100 2.112h8.941c.554 0 1.003-.449 1.003-1.003a1.03 1.03 0 00-.097-.44l-1.61-4.893h4.4a.748.748 0 100-1.496h.044z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FEC807" fill-rule="nonzero"/><path d="M24.984 17.631h-4.928l-.88-2.64h5.8a.748.748 0 100-1.496H18.7l-2.517-7.673a1.074 1.074 0 00-2.12-.07l-6.02 18.303c-.016.1-.016.2 0 .3a1.012 1.012 0 001.989.246l5.051-15.4 1.443 4.294h-1.25a.748.748 0 100 1.496h1.76l.88 2.64h-2.64a.748.748 0 100 1.496h3.16l1.425 4.224h-7.559a1.056 1.056 0 100 2.112h8.941c.554 0 1.003-.449 1.003-1.003a1.03 1.03 0 00-.097-.44l-1.61-4.893h4.4a.748.748 0 100-1.496h.044z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FEC807" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M25.212 16.012h-4.704l-.84-2.52h5.536a.714.714 0 000-1.428h-5.99l-2.402-7.325a1.025 1.025 0 00-2.024-.067L9.042 22.144a.899.899 0 000 .285.966.966 0 001.898.235l4.822-14.7 1.378 4.1h-1.193a.714.714 0 100 1.428h1.68l.84 2.52h-2.52a.714.714 0 000 1.428h3.015l1.361 4.032h-7.215a1.008 1.008 0 000 2.016h8.534a.958.958 0 00.958-.958.983.983 0 00-.093-.42l-1.537-4.67h4.2a.714.714 0 000-1.428h.042z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.984-14.369h-4.928l-.88-2.64h5.8a.748.748 0 100-1.496H18.7l-2.517-7.673a1.074 1.074 0 00-2.12-.07l-6.02 18.303c-.016.1-.016.2 0 .3a1.012 1.012 0 001.989.246l5.051-15.4 1.443 4.294h-1.25a.748.748 0 100 1.496h1.76l.88 2.64h-2.64a.748.748 0 100 1.496h3.16l1.425 4.224h-7.559a1.056 1.056 0 100 2.112h8.941c.554 0 1.003-.449 1.003-1.003a1.03 1.03 0 00-.097-.44l-1.61-4.893h4.4a.748.748 0 100-1.496h.044z" fill="#FFF"/>';
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
  export let ariaLabel = 'add';
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
@prop export let ariaLabel = 'add';
-->
