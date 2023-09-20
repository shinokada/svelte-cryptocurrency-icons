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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.24-17.294v-4.29h-1.988v4.322H12.31V6H9.5v20h2.81v-9.133h1.462v3.746h1.989v-3.73c.326.021.6.104.815.244.216.14.416.374.6.702l3.562 7.35c.31.546.721.821 1.231.821H24.5l-4.346-8.675c-.29-.51-.6-.904-.926-1.185a2.965 2.965 0 00-1.22-.613c.31-.109.594-.27.852-.483.252-.213.479-.488.679-.826L24.053 6h-2.3c-.262 0-.5.073-.7.213a1.93 1.93 0 00-.515.566l-3.625 6.987c-.163.312-.337.54-.52.675a1.486 1.486 0 01-.632.265z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#00AEEF"/><path fill="#FFF" d="M15.76 14.706c.238-.041.448-.13.632-.265s.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 01.7-.213h2.299l-4.514 8.218c-.2.338-.427.613-.68.826a2.772 2.772 0 01-.851.483c.484.125.889.328 1.22.613.326.28.637.676.926 1.185L24.5 26h-2.53c-.511 0-.922-.275-1.232-.82l-3.562-7.351c-.184-.328-.384-.561-.6-.702-.215-.14-.489-.223-.815-.244v3.73h-1.989v-3.746H12.31V26H9.5V6h2.81v8.738h1.462v-4.322h1.989v4.29z"/></g>';
  let svgicon =
    '<defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00AEEF" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><path fill="#FFF" d="M15.76 13.706c.238-.041.448-.13.632-.265s.358-.363.521-.675l3.625-6.987c.142-.234.316-.42.516-.566a1.2 1.2 0 01.7-.213h2.299l-4.514 8.218c-.2.338-.427.613-.68.826a2.772 2.772 0 01-.851.483c.484.125.889.328 1.22.613.326.28.637.676.926 1.185L24.5 25h-2.53c-.511 0-.922-.275-1.232-.82l-3.562-7.351c-.184-.328-.384-.561-.6-.702-.215-.14-.489-.223-.815-.244v3.73h-1.989v-3.746H12.31V25H9.5V5h2.81v8.738h1.462V9.416h1.989v4.29z"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.24-17.294v-4.29h-1.988v4.322H12.31V6H9.5v20h2.81v-9.133h1.462v3.746h1.989v-3.73c.326.021.6.104.815.244.216.14.416.374.6.702l3.562 7.35c.31.546.721.821 1.231.821H24.5l-4.346-8.675c-.29-.51-.6-.904-.926-1.185a2.965 2.965 0 00-1.22-.613c.31-.109.594-.27.852-.483.252-.213.479-.488.679-.826L24.053 6h-2.3c-.262 0-.5.073-.7.213a1.93 1.93 0 00-.515.566l-3.625 6.987c-.163.312-.337.54-.52.675a1.486 1.486 0 01-.632.265z"/>';
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
  export let ariaLabel = 'krb';
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
@prop export let ariaLabel = 'krb';
-->
