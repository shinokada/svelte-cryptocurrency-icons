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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.1-20.87c-.047-2.914-3.401-3.66-3.401-3.66s1.882 1.266 1.93 3.829c.047 2.563-.965 3.563-.965 3.563s2.483-.819 2.436-3.732zM11.936 24.819V7.169L8.5 7v.289s2.103.554 2.103 3.748v9.64c0 3.773-2.103 3.99-2.103 3.99v.32zm5.492.18c1.494-.011 3.789-1.058 4.213-3.912.423-2.854-.67-4.166-1.236-4.648-.565-.481-2.165-1.035-2.165-1.035s1.058-.542 1.541-1.325.86-2.215.506-3.72c-.353-1.505-1.647-3.01-3.154-3.227-1.506-.216-2.145.036-3.973.06v17.61s2.773.21 4.268.197zm3.971-.65s3.136-.903 3.1-4.334c-.034-3.431-3.1-4.202-3.1-4.202s1.487 1.354 1.558 4.235S21.4 24.35 21.4 24.35zm-3.1-10.334c-1.099 1.461-3.836 1.076-3.836 1.076s-.013-6.166.258-6.431c.27-.265 1.671-.735 3 .205 1.33.94 1.676 3.689.577 5.15zm.203 2.625c1.028.457 2.33 2.014 1.695 4.526-.635 2.513-2.565 2.585-3.577 2.545-1.012-.04-1.986-.024-2.095-2.938s-.063-4.47-.063-4.47 3.012-.121 4.04.337z" fill="#181818" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#181818" r="16"/><path d="M23.1 11.13a3.803 3.803 0 01-2.436 3.732s1.012-1 .965-3.563c-.048-2.563-1.93-3.83-1.93-3.83s3.354.747 3.4 3.66zM11.936 24.819l-3.436.169v-.321s2.103-.217 2.103-3.99v-9.64C10.603 7.843 8.5 7.29 8.5 7.29V7l3.436.168zm5.492.18c-1.495.013-4.268-.196-4.268-.196V7.193c1.828-.025 2.467-.277 3.973-.06 1.507.216 2.801 1.721 3.154 3.226.353 1.505-.023 2.938-.506 3.72s-1.541 1.325-1.541 1.325 1.6.554 2.165 1.035c.565.482 1.66 1.794 1.236 4.648-.424 2.854-2.719 3.9-4.213 3.912zm3.971-.65s1.63-1.42 1.558-4.301-1.558-4.235-1.558-4.235 3.066.77 3.1 4.202c.036 3.431-3.1 4.335-3.1 4.335zm-3.1-10.334c1.098-1.461.753-4.21-.577-5.15-1.33-.94-2.73-.47-3-.205-.272.265-.26 6.43-.26 6.43s2.738.386 3.836-1.075zm.203 2.625c-1.028-.458-4.04-.338-4.04-.338s-.047 1.557.063 4.471 1.083 2.898 2.095 2.938c1.012.04 2.942-.032 3.577-2.545.636-2.512-.667-4.069-1.695-4.526z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="119.4%" x="-10.9%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M23.1 10.13a3.803 3.803 0 01-2.436 3.732s1.012-1 .965-3.563c-.048-2.563-1.93-3.83-1.93-3.83s3.354.747 3.4 3.66zM11.936 23.819l-3.436.169v-.321s2.103-.217 2.103-3.99v-9.64C10.603 6.843 8.5 6.29 8.5 6.29V6l3.436.168V23.82zm5.492.18c-1.495.013-4.268-.196-4.268-.196V6.193c1.828-.025 2.467-.277 3.973-.06 1.507.216 2.801 1.721 3.154 3.226.353 1.505-.023 2.938-.506 3.72-.483.783-1.541 1.325-1.541 1.325s1.6.554 2.165 1.035c.565.482 1.66 1.794 1.236 4.648-.424 2.854-2.719 3.9-4.213 3.912zm3.971-.65s1.63-1.42 1.558-4.301c-.071-2.88-1.558-4.235-1.558-4.235s3.066.77 3.1 4.202c.036 3.431-3.1 4.335-3.1 4.335zm-3.1-10.334c1.098-1.461.753-4.21-.577-5.15-1.33-.94-2.73-.47-3-.205-.272.265-.26 6.43-.26 6.43s2.738.386 3.836-1.075zm.203 2.625c-1.028-.458-4.04-.338-4.04-.338s-.047 1.558.063 4.471c.11 2.914 1.083 2.898 2.095 2.938 1.012.04 2.942-.032 3.577-2.545.636-2.512-.667-4.069-1.695-4.526z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#181818" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.1-20.87c-.047-2.914-3.401-3.66-3.401-3.66s1.882 1.266 1.93 3.829c.047 2.563-.965 3.563-.965 3.563s2.483-.819 2.436-3.732zM11.936 24.819V7.169L8.5 7v.289s2.103.554 2.103 3.748v9.64c0 3.773-2.103 3.99-2.103 3.99v.32zm5.492.18c1.494-.011 3.789-1.058 4.213-3.912.423-2.854-.67-4.166-1.236-4.648-.565-.481-2.165-1.035-2.165-1.035s1.058-.542 1.541-1.325.86-2.215.506-3.72c-.353-1.505-1.647-3.01-3.154-3.227-1.506-.216-2.145.036-3.973.06v17.61s2.773.21 4.268.197zm3.971-.65s3.136-.903 3.1-4.334c-.034-3.431-3.1-4.202-3.1-4.202s1.487 1.354 1.558 4.235S21.4 24.35 21.4 24.35zm-3.1-10.334c-1.099 1.461-3.836 1.076-3.836 1.076s-.013-6.166.258-6.431c.27-.265 1.671-.735 3 .205 1.33.94 1.676 3.689.577 5.15zm.203 2.625c1.028.457 2.33 2.014 1.695 4.526-.635 2.513-2.565 2.585-3.577 2.545-1.012-.04-1.986-.024-2.095-2.938s-.063-4.47-.063-4.47 3.012-.121 4.04.337z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'blk';
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
@prop export let ariaLabel = 'blk';
-->
