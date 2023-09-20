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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.047 15.454l-.008-1.737 9.642 5.659c.228.134.51.135.74.001l10.211-5.944a.744.744 0 00.005-1.28l-10.212-6.05a.732.732 0 00-.749.001L5.256 12.34a.529.529 0 00-.249.542.644.644 0 00-.007.098v2.474c0 .647.343 1.245.899 1.569l9.783 5.7c.23.133.513.132.742-.003l9.473-5.604v1.901l-9.847 5.878-10.263-6.033a.521.521 0 00-.716.19.53.53 0 00.189.721l10.42 6.126c.23.136.516.135.746-.003l10.157-6.063a.743.743 0 00.36-.637v-2.627a.739.739 0 00-1.108-.64l-9.785 5.79-9.627-5.61a.759.759 0 01-.376-.655zm10.006 2.92l-9.498-5.585 9.498-5.684 9.594 5.684-9.594 5.584z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1387C9"/><path fill="#FFF" fill-rule="nonzero" d="M16.053 18.373l9.594-5.584-9.594-5.684-9.498 5.684 9.498 5.584zm-10.006-2.92a.76.76 0 00.376.657l9.627 5.608 9.785-5.788a.739.739 0 011.109.64v2.626a.743.743 0 01-.361.637l-10.157 6.063a.732.732 0 01-.746.003L5.26 19.773a.53.53 0 01-.189-.721.521.521 0 01.716-.19l10.263 6.033 9.847-5.878v-1.9l-9.473 5.603a.732.732 0 01-.742.003l-9.783-5.7A1.815 1.815 0 015 15.453V12.98a.631.631 0 01.947-.548l.608.357-.764.457a.521.521 0 01-.784-.364.529.529 0 01.25-.542l10.419-6.236a.732.732 0 01.75-.002l10.211 6.05a.744.744 0 01-.005 1.281L16.42 19.377a.732.732 0 01-.74-.001L5.42 13.343a.415.415 0 00.608-.239.423.423 0 00.02-.124v2.474z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="117.5%" x="-8%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.053 17.373l9.594-5.584-9.594-5.684-9.498 5.684 9.498 5.584zm-10.006-2.92a.76.76 0 00.376.657l9.627 5.608 9.785-5.788a.739.739 0 011.109.64v2.626a.743.743 0 01-.361.637l-10.157 6.063a.732.732 0 01-.746.003L5.26 18.773a.53.53 0 01-.189-.721.521.521 0 01.716-.19l10.263 6.033 9.847-5.878v-1.9l-9.473 5.603a.732.732 0 01-.742.003l-9.783-5.7A1.815 1.815 0 015 14.453V11.98a.631.631 0 01.947-.548l.608.357-.764.457a.521.521 0 01-.784-.364.529.529 0 01.25-.542l10.419-6.236a.732.732 0 01.75-.002l10.211 6.05a.744.744 0 01-.005 1.281L16.42 18.377a.732.732 0 01-.74-.001L5.42 12.343a.415.415 0 00.608-.239.423.423 0 00.02-.124v2.474z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#1387C9" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6.047 15.454l-.008-1.737 9.642 5.659c.228.134.51.135.74.001l10.211-5.944a.744.744 0 00.005-1.28l-10.212-6.05a.732.732 0 00-.749.001L5.256 12.34a.529.529 0 00-.249.542.644.644 0 00-.007.098v2.474c0 .647.343 1.245.899 1.569l9.783 5.7c.23.133.513.132.742-.003l9.473-5.604v1.901l-9.847 5.878-10.263-6.033a.521.521 0 00-.716.19.53.53 0 00.189.721l10.42 6.126c.23.136.516.135.746-.003l10.157-6.063a.743.743 0 00.36-.637v-2.627a.739.739 0 00-1.108-.64l-9.785 5.79-9.627-5.61a.759.759 0 01-.376-.655zm10.006 2.92l-9.498-5.585 9.498-5.684 9.594 5.684-9.594 5.584z"/>';
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
  export let ariaLabel = 'strat';
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
@prop export let ariaLabel = 'strat';
-->
