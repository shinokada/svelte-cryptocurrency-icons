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
    '<g fill-rule="evenodd"><path d="M14.514 25.556A8.482 8.482 0 0017.064 27l-.142-1.374a9.674 9.674 0 008.65-8.249A8.481 8.481 0 0027 14.847l-1.383.143a9.674 9.674 0 00-8.24-8.562A8.481 8.481 0 0014.847 5l.143 1.383a9.674 9.674 0 00-8.562 8.24A8.481 8.481 0 005 17.153l1.383-.143a9.674 9.674 0 008.131 8.546zm.57-4.132a5.503 5.503 0 01-4.554-4.845l1.3-.135a6.977 6.977 0 01-1.266-1.287 5.503 5.503 0 014.857-4.627l.135 1.3a6.977 6.977 0 011.287-1.266 5.503 5.503 0 014.627 4.857l-1.3.135a6.99 6.99 0 011.266 1.287 5.503 5.503 0 01-4.945 4.635l-.136-1.309c-.389.491-.812.91-1.271 1.255zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M6.383 17.01L5 17.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 004.553 4.845 6.084 6.084 0 01-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 01-8.131-8.546zm19.234-2.02L27 14.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 00-4.626-4.857 6.085 6.085 0 012.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 018.24 8.562z" opacity=".5"/></g>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#4c6bae" r="16"/><g fill="#fff"><path d="M6.383 17.01L5 17.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 004.553 4.845 6.084 6.084 0 01-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 01-8.131-8.546zm19.234-2.02L27 14.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 00-4.626-4.857 6.085 6.085 0 012.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 018.24 8.562z" opacity=".5"/><path d="M16.922 25.626L17.065 27c-2.07-.74-3.726-2.203-4.968-4.391 1.715-.207 3.134-1.02 4.258-2.44l.136 1.31a5.503 5.503 0 004.945-4.636 6.085 6.085 0 011.173 2.972c1.209-.687 2.196-1.499 2.963-2.438a9.674 9.674 0 01-8.65 8.249zM14.99 6.383L14.847 5c2.07.74 3.726 2.203 4.968 4.391-1.716.207-3.135 1.02-4.259 2.44l-.135-1.3a5.503 5.503 0 00-4.857 4.626 6.085 6.085 0 01-1.173-2.972c-1.209.687-2.196 1.499-2.963 2.438a9.674 9.674 0 018.562-8.24z"/></g></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="115.9%" x="-8%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4C6BAE" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill="#FFF" filter="url(#d)" transform="translate(5 4)"><path d="M1.383 12.01L0 12.153c.74-2.07 2.203-3.726 4.391-4.968.207 1.716 1.02 3.135 2.44 4.259l-1.3.135a5.503 5.503 0 004.553 4.845 6.084 6.084 0 01-2.987 1.185c.681 1.2 1.487 2.183 2.417 2.947a9.674 9.674 0 01-8.131-8.546zm19.234-2.02L22 9.847c-.74 2.07-2.203 3.726-4.391 4.968-.207-1.716-1.02-3.135-2.44-4.259l1.3-.135a5.503 5.503 0 00-4.626-4.857 6.085 6.085 0 012.972-1.173c-.687-1.209-1.499-2.196-2.438-2.963a9.674 9.674 0 018.24 8.562z" opacity=".5"/><path d="M11.922 20.626L12.065 22c-2.07-.74-3.726-2.203-4.968-4.391 1.715-.207 3.134-1.02 4.258-2.44l.136 1.31a5.503 5.503 0 004.945-4.636 6.085 6.085 0 011.173 2.972c1.209-.687 2.196-1.499 2.963-2.438a9.674 9.674 0 01-8.65 8.249zM9.99 1.383L9.847 0c2.07.74 3.726 2.203 4.968 4.391-1.716.207-3.135 1.02-4.259 2.44l-.135-1.3a5.503 5.503 0 00-4.857 4.626 6.085 6.085 0 01-1.173-2.972c-1.209.687-2.196 1.499-2.963 2.438a9.674 9.674 0 018.562-8.24z"/></g></g>';
  let svgwhite =
    '<g fill="#fff" fill-rule="evenodd"><path d="M14.514 25.556A8.482 8.482 0 0017.064 27l-.142-1.374a9.674 9.674 0 008.65-8.249A8.481 8.481 0 0027 14.847l-1.383.143a9.674 9.674 0 00-8.24-8.562A8.481 8.481 0 0014.847 5l.143 1.383a9.674 9.674 0 00-8.562 8.24A8.481 8.481 0 005 17.153l1.383-.143a9.674 9.674 0 008.131 8.546zm.57-4.132a5.503 5.503 0 01-4.554-4.845l1.3-.135a6.977 6.977 0 01-1.266-1.287 5.503 5.503 0 014.857-4.627l.135 1.3a6.977 6.977 0 011.287-1.266 5.503 5.503 0 014.627 4.857l-1.3.135a6.99 6.99 0 011.266 1.287 5.503 5.503 0 01-4.945 4.635l-.136-1.309c-.389.491-.812.91-1.271 1.255zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/><path d="M16.922 25.626L17.065 27c-2.07-.74-3.726-2.203-4.968-4.391 1.715-.207 3.134-1.02 4.258-2.44l.136 1.31a5.503 5.503 0 004.945-4.636 6.085 6.085 0 011.173 2.972c1.209-.687 2.196-1.499 2.963-2.438a9.674 9.674 0 01-8.65 8.249zM14.99 6.383L14.847 5c2.07.74 3.726 2.203 4.968 4.391-1.716.207-3.135 1.02-4.259 2.44l-.135-1.3a5.503 5.503 0 00-4.857 4.626 6.085 6.085 0 01-1.173-2.972c-1.209.687-2.196 1.499-2.963 2.438a9.674 9.674 0 018.562-8.24z" fill-opacity=".497"/></g>';
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
  export let ariaLabel = 'cnx';
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
@prop export let ariaLabel = 'cnx';
-->
