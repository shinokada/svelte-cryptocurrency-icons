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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm1.342 16.075l-.157 1.67c1.957 1.558 2.221 2.715 1.921 4.258-.679 2.39-2.751 2.64-3.633 2.488-1.01-.185-1.434-.237-2.306-1.261a3.44 3.44 0 01-.291-3.813l.012-.02.442 2.1 1.27-.252-.83-4.424-4.27 1.012.342 1.379 1.749-.34-.017.041c-.075.184-.38.958-.471 1.562-.588 3.688 2.533 5.358 3.83 5.446 2.573.188 4.067-.924 4.843-2.103 1.44-2.36.721-4.106.303-4.994-.546-1.118-2.737-2.749-2.737-2.749zm-.76-6.32h-1.373V22.36h1.373V9.754zm-.03-3.746c-2.58-.121-4.043 1.03-4.785 2.23-1.38 2.4-.615 4.124-.17 4.997.576 1.103 2.81 2.676 2.81 2.676l.111-1.673c-2-1.503-2.294-2.651-2.033-4.203.615-2.409 2.679-2.709 3.567-2.582 1.009.158 1.436.2 2.336 1.2a3.436 3.436 0 01.393 3.804l-.011.02-.497-2.084-1.26.284.945 4.4 4.239-1.124-.379-1.372-1.74.387s.361-.924.446-1.618c.491-3.703-2.676-5.288-3.972-5.342z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#006AE3" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M15.21 22.36V9.754h1.372V22.36z"/><path d="M22.197 13.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673s-2.233-1.573-2.809-2.676c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34-.342-1.379 4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z"/></g></g>';
  let svgicon =
    '<defs><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><filter id="d"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter><filter x="-28.8%" y="-18.8%" width="157.7%" height="137.5%" filterUnits="objectBoundingBox" id="e"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#006AE3" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><g filter="url(#d)"><g filter="url(#e)" transform="translate(9.5 5)" fill="#FFF" fill-rule="nonzero"><path d="M5.71 16.36V3.754h1.372V16.36z"/><path d="M12.697 7.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673S2.673 8.339 2.097 7.236c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34L0 11.833l4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z"/></g></g></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm1.342 16.075l-.157 1.67c1.957 1.558 2.221 2.715 1.921 4.258-.679 2.39-2.751 2.64-3.633 2.488-1.01-.185-1.434-.237-2.306-1.261a3.44 3.44 0 01-.291-3.813l.012-.02.442 2.1 1.27-.252-.83-4.424-4.27 1.012.342 1.379 1.749-.34-.017.041c-.075.184-.38.958-.471 1.562-.588 3.688 2.533 5.358 3.83 5.446 2.573.188 4.067-.924 4.843-2.103 1.44-2.36.721-4.106.303-4.994-.546-1.118-2.737-2.749-2.737-2.749zm-.76-6.32h-1.373V22.36h1.373V9.754zm-.03-3.746c-2.58-.121-4.043 1.03-4.785 2.23-1.38 2.4-.615 4.124-.17 4.997.576 1.103 2.81 2.676 2.81 2.676l.111-1.673c-2-1.503-2.294-2.651-2.033-4.203.615-2.409 2.679-2.709 3.567-2.582 1.009.158 1.436.2 2.336 1.2a3.436 3.436 0 01.393 3.804l-.011.02-.497-2.084-1.26.284.945 4.4 4.239-1.124-.379-1.372-1.74.387s.361-.924.446-1.618c.491-3.703-2.676-5.288-3.972-5.342z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'yfi';
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
@prop export let ariaLabel = 'yfi';
-->
