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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.514 7.5H7.5l.058 8.415.086 8.443 7.45.085 7.42.057v-1.983H9.81V9.483h12.704V7.5zm-4.042 6.148c0 1.87.982 2.692 3.667 3.06 1.645.199 2.194.624 2.05 1.587-.174 1.247-2.599 1.417-3.638.255-.491-.595-2.368-.793-2.368-.283 0 .793 1.01 2.068 1.877 2.436 1.27.51 3.35.51 4.62 0 1.876-.765 2.454-3.57 1.01-4.845-.317-.283-1.501-.708-2.627-.963-2.252-.51-2.945-1.077-2.31-1.842.577-.68 2.54-.595 2.974.114.26.396.693.566 1.472.566 1.01 0 1.097-.056.924-.651-.317-.992-1.3-1.87-2.425-2.182-2.8-.765-5.226.538-5.226 2.748z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#000" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M22.514 8.492v.991H9.81v13.034h12.704V24.5l-7.42-.057-7.45-.085-.086-8.443L7.5 7.5h15.014z"/><path d="M23.698 10.9c1.126.312 2.108 1.19 2.425 2.182.173.595.087.651-.924.651-.78 0-1.212-.17-1.472-.566-.433-.709-2.397-.794-2.974-.114-.635.765.058 1.332 2.31 1.842 1.126.255 2.31.68 2.627.963 1.444 1.275.866 4.08-1.01 4.845-1.27.51-3.35.51-4.62 0-.866-.368-1.877-1.643-1.877-2.436 0-.51 1.877-.312 2.368.283 1.04 1.162 3.464.992 3.638-.255.144-.963-.405-1.388-2.05-1.587-2.685-.368-3.667-1.19-3.667-3.06 0-2.21 2.425-3.513 5.226-2.748z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M22.514 7.492v.991H9.81v13.034h12.704V23.5l-7.42-.057-7.45-.085-.086-8.443L7.5 6.5h15.014z"/><path d="M23.698 9.9c1.126.312 2.108 1.19 2.425 2.182.173.595.087.651-.924.651-.78 0-1.212-.17-1.472-.566-.433-.709-2.397-.794-2.974-.114-.635.765.058 1.332 2.31 1.842 1.126.255 2.31.68 2.627.963 1.444 1.275.866 4.08-1.01 4.845-1.27.51-3.35.51-4.62 0-.866-.368-1.877-1.643-1.877-2.436 0-.51 1.877-.312 2.368.283 1.04 1.162 3.464.992 3.638-.255.144-.963-.405-1.388-2.05-1.587-2.685-.368-3.667-1.19-3.667-3.06 0-2.21 2.425-3.513 5.226-2.748z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm6.514 7.5H7.5l.058 8.415.086 8.443 7.45.085 7.42.057v-1.983H9.81V9.483h12.704V7.5zm-4.042 6.148c0 1.87.982 2.692 3.667 3.06 1.645.199 2.194.624 2.05 1.587-.174 1.247-2.599 1.417-3.638.255-.491-.595-2.368-.793-2.368-.283 0 .793 1.01 2.068 1.877 2.436 1.27.51 3.35.51 4.62 0 1.876-.765 2.454-3.57 1.01-4.845-.317-.283-1.501-.708-2.627-.963-2.252-.51-2.945-1.077-2.31-1.842.577-.68 2.54-.595 2.974.114.26.396.693.566 1.472.566 1.01 0 1.097-.056.924-.651-.317-.992-1.3-1.87-2.425-2.182-2.8-.765-5.226.538-5.226 2.748z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'skl';
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
@prop export let ariaLabel = 'skl';
-->
