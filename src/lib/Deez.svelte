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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.293-12.14a53.764 53.764 0 00.027 1.927l5.583-3.29c2.81-1.656 4.9-2.893 5.49-3.248A2999.434 2999.434 0 0012.1 7.456L11.339 7l-1.109.75c-.456.31-.837.57-1.033.706.127.082.335.21.602.37.108.064 10.78 6.548 10.809 6.673.03.103.03.103-1.693 1.157a658.095 658.095 0 00-5.208 3.205zm-2.368-6.296v6.212c.002 3.111.007 5.497.011 6.196 1.587-.9 12.974-7.417 13.389-7.663l.07-.04.191-2.684-.58.342c-10.83 6.389-10.842 6.393-10.87 6.402l-.061.022-.054-.037c-.08-.057-.08-.057-.146-5.634l-.022-1.93-1.03-.638a48.502 48.502 0 00-.898-.548zM9 24.8l1.037.641c.386.24.715.443.908.56.002-.74.005-3.278.007-6.332l.005-6.768.651.379c.25.146 1.488.902 2.76 1.688 1.266.783 2.536 1.558 2.831 1.732l.472.275 2.364-1.446-.715-.43c-.488-.292-2.782-1.69-5.114-3.118a779.624 779.624 0 00-4.793-2.92l-.388-.228L9 24.8z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#939393" fill-rule="nonzero"/><path fill="#FFF" d="M13.707 19.86c.365-.237 2.818-1.74 5.208-3.204 1.723-1.054 1.723-1.054 1.693-1.157-.03-.125-10.7-6.609-10.809-6.674a21.481 21.481 0 01-.602-.369c.196-.136.577-.396 1.033-.706L11.34 7l.762.456c.94.562 11.26 6.892 12.706 7.793-.59.355-2.68 1.592-5.49 3.247l-5.583 3.29a36.218 36.218 0 01-.02-.874 46.32 46.32 0 01-.007-1.051zm-2.368-6.296c.185.11.505.303.899.548l1.029.638.022 1.93c.065 5.577.065 5.577.146 5.634l.054.037.06-.022c.03-.009.041-.013 10.871-6.402l.58-.342-.191 2.683-.07.04a5095.12 5095.12 0 01-13.389 7.664c-.004-.699-.01-3.085-.011-6.196v-6.212zM9 24.8l.025-15.967.388.229c.312.182 2.416 1.465 4.793 2.919a1210.99 1210.99 0 005.114 3.118l.715.43-2.364 1.446-.472-.275a279.81 279.81 0 01-2.83-1.732 260.976 260.976 0 00-2.76-1.688l-.652-.38-.005 6.769c-.002 3.054-.005 5.592-.007 6.332-.193-.117-.522-.32-.908-.56L9 24.8z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="121.9%" height="118.4%" x="-10.9%" y="-6.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M13.707 18.86c.365-.237 2.818-1.74 5.208-3.204 1.723-1.054 1.723-1.054 1.693-1.157-.03-.125-10.7-6.609-10.809-6.674a21.481 21.481 0 01-.602-.369c.196-.136.577-.396 1.033-.706L11.34 6l.762.456c.94.562 11.26 6.892 12.706 7.793-.59.355-2.68 1.592-5.49 3.247l-5.583 3.29a36.218 36.218 0 01-.02-.874 46.32 46.32 0 01-.007-1.051zm-2.368-6.296c.185.11.505.303.899.548l1.029.638.022 1.93c.065 5.577.065 5.577.146 5.634l.054.037.06-.022c.03-.009.041-.013 10.871-6.402l.58-.342-.191 2.683-.07.04a5095.12 5095.12 0 01-13.389 7.664c-.004-.699-.01-3.085-.011-6.196v-6.212zM9 23.8l.025-15.967.388.229c.312.182 2.416 1.465 4.793 2.919a1210.99 1210.99 0 005.114 3.118l.715.43-2.364 1.446-.472-.275a279.81 279.81 0 01-2.83-1.732 260.976 260.976 0 00-2.76-1.688l-.652-.38-.005 6.769c-.002 3.054-.005 5.592-.007 6.332-.193-.117-.522-.32-.908-.56L9 23.8z"/></defs><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#939393" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-linejoin="square" stroke-opacity=".097"/></g><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.293-12.14a53.764 53.764 0 00.027 1.927l5.583-3.29c2.81-1.656 4.9-2.893 5.49-3.248A2999.434 2999.434 0 0012.1 7.456L11.339 7l-1.109.75c-.456.31-.837.57-1.033.706.127.082.335.21.602.37.108.064 10.78 6.548 10.809 6.673.03.103.03.103-1.693 1.157a658.095 658.095 0 00-5.208 3.205zm-2.368-6.296v6.212c.002 3.111.007 5.497.011 6.196 1.587-.9 12.974-7.417 13.389-7.663l.07-.04.191-2.684-.58.342c-10.83 6.389-10.842 6.393-10.87 6.402l-.061.022-.054-.037c-.08-.057-.08-.057-.146-5.634l-.022-1.93-1.03-.638a48.502 48.502 0 00-.898-.548zM9 24.8l1.037.641c.386.24.715.443.908.56.002-.74.005-3.278.007-6.332l.005-6.768.651.379c.25.146 1.488.902 2.76 1.688 1.266.783 2.536 1.558 2.831 1.732l.472.275 2.364-1.446-.715-.43c-.488-.292-2.782-1.69-5.114-3.118a779.624 779.624 0 00-4.793-2.92l-.388-.228L9 24.8z"/>';
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
  export let ariaLabel = 'deez';
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
@prop export let ariaLabel = 'deez';
-->
