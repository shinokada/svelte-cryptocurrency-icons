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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.113 18.16l-3.639 7.542s-.264.543.662.611c.926.136 2.448.476 3.242-.34.794-.747 3.903-5.911 3.903-5.911l-4.168-1.903zm7.277-.612l-3.043 2.514 1.39 2.786s.33 1.087 1.323-.136c.926-1.223 1.323-1.427 1.256-2.174-.066-.748-.264-2.515-.926-2.99zm-7.674-4.485l-8.997.612-.02.004c-.096.025-.502.183-.443 1.083l.01.186.02.373c.07 1.18.168 2.295.168 2.295s-.066.611 1.125.68c.36.02 1.27.034 2.369.037h.786c1.719-.006 3.665-.039 4.68-.119l.253-.023c.266-.028.427-.061.446-.1l-.397-5.028zm4.896-5.504a13.078 13.078 0 01-1.191 3.33l3.639 2.377.33 4.282 1.522-.204s.397-.136.33-.883l-.071-.903-.027-.335-.1-1.28c.004-.044.012-.412-.86-.54-.627-.114-.904-.143-1.027-.147H23.1a.14.14 0 00-.04.008l.09-.254c1.264-3.889-2.538-5.45-2.538-5.45zm-1.324 3.33S15.054 5.113 13.93 5.52a76.9 76.9 0 01-1.285.476l-.36.13c-.896.323-1.73.617-1.73.617l5.227 6.251z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#000" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M10.556 6.744l5.226 6.251 3.506-2.106S15.054 5.113 13.93 5.52a186.291 186.291 0 01-3.374 1.223zm8.864 4.145s.795-1.427 1.192-3.33c0 0 3.969 1.63 2.447 5.708l-3.638-2.378z"/><path d="M23.06 13.267l.33 4.28 1.522-.203s.397-.136.33-.883c-.066-.816-.198-2.515-.198-2.515s.066-.407-.86-.543c-1.125-.204-1.125-.136-1.125-.136zm.33 4.281l-3.043 2.514 1.39 2.786s.33 1.087 1.323-.136c.926-1.223 1.323-1.427 1.256-2.174-.066-.748-.264-2.515-.926-2.99zm-3.11 2.514l-4.167-1.903-3.639 7.543s-.264.543.662.611c.926.136 2.448.476 3.242-.34.794-.747 3.903-5.911 3.903-5.911zm-4.167-1.971l-.397-5.028-8.997.612s-.53.068-.463 1.087c.066 1.359.198 2.854.198 2.854s-.066.611 1.125.68c1.19.067 8.402.067 8.534-.205z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#000" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M10.556 5.744l5.226 6.251 3.506-2.106S15.054 4.113 13.93 4.52a186.291 186.291 0 01-3.374 1.223zm8.864 4.145s.795-1.427 1.192-3.33c0 0 3.969 1.63 2.447 5.708l-3.638-2.378z"/><path d="M23.06 12.267l.33 4.28 1.522-.203s.397-.136.33-.883c-.066-.816-.198-2.515-.198-2.515s.066-.407-.86-.543c-1.125-.204-1.125-.136-1.125-.136zm.33 4.281l-3.043 2.514 1.39 2.786s.33 1.087 1.323-.136c.926-1.223 1.323-1.427 1.256-2.174-.066-.748-.264-2.515-.926-2.99zm-3.11 2.514l-4.167-1.903-3.639 7.543s-.264.543.662.611c.926.136 2.448.476 3.242-.34.794-.747 3.903-5.911 3.903-5.911zm-4.167-1.971l-.397-5.028-8.997.612s-.53.068-.463 1.087c.066 1.359.198 2.854.198 2.854s-.066.611 1.125.68c1.19.067 8.402.067 8.534-.205z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.113 18.16l-3.639 7.542s-.264.543.662.611c.926.136 2.448.476 3.242-.34.794-.747 3.903-5.911 3.903-5.911l-4.168-1.903zm7.277-.612l-3.043 2.514 1.39 2.786s.33 1.087 1.323-.136c.926-1.223 1.323-1.427 1.256-2.174-.066-.748-.264-2.515-.926-2.99zm-7.674-4.485l-8.997.612-.02.004c-.096.025-.502.183-.443 1.083l.01.186.02.373c.07 1.18.168 2.295.168 2.295s-.066.611 1.125.68c.36.02 1.27.034 2.369.037h.786c1.719-.006 3.665-.039 4.68-.119l.253-.023c.266-.028.427-.061.446-.1l-.397-5.028zm4.896-5.504a13.078 13.078 0 01-1.191 3.33l3.639 2.377.33 4.282 1.522-.204s.397-.136.33-.883l-.071-.903-.027-.335-.1-1.28c.004-.044.012-.412-.86-.54-.627-.114-.904-.143-1.027-.147H23.1a.14.14 0 00-.04.008l.09-.254c1.264-3.889-2.538-5.45-2.538-5.45zm-1.324 3.33S15.054 5.113 13.93 5.52a76.9 76.9 0 01-1.285.476l-.36.13c-.896.323-1.73.617-1.73.617l5.227 6.251z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'qnt';
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
@prop export let ariaLabel = 'qnt';
-->
