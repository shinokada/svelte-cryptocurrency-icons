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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.772-10.117l-1.973-5.309h1.178a.849.849 0 00.85-.836c0-.21-.086-.413-.237-.561s-.358-.233-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 00.846-.807c.001-.222-.088-.434-.248-.59s-.376-.244-.602-.243h-2.72L18.78 8.51a3.576 3.576 0 00-1.057-1.461 2.499 2.499 0 00-1.663-.548 2.57 2.57 0 00-1.671.548 3.609 3.609 0 00-1.06 1.46l-1.543 4.004H9.082a.81.81 0 00-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 00-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 001.34.483 1.8 1.8 0 001.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 001.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 00.225-.844 5.446 5.446 0 00-.228-.927zM13.66 17.386l2.385-7.112 2.43 7.112z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#fd875e" r="16"/><path d="M13.66 17.386l2.386-7.112 2.43 7.112zm10.112 4.497l-1.973-5.309h1.178a.849.849 0 00.85-.836c0-.21-.086-.413-.237-.561s-.358-.233-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 00.846-.807c.001-.222-.088-.434-.248-.59s-.376-.244-.602-.243h-2.72L18.78 8.51a3.576 3.576 0 00-1.057-1.461 2.499 2.499 0 00-1.663-.548 2.57 2.57 0 00-1.671.548 3.609 3.609 0 00-1.06 1.46l-1.543 4.004H9.082a.81.81 0 00-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 00-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 001.34.483 1.8 1.8 0 001.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 001.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 00.225-.844 5.446 5.446 0 00-.228-.927z" fill="#fefefe"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M13.66 16.386l2.386-7.112 2.43 7.112H13.66zm10.112 4.497l-1.973-5.309h1.178a.849.849 0 00.85-.836.785.785 0 00-.237-.561.818.818 0 00-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 00.846-.807.821.821 0 00-.248-.59.856.856 0 00-.602-.243h-2.72L18.78 7.51a3.576 3.576 0 00-1.057-1.461 2.499 2.499 0 00-1.663-.548 2.57 2.57 0 00-1.671.548 3.609 3.609 0 00-1.06 1.46l-1.543 4.004H9.082a.81.81 0 00-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 00-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 001.34.483 1.8 1.8 0 001.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 001.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 00.225-.844 5.446 5.446 0 00-.228-.927v-.014z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FD875E" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.772-10.117l-1.973-5.309h1.178a.849.849 0 00.85-.836c0-.21-.086-.413-.237-.561s-.358-.233-.573-.233h-1.84l-.295-.826h2.095a.839.839 0 00.846-.807c.001-.222-.088-.434-.248-.59s-.376-.244-.602-.243h-2.72L18.78 8.51a3.576 3.576 0 00-1.057-1.461 2.499 2.499 0 00-1.663-.548 2.57 2.57 0 00-1.671.548 3.609 3.609 0 00-1.06 1.46l-1.543 4.004H9.082a.81.81 0 00-.817.797c0 .458.379.829.847.829h2.053l-.316.804h-1.84a.809.809 0 00-.818.8c0 .454.374.821.836.823h1.181l-2.006 5.316c-.123.3-.191.618-.202.941.02.453.222.88.56 1.19a2.04 2.04 0 001.34.483 1.8 1.8 0 001.84-1.305l.776-2.269h7.144l.777 2.323a1.813 1.813 0 001.84 1.24c.31.007.615-.07.884-.22.233-.17.44-.37.614-.598a1.6 1.6 0 00.225-.844 5.446 5.446 0 00-.228-.927zM13.66 17.386l2.385-7.112 2.43 7.112z" fill="#fff"/>';
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
  export let ariaLabel = 'appc';
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
@prop export let ariaLabel = 'appc';
-->
