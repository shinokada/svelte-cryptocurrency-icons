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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.075 5C9.892 5 5 9.892 5 15.925c0 6.034 4.89 10.926 10.924 10.927a10.926 10.926 0 0010.928-10.928C26.851 9.89 21.959 5 15.925 5zm-.001.852A10.068 10.068 0 0126 15.924c-.002 5.559-4.51 10.064-10.068 10.064-5.559 0-10.066-4.505-10.068-10.064-.002-5.559 4.501-10.068 10.06-10.072zm5.732 16.358a8.494 8.494 0 01-11.464 0l-.6.6.222.198a9.352 9.352 0 0012.456-.198zM9.038 9.598a9.352 9.352 0 000 12.678l.6-.62-.19-.214a8.494 8.494 0 01.19-11.244zm13.78-.026v.014l-.6.6.19.214a8.494 8.494 0 01-.19 11.25l.6.6.198-.222a9.352 9.352 0 00-.198-12.456zm-7.57.828H14.2v1.736h-2.142v1.13h.022c.126-.003.757-.013.746 0a.546.546 0 01.6.464v4.752l-.012.073a.37.37 0 01-.116.185.366.366 0 01-.272.092c.014.012-.768 0-.768 0l-.2 1.262h2.122v1.764h1.056V20.12h.844v1.73h1.058v-1.744l.196-.013c1.679-.13 2.838-.597 2.988-2.205.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778-.12-1.252-1.2-1.672-2.566-1.8V10.4h-1.056v1.692h-.844V10.4zm.104 6.113c.792-.01 2.882-.154 2.882 1.167 0 1.312-2.248 1.162-2.964 1.162v-2.328zm-.006-3.176c.664-.011 2.398-.139 2.398 1.063 0 1.2-1.876 1.054-2.472 1.054v-2.116zm6.696-4.497a9.352 9.352 0 00-12.456.198l.614.6.214-.19a8.494 8.494 0 0111.25.19l.6-.6z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#201A2D" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M22.818 9.586l-.6.6a8.494 8.494 0 010 11.464l.6.6a9.352 9.352 0 000-12.678v.014zM10.2 9.638a8.494 8.494 0 0111.464 0l.6-.6a9.352 9.352 0 00-12.678 0l.614.6zm-.562 12.018a8.494 8.494 0 010-11.458l-.6-.6a9.352 9.352 0 000 12.678l.6-.62zm12.018.554a8.494 8.494 0 01-11.464 0l-.6.6a9.352 9.352 0 0012.678 0l-.614-.6zm-1.942-8.286c-.12-1.252-1.2-1.672-2.566-1.8V10.4h-1.056v1.692h-.844V10.4H14.2v1.736h-2.142v1.13s.78-.014.768 0a.546.546 0 01.6.464v4.752a.37.37 0 01-.128.258.366.366 0 01-.272.092c.014.012-.768 0-.768 0l-.2 1.262h2.122v1.764h1.056V20.12h.844v1.73h1.058v-1.744c1.784-.108 3.028-.548 3.184-2.218.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778zm-1.48 3.756c0 1.312-2.248 1.162-2.964 1.162v-2.328c.716.002 2.964-.204 2.964 1.166zm-.49-3.28c0 1.2-1.876 1.054-2.472 1.054v-2.116c.596 0 2.472-.188 2.472 1.062z"/><path d="M15.924 26.852C9.89 26.851 5 21.959 5 15.925 5 9.892 9.892 5 15.925 5c6.034 0 10.926 4.89 10.927 10.924a10.926 10.926 0 01-10.928 10.928zm0-21c-5.559.004-10.062 4.513-10.06 10.072.002 5.559 4.51 10.064 10.068 10.064 5.559 0 10.066-4.505 10.068-10.064A10.068 10.068 0 0015.924 5.852z"/></g></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-17%" y="-17%" width="134.1%" height="134.1%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#201A2D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(5 4)" fill="#FFF" fill-rule="nonzero"><path d="M17.818 4.586l-.6.6a8.494 8.494 0 010 11.464l.6.6a9.352 9.352 0 000-12.678v.014zM5.2 4.638a8.494 8.494 0 0111.464 0l.6-.6a9.352 9.352 0 00-12.678 0l.614.6zm-.562 12.018a8.494 8.494 0 010-11.458l-.6-.6a9.352 9.352 0 000 12.678l.6-.62zm12.018.554a8.494 8.494 0 01-11.464 0l-.6.6a9.352 9.352 0 0012.678 0l-.614-.6zm-1.942-8.286c-.12-1.252-1.2-1.672-2.566-1.8V5.4h-1.056v1.692h-.844V5.4H9.2v1.736H7.058v1.13s.78-.014.768 0a.546.546 0 01.6.464v4.752a.37.37 0 01-.128.258.366.366 0 01-.272.092c.014.012-.768 0-.768 0l-.2 1.262H9.18v1.764h1.056V15.12h.844v1.73h1.058v-1.744c1.784-.108 3.028-.548 3.184-2.218.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778zm-1.48 3.756c0 1.312-2.248 1.162-2.964 1.162v-2.328c.716.002 2.964-.204 2.964 1.166zm-.49-3.28c0 1.2-1.876 1.054-2.472 1.054V8.338c.596 0 2.472-.188 2.472 1.062z"/><path d="M10.924 21.852C4.89 21.851 0 16.959 0 10.925 0 4.892 4.892 0 10.925 0c6.034 0 10.926 4.89 10.927 10.924a10.926 10.926 0 01-10.928 10.928zm0-21C5.365.856.862 5.365.864 10.924c.002 5.559 4.51 10.064 10.068 10.064 5.559 0 10.066-4.505 10.068-10.064A10.068 10.068 0 0010.924.852z"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.075 5C9.892 5 5 9.892 5 15.925c0 6.034 4.89 10.926 10.924 10.927a10.926 10.926 0 0010.928-10.928C26.851 9.89 21.959 5 15.925 5zm-.001.852A10.068 10.068 0 0126 15.924c-.002 5.559-4.51 10.064-10.068 10.064-5.559 0-10.066-4.505-10.068-10.064-.002-5.559 4.501-10.068 10.06-10.072zm5.732 16.358a8.494 8.494 0 01-11.464 0l-.6.6.222.198a9.352 9.352 0 0012.456-.198zM9.038 9.598a9.352 9.352 0 000 12.678l.6-.62-.19-.214a8.494 8.494 0 01.19-11.244zm13.78-.026v.014l-.6.6.19.214a8.494 8.494 0 01-.19 11.25l.6.6.198-.222a9.352 9.352 0 00-.198-12.456zm-7.57.828H14.2v1.736h-2.142v1.13h.022c.126-.003.757-.013.746 0a.546.546 0 01.6.464v4.752l-.012.073a.37.37 0 01-.116.185.366.366 0 01-.272.092c.014.012-.768 0-.768 0l-.2 1.262h2.122v1.764h1.056V20.12h.844v1.73h1.058v-1.744l.196-.013c1.679-.13 2.838-.597 2.988-2.205.126-1.344-.506-1.944-1.516-2.186.614-.302.994-.862.908-1.778-.12-1.252-1.2-1.672-2.566-1.8V10.4h-1.056v1.692h-.844V10.4zm.104 6.113c.792-.01 2.882-.154 2.882 1.167 0 1.312-2.248 1.162-2.964 1.162v-2.328zm-.006-3.176c.664-.011 2.398-.139 2.398 1.063 0 1.2-1.876 1.054-2.472 1.054v-2.116zm6.696-4.497a9.352 9.352 0 00-12.456.198l.614.6.214-.19a8.494 8.494 0 0111.25.19l.6-.6z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'wbtc';
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
@prop export let ariaLabel = 'wbtc';
-->
