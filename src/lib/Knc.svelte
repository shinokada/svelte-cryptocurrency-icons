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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.382 17.546l1.927 8.647.027.078c.046.1.13.179.236.217a.403.403 0 00.392-.064l5.284-3.882.061-.053a.395.395 0 00-.105-.62l-7.822-4.323zm.136-11.343a.398.398 0 00-.445.006l-5.142 3.943-.094.081c-.206.2-.324.478-.323.769v10.006l.006.125c.03.29.177.557.411.736l5.117 3.932.07.038a.398.398 0 00.548-.443l-1.983-9.394 2.008-9.389.007-.08a.398.398 0 00-.18-.33zm8.305 5.525a.405.405 0 00-.412.009l-7.72 4.425 7.72 4.423.08.036a.408.408 0 00.538-.389v-8.146l-.008-.087a.405.405 0 00-.198-.27zm-5.924-5.875a.42.42 0 00-.59.266l-1.927 8.647 7.82-4.323.067-.044a.39.39 0 00-.021-.62l-5.278-3.882z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#31CB9E" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M14.927 16.162l7.72 4.423a.408.408 0 00.618-.353v-8.146a.405.405 0 00-.618-.35l-7.72 4.426zm7.557-6.383l-5.278-3.882a.42.42 0 00-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 00.046-.664M17.2 26.424l5.284-3.882a.395.395 0 00-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 00.655.238"/><path d="M12.92 16.002l2.007-9.389a.398.398 0 00-.618-.404l-5.142 3.943a1.065 1.065 0 00-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 00.618-.405l-1.983-9.394z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#31CB9E" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill="#FFF" fill-rule="nonzero"><path d="M14.927 15.162l7.72 4.423a.408.408 0 00.618-.353v-8.146a.405.405 0 00-.618-.35l-7.72 4.426zm7.557-6.383l-5.278-3.882a.42.42 0 00-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 00.046-.664M17.2 25.424l5.284-3.882a.395.395 0 00-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 00.655.238"/><path d="M12.92 15.002l2.007-9.389a.398.398 0 00-.618-.404L9.167 9.152a1.065 1.065 0 00-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 00.618-.405l-1.983-9.394z"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.382 17.546l1.927 8.647.027.078c.046.1.13.179.236.217a.403.403 0 00.392-.064l5.284-3.882.061-.053a.395.395 0 00-.105-.62l-7.822-4.323zm.136-11.343a.398.398 0 00-.445.006l-5.142 3.943-.094.081c-.206.2-.324.478-.323.769v10.006l.006.125c.03.29.177.557.411.736l5.117 3.932.07.038a.398.398 0 00.548-.443l-1.983-9.394 2.008-9.389.007-.08a.398.398 0 00-.18-.33zm8.305 5.525a.405.405 0 00-.412.009l-7.72 4.425 7.72 4.423.08.036a.408.408 0 00.538-.389v-8.146l-.008-.087a.405.405 0 00-.198-.27zm-5.924-5.875a.42.42 0 00-.59.266l-1.927 8.647 7.82-4.323.067-.044a.39.39 0 00-.021-.62l-5.278-3.882z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'knc';
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
@prop export let ariaLabel = 'knc';
-->
