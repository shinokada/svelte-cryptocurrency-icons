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
    '<path fill-rule="evenodd" d="M10.618 31.072c3.323-.561 7.186-2.1 10.933-4.533 5.432-3.528 9.244-8.042 10.398-11.82.034.422.051.85.051 1.281 0 8.837-7.163 16-16 16-1.888 0-3.7-.327-5.382-.928zM2.005 23.76A15.928 15.928 0 010 16C0 7.163 7.163 0 16 0c6.12 0 11.437 3.435 14.128 8.483-3.574-2.143-10.902-.705-17.836 3.798a34.973 34.973 0 00-4.105 3.11A2 2 0 005.4 18.2c-1.623 1.885-2.789 3.795-3.394 5.56zm3.75-5.195a2 2 0 002.881-2.716c.54-.423 1.114-.833 1.717-1.225 5.442-3.534 11.245-4.256 12.962-1.613 1.716 2.643-1.304 7.65-6.746 11.185-5.442 3.534-11.245 4.256-12.961 1.613-1.136-1.75-.197-4.536 2.146-7.244z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#4099CD"/><path fill="#FFF" d="M2.005 23.76c.605-1.764 1.771-3.674 3.395-5.56a2 2 0 012.788-2.81 34.973 34.973 0 014.104-3.109c6.934-4.503 14.262-5.94 17.836-3.798a15.9 15.9 0 011.821 6.236c-1.154 3.778-4.966 8.292-10.398 11.82-3.747 2.433-7.61 3.972-10.933 4.533a16.052 16.052 0 01-8.613-7.312zm3.75-5.195c-2.344 2.708-3.283 5.494-2.147 7.244 1.716 2.643 7.52 1.92 12.961-1.613 5.442-3.534 8.462-8.542 6.746-11.185-1.717-2.643-7.52-1.92-12.962 1.613-.603.392-1.177.802-1.717 1.225a2 2 0 01-2.881 2.716z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="112.5%" height="115.8%" x="-6.2%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="15" cy="15" r="15"/><path id="e" d="M1.88 22.275c.567-1.654 1.66-3.444 3.182-5.213a1.875 1.875 0 012.613-2.634 32.787 32.787 0 013.849-2.914c6.5-4.222 13.37-5.57 16.72-3.561a14.907 14.907 0 011.709 5.846c-1.082 3.542-4.656 7.774-9.749 11.08-3.513 2.282-7.134 3.725-10.25 4.251a15.049 15.049 0 01-8.075-6.855zm3.515-4.87c-2.197 2.539-3.078 5.15-2.013 6.79 1.61 2.479 7.05 1.802 12.152-1.511 5.101-3.314 7.933-8.008 6.323-10.486-1.609-2.478-7.05-1.801-12.15 1.512-.566.367-1.104.752-1.611 1.148a1.875 1.875 0 01-2.701 2.546z"/></defs><g fill="none" fill-rule="evenodd" transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4099CD" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="15" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M10.618 31.072c3.323-.561 7.186-2.1 10.933-4.533 5.432-3.528 9.244-8.042 10.398-11.82.034.422.051.85.051 1.281 0 8.837-7.163 16-16 16-1.888 0-3.7-.327-5.382-.928zM2.005 23.76A15.928 15.928 0 010 16C0 7.163 7.163 0 16 0c6.12 0 11.437 3.435 14.128 8.483-3.574-2.143-10.902-.705-17.836 3.798a34.973 34.973 0 00-4.105 3.11A2 2 0 005.4 18.2c-1.623 1.885-2.789 3.795-3.394 5.56zm3.75-5.195a2 2 0 002.881-2.716c.54-.423 1.114-.833 1.717-1.225 5.442-3.534 11.245-4.256 12.962-1.613 1.716 2.643-1.304 7.65-6.746 11.185-5.442 3.534-11.245 4.256-12.961 1.613-1.136-1.75-.197-4.536 2.146-7.244z"/>';
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
  export let ariaLabel = 'nxs';
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
@prop export let ariaLabel = 'nxs';
-->
