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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.973-12.62l.744-1.48a.378.378 0 00-.02-.362.381.381 0 00-.314-.171H8.835l4.197-7.756 3.749 6.82c.066.115.19.191.324.191h1.688a.346.346 0 00.315-.18.396.396 0 00.01-.373L13.346 5.691c-.133-.239-.515-.239-.648 0L5.296 19.036a.37.37 0 00.01.372c.066.114.19.181.314.181h4.073a.372.372 0 00.334-.21zm16.674-.344L19.29 5.69a.388.388 0 00-.334-.191.39.39 0 00-.324.2l-1.85 3.711a.407.407 0 000 .334l.744 1.478c.124.248.534.248.667 0l.792-1.583 4.188 7.727h-7.908c-.2 0-.372.162-.372.372v1.478c0 .2.162.372.372.372h11.113a.346.346 0 00.315-.181.35.35 0 00.01-.372zm-4.817 1.478a.381.381 0 00-.324-.19h-1.851a.381.381 0 00-.324.19.35.35 0 00.01.372l.772 1.288H11.83l3.758-6.486a.358.358 0 00.01-.353l-.744-1.479a.35.35 0 00-.325-.2.358.358 0 00-.334.19l-2.957 5.18-2.966 4.817a.37.37 0 00-.01.372.38.38 0 00.325.191H23.41a.346.346 0 00.315-.181.37.37 0 000-.372l-1.841-3.339z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#C9A35E"/><path fill="#FFF" d="M10.027 19.38a.372.372 0 01-.334.21H5.62a.368.368 0 01-.315-.182.37.37 0 01-.01-.372L12.699 5.69c.133-.239.515-.239.648 0l5.772 10.378a.396.396 0 01-.01.372.346.346 0 01-.315.181h-1.688a.381.381 0 01-.324-.19l-3.75-6.82-4.196 7.755h1.602a.38.38 0 01.315.171.378.378 0 01.019.363l-.744 1.478zm16.674-.344a.35.35 0 01-.01.372.346.346 0 01-.314.181H15.264a.372.372 0 01-.372-.372V17.74c0-.21.171-.372.372-.372h7.908L18.984 9.64l-.792 1.583c-.133.248-.543.248-.667 0l-.744-1.478a.407.407 0 010-.334l1.85-3.71a.39.39 0 01.324-.201.39.39 0 01.334.19l7.412 13.346zm-4.817 1.478l1.84 3.339a.37.37 0 010 .372.346.346 0 01-.314.181H8.587a.381.381 0 01-.325-.19.37.37 0 01.01-.373l2.966-4.817 2.957-5.18c.067-.123.2-.2.334-.19a.35.35 0 01.325.2l.744 1.479a.358.358 0 01-.01.353l-3.758 6.486h8.337l-.773-1.288a.35.35 0 01-.01-.372.381.381 0 01.325-.19h1.85c.134 0 .258.076.325.19z"/></g>';
  let svgicon =
    '<defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#C9A35E" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="15" cy="15" r="14.5" stroke="#000" stroke-linejoin="square" stroke-opacity=".097"/><path fill="#FFF" d="M9.4 18.168a.349.349 0 01-.313.197H5.27a.345.345 0 01-.295-.17.348.348 0 01-.01-.349l6.94-12.51c.125-.224.483-.224.608 0l5.41 9.729a.37.37 0 01-.008.349.324.324 0 01-.295.17h-1.583a.357.357 0 01-.304-.18l-3.515-6.393-3.935 7.27h1.503c.116 0 .232.063.295.161a.354.354 0 01.018.34L9.4 18.168zm15.632-.322a.328.328 0 01-.009.349.324.324 0 01-.295.17H14.31a.35.35 0 01-.349-.349V16.63a.35.35 0 01.349-.349h7.413l-3.925-7.244-.743 1.485c-.125.232-.51.232-.626 0l-.697-1.386a.382.382 0 010-.313l1.735-3.479a.366.366 0 01.304-.188c.116 0 .25.063.313.18l6.948 12.51zm-4.516 1.386l1.726 3.13a.347.347 0 010 .349.324.324 0 01-.295.17H8.05a.357.357 0 01-.304-.179.348.348 0 01.009-.349l2.781-4.516 2.772-4.856a.336.336 0 01.313-.179c.134 0 .25.072.304.188l.698 1.386a.335.335 0 01-.01.331l-3.523 6.081h7.816l-.724-1.207a.328.328 0 01-.009-.349.357.357 0 01.304-.179h1.735c.125 0 .242.072.304.18z"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.973-12.62l.744-1.48a.378.378 0 00-.02-.362.381.381 0 00-.314-.171H8.835l4.197-7.756 3.749 6.82c.066.115.19.191.324.191h1.688a.346.346 0 00.315-.18.396.396 0 00.01-.373L13.346 5.691c-.133-.239-.515-.239-.648 0L5.296 19.036a.37.37 0 00.01.372c.066.114.19.181.314.181h4.073a.372.372 0 00.334-.21zm16.674-.344L19.29 5.69a.388.388 0 00-.334-.191.39.39 0 00-.324.2l-1.85 3.711a.407.407 0 000 .334l.744 1.478c.124.248.534.248.667 0l.792-1.583 4.188 7.727h-7.908c-.2 0-.372.162-.372.372v1.478c0 .2.162.372.372.372h11.113a.346.346 0 00.315-.181.35.35 0 00.01-.372zm-4.817 1.478a.381.381 0 00-.324-.19h-1.851a.381.381 0 00-.324.19.35.35 0 00.01.372l.772 1.288H11.83l3.758-6.486a.358.358 0 00.01-.353l-.744-1.479a.35.35 0 00-.325-.2.358.358 0 00-.334.19l-2.957 5.18-2.966 4.817a.37.37 0 00-.01.372.38.38 0 00.325.191H23.41a.346.346 0 00.315-.181.37.37 0 000-.372l-1.841-3.339z"/>';
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
  export let ariaLabel = 'eqli';
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
@prop export let ariaLabel = 'eqli';
-->
