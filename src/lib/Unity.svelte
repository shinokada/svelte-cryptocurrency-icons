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
    '<g fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.712-9.268c.866.132 1.74.198 2.617.197 2.976 0 5.677-.743 7.66-1.948-2.434-3.414-6.087-8.182-9.913-9.546a8.25 8.25 0 00-2.78-.48c-1.002 0-1.826.19-2.478.562-.653.373-.977.847-.977 1.408-.001.212.052.422.157.61.12.203.284.381.48.522.545.39 1.722.637 3.536.748.832.047 1.48.09 1.937.149 1.345.144 2.41.559 3.198 1.242.785.685 1.178 1.522 1.178 2.522 0 1.186-.537 2.164-1.612 2.934-.81.576-1.81.936-3 1.08zM9.009 20.79a8.86 8.86 0 003.011.545c1.226 0 2.222-.249 2.987-.747s1.149-1.139 1.149-1.922c0-.623-.275-1.134-.825-1.534-1.63-1.19-5.594-.591-7.749-1.527-.616-.287-1.088-.652-1.407-1.1a2.549 2.549 0 01-.463-1.201c-1.725 3.06-.196 6.21 3.297 7.486zm16.903-1.915c.657-.89 1.024-1.881 1.024-2.927 0-1.045-.367-2.038-1.024-2.927zm-1.649-7.46C22.24 9.936 19.244 9 15.905 9a16.87 16.87 0 00-4.077.49c.78.074 1.55.234 2.293.477 4.303 1.398 7.804 5.583 10.147 8.91z"/><path d="M25.912 18.875v-5.854c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461c-2.343-3.326-5.844-7.511-10.147-8.909a10.616 10.616 0 00-2.293-.477A16.87 16.87 0 0115.905 9c3.34 0 6.335.936 8.358 2.415z" fill-rule="nonzero" opacity=".5"/></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f58634" r="16"/><g fill="#fff" fill-rule="nonzero"><path d="M13.288 22.732h.004c1.189-.144 2.189-.504 3-1.08 1.074-.77 1.611-1.748 1.611-2.934 0-1-.393-1.837-1.178-2.522-.787-.683-1.853-1.098-3.198-1.242-.457-.059-1.105-.102-1.937-.15-1.814-.11-2.991-.358-3.537-.747a1.742 1.742 0 01-.48-.522 1.236 1.236 0 01-.156-.61c0-.561.324-1.035.977-1.408.652-.372 1.476-.562 2.478-.562.949 0 1.89.162 2.78.48 3.826 1.364 7.48 6.132 9.913 9.546-1.983 1.205-4.684 1.948-7.66 1.948-.876 0-1.751-.065-2.617-.197zM9.009 20.79c-3.493-1.275-5.022-4.426-3.297-7.486.048.43.207.843.463 1.2.32.449.79.814 1.407 1.101 2.155.936 6.118.338 7.75 1.527.549.4.824.911.824 1.534 0 .783-.383 1.424-1.149 1.922-.765.498-1.761.747-2.987.747a8.86 8.86 0 01-3.01-.545z"/><path d="M25.912 18.875v-5.854c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461c-2.343-3.326-5.844-7.511-10.147-8.909a10.616 10.616 0 00-2.293-.477A16.87 16.87 0 0115.905 9c3.34 0 6.335.936 8.358 2.415z" opacity=".5"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="125%" x="-8%" y="-8.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#F58634" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" fill-rule="nonzero" filter="url(#d)" transform="translate(5 8)"><path d="M8.288 13.732h.004c1.189-.144 2.189-.504 3-1.08 1.074-.77 1.611-1.748 1.611-2.934 0-1-.393-1.837-1.178-2.522-.787-.683-1.853-1.098-3.198-1.242-.457-.059-1.105-.102-1.937-.15-1.814-.11-2.991-.358-3.537-.747a1.742 1.742 0 01-.48-.522 1.236 1.236 0 01-.156-.61c0-.561.324-1.035.977-1.408.652-.372 1.476-.562 2.478-.562.949 0 1.89.162 2.78.48 3.826 1.364 7.48 6.132 9.913 9.546-1.983 1.205-4.684 1.948-7.66 1.948-.876 0-1.751-.065-2.617-.197zM4.009 11.79C.516 10.515-1.013 7.364.712 4.304c.048.43.207.843.463 1.2.32.449.79.814 1.407 1.101 2.155.936 6.118.338 7.75 1.527.549.4.824.911.824 1.534 0 .783-.383 1.424-1.149 1.922-.765.498-1.761.747-2.987.747a8.86 8.86 0 01-3.01-.545z"/><path fill-opacity=".5" d="M20.912 9.875V4.021c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461C16.925 6.55 13.424 2.365 9.121.967A10.616 10.616 0 006.828.49 16.87 16.87 0 0110.905 0c3.34 0 6.335.936 8.358 2.415z"/></g></g>';
  let svgwhite =
    '<g fill="#fff" fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.712-9.268c.866.132 1.74.198 2.617.197 2.976 0 5.677-.743 7.66-1.948-2.434-3.414-6.087-8.182-9.913-9.546a8.25 8.25 0 00-2.78-.48c-1.002 0-1.826.19-2.478.562-.653.373-.977.847-.977 1.408-.001.212.052.422.157.61.12.203.284.381.48.522.545.39 1.722.637 3.536.748.832.047 1.48.09 1.937.149 1.345.144 2.41.559 3.198 1.242.785.685 1.178 1.522 1.178 2.522 0 1.186-.537 2.164-1.612 2.934-.81.576-1.81.936-3 1.08zM9.009 20.79a8.86 8.86 0 003.011.545c1.226 0 2.222-.249 2.987-.747s1.149-1.139 1.149-1.922c0-.623-.275-1.134-.825-1.534-1.63-1.19-5.594-.591-7.749-1.527-.616-.287-1.088-.652-1.407-1.1a2.549 2.549 0 01-.463-1.201c-1.725 3.06-.196 6.21 3.297 7.486zm16.903-1.915c.657-.89 1.024-1.881 1.024-2.927 0-1.045-.367-2.038-1.024-2.927zm-1.649-7.46C22.24 9.936 19.244 9 15.905 9a16.87 16.87 0 00-4.077.49c.78.074 1.55.234 2.293.477 4.303 1.398 7.804 5.583 10.147 8.91z"/><path d="M25.912 18.875v-5.854c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461c-2.343-3.326-5.844-7.511-10.147-8.909a10.616 10.616 0 00-2.293-.477A16.87 16.87 0 0115.905 9c3.34 0 6.335.936 8.358 2.415z" fill-rule="nonzero" opacity=".5"/></g>';
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
  export let ariaLabel = 'unity';
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
@prop export let ariaLabel = 'unity';
-->
