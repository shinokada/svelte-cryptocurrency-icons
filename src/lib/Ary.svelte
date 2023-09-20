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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.917-10.89l-7.589 2.733a.806.806 0 01-.595 0L8.12 21.11a.912.912 0 01-.595-.86v1.1a.9.9 0 00.595.86l7.588 2.733c.199.076.41.076.596 0l7.588-2.732a.912.912 0 00.595-.86v-1.1a.848.848 0 01-.57.86zm0-1.948l-7.589 2.733a.806.806 0 01-.595 0L8.12 19.162a.929.929 0 01-.595-.872v1.113a.9.9 0 00.595.86l7.588 2.732c.199.076.41.076.596 0l7.588-2.732a.912.912 0 00.595-.86v-1.1a.868.868 0 01-.57.86zm0-1.96l-7.589 2.732a.806.806 0 01-.595 0L8.12 17.202a.912.912 0 01-.595-.86v1.1a.9.9 0 00.595.86l7.6 2.745c.2.076.41.076.596 0l7.588-2.732a.912.912 0 00.596-.86v-1.1a.88.88 0 01-.583.847zM7.5 10.662v4.832a.9.9 0 00.595.86l7.589 2.732a.805.805 0 00.595 0l7.613-2.732a.912.912 0 00.595-.86v-4.832a.9.9 0 00-.595-.86l-7.6-2.745a.806.806 0 00-.596 0l-7.6 2.745a.9.9 0 00-.596.86z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#343434" r="16"/><path d="M23.917 21.11a.848.848 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 22.211a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0zm0-1.948a.867.867 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 20.263a.9.9 0 01-.595-.86V18.29c0 .392.235.733.595.872l7.613 2.733a.806.806 0 00.595 0zm0-1.96a.88.88 0 00.583-.848v1.1a.91.91 0 01-.596.86l-7.588 2.733a.806.806 0 01-.595 0L8.12 18.302a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0zM7.5 10.662a.9.9 0 01.595-.86l7.601-2.745a.806.806 0 01.595 0l7.601 2.745a.9.9 0 01.595.86v4.832a.91.91 0 01-.595.86l-7.613 2.732a.806.806 0 01-.595 0l-7.589-2.732a.9.9 0 01-.595-.86z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="120.6%" height="119.4%" x="-10.3%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23.917 20.11a.848.848 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 21.211a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0l7.589-2.733zm0-1.948a.867.867 0 00.57-.86v1.1a.91.91 0 01-.595.86l-7.588 2.733a.806.806 0 01-.596 0L8.12 19.263a.9.9 0 01-.595-.86V17.29c0 .392.235.733.595.872l7.613 2.733a.806.806 0 00.595 0l7.589-2.733zm0-1.96a.88.88 0 00.583-.848v1.1a.91.91 0 01-.596.86l-7.588 2.733a.806.806 0 01-.595 0L8.12 17.302a.9.9 0 01-.595-.86v-1.1c0 .379.235.733.595.86l7.613 2.732a.806.806 0 00.595 0l7.589-2.732zM7.5 9.662a.9.9 0 01.595-.86l7.601-2.745a.806.806 0 01.595 0l7.601 2.745a.9.9 0 01.595.86v4.832a.91.91 0 01-.595.86l-7.613 2.732a.806.806 0 01-.595 0l-7.589-2.732a.9.9 0 01-.595-.86V9.662z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#343434" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.917-10.89l-7.589 2.733a.806.806 0 01-.595 0L8.12 21.11a.912.912 0 01-.595-.86v1.1a.9.9 0 00.595.86l7.588 2.733c.199.076.41.076.596 0l7.588-2.732a.912.912 0 00.595-.86v-1.1a.848.848 0 01-.57.86zm0-1.948l-7.589 2.733a.806.806 0 01-.595 0L8.12 19.162a.929.929 0 01-.595-.872v1.113a.9.9 0 00.595.86l7.588 2.732c.199.076.41.076.596 0l7.588-2.732a.912.912 0 00.595-.86v-1.1a.868.868 0 01-.57.86zm0-1.96l-7.589 2.732a.806.806 0 01-.595 0L8.12 17.202a.912.912 0 01-.595-.86v1.1a.9.9 0 00.595.86l7.6 2.745c.2.076.41.076.596 0l7.588-2.732a.912.912 0 00.596-.86v-1.1a.88.88 0 01-.583.847zM7.5 10.662v4.832a.9.9 0 00.595.86l7.589 2.732a.805.805 0 00.595 0l7.613-2.732a.912.912 0 00.595-.86v-4.832a.9.9 0 00-.595-.86l-7.6-2.745a.806.806 0 00-.596 0l-7.6 2.745a.9.9 0 00-.596.86z" fill="#fff"/>';
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
  export let ariaLabel = 'ary';
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
@prop export let ariaLabel = 'ary';
-->
