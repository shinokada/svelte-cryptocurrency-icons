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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.839-9.184h-.271V9.183h.345c.296 0 .581-.115.791-.32.21-.204.328-.482.328-.771 0-.603-.501-1.092-1.12-1.092h-1.556c-.313 0-.612.12-.833.336a1.136 1.136 0 00-.345.813v15.673c0 .312.127.612.354.833.226.22.533.345.854.345h1.453c.618 0 1.12-.489 1.12-1.092 0-.603-.502-1.091-1.12-1.092zm12.17-11.452a8.368 8.368 0 00-3.222-3.15c-1.369-.761-2.9-1.142-4.591-1.142h-.349c-.297 0-.581.115-.791.32-.21.204-.328.482-.328.772 0 .603.501 1.091 1.12 1.091h.296c1.227 0 2.343.29 3.347.866a6.372 6.372 0 012.376 2.372c.58 1.004.87 2.133.871 3.388 0 1.238-.286 2.36-.858 3.362-.573 1.004-1.205 1.935-2.191 2.503-.987.569-1.865 1.07-3.076 1.07h-.69c-.618 0-1.12.488-1.12 1.091S15.628 25 16.246 25h.567c1.709 0 3.088-.504 4.407-1.358 1.437-.93 2.312-1.955 3.099-3.294s1.182-2.835 1.182-4.492-.39-3.153-1.169-4.491z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#fec907" r="16"/><path d="M12.161 22.816c.618 0 1.12.49 1.12 1.092 0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 01-.354-.833V8.149c0-.305.124-.597.345-.813.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092 0 .29-.119.567-.329.772-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092 0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07.986-.568 1.618-1.499 2.19-2.503.573-1.003.86-2.124.86-3.362-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 00-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091 0-.29.119-.568.329-.772.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 013.223 3.15z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M12.161 21.816c.618 0 1.12.49 1.12 1.092 0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 01-.354-.833V7.149c0-.305.124-.597.345-.813.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092 0 .29-.119.567-.329.772-.21.204-.495.32-.791.32h-.345v13.632h.271zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491 0 1.657-.395 3.153-1.182 4.492-.787 1.34-1.662 2.365-3.099 3.294-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092 0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07.986-.568 1.618-1.499 2.19-2.503.573-1.003.86-2.124.86-3.362-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 00-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091 0-.29.119-.568.329-.772.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 013.223 3.15z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FEC907" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.839-9.184h-.271V9.183h.345c.296 0 .581-.115.791-.32.21-.204.328-.482.328-.771 0-.603-.501-1.092-1.12-1.092h-1.556c-.313 0-.612.12-.833.336a1.136 1.136 0 00-.345.813v15.673c0 .312.127.612.354.833.226.22.533.345.854.345h1.453c.618 0 1.12-.489 1.12-1.092 0-.603-.502-1.091-1.12-1.092zm12.17-11.452a8.368 8.368 0 00-3.222-3.15c-1.369-.761-2.9-1.142-4.591-1.142h-.349c-.297 0-.581.115-.791.32-.21.204-.328.482-.328.772 0 .603.501 1.091 1.12 1.091h.296c1.227 0 2.343.29 3.347.866a6.372 6.372 0 012.376 2.372c.58 1.004.87 2.133.871 3.388 0 1.238-.286 2.36-.858 3.362-.573 1.004-1.205 1.935-2.191 2.503-.987.569-1.865 1.07-3.076 1.07h-.69c-.618 0-1.12.488-1.12 1.091S15.628 25 16.246 25h.567c1.709 0 3.088-.504 4.407-1.358 1.437-.93 2.312-1.955 3.099-3.294s1.182-2.835 1.182-4.492-.39-3.153-1.169-4.491z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'dew';
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
@prop export let ariaLabel = 'dew';
-->
