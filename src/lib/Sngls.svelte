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
    '<path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.913-10.766c5.63-.437 10.049-4.635 10.049-4.635s-4.295-4.088-9.81-4.614l-.422-.735-.75-1.25-.441.734-.73 1.25C9.294 12.522 5 16.59 5 16.6c0 0 4.42 4.198 10.049 4.635l.932 1.736.932-1.736zM5.932 16.599s4.054-2.768 8.223-3.473l-.662 1.141.518 1.012 1.403-2.302c.192-.01.384-.02.567-.02.182 0 .374.01.557.02l1.374 2.302.528-1.061-.634-1.102c4.17.695 8.224 3.404 8.224 3.473 0 .08-4.256 2.918-8.531 3.523l2.084-3.91-.566-.982-1.086 2.024-1.49 2.967c-.162.01-.316.01-.48.01-.163 0-.326 0-.49-.01l-2.026-3.989.01-.01-.52-.972-.566.982 2.084 3.9c-4.275-.615-8.53-3.523-8.521-3.523z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#B30D23"/><path fill="#FFF" fill-rule="nonzero" d="M16.913 21.234l-.932 1.736-.932-1.736C9.419 20.797 5 16.599 5 16.599c0-.01 4.294-4.078 9.809-4.614l.73-1.25.442-.735.75 1.25.422.735c5.514.526 9.809 4.614 9.809 4.614s-4.42 4.198-10.05 4.635zM5.932 16.599c-.01 0 4.246 2.908 8.521 3.523l-2.084-3.9.566-.982.52.972-.01.01 2.027 3.99c.163.01.326.01.49.01.163 0 .317 0 .48-.01l1.489-2.968 1.086-2.024.566.982-2.084 3.91c4.275-.605 8.53-3.443 8.53-3.523 0-.07-4.053-2.778-8.223-3.473l.634 1.102-.528 1.061-1.374-2.302a10.45 10.45 0 00-.557-.02c-.183 0-.375.01-.567.02l-1.403 2.302-.518-1.012.662-1.141c-4.169.705-8.223 3.473-8.223 3.473z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="127%" x="-8%" y="-9.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.913 20.234l-.932 1.736-.932-1.736C9.419 19.797 5 15.599 5 15.599c0-.01 4.294-4.078 9.809-4.614l.73-1.25L15.98 9l.75 1.25.422.735c5.514.526 9.809 4.614 9.809 4.614s-4.42 4.198-10.05 4.635zM5.932 15.599c-.01 0 4.246 2.908 8.521 3.523l-2.084-3.9.566-.982.52.972-.01.01 2.027 3.99c.163.01.326.01.49.01.163 0 .317 0 .48-.01l1.489-2.968 1.086-2.024.566.982-2.084 3.91c4.275-.605 8.53-3.443 8.53-3.523 0-.07-4.053-2.778-8.223-3.473l.634 1.102-.528 1.061-1.374-2.302a10.45 10.45 0 00-.557-.02c-.183 0-.375.01-.567.02l-1.403 2.302-.518-1.012.662-1.141c-4.169.705-8.223 3.473-8.223 3.473z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#B30D23" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.913-10.766c5.63-.437 10.049-4.635 10.049-4.635s-4.295-4.088-9.81-4.614l-.422-.735-.75-1.25-.441.734-.73 1.25C9.294 12.522 5 16.59 5 16.6c0 0 4.42 4.198 10.049 4.635l.932 1.736.932-1.736zM5.932 16.599s4.054-2.768 8.223-3.473l-.662 1.141.518 1.012 1.403-2.302c.192-.01.384-.02.567-.02.182 0 .374.01.557.02l1.374 2.302.528-1.061-.634-1.102c4.17.695 8.224 3.404 8.224 3.473 0 .08-4.256 2.918-8.531 3.523l2.084-3.91-.566-.982-1.086 2.024-1.49 2.967c-.162.01-.316.01-.48.01-.163 0-.326 0-.49-.01l-2.026-3.989.01-.01-.52-.972-.566.982 2.084 3.9c-4.275-.615-8.53-3.523-8.521-3.523z"/>';
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
  export let ariaLabel = 'sngls';
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
@prop export let ariaLabel = 'sngls';
-->
