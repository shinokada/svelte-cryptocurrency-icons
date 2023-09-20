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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.696-16.268c-.55 0-1.021.333-1.212.805H20.48a.482.482 0 00-.42.243l-.785 1.396-.582-4.915c-.065-.55-.88-.556-.954-.007l-1.014 7.523-.981-14.339c-.04-.573-.894-.59-.957-.018l-1.22 11.147-.849-4.67c-.09-.498-.813-.523-.939-.031l-.938 3.67H6.48c-.266 0-.481.211-.481.47s.215.47.48.47h4.736c.22 0 .412-.146.466-.355l.484-1.895 1.047 5.756c.098.535.892.508.95-.033l.991-9.054.935 13.667c.039.566.88.592.956.03l1.14-8.454.308 2.607c.054.455.673.574.899.173l1.372-2.441h3.72c.19.471.662.805 1.212.805.72 0 1.304-.571 1.304-1.275s-.584-1.275-1.304-1.275z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#8d181b" r="16"/><path d="M25.696 15.732c.72 0 1.304.57 1.304 1.275s-.584 1.275-1.304 1.275c-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756-.484 1.895a.479.479 0 01-.466.356H6.48c-.265 0-.48-.21-.48-.47s.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 6.42c.063-.571.918-.555.957.018l.981 14.34 1.014-7.524c.074-.549.889-.543.954.007l.582 4.915.784-1.396a.482.482 0 01.421-.243h4.004a1.304 1.304 0 011.212-.805z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="116.7%" height="117.5%" x="-8.3%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M25.696 14.732c.72 0 1.304.57 1.304 1.275 0 .704-.584 1.275-1.304 1.275-.55 0-1.021-.334-1.212-.805h-3.72l-1.372 2.44c-.226.402-.845.283-.899-.172l-.308-2.607-1.14 8.454c-.076.562-.917.536-.956-.03l-.935-13.667-.99 9.054c-.06.54-.853.568-.95.033l-1.048-5.756-.484 1.895a.479.479 0 01-.466.356H6.48a.475.475 0 01-.48-.47c0-.26.215-.47.48-.47h4.36l.939-3.671c.126-.492.848-.467.94.032l.849 4.669L14.787 5.42c.063-.571.918-.555.957.018l.981 14.34 1.014-7.524c.074-.549.889-.543.954.007l.582 4.915.784-1.396a.482.482 0 01.421-.243h4.004a1.304 1.304 0 011.212-.805z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#8D181B" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.696-16.268c-.55 0-1.021.333-1.212.805H20.48a.482.482 0 00-.42.243l-.785 1.396-.582-4.915c-.065-.55-.88-.556-.954-.007l-1.014 7.523-.981-14.339c-.04-.573-.894-.59-.957-.018l-1.22 11.147-.849-4.67c-.09-.498-.813-.523-.939-.031l-.938 3.67H6.48c-.266 0-.481.211-.481.47s.215.47.48.47h4.736c.22 0 .412-.146.466-.355l.484-1.895 1.047 5.756c.098.535.892.508.95-.033l.991-9.054.935 13.667c.039.566.88.592.956.03l1.14-8.454.308 2.607c.054.455.673.574.899.173l1.372-2.441h3.72c.19.471.662.805 1.212.805.72 0 1.304-.571 1.304-1.275s-.584-1.275-1.304-1.275z" fill="#fff"/>';
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
  export let ariaLabel = 'rpx';
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
@prop export let ariaLabel = 'rpx';
-->
