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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.503 5.5l-1.722.978v8.304l.94.534V8.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 7.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.95.95 0 00-.305-.092l-.103-.007a.946.946 0 00-.934.842l-.006.111a.95.95 0 00.83.946l.11.007a.937.937 0 00.913-.746l.017-.11.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V6.478L13.496 5.5 8.017 8.61v2.84L5.5 12.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V17.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.1.049.202.08.305.092l.103.006c.482 0 .88-.368.934-.841l.006-.111a.95.95 0 00-.83-.946l-.11-.007a.936.936 0 00-.912.746l-.018.11-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V8.611L18.503 5.5zm4.54 15.584v1.747l-4.54 2.577-.781-.444V24.1l5.32-3.016zm-5.321-3.56l4.833 2.744-4.833 2.74v-5.485zm-3.444-8.532v5.484l-4.833-2.744 4.833-2.74zm-.782-2.4l.782.444V7.9l-5.32 3.016V9.17l4.538-2.577z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#01C38D" cx="16" cy="16" r="16"/><path d="M18.503 5.5l-1.722.978v8.304l.94.534V8.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 7.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.921.921 0 00-.408-.099.948.948 0 00-.94.953c0 .525.421.953.94.953a.94.94 0 00.93-.856l.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V6.478L13.496 5.5 8.017 8.61v2.84L5.5 12.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V17.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.133.065.27.098.408.098.519 0 .94-.427.94-.952a.948.948 0 00-.94-.953.94.94 0 00-.93.856l-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V8.611L18.503 5.5zM8.957 9.17l4.54-2.578.781.444V7.9l-5.32 3.016V9.17zm.488 2.562l4.833-2.74v5.484l-4.833-2.744zm8.277 5.791l4.833 2.745-4.833 2.74v-5.485zm0 7.441V24.1l5.32-3.016v1.747l-4.539 2.577-.781-.444z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#01C38D" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M18.503 4.5l-1.722.978v8.304l.94.534V7.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 6.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.921.921 0 00-.408-.099.948.948 0 00-.94.953c0 .525.421.953.94.953a.94.94 0 00.93-.856l.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V5.478L13.496 4.5 8.017 7.61v2.84L5.5 11.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V16.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.133.065.27.098.408.098.519 0 .94-.427.94-.952a.948.948 0 00-.94-.953.94.94 0 00-.93.856l-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V7.611L18.503 4.5zM8.957 8.17l4.54-2.578.781.444V6.9l-5.32 3.016V8.17zm.488 2.562l4.833-2.74v5.484l-4.833-2.744zm8.277 5.791l4.833 2.745-4.833 2.74v-5.485zm0 7.441V23.1l5.32-3.016v1.747l-4.539 2.577-.781-.444z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm2.503 5.5l-1.722.978v8.304l.94.534V8.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 7.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.95.95 0 00-.305-.092l-.103-.007a.946.946 0 00-.934.842l-.006.111a.95.95 0 00.83.946l.11.007a.937.937 0 00.913-.746l.017-.11.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V6.478L13.496 5.5 8.017 8.61v2.84L5.5 12.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V17.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.1.049.202.08.305.092l.103.006c.482 0 .88-.368.934-.841l.006-.111a.95.95 0 00-.83-.946l-.11-.007a.936.936 0 00-.912.746l-.018.11-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V8.611L18.503 5.5zm4.54 15.584v1.747l-4.54 2.577-.781-.444V24.1l5.32-3.016zm-5.321-3.56l4.833 2.744-4.833 2.74v-5.485zm-3.444-8.532v5.484l-4.833-2.744 4.833-2.74zm-.782-2.4l.782.444V7.9l-5.32 3.016V9.17l4.538-2.577z" fill="#FFF" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'chsb';
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
@prop export let ariaLabel = 'chsb';
-->
