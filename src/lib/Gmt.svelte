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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5zm0 1.11c5.462 0 9.89 4.428 9.89 9.89 0 5.462-4.428 9.89-9.89 9.89-5.462 0-9.89-4.428-9.89-9.89 0-5.462 4.428-9.89 9.89-9.89zm1.61 2.292h-.015a.555.555 0 00-.54.555v2.703h-2.112V8.942a.555.555 0 00-1.11.015v2.703h-3.094a.555.555 0 00-.54.555V19.8c.008.3.253.54.555.54h3.08v2.718c.008.3.254.54.555.54h.015c.3-.008.54-.253.54-.555V20.34h2.111v2.718a.555.555 0 001.11-.015V20.34h3.096c.3-.008.54-.253.54-.555V15.89a.555.555 0 00-.555-.54h-6.872a.555.555 0 00-.54.555v.015c.008.3.254.54.555.54h6.302v2.771H11.31v-6.46h9.952a.555.555 0 00-.015-1.11h-3.081V8.942a.555.555 0 00-.555-.54z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#DBB358" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M21.246 11.66a.555.555 0 01.015 1.11H11.31v6.46h9.382v-2.77H14.39a.555.555 0 01-.555-.54v-.015c0-.301.24-.547.54-.555h6.872c.302 0 .547.24.555.54v3.896c0 .302-.24.547-.54.555H10.754a.555.555 0 01-.555-.54v-7.585c0-.301.24-.547.54-.554h10.507z"/><path d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5zm0 1.11c5.462 0 9.89 4.428 9.89 9.89 0 5.462-4.428 9.89-9.89 9.89-5.462 0-9.89-4.428-9.89-9.89 0-5.462 4.428-9.89 9.89-9.89z"/><path d="M17.61 8.402c.302 0 .547.24.555.54v3.273c0 .302-.24.547-.54.555h-3.237a.555.555 0 01-.554-.54V8.957a.555.555 0 011.11-.015v2.718h2.111V8.957c0-.302.24-.547.54-.555h.015zm0 10.828c.302 0 .547.24.555.54v3.273a.555.555 0 01-1.11.015V20.34h-2.11v2.703a.555.555 0 01-.541.555h-.015a.555.555 0 01-.555-.54v-3.273c0-.302.24-.547.54-.555h3.236z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#DBB358" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M21.246 10.66a.555.555 0 01.015 1.11H11.31v6.46h9.382v-2.77H14.39a.555.555 0 01-.555-.54v-.015c0-.301.24-.547.54-.555h6.872c.302 0 .547.24.555.54v3.896c0 .302-.24.547-.54.555H10.754a.555.555 0 01-.555-.54v-7.585c0-.301.24-.547.54-.554h10.507z"/><path d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11S22.075 4 16 4zm0 1.11c5.462 0 9.89 4.428 9.89 9.89 0 5.462-4.428 9.89-9.89 9.89-5.462 0-9.89-4.428-9.89-9.89 0-5.462 4.428-9.89 9.89-9.89z"/><path d="M17.61 7.402c.302 0 .547.24.555.54v3.273c0 .302-.24.547-.54.555h-3.237a.555.555 0 01-.554-.54V7.957a.555.555 0 011.11-.015v2.718h2.111V7.957c0-.302.24-.547.54-.555h.015zm0 10.828c.302 0 .547.24.555.54v3.273a.555.555 0 01-1.11.015V19.34h-2.11v2.703a.555.555 0 01-.541.555h-.015a.555.555 0 01-.555-.54v-3.273c0-.302.24-.547.54-.555h3.236z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5zm0 1.11c5.462 0 9.89 4.428 9.89 9.89 0 5.462-4.428 9.89-9.89 9.89-5.462 0-9.89-4.428-9.89-9.89 0-5.462 4.428-9.89 9.89-9.89zm1.61 2.292h-.015a.555.555 0 00-.54.555v2.703h-2.112V8.942a.555.555 0 00-1.11.015v2.703h-3.094a.555.555 0 00-.54.555V19.8c.008.3.253.54.555.54h3.08v2.718c.008.3.254.54.555.54h.015c.3-.008.54-.253.54-.555V20.34h2.111v2.718a.555.555 0 001.11-.015V20.34h3.096c.3-.008.54-.253.54-.555V15.89a.555.555 0 00-.555-.54h-6.872a.555.555 0 00-.54.555v.015c.008.3.254.54.555.54h6.302v2.771H11.31v-6.46h9.952a.555.555 0 00-.015-1.11h-3.081V8.942a.555.555 0 00-.555-.54z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'gmt';
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
@prop export let ariaLabel = 'gmt';
-->
