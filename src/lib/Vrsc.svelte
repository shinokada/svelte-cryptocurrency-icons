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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.158 6.84c-.672-.273-1.445.115-1.996.588-1.453 1.229-2.631 2.609-2.285 4.64.167.978 1.673 4.137 3.284 7.276l.334.649c1.786 3.448 3.595 6.687 3.767 6.757 0 0 11.283-14.33 11.505-15.073.176-.592-.035-2.724-2.077-4.252-.582-.436-1.345-.79-1.902-.588-1.631.589-6.174 7.048-6.174 7.048l-.02-.04-.098-.195a76.543 76.543 0 00-1.788-3.335l-.269-.463c-.857-1.457-1.759-2.8-2.28-3.011z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle fill="#3165D4" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M8.846 7.428c.551-.473 1.324-.86 1.996-.587 1.21.49 4.456 7.044 4.456 7.044s4.543-6.46 6.174-7.048c.557-.201 1.32.152 1.902.588 2.042 1.528 2.253 3.66 2.077 4.252-.222.744-11.505 15.073-11.505 15.073-.338-.138-7.023-12.557-7.385-14.682-.346-2.031.832-3.411 2.285-4.64z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3165D4" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M8.846 6.428c.551-.473 1.324-.86 1.996-.587 1.21.49 4.456 7.044 4.456 7.044s4.543-6.46 6.174-7.048c.557-.201 1.32.152 1.902.588 2.042 1.528 2.253 3.66 2.077 4.252-.222.744-11.505 15.073-11.505 15.073-.338-.138-7.023-12.557-7.385-14.682-.346-2.031.832-3.411 2.285-4.64z" fill="#FFF"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.158 6.84c-.672-.273-1.445.115-1.996.588-1.453 1.229-2.631 2.609-2.285 4.64.167.978 1.673 4.137 3.284 7.276l.334.649c1.786 3.448 3.595 6.687 3.767 6.757 0 0 11.283-14.33 11.505-15.073.176-.592-.035-2.724-2.077-4.252-.582-.436-1.345-.79-1.902-.588-1.631.589-6.174 7.048-6.174 7.048l-.02-.04-.098-.195a76.543 76.543 0 00-1.788-3.335l-.269-.463c-.857-1.457-1.759-2.8-2.28-3.011z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'vrsc';
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
@prop export let ariaLabel = 'vrsc';
-->
