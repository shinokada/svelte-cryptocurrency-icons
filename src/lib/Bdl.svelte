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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.328 8.617c-.004 3.117 0 6.233-.004 9.351.644-2.079 2.288-3.825 4.35-4.537 1.794-.629 3.86-.513 5.542.39 0-.175 0-.349.002-.524-2.106-1.012-4.687-.962-6.736.168.02-2.716-.003-5.432.011-8.148a436.69 436.69 0 01-2.968 2.965c-.08.1-.216.188-.197.335zm13.39 11.662c.01-3.925-.012-7.851.01-11.776-1.08-1.085-2.16-2.172-3.25-3.246.03.509.021 1.019.02 1.528-.002 4.055.014 8.11.008 12.164-.007.786.073 1.607-.247 2.35-.503 1.31-1.86 2.23-3.266 2.195-1.462.016-2.845-1.005-3.282-2.396-.49-1.41.067-3.089 1.296-3.935 1.117-.81 2.725-.845 3.882-.098.585.366 1.027.918 1.325 1.535a290.645 290.645 0 010-4.482c-1.825-1.005-4.12-1.08-6.005-.192a6.749 6.749 0 00-3.268 3.253c-.593 1.274-.786 2.74-.501 4.119.328 1.742 1.399 3.322 2.878 4.295a6.697 6.697 0 008.503-.91 6.652 6.652 0 001.897-4.404z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#E54C40"/><path fill="#FFF" fill-rule="nonzero" d="M9.328 8.617c-.02-.147.118-.235.197-.335a436.69 436.69 0 002.968-2.965c-.014 2.716.008 5.432-.011 8.148 2.049-1.13 4.63-1.18 6.736-.168-.002.175-.002.349-.002.525-1.681-.904-3.748-1.02-5.541-.39-2.063.71-3.707 2.457-4.35 4.536.003-3.118-.001-6.234.003-9.351zm13.39 11.662a6.652 6.652 0 01-1.897 4.405 6.697 6.697 0 01-8.503.91c-1.48-.974-2.55-2.554-2.878-4.296-.285-1.38-.092-2.845.501-4.12a6.749 6.749 0 013.268-3.252c1.884-.888 4.18-.813 6.004.192-.011 1.494-.01 2.988.001 4.482-.298-.617-.74-1.169-1.325-1.535-1.157-.747-2.765-.712-3.882.098-1.23.846-1.785 2.524-1.296 3.935.437 1.391 1.82 2.412 3.282 2.396 1.406.035 2.763-.884 3.266-2.195.32-.743.24-1.564.247-2.35.006-4.055-.01-8.11-.008-12.164.001-.51.01-1.02-.02-1.528 1.09 1.074 2.17 2.161 3.25 3.246-.022 3.925 0 7.85-.01 11.777z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="126.1%" height="116.3%" x="-13%" y="-5.8%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M9.328 7.617c-.02-.147.118-.235.197-.335a436.69 436.69 0 002.968-2.965c-.014 2.716.008 5.432-.011 8.148 2.049-1.13 4.63-1.18 6.736-.168-.002.175-.002.349-.002.525-1.681-.904-3.748-1.02-5.541-.39-2.063.71-3.707 2.457-4.35 4.536.003-3.118-.001-6.234.003-9.351zm13.39 11.662a6.652 6.652 0 01-1.897 4.405 6.697 6.697 0 01-8.503.91c-1.48-.974-2.55-2.554-2.878-4.296-.285-1.38-.092-2.845.501-4.12a6.749 6.749 0 013.268-3.252c1.884-.888 4.18-.813 6.004.192-.011 1.494-.01 2.988.001 4.482-.298-.617-.74-1.169-1.325-1.535-1.157-.747-2.765-.712-3.882.098-1.23.846-1.785 2.524-1.296 3.935.437 1.391 1.82 2.412 3.282 2.396 1.406.035 2.763-.884 3.266-2.195.32-.743.24-1.564.247-2.35.006-4.055-.01-8.11-.008-12.164.001-.51.01-1.02-.02-1.528 1.09 1.074 2.17 2.161 3.25 3.246-.022 3.925 0 7.85-.01 11.777z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#E54C40" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.328 8.617c-.004 3.117 0 6.233-.004 9.351.644-2.079 2.288-3.825 4.35-4.537 1.794-.629 3.86-.513 5.542.39 0-.175 0-.349.002-.524-2.106-1.012-4.687-.962-6.736.168.02-2.716-.003-5.432.011-8.148a436.69 436.69 0 01-2.968 2.965c-.08.1-.216.188-.197.335zm13.39 11.662c.01-3.925-.012-7.851.01-11.776-1.08-1.085-2.16-2.172-3.25-3.246.03.509.021 1.019.02 1.528-.002 4.055.014 8.11.008 12.164-.007.786.073 1.607-.247 2.35-.503 1.31-1.86 2.23-3.266 2.195-1.462.016-2.845-1.005-3.282-2.396-.49-1.41.067-3.089 1.296-3.935 1.117-.81 2.725-.845 3.882-.098.585.366 1.027.918 1.325 1.535a290.645 290.645 0 010-4.482c-1.825-1.005-4.12-1.08-6.005-.192a6.749 6.749 0 00-3.268 3.253c-.593 1.274-.786 2.74-.501 4.119.328 1.742 1.399 3.322 2.878 4.295a6.697 6.697 0 008.503-.91 6.652 6.652 0 001.897-4.404z"/>';
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
  export let ariaLabel = 'bdl';
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
@prop export let ariaLabel = 'bdl';
-->
