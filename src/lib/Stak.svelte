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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.566-27c.181 1.472.26 2.966.385 4.438.072.445.11.896.113 1.347l3.827 3.815c-1.676 2.4-3.397 4.789-5.072 7.2.17 1.925.317 3.85.51 5.774l11.57-16.393h-5.14c-2.06-2.06-4.11-4.132-6.182-6.181h-.011zM4.011 21.46H4v.046c1.72-.034 3.442 0 5.162-.023l6.147 6.159h.023c-.192-1.936-.34-3.884-.51-5.808-1.279-1.257-2.535-2.536-3.792-3.792 1.687-2.4 3.385-4.778 5.072-7.19l-.487-5.795c-3.872 5.468-7.72 10.947-11.604 16.403z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#F2941B"/><path d="M16.566 5h.011c2.072 2.05 4.121 4.12 6.181 6.181h5.14l-11.57 16.393c-.192-1.925-.34-3.85-.51-5.774 1.676-2.411 3.397-4.8 5.073-7.2l-3.827-3.815a8.889 8.889 0 00-.113-1.347c-.125-1.472-.204-2.966-.385-4.438zM4.011 21.46c3.883-5.456 7.732-10.935 11.604-16.403l.487 5.796c-1.687 2.411-3.385 4.789-5.072 7.189 1.257 1.256 2.513 2.535 3.793 3.792.17 1.924.317 3.872.51 5.808h-.024l-6.147-6.159c-1.72.023-3.441-.011-5.162.023v-.046h.011z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F2941B" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><path d="M16.519 5h.01c1.9 1.878 3.778 3.777 5.666 5.666h4.712L16.3 25.692c-.176-1.764-.311-3.528-.467-5.292 1.536-2.21 3.113-4.4 4.649-6.6l-3.508-3.497a8.148 8.148 0 00-.103-1.235c-.114-1.35-.187-2.719-.353-4.068zM5.01 20.089c3.56-5.002 7.088-10.025 10.637-15.037l.446 5.313c-1.546 2.21-3.102 4.39-4.649 6.59 1.152 1.152 2.304 2.324 3.477 3.476.155 1.764.29 3.55.467 5.324h-.021l-5.635-5.646c-1.577.021-3.155-.01-4.732.021v-.041h.01z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.566-27c.181 1.472.26 2.966.385 4.438.072.445.11.896.113 1.347l3.827 3.815c-1.676 2.4-3.397 4.789-5.072 7.2.17 1.925.317 3.85.51 5.774l11.57-16.393h-5.14c-2.06-2.06-4.11-4.132-6.182-6.181h-.011zM4.011 21.46H4v.046c1.72-.034 3.442 0 5.162-.023l6.147 6.159h.023c-.192-1.936-.34-3.884-.51-5.808-1.279-1.257-2.535-2.536-3.792-3.792 1.687-2.4 3.385-4.778 5.072-7.19l-.487-5.795c-3.872 5.468-7.72 10.947-11.604 16.403z" fill="#FFF"/>';
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
  export let ariaLabel = 'stak';
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
@prop export let ariaLabel = 'stak';
-->
