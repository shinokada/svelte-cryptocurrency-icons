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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26C10.48 6 6 10.48 6 16c0 .133.013.26.02.393h4.693l2.267-3.9L16 16.82l3.013-4.327 2.267 3.9h4.693c.007-.133.02-.26.02-.393C26 10.48 21.52 6 16 6zm6.893 9.187C22.487 11.74 19.553 9.06 16 9.06s-6.487 2.687-6.893 6.127H7.893C8.3 11.073 11.78 7.853 16 7.853c4.22 0 7.693 3.22 8.107 7.334h-1.214zm-3.966-.454L16 18.933l-2.927-4.2-1.666 2.867H6.14C6.907 22.36 11.02 26 16 26c4.98 0 9.093-3.64 9.86-8.407h-5.267l-1.666-2.86zm3.42 4.067h1.293c-1.147 3.113-4.133 5.347-7.64 5.347-3.507 0-6.493-2.234-7.64-5.347h1.293c1.08 2.433 3.514 4.14 6.347 4.14 2.833 0 5.267-1.707 6.347-4.14z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#47B95C"/><g fill="#FFF"><path d="M16 6C10.48 6 6 10.48 6 16c0 .133.013.26.02.393h4.693l2.267-3.9L16 16.82l3.013-4.327 2.267 3.9h4.693c.007-.133.02-.26.02-.393C26 10.48 21.52 6 16 6zm6.893 9.187C22.487 11.74 19.553 9.06 16 9.06s-6.487 2.687-6.893 6.127H7.893C8.3 11.073 11.78 7.853 16 7.853c4.22 0 7.693 3.22 8.107 7.334h-1.214z"/><path d="M18.927 14.733L16 18.933l-2.927-4.2-1.666 2.867H6.14C6.907 22.36 11.02 26 16 26c4.98 0 9.093-3.64 9.86-8.407h-5.267l-1.666-2.86zm3.42 4.067h1.293c-1.147 3.113-4.133 5.347-7.64 5.347-3.507 0-6.493-2.234-7.64-5.347h1.293c1.08 2.433 3.514 4.14 6.347 4.14 2.833 0 5.267-1.707 6.347-4.14z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#47B95C" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M16 6c-4.968 0-9 4.032-9 9 0 .12.012.234.018.354h4.224l2.04-3.51L16 15.738l2.712-3.894 2.04 3.51h4.224c.006-.12.018-.234.018-.354C25 10.032 20.968 6 16 6zm6.204 8.268c-.366-3.102-3.006-5.514-6.204-5.514s-5.838 2.418-6.204 5.514H8.704A7.338 7.338 0 0116 7.668c3.798 0 6.924 2.898 7.296 6.6h-1.092z"/><path d="M18.634 13.86L16 17.64l-2.634-3.78-1.5 2.58h-4.74C7.816 20.724 11.518 24 16 24s8.184-3.276 8.874-7.566h-4.74l-1.5-2.574zm3.078 3.66h1.164c-1.032 2.802-3.72 4.812-6.876 4.812s-5.844-2.01-6.876-4.812h1.164A6.254 6.254 0 0016 21.246c2.55 0 4.74-1.536 5.712-3.726z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26C10.48 6 6 10.48 6 16c0 .133.013.26.02.393h4.693l2.267-3.9L16 16.82l3.013-4.327 2.267 3.9h4.693c.007-.133.02-.26.02-.393C26 10.48 21.52 6 16 6zm6.893 9.187C22.487 11.74 19.553 9.06 16 9.06s-6.487 2.687-6.893 6.127H7.893C8.3 11.073 11.78 7.853 16 7.853c4.22 0 7.693 3.22 8.107 7.334h-1.214zm-3.966-.454L16 18.933l-2.927-4.2-1.666 2.867H6.14C6.907 22.36 11.02 26 16 26c4.98 0 9.093-3.64 9.86-8.407h-5.267l-1.666-2.86zm3.42 4.067h1.293c-1.147 3.113-4.133 5.347-7.64 5.347-3.507 0-6.493-2.234-7.64-5.347h1.293c1.08 2.433 3.514 4.14 6.347 4.14 2.833 0 5.267-1.707 6.347-4.14z" fill="#FFF"/>';
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
  export let ariaLabel = 'msr';
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
@prop export let ariaLabel = 'msr';
-->
