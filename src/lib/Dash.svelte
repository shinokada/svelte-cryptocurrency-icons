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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.086-23.996H11.81l-.602 3.367 6.562.01c3.231 0 4.19 1.173 4.159 3.12-.014.998-.449 2.686-.633 3.23-.497 1.46-1.521 3.122-5.359 3.117l-6.378-.004-.602 3.371h7.257c2.559 0 3.649-.299 4.8-.83 2.554-1.178 4.075-3.701 4.686-6.994.906-4.9-.224-8.387-6.615-8.387zm-3.28 7.794c.238-.985.313-1.38.313-1.38H8.673c-1.904 0-2.176 1.24-2.357 1.99-.237.981-.312 1.381-.312 1.381h7.447c1.903 0 2.175-1.24 2.356-1.991z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" r="16" fill="#008CE7"/><g fill="#FFF"><path d="M19.086 8.004H11.81l-.602 3.367 6.562.01c3.231 0 4.19 1.173 4.159 3.12-.014.998-.449 2.686-.633 3.23-.497 1.46-1.521 3.122-5.359 3.117l-6.378-.004-.602 3.371h7.257c2.559 0 3.649-.299 4.8-.83 2.554-1.178 4.075-3.701 4.686-6.994.906-4.9-.224-8.387-6.615-8.387z"/><path d="M15.807 15.798c.237-.985.312-1.38.312-1.38H8.673c-1.904 0-2.176 1.24-2.357 1.99-.237.981-.312 1.381-.312 1.381h7.447c1.903 0 2.175-1.24 2.356-1.991z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none"><g transform="translate(1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#008CE7" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M18.777 8.004H12.23l-.542 3.03 5.906.008c2.908 0 3.77 1.056 3.743 2.809-.012.898-.404 2.417-.57 2.908-.447 1.313-1.369 2.808-4.822 2.805l-5.74-.004-.543 3.034h6.532c2.302 0 3.283-.27 4.32-.748 2.298-1.06 3.667-3.33 4.217-6.294.815-4.41-.202-7.548-5.954-7.548z"/><path d="M15.826 15.018c.214-.886.28-1.242.28-1.242h-6.7c-1.714 0-1.959 1.115-2.121 1.792a27.99 27.99 0 00-.281 1.242h6.701c1.713 0 1.959-1.115 2.12-1.792z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.086-23.996H11.81l-.602 3.367 6.562.01c3.231 0 4.19 1.173 4.159 3.12-.014.998-.449 2.686-.633 3.23-.497 1.46-1.521 3.122-5.359 3.117l-6.378-.004-.602 3.371h7.257c2.559 0 3.649-.299 4.8-.83 2.554-1.178 4.075-3.701 4.686-6.994.906-4.9-.224-8.387-6.615-8.387zm-3.28 7.794c.238-.985.313-1.38.313-1.38H8.673c-1.904 0-2.176 1.24-2.357 1.99-.237.981-.312 1.381-.312 1.381h7.447c1.903 0 2.175-1.24 2.356-1.991z" fill="#FFF"/>';
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
  export let ariaLabel = 'dash';
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
@prop export let ariaLabel = 'dash';
-->
