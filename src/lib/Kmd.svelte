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
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48zM15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48zm49.61-24.056a.66.66 0 01.07-.08l.002.002a5.26 5.26 0 018.008 6.763 5.57 5.57 0 01-.561.684 5.223 5.223 0 01-3.224 1.517h-.048c-.1 0-.2.005-.299.011-.1.006-.199.011-.298.011a1.006 1.006 0 00-.096.011.73.73 0 01-.112.012 9.428 9.428 0 00-8.397 11.515c.003.012.008.024.013.036.007.02.015.04.015.062.053.224.11.443.18.664a12.205 12.205 0 01-1.868 9.813 11.954 11.954 0 01-1.368 1.666A12.21 12.21 0 1139.36 39.362c.066-.066.138-.126.209-.185.054-.045.109-.091.161-.14a12.14 12.14 0 0111.148-2.91 9.422 9.422 0 0012.235-8.052l.017-.13a1.68 1.68 0 00.025-.254v-.561a5.218 5.218 0 011.402-3.12c.02-.022.037-.044.054-.066z" fill="#000"/>';
  let svgcolor =
    '<path d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z" fill="#2B6680"/><g fill="#fff"><path d="M15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48"/><path d="M64.68 23.862c-.048.045-.079.098-.124.146a5.218 5.218 0 00-1.402 3.12v.561c0 .13-.028.255-.042.384a9.425 9.425 0 01-12.235 8.053 12.14 12.14 0 00-11.148 2.91c-.12.112-.252.207-.37.325A12.21 12.21 0 0056.627 56.63c.505-.512.963-1.07 1.368-1.665a12.205 12.205 0 001.868-9.813 9.374 9.374 0 01-.18-.665c0-.033-.02-.064-.028-.098a9.428 9.428 0 018.397-11.515c.07 0 .138-.02.208-.022.199 0 .398-.023.597-.023h.048a5.224 5.224 0 003.224-1.517c.205-.212.392-.441.56-.684a5.26 5.26 0 00-8.007-6.762"/></g>';
  let svgicon =
    '<g clip-path="url(#clip0)"><g filter="url(#filter0_d)"><path d="M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z" fill="#2B6680"/><path d="M48 90c24.853 0 45-20.147 45-45S72.853 0 48 0 3 20.147 3 45s20.147 45 45 45z" fill="url(#paint0_linear)" style="mix-blend-mode:soft-light"/><path d="M91.5 45c0 24.024-19.476 43.5-43.5 43.5S4.5 69.024 4.5 45 23.976 1.5 48 1.5 91.5 20.976 91.5 45z" stroke="#000" stroke-opacity=".097" style="mix-blend-mode:soft-light"/></g><g fill="#fff"><path d="M18 45a30 30 0 1060 .115v-.23a30.21 30.21 0 00-.82-6.855 3.216 3.216 0 00-5.871-.941 3.219 3.219 0 00-.39 2.432 23.577 23.577 0 11-17.452-17.442 3.218 3.218 0 001.491-6.26A29.997 29.997 0 0018 45"/><path d="M63.163 23.058c-.043.04-.071.089-.112.132a4.744 4.744 0 00-1.275 2.837v.51c0 .117-.025.232-.038.35a8.567 8.567 0 01-11.123 7.32 11.036 11.036 0 00-10.134 2.645c-.11.102-.23.189-.337.296a11.1 11.1 0 1015.699 15.698c.46-.466.875-.973 1.244-1.514a11.094 11.094 0 001.697-8.92 8.502 8.502 0 01-.163-.605c0-.03-.018-.059-.025-.09a8.572 8.572 0 017.633-10.467c.064 0 .125-.018.189-.02.181 0 .362-.021.543-.021h.043a4.748 4.748 0 002.931-1.379c.187-.193.357-.401.51-.622a4.782 4.782 0 00-7.28-6.148"/></g></g><defs><linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="90" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-opacity=".5"/></linearGradient><clipPath id="clip0"><path fill="#fff" transform="scale(3)" d="M0 0h32v32H0z"/></clipPath><filter id="filter0_d" x="0" y="-1.5" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy=".5"/><feGaussianBlur stdDeviation=".5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199474 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>';
  let svgwhite =
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48zM15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48zm49.61-24.056a.66.66 0 01.07-.08l.002.002a5.26 5.26 0 018.008 6.763 5.57 5.57 0 01-.561.684 5.223 5.223 0 01-3.224 1.517h-.048c-.1 0-.2.005-.299.011-.1.006-.199.011-.298.011a1.006 1.006 0 00-.096.011.73.73 0 01-.112.012 9.428 9.428 0 00-8.397 11.515c.003.012.008.024.013.036.007.02.015.04.015.062.053.224.11.443.18.664a12.205 12.205 0 01-1.868 9.813 11.954 11.954 0 01-1.368 1.666A12.21 12.21 0 1139.36 39.362c.066-.066.138-.126.209-.185.054-.045.109-.091.161-.14a12.14 12.14 0 0111.148-2.91 9.422 9.422 0 0012.235-8.052l.017-.13a1.68 1.68 0 00.025-.254v-.561a5.218 5.218 0 011.402-3.12c.02-.022.037-.044.054-.066z" fill="#fff"/>';
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
  export let ariaLabel = 'kmd';
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
@prop export let ariaLabel = 'kmd';
-->
