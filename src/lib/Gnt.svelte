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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.499-26.712l-2.272 2.334a4.212 4.212 0 00-2.395-.749 4.262 4.262 0 00-3.07 1.303A4.474 4.474 0 0011.5 11.31c0 1.18.448 2.298 1.262 3.135a4.274 4.274 0 002.213 1.22v2.04a4.189 4.189 0 00-2.217 1.225 4.471 4.471 0 00-1.258 3.132c0 1.18.448 2.298 1.262 3.135a4.24 4.24 0 003.07 1.302 4.262 4.262 0 003.07-1.302 4.451 4.451 0 001.261-3.135 4.451 4.451 0 00-1.262-3.135 4.274 4.274 0 00-2.213-1.221v-2.04a4.183 4.183 0 002.217-1.225 4.448 4.448 0 001.258-3.131c0-.888-.259-1.748-.738-2.478l2.277-2.34L20.5 5.287zm-4.667 14.057c.711 0 1.367.277 1.853.787.503.529.778 1.206.778 1.93 0 .73-.277 1.417-.775 1.928a2.53 2.53 0 01-1.856.79c-.7 0-1.362-.282-1.857-.79a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.927a2.53 2.53 0 011.857-.791zm1.853-6.09a2.527 2.527 0 01-1.853.787c-.7 0-1.362-.283-1.857-.791a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.928a2.53 2.53 0 011.857-.79c.7 0 1.362.282 1.856.79a2.7 2.7 0 01.775 1.928c0 .73-.277 1.416-.778 1.93z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#001D57"/><path fill="#FFF" fill-rule="nonzero" d="M20.499 5.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 01-1.258 3.131 4.183 4.183 0 01-2.217 1.226v2.039a4.273 4.273 0 012.213 1.22 4.451 4.451 0 011.262 3.136 4.451 4.451 0 01-1.262 3.135 4.262 4.262 0 01-3.07 1.302 4.24 4.24 0 01-3.07-1.302 4.474 4.474 0 01-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 012.217-1.225v-2.04a4.274 4.274 0 01-2.213-1.22A4.474 4.474 0 0111.5 11.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 013.07-1.303c.86 0 1.687.262 2.395.749L20.5 5.288zm-4.667 14.057a2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79 2.53 2.53 0 001.856-.79 2.751 2.751 0 00.775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 00-1.853-.787zm1.853-6.09a2.754 2.754 0 00.778-1.931 2.7 2.7 0 00-.775-1.928 2.578 2.578 0 00-1.856-.79 2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79c.711 0 1.367-.276 1.853-.786z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="134.3%" height="116.5%" x="-17.2%" y="-5.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M20.499 4.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 01-1.258 3.131 4.183 4.183 0 01-2.217 1.226v2.039a4.273 4.273 0 012.213 1.22 4.451 4.451 0 011.262 3.136 4.451 4.451 0 01-1.262 3.135 4.262 4.262 0 01-3.07 1.302 4.24 4.24 0 01-3.07-1.302 4.474 4.474 0 01-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 012.217-1.225v-2.04a4.274 4.274 0 01-2.213-1.22A4.474 4.474 0 0111.5 10.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 013.07-1.303c.86 0 1.687.262 2.395.749L20.5 4.288zm-4.667 14.057a2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79 2.53 2.53 0 001.856-.79 2.751 2.751 0 00.775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 00-1.853-.787zm1.853-6.09a2.754 2.754 0 00.778-1.931 2.7 2.7 0 00-.775-1.928 2.578 2.578 0 00-1.856-.79 2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79c.711 0 1.367-.276 1.853-.786z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#001D57" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.499-26.712l-2.272 2.334a4.212 4.212 0 00-2.395-.749 4.262 4.262 0 00-3.07 1.303A4.474 4.474 0 0011.5 11.31c0 1.18.448 2.298 1.262 3.135a4.274 4.274 0 002.213 1.22v2.04a4.189 4.189 0 00-2.217 1.225 4.471 4.471 0 00-1.258 3.132c0 1.18.448 2.298 1.262 3.135a4.24 4.24 0 003.07 1.302 4.262 4.262 0 003.07-1.302 4.451 4.451 0 001.261-3.135 4.451 4.451 0 00-1.262-3.135 4.274 4.274 0 00-2.213-1.221v-2.04a4.183 4.183 0 002.217-1.225 4.448 4.448 0 001.258-3.131c0-.888-.259-1.748-.738-2.478l2.277-2.34L20.5 5.287zm-4.667 14.057c.711 0 1.367.277 1.853.787.503.529.778 1.206.778 1.93 0 .73-.277 1.417-.775 1.928a2.53 2.53 0 01-1.856.79c-.7 0-1.362-.282-1.857-.79a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.927a2.53 2.53 0 011.857-.791zm1.853-6.09a2.527 2.527 0 01-1.853.787c-.7 0-1.362-.283-1.857-.791a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.928a2.53 2.53 0 011.857-.79c.7 0 1.362.282 1.856.79a2.7 2.7 0 01.775 1.928c0 .73-.277 1.416-.778 1.93z"/>';
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
  export let ariaLabel = 'gnt';
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
@prop export let ariaLabel = 'gnt';
-->
