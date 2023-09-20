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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.967-13.82h.272c1.355.001 2.71.005 4.065.002 1.042-.002 2.076-.09 3.084-.368 1.271-.352 2.41-.93 3.238-1.963 1.125-1.403 1.496-3.01 1.221-4.762-.177-1.127-.814-1.94-1.872-2.411a5.738 5.738 0 00-1.169-.352c-1.152-.237-2.327-.297-3.5-.312-2.007-.026-4.016-.007-6.024-.013-.184 0-.215.097-.243.238-.234 1.186-.478 2.37-.706 3.558-.037.191-.113.248-.308.242-.409-.014-.819 0-1.228-.003-.14 0-.207.037-.233.187-.093.539-.204 1.075-.307 1.612-.008.042-.006.086-.01.16H9.99L8 23.934c.056.02.078.035.1.035.881.01 1.763.017 2.645.03.14.002.168-.073.189-.182.235-1.217.472-2.434.71-3.651l.389-1.986zm.555-2.738l.29-1.456h4.103l.376-1.938h-4.09c.085-.44.164-.84.244-1.248.07-.006.124-.014.177-.014 1.473.004 2.945-.007 4.417.02a9.754 9.754 0 011.569.17c.707.128 1.123.583 1.24 1.28.085.501.022.985-.228 1.433-.562 1.008-1.441 1.563-2.598 1.701a7.6 7.6 0 01-.918.05c-1.433.005-2.866.002-4.3.002h-.282z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#105B2F"/><path fill="#FFF" d="M12.033 18.18l-.39 1.987-.71 3.651c-.02.11-.048.184-.188.182-.882-.013-1.764-.02-2.646-.03-.021 0-.043-.014-.099-.035l1.99-9.94H8.313c.004-.074.002-.118.01-.16.103-.537.214-1.073.307-1.612.026-.15.093-.188.233-.187.41.004.82-.011 1.228.003.195.006.27-.05.308-.242.228-1.188.472-2.372.706-3.558.028-.141.059-.238.243-.238 2.008.006 4.017-.013 6.025.013 1.172.015 2.347.075 3.5.312.397.082.8.188 1.168.352 1.058.47 1.695 1.284 1.872 2.411.275 1.751-.096 3.36-1.22 4.762-.83 1.032-1.968 1.611-3.239 1.963-1.008.279-2.042.366-3.084.368-1.355.003-2.71 0-4.065-.001h-.272zm.555-2.738h.283c1.433 0 2.866.003 4.3-.002.305 0 .614-.013.917-.05 1.157-.138 2.036-.693 2.598-1.7a2.14 2.14 0 00.229-1.434c-.118-.697-.534-1.152-1.241-1.28a9.826 9.826 0 00-1.569-.17c-1.472-.027-2.944-.016-4.417-.02-.053 0-.106.008-.177.014l-.244 1.248h4.09l-.376 1.938h-4.103l-.29 1.456z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="121.9%" x="-10.9%" y="-7.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M12.033 17.18l-.39 1.987-.71 3.651c-.02.11-.048.184-.188.182-.882-.013-1.764-.02-2.646-.03-.021 0-.043-.014-.099-.035l1.99-9.94H8.313c.004-.074.002-.118.01-.16.103-.537.214-1.073.307-1.612.026-.15.093-.188.233-.187.41.004.82-.011 1.228.003.195.006.27-.05.308-.242.228-1.188.472-2.372.706-3.558.028-.141.059-.238.243-.238 2.008.006 4.017-.013 6.025.013 1.172.015 2.347.075 3.5.312.397.082.8.188 1.168.352 1.058.47 1.695 1.284 1.872 2.411.275 1.751-.096 3.36-1.22 4.762-.83 1.032-1.968 1.611-3.239 1.963-1.008.279-2.042.366-3.084.368-1.355.003-2.71 0-4.065-.001h-.272zm.555-2.738h.283c1.433 0 2.866.003 4.3-.002.305 0 .614-.013.917-.05 1.157-.138 2.036-.693 2.598-1.7a2.14 2.14 0 00.229-1.434c-.118-.697-.534-1.152-1.241-1.28a9.826 9.826 0 00-1.569-.17c-1.472-.027-2.944-.016-4.417-.02-.053 0-.106.008-.177.014l-.244 1.248h4.09l-.376 1.938h-4.103l-.29 1.456z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#105B2F" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.967-13.82h.272c1.355.001 2.71.005 4.065.002 1.042-.002 2.076-.09 3.084-.368 1.271-.352 2.41-.93 3.238-1.963 1.125-1.403 1.496-3.01 1.221-4.762-.177-1.127-.814-1.94-1.872-2.411a5.738 5.738 0 00-1.169-.352c-1.152-.237-2.327-.297-3.5-.312-2.007-.026-4.016-.007-6.024-.013-.184 0-.215.097-.243.238-.234 1.186-.478 2.37-.706 3.558-.037.191-.113.248-.308.242-.409-.014-.819 0-1.228-.003-.14 0-.207.037-.233.187-.093.539-.204 1.075-.307 1.612-.008.042-.006.086-.01.16H9.99L8 23.934c.056.02.078.035.1.035.881.01 1.763.017 2.645.03.14.002.168-.073.189-.182.235-1.217.472-2.434.71-3.651l.389-1.986zm.555-2.738l.29-1.456h4.103l.376-1.938h-4.09c.085-.44.164-.84.244-1.248.07-.006.124-.014.177-.014 1.473.004 2.945-.007 4.417.02a9.754 9.754 0 011.569.17c.707.128 1.123.583 1.24 1.28.085.501.022.985-.228 1.433-.562 1.008-1.441 1.563-2.598 1.701a7.6 7.6 0 01-.918.05c-1.433.005-2.866.002-4.3.002h-.282z"/>';
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
  export let ariaLabel = 'pot';
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
@prop export let ariaLabel = 'pot';
-->
