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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.103-27.602v-.007L20.745 18a.3.3 0 01-.198.419l-3.594.99c-.293.073-.227.557.074.572l9.159 1.826c.176.029.352.088.535.088A31069.52 31069.52 0 0016.425 4.148c-.146-.315-.674-.08-.528.25zm-.528.03C11.918 10.388 8.461 16.344 5 22.298v.17c.073.102.161.205.293.205.184-.022.279-.198.389-.315l9.445-11.096c.096-.14.308-.227.455-.095.91.968 1.79 1.965 2.713 2.933.176.19.536-.022.44-.278-1.078-3.08-2.192-6.16-3.278-9.24a1.05 1.05 0 00-.088-.154zM12.48 14.995c-2.207 2.625-4.4 5.28-6.6 7.92h20.98l.14-.147v-.205c-.073-.059-.14-.132-.235-.147-4.942-.99-9.885-2.016-14.828-3.006-.154-.008-.3-.154-.242-.316.382-1.268.77-2.537 1.137-3.813.059-.213-.176-.337-.352-.286z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><g fill="#FFF"><path d="M15.897 4.398c-.146-.33.382-.564.528-.25 3.432 5.912 6.864 11.827 10.296 17.748-.183 0-.359-.06-.535-.088l-9.16-1.826c-.3-.015-.366-.5-.073-.572l3.594-.99a.3.3 0 00.198-.418L15.897 4.39v.007z"/><path d="M15.37 4.428c.033.048.062.1.087.154 1.086 3.08 2.2 6.16 3.278 9.24.096.256-.264.469-.44.278-.924-.968-1.804-1.965-2.713-2.933-.147-.132-.36-.044-.455.095L5.682 22.358c-.11.117-.205.293-.389.315-.132 0-.22-.103-.293-.205v-.17c3.461-5.954 6.918-11.91 10.37-17.87z"/><path d="M12.48 14.995c.176-.051.41.073.352.286-.367 1.276-.755 2.545-1.137 3.813-.058.162.088.308.242.316 4.943.99 9.886 2.016 14.828 3.006.096.015.162.088.235.147v.205l-.14.147H5.88c2.2-2.64 4.393-5.295 6.6-7.92z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M15.907 5.362c-.134-.3.346-.513.48-.227 3.12 5.374 6.24 10.751 9.36 16.134-.167 0-.327-.054-.487-.08l-8.327-1.66c-.273-.014-.333-.454-.066-.52l3.266-.9a.272.272 0 00.18-.38L15.907 5.355v.007z"/><path d="M15.427 5.389c.03.044.057.09.08.14.986 2.8 2 5.6 2.98 8.4.086.233-.24.426-.4.253-.84-.88-1.64-1.787-2.467-2.667-.133-.12-.327-.04-.413.087L6.62 21.689c-.1.106-.187.266-.353.286-.12 0-.2-.093-.267-.186v-.154c3.147-5.413 6.289-10.829 9.427-16.246z"/><path d="M12.8 14.995c.16-.046.373.067.32.26-.333 1.16-.687 2.314-1.033 3.467-.054.147.08.28.22.287 4.493.9 8.986 1.833 13.48 2.733.086.013.146.08.213.133v.187l-.127.133H6.8c2-2.4 3.993-4.813 6-7.2z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.103-27.602v-.007L20.745 18a.3.3 0 01-.198.419l-3.594.99c-.293.073-.227.557.074.572l9.159 1.826c.176.029.352.088.535.088A31069.52 31069.52 0 0016.425 4.148c-.146-.315-.674-.08-.528.25zm-.528.03C11.918 10.388 8.461 16.344 5 22.298v.17c.073.102.161.205.293.205.184-.022.279-.198.389-.315l9.445-11.096c.096-.14.308-.227.455-.095.91.968 1.79 1.965 2.713 2.933.176.19.536-.022.44-.278-1.078-3.08-2.192-6.16-3.278-9.24a1.05 1.05 0 00-.088-.154zM12.48 14.995c-2.207 2.625-4.4 5.28-6.6 7.92h20.98l.14-.147v-.205c-.073-.059-.14-.132-.235-.147-4.942-.99-9.885-2.016-14.828-3.006-.154-.008-.3-.154-.242-.316.382-1.268.77-2.537 1.137-3.813.059-.213-.176-.337-.352-.286z" fill="#FFF"/>';
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
  export let ariaLabel = 'ctxc';
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
@prop export let ariaLabel = 'ctxc';
-->
