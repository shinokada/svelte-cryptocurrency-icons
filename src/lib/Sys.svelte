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
    '<path d="M13.147 15.434a.11.11 0 01-.003.098.12.12 0 01-.157.047c-7.537-3.92 6.841-8.485 14.764-3.14.096.055.18.11.249.163-.081-.058-.166-.107-.249-.163-2.94-1.676-17.604-3.343-14.604 2.995m8.326 5.32c4.158-1.89.776-8.362-4.725-7.113a.118.118 0 01-.139-.085.11.11 0 01.041-.11c4.28-3.216 12.314 4.292 4.823 7.307M4 18.011c12.101 7.743 18.334.467 13.955-2.71l-.006-.005a.108.108 0 01-.017-.152.116.116 0 01.114-.04C28.547 17 14.26 27.665 4 18.01m8.2-7.156c-6.619 4.54.744 6.6 2.081 6.164a.139.139 0 01.064-.002.111.111 0 01.083.138c-.903 3.463-11.31-3.392-2.228-6.3M16 0C7.164 0 0 7.163 0 16c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.837-7.164-16-16-16"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#0082c6" r="16"/><path d="M18.046 15.103a.117.117 0 00-.114.041.108.108 0 00.023.156C22.334 18.478 16.101 25.754 4 18.011c10.26 9.655 24.547-1.01 14.046-2.908zm-5.844-4.248c-9.086 2.907 1.323 9.763 2.226 6.3a.11.11 0 00-.083-.137.12.12 0 00-.064.001c-1.337.435-8.701-1.624-2.08-6.164zM28 12.602c-7.867-5.61-22.628-.984-15.013 2.977a.119.119 0 00.157-.047.11.11 0 00.003-.098C10.05 8.89 25.781 10.88 28 12.602zm-6.528 8.151c4.159-1.89.777-8.361-4.724-7.112a.116.116 0 01-.138-.085.107.107 0 01.04-.11c4.28-3.216 12.314 4.292 4.822 7.307z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="114.6%" height="129.2%" x="-7.3%" y="-10.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.046 14.103a.117.117 0 00-.114.041.108.108 0 00.023.156C22.334 17.478 16.101 24.754 4 17.011c10.26 9.655 24.547-1.01 14.046-2.908zm-5.844-4.248c-9.086 2.907 1.323 9.763 2.226 6.3a.11.11 0 00-.083-.137.12.12 0 00-.064.001c-1.337.435-8.701-1.624-2.08-6.164zM28 11.602c-7.867-5.61-22.628-.984-15.013 2.977a.119.119 0 00.157-.047.11.11 0 00.003-.098C10.05 7.89 25.781 9.88 28 11.602zm-6.528 8.151c4.159-1.89.777-8.361-4.724-7.112a.116.116 0 01-.138-.085.107.107 0 01.04-.11c4.28-3.216 12.314 4.292 4.822 7.307z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#0082C6" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.046-16.897C28.546 17 14.26 27.666 4 18.01c12.101 7.743 18.334.467 13.955-2.711a.108.108 0 01-.023-.156.117.117 0 01.114-.041zm-5.844-4.248c-6.622 4.54.742 6.599 2.079 6.164a.12.12 0 01.064 0 .11.11 0 01.083.135c-.903 3.464-11.312-3.392-2.226-6.299zM28 12.602c-2.22-1.721-17.95-3.711-14.853 2.832a.11.11 0 01-.003.098.119.119 0 01-.157.047C5.372 11.619 20.133 6.992 28 12.602zm-6.528 8.151c7.492-3.015-.541-10.523-4.822-7.306a.107.107 0 00-.04.11c.013.058.075.097.138.084 5.5-1.25 8.883 5.221 4.724 7.112z" fill="#fff"/>';
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
  export let ariaLabel = 'sys';
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
@prop export let ariaLabel = 'sys';
-->
