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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.5 10.487v11.026L16 27l9.5-5.487V10.487L16 5l-9.5 5.487zm.912 9.97v-8.913l5.743 3.323-1.933 3.385-3.81 2.205zm.457.791l3.664-2.12 4.038 2.313v4.256l-7.702-4.449zm16.719-9.673v8.85l-3.76-2.175-1.932-3.382 5.692-3.293zm-.43-.808l-5.715 3.307-1.96-3.431V6.334l7.675 4.433zm-6.047 4.555l1.153 2.023L16.939 16l1.172-.678zm-.453-.794l-1.175.68v-2.74l1.175 2.06zm-4.864 2.815l1.151-2.02 1.17.677-2.32 1.343zm-.346 1.256l3.123-1.807v3.595L12.448 18.6zm-4.58-7.847l7.703-4.449v4.334l-1.962 3.436-5.74-3.321zm16.29 10.481l-7.675 4.433V21.47l4.04-2.34 3.635 2.103zm-4.548-2.632l-3.127 1.813v-3.622l3.127 1.81zm-5.212-4.071l1.173-2.057v2.735l-1.173-.678z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#3EFFFF"/><path fill="#FFF" fill-rule="nonzero" d="M6.5 10.487L16 5l9.5 5.487v11.026L16 27l-9.5-5.487V10.487zm.912 9.97l3.81-2.205 1.933-3.385-5.743-3.323v8.913zm.457.791l7.702 4.449V21.44l-4.038-2.313-3.664 2.12zm16.719-9.673l-5.692 3.293 1.932 3.382 3.76 2.176v-8.851zm-.43-.808l-7.675-4.433v4.309l1.96 3.431 5.715-3.307zm-6.047 4.555L16.939 16l2.325 1.345-1.153-2.023zm-.453-.794l-1.175-2.06v2.74l1.175-.68zm-4.864 2.815L15.114 16l-1.169-.676-1.15 2.019zm-.346 1.256l3.123 1.788v-3.595l-3.123 1.807zm-4.58-7.847l5.74 3.32 1.963-3.435V6.303l-7.703 4.449zm16.29 10.481l-3.636-2.104-4.039 2.341v4.196l7.675-4.433zm-4.548-2.632l-3.127-1.809v3.622L19.61 18.6zm-5.212-4.071l1.173.678v-2.735l-1.173 2.057z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="118.4%" height="115.9%" x="-9.2%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M6.5 9.487L16 4l9.5 5.487v11.026L16 26l-9.5-5.487V9.487zm.912 9.97l3.81-2.205 1.933-3.385-5.743-3.323v8.913zm.457.791l7.702 4.449V20.44l-4.038-2.313-3.664 2.12zm16.719-9.673l-5.692 3.293 1.932 3.382 3.76 2.176v-8.851zm-.43-.808l-7.675-4.433v4.309l1.96 3.431 5.715-3.307zm-6.047 4.555L16.939 15l2.325 1.345-1.153-2.023zm-.453-.794l-1.175-2.06v2.74l1.175-.68zm-4.864 2.815L15.114 15l-1.169-.676-1.15 2.019zm-.346 1.256l3.123 1.788v-3.595l-3.123 1.807zm-4.58-7.847l5.74 3.32 1.963-3.435V5.303L7.868 9.752zm16.29 10.481l-3.636-2.104-4.039 2.341v4.196l7.675-4.433zm-4.548-2.632l-3.127-1.809v3.622L19.61 17.6zm-5.212-4.071l1.173.678v-2.735l-1.173 2.057z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3EFFFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.5 10.487v11.026L16 27l9.5-5.487V10.487L16 5l-9.5 5.487zm.912 9.97v-8.913l5.743 3.323-1.933 3.385-3.81 2.205zm.457.791l3.664-2.12 4.038 2.313v4.256l-7.702-4.449zm16.719-9.673v8.85l-3.76-2.175-1.932-3.382 5.692-3.293zm-.43-.808l-5.715 3.307-1.96-3.431V6.334l7.675 4.433zm-6.047 4.555l1.153 2.023L16.939 16l1.172-.678zm-.453-.794l-1.175.68v-2.74l1.175 2.06zm-4.864 2.815l1.151-2.02 1.17.677-2.32 1.343zm-.346 1.256l3.123-1.807v3.595L12.448 18.6zm-4.58-7.847l7.703-4.449v4.334l-1.962 3.436-5.74-3.321zm16.29 10.481l-7.675 4.433V21.47l4.04-2.34 3.635 2.103zm-4.548-2.632l-3.127 1.813v-3.622l3.127 1.81zm-5.212-4.071l1.173-2.057v2.735l-1.173-.678z"/>';
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
  export let ariaLabel = 'abt';
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
@prop export let ariaLabel = 'abt';
-->
