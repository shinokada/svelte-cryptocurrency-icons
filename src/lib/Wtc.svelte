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
    '<g fill-rule="evenodd"><path fill-rule="nonzero" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.414-18.834v-2.49a.662.662 0 00-.02-.164.69.69 0 00-.837-.492l-3.448.844a.678.678 0 00-.523.656v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.247-.55v-4.538c0-.62.43-1.16 1.044-1.31l.68-.167zm-7.586-.042v-2.449a.662.662 0 00-.021-.163.69.69 0 00-.836-.492l-3.449.844A.678.678 0 006 11.52v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.074-.508v-4.58c0-.62.43-1.16 1.045-1.31l.852-.209zm10.867-2.239a.678.678 0 00-.523.655v7.556a.69.69 0 00.857.655l3.449-.844a.678.678 0 00.522-.655v-7.556a.662.662 0 00-.02-.164.69.69 0 00-.837-.491l-3.448.844zm-8.798 2.429l-2.754.674a.678.678 0 00-.522.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.448-.844a.678.678 0 00.522-.655v-.94a1.379 1.379 0 01-1.51-1.012 1.324 1.324 0 01-.041-.328v-5.761zm7.586.042l-2.581.632a.678.678 0 00-.523.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.449-.844a.678.678 0 00.522-.655v-.951l-.01.002c-.74.181-1.488-.259-1.673-.982a1.324 1.324 0 01-.041-.328v-5.74z"/><path d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#8200FF" fill-rule="nonzero"/><path fill="#FFF" d="M18.414 13.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 01-.836-.492.662.662 0 01-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zm10.867-2.239l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V11.54c0-.31.215-.58.522-.655z"/><path fill="#FFF" d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="126.9%" x="-8.8%" y="-9.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#8200FF" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><g fill="#FFF" filter="url(#d)" transform="translate(6 9)"><path d="M12.414 3.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V1.52c0-.31.215-.58.522-.656L11.557.02a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58L.857 9.73a.69.69 0 01-.836-.492A.662.662 0 010 9.075V1.52C0 1.21.215.94.522.864L3.971.02a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zM15.695.885l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V1.54c0-.31.215-.58.522-.655z"/><path d="M6.897 3.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164V4.643c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V4.643c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g></g>';
  let svgwhite =
    '<g fill="#FFF" fill-rule="evenodd"><path fill-rule="nonzero" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.414-18.834v-2.49a.662.662 0 00-.02-.164.69.69 0 00-.837-.492l-3.448.844a.678.678 0 00-.523.656v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.247-.55v-4.538c0-.62.43-1.16 1.044-1.31l.68-.167zm-7.586-.042v-2.449a.662.662 0 00-.021-.163.69.69 0 00-.836-.492l-3.449.844A.678.678 0 006 11.52v7.555c0 .056.007.11.02.164a.69.69 0 00.837.492l2.074-.508v-4.58c0-.62.43-1.16 1.045-1.31l.852-.209zm10.867-2.239a.678.678 0 00-.523.655v7.556a.69.69 0 00.857.655l3.449-.844a.678.678 0 00.522-.655v-7.556a.662.662 0 00-.02-.164.69.69 0 00-.837-.491l-3.448.844zm-8.798 2.429l-2.754.674a.678.678 0 00-.522.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.448-.844a.678.678 0 00.522-.655v-.94a1.379 1.379 0 01-1.51-1.012 1.324 1.324 0 01-.041-.328v-5.761zm7.586.042l-2.581.632a.678.678 0 00-.523.655v7.556c0 .055.007.11.02.164a.69.69 0 00.837.491l3.449-.844a.678.678 0 00.522-.655v-.951l-.01.002c-.74.181-1.488-.259-1.673-.982a1.324 1.324 0 01-.041-.328v-5.74z"/><path d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z" opacity=".504"/></g>';
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
  export let ariaLabel = 'wtc';
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
@prop export let ariaLabel = 'wtc';
-->
