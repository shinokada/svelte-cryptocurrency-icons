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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.068-19.092l-4.217-.618-.237 1.615 4.12.603a31.19 31.19 0 00-.124.715l-.176 1.063-4.096-.6-.222 1.617 4.036.592c-.909 4.494-1.628 6.44-2.535 7.45-.091.106-.378.264-.625.293-.341.04-.62-.131-.831-.63a1.686 1.686 0 00-.541-.722 1.245 1.245 0 00-.89-.242c-.205-.028-.587.251-.688.601-.136.47.174.97.947 1.455 1.515.95 2.97.657 4.267-.497.779-.694 1.488-1.741 1.664-2.18.455-.88 1.1-3.106 1.588-5.184l4.233.62.237-1.615-4.137-.606a31.625 31.625 0 00.126-.714l.175-1.064 4.096.6.222-1.617-4.036-.59c.61-3.012 1.048-4.465 1.524-5.258.137-.226.27-.398.484-.635l.235-.26c.09-.106.378-.264.625-.293.34-.04.62.132.83.63.136.32.32.559.542.722.288.212.59.271.89.242.205.028.587-.251.688-.6.136-.471-.174-.97-.947-1.455l-.133.211.133-.211c-1.515-.951-2.97-.658-4.267.497-.78.693-1.489 1.742-1.664 2.18-.475.917-.924 2.322-1.296 3.885z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#42C1CA"/><path fill="#FFF" d="M15.932 12.908c.372-1.563.82-2.968 1.296-3.885.175-.438.885-1.487 1.664-2.18 1.297-1.155 2.752-1.448 4.267-.497l-.133.211.133-.211c.773.485 1.083.984.947 1.454-.1.35-.483.63-.688.601-.3.03-.602-.03-.89-.242a1.685 1.685 0 01-.541-.721c-.212-.5-.49-.67-.831-.63-.247.028-.534.186-.625.292l-.235.26a3.894 3.894 0 00-.484.635c-.476.793-.915 2.246-1.524 5.257l4.036.591-.222 1.617-4.096-.6-.175 1.064-.045.266c-.024.138-.05.288-.08.448l4.136.606-.237 1.615-4.233-.62c-.489 2.078-1.133 4.305-1.588 5.184-.176.439-.885 1.486-1.664 2.18-1.297 1.154-2.752 1.448-4.267.497-.773-.485-1.083-.985-.947-1.455.1-.35.483-.629.688-.6.3-.03.602.03.89.241.222.164.406.402.541.722.212.499.49.67.831.63.247-.029.534-.187.625-.293.907-1.01 1.626-2.956 2.535-7.45l-4.036-.592.222-1.617 4.096.6.176-1.063a31.19 31.19 0 01.125-.715l-4.12-.603.236-1.615 4.217.618z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="122.9%" height="116.8%" x="-11.5%" y="-6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M15.932 11.908c.372-1.563.82-2.968 1.296-3.885.175-.438.885-1.487 1.664-2.18 1.297-1.155 2.752-1.448 4.267-.497l-.133.211.133-.211c.773.485 1.083.984.947 1.454-.1.35-.483.63-.688.601-.3.03-.602-.03-.89-.242a1.685 1.685 0 01-.541-.721c-.212-.5-.49-.67-.831-.63-.247.028-.534.186-.625.292l-.235.26a3.894 3.894 0 00-.484.635c-.476.793-.915 2.246-1.524 5.257l4.036.591-.222 1.617-4.096-.6-.175 1.064-.045.266c-.024.138-.05.288-.08.448l4.136.606-.237 1.615-4.233-.62c-.489 2.078-1.133 4.305-1.588 5.184-.176.439-.885 1.486-1.664 2.18-1.297 1.154-2.752 1.448-4.267.497-.773-.485-1.083-.985-.947-1.455.1-.35.483-.629.688-.6.3-.03.602.03.89.241.222.164.406.402.541.722.212.499.49.67.831.63.247-.029.534-.187.625-.293.907-1.01 1.626-2.956 2.535-7.45l-4.036-.592.222-1.617 4.096.6.176-1.063a31.19 31.19 0 01.125-.715l-4.12-.603.236-1.615 4.217.618z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#42C1CA" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.068-19.092l-4.217-.618-.237 1.615 4.12.603a31.19 31.19 0 00-.124.715l-.176 1.063-4.096-.6-.222 1.617 4.036.592c-.909 4.494-1.628 6.44-2.535 7.45-.091.106-.378.264-.625.293-.341.04-.62-.131-.831-.63a1.686 1.686 0 00-.541-.722 1.245 1.245 0 00-.89-.242c-.205-.028-.587.251-.688.601-.136.47.174.97.947 1.455 1.515.95 2.97.657 4.267-.497.779-.694 1.488-1.741 1.664-2.18.455-.88 1.1-3.106 1.588-5.184l4.233.62.237-1.615-4.137-.606a31.625 31.625 0 00.126-.714l.175-1.064 4.096.6.222-1.617-4.036-.59c.61-3.012 1.048-4.465 1.524-5.258.137-.226.27-.398.484-.635l.235-.26c.09-.106.378-.264.625-.293.34-.04.62.132.83.63.136.32.32.559.542.722.288.212.59.271.89.242.205.028.587-.251.688-.6.136-.471-.174-.97-.947-1.455l-.133.211.133-.211c-1.515-.951-2.97-.658-4.267.497-.78.693-1.489 1.742-1.664 2.18-.475.917-.924 2.322-1.296 3.885z"/>';
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
  export let ariaLabel = 'fil';
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
@prop export let ariaLabel = 'fil';
-->
