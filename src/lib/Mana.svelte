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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.012 25.212H9.988A10.97 10.97 0 0016 27c2.216 0 4.285-.66 6.012-1.788zM16 5C9.922 5 5 9.922 5 16c0 1.408.264 2.75.748 3.988l7.045-8.454 5.572 6.688 1.392-1.672L24.8 22.6h-1.073l-3.965-4.763V22.6H7.2a11.511 11.511 0 001.683 1.787h14.234A10.976 10.976 0 0027 16c0-6.078-4.922-11-11-11zm-3.207 7.821v7.167H5.748c.242.627.545 1.22.891 1.787h8.767l2.425-2.91-5.037-6.044zM19.756 9.4a2.751 2.751 0 010 5.5 2.751 2.751 0 010-5.5zm-6.963-1.991a1.376 1.376 0 110 2.751 1.376 1.376 0 010-2.751z"/>';
  let svgcolor =
    '<defs><filter id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g fill="none" fill-rule="evenodd"><circle fill="#FF2D55" fill-rule="nonzero" cx="16" cy="16" r="16"/><g filter="url(#a)"><path d="M12.793 11.534l-7.045 8.454A10.912 10.912 0 015 16C5 9.923 9.923 5 16 5c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H8.883A11.511 11.511 0 017.2 22.6h12.562v-4.763l3.965 4.763H24.8l-5.043-6.05-1.392 1.672-5.571-6.688zM19.758 9.4a2.751 2.751 0 000 5.5 2.751 2.751 0 000-5.5zm-6.963-1.991a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751zM9.989 25.212h12.023A10.97 10.97 0 0116 27a10.97 10.97 0 01-6.011-1.788zm7.843-6.346l-2.426 2.909H6.639a11.056 11.056 0 01-.891-1.787h7.046V12.82l5.038 6.045z" fill="#16141A" fill-rule="nonzero"/></g></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-17%" y="-17%" width="134.1%" height="134.1%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FF2D55" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(5 4)"><path d="M7.793 6.534L.748 14.988A10.912 10.912 0 010 11C0 4.923 4.923 0 11 0c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H3.883A11.511 11.511 0 012.2 17.6h12.562v-4.763l3.965 4.763H19.8l-5.043-6.05-1.392 1.672-5.572-6.688zM14.758 4.4a2.751 2.751 0 000 5.5 2.751 2.751 0 000-5.5zM7.794 2.409a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751zM4.989 20.212h12.023A10.97 10.97 0 0111 22a10.97 10.97 0 01-6.011-1.788zm7.843-6.346l-2.426 2.909H1.639a11.056 11.056 0 01-.891-1.787h7.045V7.82l5.038 6.045z" fill="#16141A" fill-rule="nonzero"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.012 25.212H9.988A10.97 10.97 0 0016 27c2.216 0 4.285-.66 6.012-1.788zM16 5C9.922 5 5 9.922 5 16c0 1.408.264 2.75.748 3.988l7.045-8.454 5.572 6.688 1.392-1.672L24.8 22.6h-1.073l-3.965-4.763V22.6H7.2a11.511 11.511 0 001.683 1.787h14.234A10.976 10.976 0 0027 16c0-6.078-4.922-11-11-11zm-3.207 7.821v7.167H5.748c.242.627.545 1.22.891 1.787h8.767l2.425-2.91-5.037-6.044zM19.756 9.4a2.751 2.751 0 010 5.5 2.751 2.751 0 010-5.5zm-6.963-1.991a1.376 1.376 0 110 2.751 1.376 1.376 0 010-2.751z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'mana';
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
@prop export let ariaLabel = 'mana';
-->
