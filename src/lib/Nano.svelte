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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.95-21c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 00-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166h-.132c-1.385 0-1.583-.33-1.583-1.583a1.584 1.584 0 00-3.166 0c0 1.254-.198 1.55-1.583 1.55h-.132a1.548 1.548 0 00-1.419 1.55c0 .858.693 1.584 1.584 1.584.824 0 1.517-.66 1.55-1.451v-.1c0-1.154.363-1.583 1.583-1.583s1.583.43 1.583 1.55c0 .858.693 1.584 1.583 1.584.891 0 1.584-.693 1.584-1.583a1.597 1.597 0 00-1.452-1.518zm-9.565 6.267a1.583 1.583 0 100-3.166 1.583 1.583 0 000 3.166z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#4A90E2" cx="16" cy="16" r="16"/><path d="M24.95 11c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 00-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166a1.597 1.597 0 011.452 1.518c0 .89-.693 1.583-1.584 1.583-.89 0-1.583-.726-1.583-1.583 0-1.122-.363-1.55-1.583-1.55s-1.583.428-1.583 1.583v.099c-.033.791-.726 1.45-1.55 1.45-.89 0-1.584-.725-1.584-1.582 0-.825.627-1.485 1.419-1.55h.132c1.385 0 1.583-.297 1.583-1.55a1.584 1.584 0 013.166 0c0 1.253.198 1.582 1.583 1.582h.132zm-9.565 6.267a1.583 1.583 0 110-3.166 1.583 1.583 0 010 3.166z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="115.9%" height="137.1%" x="-8%" y="-13.3%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M24.95 10c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 00-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166a1.597 1.597 0 011.452 1.518c0 .89-.693 1.583-1.584 1.583-.89 0-1.583-.726-1.583-1.583 0-1.122-.363-1.55-1.583-1.55s-1.583.428-1.583 1.583v.099c-.033.791-.726 1.45-1.55 1.45-.89 0-1.584-.725-1.584-1.582 0-.825.627-1.485 1.419-1.55h.132c1.385 0 1.583-.297 1.583-1.55a1.584 1.584 0 013.166 0c0 1.253.198 1.582 1.583 1.582h.132zm-9.565 6.267a1.583 1.583 0 110-3.166 1.583 1.583 0 010 3.166z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#4A90E2" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.95-21c-.858 0-1.583.693-1.583 1.583 0 1.254-.198 1.583-1.584 1.583h-.132a1.548 1.548 0 00-1.418 1.55v.034c0 1.22-.23 1.517-1.583 1.517-.066 0-.132 0-.165.033-.792.099-1.418.758-1.418 1.55 0 .858.692 1.583 1.583 1.583.825 0 1.517-.66 1.55-1.451v-.132c0-1.121.363-1.55 1.55-1.583h.033c.825 0 1.518-.66 1.55-1.484v-.1c0-1.154.363-1.583 1.584-1.583.857 0 1.583-.692 1.583-1.583 0-.824-.693-1.517-1.55-1.517zm-9.302 3.166h-.132c-1.385 0-1.583-.33-1.583-1.583a1.584 1.584 0 00-3.166 0c0 1.254-.198 1.55-1.583 1.55h-.132a1.548 1.548 0 00-1.419 1.55c0 .858.693 1.584 1.584 1.584.824 0 1.517-.66 1.55-1.451v-.1c0-1.154.363-1.583 1.583-1.583s1.583.43 1.583 1.55c0 .858.693 1.584 1.583 1.584.891 0 1.584-.693 1.584-1.583a1.597 1.597 0 00-1.452-1.518zm-9.565 6.267a1.583 1.583 0 100-3.166 1.583 1.583 0 000 3.166z" fill="#FFF"/>';
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
  export let ariaLabel = 'nano';
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
@prop export let ariaLabel = 'nano';
-->
