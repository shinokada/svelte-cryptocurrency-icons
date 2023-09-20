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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.586-14.624V13.54a1.91 1.91 0 01-1.345-1.823 1.911 1.911 0 012.686-1.748l1.786-1.033-4.519-2.616a2.384 2.384 0 00-2.388 0l-2.273 1.315.984.55v2.673a1.91 1.91 0 011.14 2.794l3.676 3.821c.082-.038.166-.071.253-.098zm1.138 0a1.908 1.908 0 010 3.646v3.192l4.091-2.368A2.372 2.372 0 0025 19.793v-7.586c0-.846-.451-1.628-1.185-2.053l-.968-.56-2.031 1.174a1.91 1.91 0 01-1.092 2.773zm-2.227.869l-3.676-3.822a1.903 1.903 0 01-.304.113v3.598a1.91 1.91 0 011.397 1.839 1.912 1.912 0 01-3.144 1.462l-1.83 1.428 4.865 2.816c.738.428 1.65.428 2.388 0l1.392-.806v-3.85a1.91 1.91 0 01-1.089-2.778zm-5.118-.079v-3.662c-.752-.257-1.293-.969-1.293-1.806s.541-1.55 1.293-1.807v-2.04l-.99-.553-3.204 1.856A2.372 2.372 0 007 12.207v7.586c0 .846.451 1.628 1.185 2.053l.697.403 2.27-1.775a1.907 1.907 0 011.227-2.308zM13 13.523a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm0 7.275a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm6.155-8.255a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm0 7.482a.827.827 0 10.002-1.654.827.827 0 00-.002 1.654z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#622fba" fill-rule="nonzero" r="16"/><path d="M18.586 17.376c-.087.027-.171.06-.253.098l-3.676-3.821a1.91 1.91 0 00-1.14-2.794V8.186l-.984-.55 2.273-1.315a2.384 2.384 0 012.388 0l4.519 2.616-1.786 1.033a1.911 1.911 0 00-2.686 1.747 1.91 1.91 0 001.345 1.824zm1.138 0V13.54a1.91 1.91 0 001.092-2.773l2.03-1.174.97.56A2.372 2.372 0 0125 12.207v7.586c0 .846-.451 1.628-1.185 2.053l-4.09 2.368v-3.192a1.91 1.91 0 00-.001-3.646zm-2.227.869a1.91 1.91 0 001.089 2.777v3.851l-1.392.806a2.384 2.384 0 01-2.388 0L9.94 22.863l1.828-1.428a1.91 1.91 0 001.231.447 1.911 1.911 0 001.914-1.91 1.91 1.91 0 00-1.397-1.838v-3.598c.105-.029.207-.067.304-.113zm-5.118-.079a1.91 1.91 0 00-1.226 2.308L8.882 22.25l-.697-.403A2.372 2.372 0 017 19.793v-7.586c0-.846.451-1.628 1.185-2.053l3.205-1.856.99.553v2.04a1.91 1.91 0 00-.001 3.613zM13 13.523a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.275a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm6.155-8.255a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.482a.827.827 0 11-.002-1.654.827.827 0 01.002 1.654z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="119.4%" height="117.5%" x="-9.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M18.586 16.376c-.087.027-.171.06-.253.098l-3.676-3.821a1.91 1.91 0 00-1.14-2.794V7.186l-.984-.55 2.273-1.315a2.384 2.384 0 012.388 0l4.519 2.616-1.786 1.033a1.911 1.911 0 00-2.686 1.747 1.91 1.91 0 001.345 1.824v3.835zm1.138 0V12.54a1.91 1.91 0 001.092-2.773l2.03-1.174.97.56A2.372 2.372 0 0125 11.207v7.586c0 .846-.451 1.628-1.185 2.053l-4.09 2.368v-3.192a1.91 1.91 0 001.344-1.823 1.91 1.91 0 00-1.345-1.823zm-2.227.869a1.91 1.91 0 001.089 2.777v3.851l-1.392.806a2.384 2.384 0 01-2.388 0L9.94 21.863l1.828-1.428a1.91 1.91 0 001.231.447 1.911 1.911 0 001.914-1.91 1.91 1.91 0 00-1.397-1.838v-3.598c.105-.029.207-.067.304-.113l3.676 3.822zm-5.118-.079a1.91 1.91 0 00-1.226 2.308L8.882 21.25l-.697-.403A2.372 2.372 0 017 18.793v-7.586c0-.846.451-1.628 1.185-2.053l3.205-1.856.99.553v2.04a1.91 1.91 0 00-1.294 1.807c0 .837.541 1.55 1.293 1.806v3.662zM13 12.523a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.275a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm6.155-8.255a.827.827 0 11-.002-1.653.827.827 0 01.002 1.653zm0 7.482a.827.827 0 11-.002-1.654.827.827 0 01.002 1.654z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#622FBA" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.586-14.624V13.54a1.91 1.91 0 01-1.345-1.823 1.911 1.911 0 012.686-1.748l1.786-1.033-4.519-2.616a2.384 2.384 0 00-2.388 0l-2.273 1.315.984.55v2.673a1.91 1.91 0 011.14 2.794l3.676 3.821c.082-.038.166-.071.253-.098zm1.138 0a1.908 1.908 0 010 3.646v3.192l4.091-2.368A2.372 2.372 0 0025 19.793v-7.586c0-.846-.451-1.628-1.185-2.053l-.968-.56-2.031 1.174a1.91 1.91 0 01-1.092 2.773zm-2.227.869l-3.676-3.822a1.903 1.903 0 01-.304.113v3.598a1.91 1.91 0 011.397 1.839 1.912 1.912 0 01-3.144 1.462l-1.83 1.428 4.865 2.816c.738.428 1.65.428 2.388 0l1.392-.806v-3.85a1.91 1.91 0 01-1.089-2.778zm-5.118-.079v-3.662c-.752-.257-1.293-.969-1.293-1.806s.541-1.55 1.293-1.807v-2.04l-.99-.553-3.204 1.856A2.372 2.372 0 007 12.207v7.586c0 .846.451 1.628 1.185 2.053l.697.403 2.27-1.775a1.907 1.907 0 011.227-2.308zM13 13.523a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm0 7.275a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm6.155-8.255a.827.827 0 10.002-1.653.827.827 0 00-.002 1.653zm0 7.482a.827.827 0 10.002-1.654.827.827 0 00-.002 1.654z" fill="#fff"/>';
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
  export let ariaLabel = 'ndz';
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
@prop export let ariaLabel = 'ndz';
-->
