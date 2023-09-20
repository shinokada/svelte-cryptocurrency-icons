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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.116 6.01v3.919l1.88 1.963V6.009h-1.88zM6.01 7.992l7.638 7.723c-.121.129-.245.256-.37.381l-7.268 7.35h3.67c.155-.003.312.01.467-.01.272-.003.543.005.814-.003.314-.32.622-.646.934-.97l2.677-2.795c.473-.5.955-.993 1.425-1.493.22.218.432.448.648.672.973 1.014 1.942 2.032 2.915 3.044.495.513.984 1.03 1.48 1.542.272.01.546-.002.82.006.096.013.195.007.294.007h3.83l-.69-.696-6.772-6.846c-.052-.066-.114-.127-.172-.189.237-.246.48-.491.723-.734 2.304-2.328 4.605-4.66 6.91-6.99h-4.938c-.713.744-1.425 1.489-2.14 2.23-.967 1.012-1.935 2.028-2.906 3.037-1.677-1.76-3.361-3.511-5.038-5.266H6.01zM16 19.53h.002c-.004 1.967-.004 3.933-.004 5.9h1.89c0-1.308.004-2.613 0-3.92-.627-.661-1.262-1.317-1.888-1.98z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#3B5998" fill-rule="nonzero"/><g fill="#FFF"><path d="M14.116 6.01h1.88v5.882l-1.88-1.963z"/><path d="M6.011 7.993h4.949c1.677 1.755 3.361 3.507 5.038 5.266.971-1.009 1.939-2.025 2.906-3.037.715-.741 1.427-1.486 2.14-2.23h4.937c-2.304 2.33-4.605 4.662-6.91 6.99-.242.243-.485.488-.722.734.058.062.12.123.172.189l6.771 6.846.691.696h-3.83c-.099 0-.198.006-.295-.007-.273-.008-.547.004-.82-.006-.495-.511-.984-1.029-1.479-1.542-.973-1.012-1.942-2.03-2.915-3.044-.216-.224-.427-.454-.648-.672-.47.5-.952.993-1.425 1.493l-2.677 2.794c-.312.325-.62.652-.934.971-.27.008-.542 0-.814.004-.155.019-.312.006-.467.01H6.01l7.268-7.35c.125-.126.249-.253.37-.382L6.01 7.993z"/><path d="M16 19.531c.626.663 1.26 1.319 1.888 1.98.004 1.307 0 2.612 0 3.92h-1.89c0-1.967 0-3.933.004-5.9H16z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3B5998" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M14.304 6.008h1.693v5.295l-1.693-1.767z"/><path d="M7.01 7.793h4.454c1.51 1.58 3.025 3.157 4.534 4.74.874-.908 1.745-1.822 2.615-2.733.644-.667 1.284-1.338 1.926-2.007h4.444c-2.074 2.096-4.144 4.195-6.218 6.291-.219.219-.437.439-.65.66.051.056.107.111.154.17l6.094 6.162.622.627h-3.447c-.09 0-.178.005-.266-.007-.245-.007-.492.003-.738-.005-.445-.46-.885-.926-1.33-1.388-.876-.911-1.749-1.827-2.624-2.74-.195-.202-.385-.408-.583-.605-.424.45-.858.894-1.283 1.345l-2.41 2.514c-.28.292-.558.586-.84.874-.244.006-.488 0-.733.003-.14.017-.28.005-.42.009h-3.3l6.54-6.616c.113-.112.224-.226.333-.342L7.01 7.793z"/><path d="M16 18.178c.563.597 1.134 1.187 1.7 1.782.003 1.176 0 2.35 0 3.527h-1.702c0-1.77 0-3.54.004-5.309H16z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.116 6.01v3.919l1.88 1.963V6.009h-1.88zM6.01 7.992l7.638 7.723c-.121.129-.245.256-.37.381l-7.268 7.35h3.67c.155-.003.312.01.467-.01.272-.003.543.005.814-.003.314-.32.622-.646.934-.97l2.677-2.795c.473-.5.955-.993 1.425-1.493.22.218.432.448.648.672.973 1.014 1.942 2.032 2.915 3.044.495.513.984 1.03 1.48 1.542.272.01.546-.002.82.006.096.013.195.007.294.007h3.83l-.69-.696-6.772-6.846c-.052-.066-.114-.127-.172-.189.237-.246.48-.491.723-.734 2.304-2.328 4.605-4.66 6.91-6.99h-4.938c-.713.744-1.425 1.489-2.14 2.23-.967 1.012-1.935 2.028-2.906 3.037-1.677-1.76-3.361-3.511-5.038-5.266H6.01zM16 19.53h.002c-.004 1.967-.004 3.933-.004 5.9h1.89c0-1.308.004-2.613 0-3.92-.627-.661-1.262-1.317-1.888-1.98z" fill="#FFF"/>';
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
  export let ariaLabel = 'x';
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
@prop export let ariaLabel = 'x';
-->
