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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm9.396 9h-4.193c-1.072 0-1.992.451-2.76 1.347l-4.472 5.707-2.88 3.67a.643.643 0 01-.492.24h-3.98a.084.084 0 00-.078.034.123.123 0 00-.025.077v2.83a.12.12 0 00.025.06.09.09 0 00.078.034h4.197c1.072 0 1.992-.454 2.76-1.359l2.44-3.108 2.44 3.108c.763.905 1.675 1.36 2.747 1.36h4.19a.084.084 0 00.077-.035.123.123 0 00.025-.077v-2.8a.143.143 0 00-.025-.09.09.09 0 00-.078-.034h-3.98a.613.613 0 01-.476-.223l-2.945-3.752 2.933-3.725a.617.617 0 01.493-.24h3.98a.084.084 0 00.077-.035.123.123 0 00.025-.077V9.08a.093.093 0 00-.025-.053.102.102 0 00-.078-.026zM10.825 9H6.619a.103.103 0 00-.086.035.11.11 0 00-.033.077v2.8c0 .03.012.056.033.077a.13.13 0 00.086.034h3.98c.193 0 .374.086.493.24l1.511 1.934 1.992-2.534-1.023-1.303C12.8 9.455 11.884 9 10.825 9z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#5FCDF9" cx="16" cy="16" r="16"/><path d="M11.092 12.264a.617.617 0 00-.493-.24h-3.98a.13.13 0 01-.086-.035.11.11 0 01-.033-.077v-2.8a.11.11 0 01.033-.077.097.097 0 01.086-.034h4.206c1.06 0 1.975.454 2.747 1.359l1.023 1.303-1.992 2.534-1.511-1.933zm7.351-1.917c.768-.896 1.688-1.346 2.76-1.346h4.193a.102.102 0 01.078.026.1.1 0 01.025.085v2.8c0 .03-.008.056-.025.077a.084.084 0 01-.078.034h-3.98a.617.617 0 00-.492.24L17.99 15.99l2.945 3.752c.12.141.296.227.477.223h3.98a.09.09 0 01.077.034.14.14 0 01.025.09v2.8a.12.12 0 01-.025.077.084.084 0 01-.078.034h-4.189c-1.072 0-1.984-.454-2.748-1.359l-2.44-3.108-2.439 3.108c-.768.905-1.688 1.36-2.76 1.36H6.62a.09.09 0 01-.078-.035.121.121 0 01-.025-.09v-2.8c0-.03.009-.056.025-.077a.084.084 0 01.078-.034h3.98c.189 0 .37-.09.493-.24l2.879-3.67 4.472-5.707z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#5FCDF9" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M11.092 11.264a.617.617 0 00-.493-.24h-3.98a.13.13 0 01-.086-.035.11.11 0 01-.033-.077v-2.8a.11.11 0 01.033-.077.097.097 0 01.086-.034h4.206c1.06 0 1.975.454 2.747 1.359l1.023 1.303-1.992 2.534-1.511-1.933zm7.351-1.917c.768-.896 1.688-1.346 2.76-1.346h4.193a.102.102 0 01.078.026.1.1 0 01.025.085v2.8c0 .03-.008.056-.025.077a.084.084 0 01-.078.034h-3.98a.617.617 0 00-.492.24L17.99 14.99l2.945 3.752c.12.141.296.227.477.223h3.98a.09.09 0 01.077.034.14.14 0 01.025.09v2.8a.12.12 0 01-.025.077.084.084 0 01-.078.034h-4.189c-1.072 0-1.984-.454-2.748-1.359l-2.44-3.108-2.439 3.108c-.768.905-1.688 1.36-2.76 1.36H6.62a.09.09 0 01-.078-.035.121.121 0 01-.025-.09v-2.8c0-.03.009-.056.025-.077a.084.084 0 01.078-.034h3.98c.189 0 .37-.09.493-.24l2.879-3.67 4.472-5.707z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm9.396 9h-4.193c-1.072 0-1.992.451-2.76 1.347l-4.472 5.707-2.88 3.67a.643.643 0 01-.492.24h-3.98a.084.084 0 00-.078.034.123.123 0 00-.025.077v2.83a.12.12 0 00.025.06.09.09 0 00.078.034h4.197c1.072 0 1.992-.454 2.76-1.359l2.44-3.108 2.44 3.108c.763.905 1.675 1.36 2.747 1.36h4.19a.084.084 0 00.077-.035.123.123 0 00.025-.077v-2.8a.143.143 0 00-.025-.09.09.09 0 00-.078-.034h-3.98a.613.613 0 01-.476-.223l-2.945-3.752 2.933-3.725a.617.617 0 01.493-.24h3.98a.084.084 0 00.077-.035.123.123 0 00.025-.077V9.08a.093.093 0 00-.025-.053.102.102 0 00-.078-.026zM10.825 9H6.619a.103.103 0 00-.086.035.11.11 0 00-.033.077v2.8c0 .03.012.056.033.077a.13.13 0 00.086.034h3.98c.193 0 .374.086.493.24l1.511 1.934 1.992-2.534-1.023-1.303C12.8 9.455 11.884 9 10.825 9z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'snx';
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
@prop export let ariaLabel = 'snx';
-->
