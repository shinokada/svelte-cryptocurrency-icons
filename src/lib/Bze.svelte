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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.04 5.75h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 24.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797l-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293zm5.967 4.588l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#00AEEF" cx="16" cy="16" r="16"/><path d="M13.952 24.461H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25zm8.944-13.516l-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 24.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter x="-10.3%" y="-6.6%" width="120.6%" height="118.4%" filterUnits="objectBoundingBox" id="d"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1"/></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path d="M13.952 23.461H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25zm8.944-13.516l-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 23.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797z" id="e"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00AEEF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.04 5.75h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 24.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797l-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293zm5.967 4.588l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'bze';
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
@prop export let ariaLabel = 'bze';
-->
