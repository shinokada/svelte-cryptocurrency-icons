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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.005-4.772c-6.198 0-11.223-5.025-11.223-11.223S9.797 4.782 15.995 4.782s11.223 5.025 11.223 11.223-5.025 11.223-11.223 11.223zm0-23.161c-6.583 0-11.938 5.355-11.938 11.938s5.355 11.938 11.938 11.938 11.938-5.355 11.938-11.938S22.578 4.067 15.995 4.067zm4.204 16.208l-.623 2.699-.15.653h-.67l-3.445-.002h-.014c-1.381-.023-2.465-.39-3.176-1.038.614 1.083 1.918 1.71 3.738 1.74h.014l3.444.002h.67l.151-.653.623-2.699-.486-1.031-.076.329zM19.116 8.704l-.492-1.023-.07.32-.467 2.127h.716l.313-1.424zm2.487 2.46l-.62 2.626-.154.648h-3.733l-.948 4.328c-.02.124-.032.25-.032.32 0 .061.007.1.013.119a.6.6 0 00.223.038h.408l.898-4.102h3.733l.153-.649.62-2.625-.482-1.036-.08.334zm-9.262 3.274H9.74l.896.703h1.552l.153-.703zm4.093 5.648h-.095c-.724-.019-1.066-.396-1.066-1 0-.144.024-.335.048-.478l1.098-5.012h3.744l.62-2.625h-3.744l.692-3.15h-3.054l-.693 3.15H10.67l-.596 2.625h3.314l-1.29 5.895c-.07.286-.095.62-.095.787 0 1.682 1.327 2.472 3.308 2.505l3.444.001.623-2.698h-2.944z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#3058A6" fill-rule="nonzero"/><g fill="#FFF"><path d="M15.995 27.228c-6.198 0-11.223-5.025-11.223-11.223S9.797 4.782 15.995 4.782s11.223 5.025 11.223 11.223-5.025 11.223-11.223 11.223m0-23.161c-6.583 0-11.938 5.355-11.938 11.938s5.355 11.938 11.938 11.938 11.938-5.355 11.938-11.938S22.578 4.067 15.995 4.067" fill-rule="nonzero"/><path d="M20.199 20.275l-.623 2.699-.15.653h-.67l-3.445-.002h-.014c-1.381-.023-2.465-.39-3.176-1.038.614 1.083 1.918 1.71 3.738 1.74h.014l3.444.002h.67l.151-.653.623-2.699-.486-1.031-.076.329zM19.116 8.704l-.492-1.023-.07.32-.467 2.127h.716zm2.487 2.461l-.62 2.625-.154.648h-3.733l-.948 4.328c-.02.124-.032.25-.032.32 0 .061.007.1.013.119a.6.6 0 00.223.038h.408l.898-4.102h3.733l.153-.649.62-2.625-.482-1.036-.08.334zm-9.262 3.273H9.74l.896.703h1.552z"/><path d="M16.434 20.086h-.095c-.724-.019-1.066-.396-1.066-1 0-.144.024-.335.048-.478l1.098-5.012h3.744l.62-2.625h-3.744l.692-3.15h-3.054l-.693 3.15H10.67l-.596 2.625h3.314l-1.29 5.895c-.07.286-.095.62-.095.787 0 1.682 1.327 2.472 3.308 2.505l3.444.001.623-2.698h-2.944z"/></g></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1)" fill-rule="nonzero"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#3058A6" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="15" cy="15" r="14.5"/></g><g fill="#FFF"><path d="M15.995 25.292c-5.681 0-10.287-4.606-10.287-10.287 0-5.682 4.606-10.288 10.287-10.288 5.682 0 10.288 4.606 10.288 10.288 0 5.681-4.606 10.287-10.288 10.287m0-21.23c-6.034 0-10.943 4.909-10.943 10.943s4.91 10.943 10.943 10.943c6.034 0 10.944-4.91 10.944-10.943 0-6.034-4.91-10.944-10.944-10.944" fill-rule="nonzero"/><path d="M19.849 18.919l-.57 2.473-.139.6-.615-.001-3.157-.001h-.012c-1.266-.022-2.26-.358-2.912-.952.563.993 1.758 1.568 3.427 1.595h.012l3.158.002h.614l.138-.599.57-2.473-.445-.946-.07.302zm-.993-10.607l-.45-.938-.065.294-.428 1.95h.656zm2.28 2.255l-.569 2.407-.14.594h-3.422l-.869 3.968c-.018.113-.03.229-.03.292a.41.41 0 00.012.11c.02.01.08.03.204.035h.375l.823-3.76h3.422l.14-.595.57-2.407-.444-.95-.072.306zm-8.49 3.001h-2.385l.822.644h1.422z"/><path d="M16.398 18.745h-.087c-.664-.017-.977-.362-.977-.917 0-.131.022-.306.043-.438l1.007-4.594h3.432l.568-2.406h-3.431l.634-2.888h-2.8l-.635 2.888h-3.038l-.547 2.406h3.038L12.424 18.2a3.352 3.352 0 00-.088.722c0 1.542 1.217 2.265 3.033 2.295l3.157.002.57-2.474h-2.698z"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.005-4.772c-6.198 0-11.223-5.025-11.223-11.223S9.797 4.782 15.995 4.782s11.223 5.025 11.223 11.223-5.025 11.223-11.223 11.223zm0-23.161c-6.583 0-11.938 5.355-11.938 11.938s5.355 11.938 11.938 11.938 11.938-5.355 11.938-11.938S22.578 4.067 15.995 4.067zm4.204 16.208l-.623 2.699-.15.653h-.67l-3.445-.002h-.014c-1.381-.023-2.465-.39-3.176-1.038.614 1.083 1.918 1.71 3.738 1.74h.014l3.444.002h.67l.151-.653.623-2.699-.486-1.031-.076.329zM19.116 8.704l-.492-1.023-.07.32-.467 2.127h.716l.313-1.424zm2.487 2.46l-.62 2.626-.154.648h-3.733l-.948 4.328c-.02.124-.032.25-.032.32 0 .061.007.1.013.119a.6.6 0 00.223.038h.408l.898-4.102h3.733l.153-.649.62-2.625-.482-1.036-.08.334zm-9.262 3.274H9.74l.896.703h1.552l.153-.703zm4.093 5.648h-.095c-.724-.019-1.066-.396-1.066-1 0-.144.024-.335.048-.478l1.098-5.012h3.744l.62-2.625h-3.744l.692-3.15h-3.054l-.693 3.15H10.67l-.596 2.625h3.314l-1.29 5.895c-.07.286-.095.62-.095.787 0 1.682 1.327 2.472 3.308 2.505l3.444.001.623-2.698h-2.944z" fill="#FFF"/>';
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
  export let ariaLabel = 'tpay';
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
@prop export let ariaLabel = 'tpay';
-->
