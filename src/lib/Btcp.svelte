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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.215-24.8l-1.723-.43-.673 2.776c-.454-.117-.92-.221-1.373-.326l.686-2.79L15.41 6l-.7 2.842c-.375-.091-.737-.17-1.1-.26l-2.37-.6-.454 1.851s1.282.3 1.256.313c.7.17.83.639.804 1.004l-.519 2.086-.453 1.812-.971 3.912c-.091.208-.298.534-.79.417.012.026-1.257-.313-1.257-.313L8 21.033l2.24.56c.415.105.83.222 1.232.326l-.713 2.882 1.723.43.7-2.856.556-2.086.946-3.82c.194.053.402.092.622.144.7.156 1.425.221 2.137.274.44.039.868.052 1.308.052a6.459 6.459 0 001.93-.34c.519-.169 1.127-.39 1.516-.808.453-.482.674-1.12.764-1.76.311-2.099-1.282-3.233-3.445-3.99zm-.142 10.3c-.48.078-.726.117-1.205.143l-.674.039c.648.443 1.05 1.056.842 1.903-.388 1.591-2.448 1.37-3.976 1.03l-.519 2.113-.025.09-.661 2.752 1.71.43.712-2.881c2.928.56 5.143.339 6.062-2.347.583-1.656.156-2.947-.738-3.742-.013.013-.039.013-.052.026-.414.17-.997.365-1.476.443zm-.506-3.495c-.479 1.956-3.484.965-4.456.717l.855-3.468c.972.261 4.107.704 3.601 2.751z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#272d63" r="16"/><path d="M20.215 7.2l-.7 2.842c2.164.756 3.757 1.89 3.446 3.99-.09.638-.31 1.277-.764 1.76-.389.417-.997.638-1.516.808a6.459 6.459 0 01-1.93.339c-.44 0-.868-.013-1.308-.052-.712-.053-1.438-.118-2.137-.274-.22-.052-.428-.091-.622-.144l-.946 3.82-.557 2.086-.7 2.856-1.722-.43.713-2.882c-.402-.104-.817-.221-1.231-.326L8 21.033l.855-1.97s1.27.34 1.256.314c.493.117.7-.209.79-.417l.972-3.912.453-1.812.519-2.086c.025-.365-.104-.834-.804-1.004.026-.013-1.256-.313-1.256-.313l.453-1.851 2.37.6c.364.09.726.169 1.102.26L15.41 6l1.722.43-.686 2.79c.453.105.92.209 1.373.326l.673-2.777zm-.142 10.3c.479-.079 1.062-.274 1.476-.444.013-.013.04-.013.052-.026.894.795 1.321 2.086.738 3.742-.92 2.686-3.134 2.907-6.062 2.347L15.565 26l-1.71-.43.66-2.751.026-.091.519-2.113c1.528.34 3.588.561 3.976-1.03.208-.847-.194-1.46-.842-1.903l.674-.04c.48-.025.725-.064 1.205-.143zm-.506-3.495c.506-2.047-2.63-2.49-3.6-2.75l-.856 3.467c.972.248 3.977 1.239 4.456-.717z" fill="#fefefe" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="123.3%" height="117.5%" x="-11.7%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M20.215 6.2l-.7 2.842c2.164.756 3.757 1.89 3.446 3.99-.09.638-.31 1.277-.764 1.76-.389.417-.997.638-1.516.808a6.459 6.459 0 01-1.93.339c-.44 0-.868-.013-1.308-.052-.712-.053-1.438-.118-2.137-.274-.22-.052-.428-.091-.622-.144l-.946 3.82-.557 2.086-.7 2.856-1.722-.43.713-2.882c-.402-.104-.817-.221-1.231-.326L8 20.033l.855-1.97s1.27.34 1.256.314c.493.117.7-.209.79-.417l.972-3.912.453-1.812.519-2.086c.025-.365-.104-.834-.804-1.004.026-.013-1.256-.313-1.256-.313l.453-1.851 2.37.6c.364.09.726.169 1.102.26L15.41 5l1.722.43-.686 2.79c.453.105.92.209 1.373.326l.673-2.777 1.723.43zm-.142 10.3c.479-.079 1.062-.274 1.476-.444.013-.013.04-.013.052-.026.894.795 1.321 2.086.738 3.742-.92 2.686-3.134 2.907-6.062 2.347L15.565 25l-1.71-.43.66-2.751.026-.091.519-2.113c1.528.34 3.588.561 3.976-1.03.208-.847-.194-1.46-.842-1.903l.674-.04c.48-.025.725-.064 1.205-.143zm-.506-3.495c.506-2.047-2.63-2.49-3.6-2.75l-.856 3.467c.972.248 3.977 1.239 4.456-.717z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#272D63" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.215-24.8l-1.723-.43-.673 2.776c-.454-.117-.92-.221-1.373-.326l.686-2.79L15.41 6l-.7 2.842c-.375-.091-.737-.17-1.1-.26l-2.37-.6-.454 1.851s1.282.3 1.256.313c.7.17.83.639.804 1.004l-.519 2.086-.453 1.812-.971 3.912c-.091.208-.298.534-.79.417.012.026-1.257-.313-1.257-.313L8 21.033l2.24.56c.415.105.83.222 1.232.326l-.713 2.882 1.723.43.7-2.856.556-2.086.946-3.82c.194.053.402.092.622.144.7.156 1.425.221 2.137.274.44.039.868.052 1.308.052a6.459 6.459 0 001.93-.34c.519-.169 1.127-.39 1.516-.808.453-.482.674-1.12.764-1.76.311-2.099-1.282-3.233-3.445-3.99zm-.142 10.3c-.48.078-.726.117-1.205.143l-.674.039c.648.443 1.05 1.056.842 1.903-.388 1.591-2.448 1.37-3.976 1.03l-.519 2.113-.025.09-.661 2.752 1.71.43.712-2.881c2.928.56 5.143.339 6.062-2.347.583-1.656.156-2.947-.738-3.742-.013.013-.039.013-.052.026-.414.17-.997.365-1.476.443zm-.506-3.495c-.479 1.956-3.484.965-4.456.717l.855-3.468c.972.261 4.107.704 3.601 2.751z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'btcp';
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
@prop export let ariaLabel = 'btcp';
-->
