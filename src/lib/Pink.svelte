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
    '<g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.452-23.071A9.865 9.865 0 0016.43 6C10.946 6 6.5 10.477 6.5 16c0 2.624 1.003 5.011 2.644 6.795v-7.121h.008c.169-3.9 3.363-7.011 7.278-7.011 2.012 0 3.833.821 5.152 2.149zm0 14.142l-1.87-1.883a7.238 7.238 0 01-4.99 2.147V26a9.865 9.865 0 006.86-2.928zM11.68 24.784c.755.415 1.57.735 2.429.941v-5.511c.728.43 1.576.677 2.482.677 2.712 0 4.911-2.214 4.911-4.945 0-2.732-2.199-4.946-4.91-4.946-2.623 0-4.765 2.069-4.905 4.674h-.007zm4.911-6.338a2.491 2.491 0 01-2.482-2.5c0-1.381 1.111-2.5 2.482-2.5s2.483 1.119 2.483 2.5c0 1.38-1.112 2.5-2.483 2.5z"/><path d="M23.452 8.929l-1.87 1.883a7.238 7.238 0 00-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 016.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 017.022 2.929zm0 14.142A9.865 9.865 0 0116.592 26v-2.664a7.238 7.238 0 004.99-2.147z" opacity=".5"/></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ed79aa" r="16"/><g fill="#fff"><path d="M23.452 8.929l-1.87 1.883a7.238 7.238 0 00-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 016.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 017.022 2.929zm0 14.142A9.865 9.865 0 0116.592 26v-2.664a7.238 7.238 0 004.99-2.147z" opacity=".5"/><path d="M11.681 24.784v-9.11h.007C11.828 13.069 13.97 11 16.592 11c2.712 0 4.911 2.214 4.911 4.946 0 2.731-2.199 4.945-4.91 4.945a4.862 4.862 0 01-2.483-.677v5.511a9.822 9.822 0 01-2.429-.94zm4.911-6.338a2.491 2.491 0 002.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.491 2.491 0 00-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="120.6%" height="117.5%" x="-10.3%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#ED79AA" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(6.5 5)"><path d="M16.952 2.929l-1.87 1.883A7.238 7.238 0 009.93 2.663c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 010 10C0 4.477 4.446 0 9.93 0a9.865 9.865 0 017.022 2.929zm0 14.142A9.865 9.865 0 0110.092 20v-2.664a7.238 7.238 0 004.99-2.147l1.87 1.883z" opacity=".5"/><path d="M5.181 18.784v-9.11h.007C5.328 7.069 7.47 5 10.092 5c2.712 0 4.911 2.214 4.911 4.946 0 2.731-2.199 4.945-4.91 4.945a4.862 4.862 0 01-2.483-.677v5.511a9.822 9.822 0 01-2.429-.94zm4.911-6.338a2.491 2.491 0 002.483-2.5c0-1.381-1.112-2.5-2.483-2.5a2.491 2.491 0 00-2.482 2.5c0 1.38 1.111 2.5 2.482 2.5z"/></g></g>';
  let svgwhite =
    '<g fill="#fff" fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.452-23.071A9.865 9.865 0 0016.43 6C10.946 6 6.5 10.477 6.5 16c0 2.624 1.003 5.011 2.644 6.795v-7.121h.008c.169-3.9 3.363-7.011 7.278-7.011 2.012 0 3.833.821 5.152 2.149zm0 14.142l-1.87-1.883a7.238 7.238 0 01-4.99 2.147V26a9.865 9.865 0 006.86-2.928zM11.68 24.784c.755.415 1.57.735 2.429.941v-5.511c.728.43 1.576.677 2.482.677 2.712 0 4.911-2.214 4.911-4.945 0-2.732-2.199-4.946-4.91-4.946-2.623 0-4.765 2.069-4.905 4.674h-.007zm4.911-6.338a2.491 2.491 0 01-2.482-2.5c0-1.381 1.111-2.5 2.482-2.5s2.483 1.119 2.483 2.5c0 1.38-1.112 2.5-2.483 2.5z"/><path d="M23.452 8.929l-1.87 1.883a7.238 7.238 0 00-5.152-2.149c-3.915 0-7.11 3.11-7.278 7.01h-.008v7.122A10.003 10.003 0 016.5 16c0-5.523 4.446-10 9.93-10a9.865 9.865 0 017.022 2.929zm0 14.142A9.865 9.865 0 0116.592 26v-2.664a7.238 7.238 0 004.99-2.147z" opacity=".5"/></g>';
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
  export let ariaLabel = 'pink';
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
@prop export let ariaLabel = 'pink';
-->
