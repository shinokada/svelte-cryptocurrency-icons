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
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.978 16.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm6.196 4.477c-1.836-.937-3.742-.05-3.742-.05l.007.028c.065.25.597 2.082 2.334 2.892s3.32.076 3.53-.03l.024-.011s-.317-1.892-2.153-2.83zm-9.64-1.72h-.108c-.37.007-1.549.106-2.355 1.031-.967 1.112-.676 2.453-.676 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.768-2.564zm12.648-.482c-1.47.049-2.361 1.265-2.361 1.265s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026zm.708-4.858c-.139-.041-2.67-.763-4.976.918-2.371 1.728-2.473 4.725-2.473 4.725s2.913.717 5.22-1.096c2.05-1.61 2.222-3.95 2.234-4.449v-.096zM13.06 15.426s-1.787-1.114-3.72-.41c-1.657.604-2.298 2.041-2.448 2.44l-.027.076-.009.027s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm1.866-5.469c-2.64-.317-4.433 1.283-4.746 1.586l-.048.048c.01.021.03.055.06.105l.076.122c.398.612 1.679 2.279 4.034 2.648 2.899.455 5.09-1.593 5.09-1.593s-1.552-2.566-4.466-2.916zm3.305-4.248l-.016.023c-.133.202-1.048 1.68-.46 3.5.635 1.958 2.61 2.681 2.61 2.681s1.114-1.785.41-3.72C20.07 6.26 18.23 5.71 18.23 5.71zm-2.628 1.257C14.492 6 13.15 6.292 13.15 6.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776v-.116c-.007-.37-.106-1.55-1.032-2.356z"/>';
  let svgcolor =
    '<g fill="none"><circle fill="#23336F" cx="16" cy="16" r="16"/><path d="M16.485 19.46s2.913.717 5.22-1.096c2.307-1.812 2.235-4.545 2.235-4.545s-2.61-.813-4.982.916c-2.371 1.728-2.473 4.725-2.473 4.725zm-.009 1.367s.476 2.05 2.341 2.92c1.865.87 3.554-.041 3.554-.041s-.317-1.892-2.153-2.83c-1.836-.936-3.742-.049-3.742-.049zm4.389-.887s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026c-1.47.049-2.361 1.265-2.361 1.265zm-1.473-7.067s-1.552-2.566-4.466-2.916c-2.913-.35-4.794 1.634-4.794 1.634s1.271 2.42 4.17 2.875c2.899.455 5.09-1.593 5.09-1.593zm.973-.96s1.114-1.785.41-3.72C20.07 6.26 18.23 5.71 18.23 5.71s-1.11 1.563-.475 3.522c.634 1.96 2.609 2.682 2.609 2.682zm-3.73-2.475s.079-1.504-1.032-2.472C14.492 6 13.15 6.292 13.15 6.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776zM14.022 16.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm-.962-.974s-1.787-1.114-3.72-.41c-1.933.705-2.484 2.543-2.484 2.543s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm-2.474 3.731s-1.504-.08-2.47 1.031c-.968 1.112-.677 2.453-.677 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.776-2.564z" fill="#FFF"/></g>';
  let svgicon =
    '<defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" stop-opacity=".5" offset="0%"/><stop stop-opacity=".5" offset="100%"/></linearGradient><filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#23336F" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle stroke-opacity=".097" stroke="#000" stroke-linejoin="square" cx="16" cy="15" r="14.5"/><path d="M16.485 18.46s2.913.717 5.22-1.096c2.307-1.812 2.235-4.545 2.235-4.545s-2.61-.813-4.982.916c-2.371 1.728-2.473 4.725-2.473 4.725zm-.009 1.367s.476 2.05 2.341 2.92c1.865.87 3.554-.041 3.554-.041s-.317-1.892-2.153-2.83c-1.836-.936-3.742-.049-3.742-.049zm4.389-.887s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026c-1.47.049-2.361 1.265-2.361 1.265zm-1.473-7.067s-1.552-2.566-4.466-2.916c-2.913-.35-4.794 1.634-4.794 1.634s1.271 2.42 4.17 2.875c2.899.455 5.09-1.593 5.09-1.593zm.973-.96s1.114-1.785.41-3.72C20.07 5.26 18.23 4.71 18.23 4.71s-1.11 1.563-.475 3.522c.634 1.96 2.609 2.682 2.609 2.682zm-3.73-2.475s.079-1.504-1.032-2.472C14.492 5 13.15 5.292 13.15 5.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776zM14.022 15.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm-.962-.974s-1.787-1.114-3.72-.41c-1.933.705-2.484 2.543-2.484 2.543s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm-2.474 3.731s-1.504-.08-2.47 1.031c-.968 1.112-.677 2.453-.677 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.776-2.564z" fill="#FFF" fill-rule="nonzero"/></g>';
  let svgwhite =
    '<path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.978 16.4s-2.568 1.552-2.917 4.466c-.35 2.913 1.633 4.794 1.633 4.794s2.42-1.269 2.875-4.17c.455-2.901-1.591-5.09-1.591-5.09zm6.196 4.477c-1.836-.937-3.742-.05-3.742-.05l.007.028c.065.25.597 2.082 2.334 2.892s3.32.076 3.53-.03l.024-.011s-.317-1.892-2.153-2.83zm-9.64-1.72h-.108c-.37.007-1.549.106-2.355 1.031-.967 1.112-.676 2.453-.676 2.453s1.364.155 2.371-.92c1.007-1.076.776-2.564.768-2.564zm12.648-.482c-1.47.049-2.361 1.265-2.361 1.265s1.007 1.119 2.476 1.018c1.47-.102 2.21-1.257 2.21-1.257s-.854-1.074-2.325-1.026zm.708-4.858c-.139-.041-2.67-.763-4.976.918-2.371 1.728-2.473 4.725-2.473 4.725s2.913.717 5.22-1.096c2.05-1.61 2.222-3.95 2.234-4.449v-.096zM13.06 15.426s-1.787-1.114-3.72-.41c-1.657.604-2.298 2.041-2.448 2.44l-.027.076-.009.027s1.564 1.11 3.522.476c1.96-.634 2.682-2.61 2.682-2.61zm1.866-5.469c-2.64-.317-4.433 1.283-4.746 1.586l-.048.048c.01.021.03.055.06.105l.076.122c.398.612 1.679 2.279 4.034 2.648 2.899.455 5.09-1.593 5.09-1.593s-1.552-2.566-4.466-2.916zm3.305-4.248l-.016.023c-.133.202-1.048 1.68-.46 3.5.635 1.958 2.61 2.681 2.61 2.681s1.114-1.785.41-3.72C20.07 6.26 18.23 5.71 18.23 5.71zm-2.628 1.257C14.492 6 13.15 6.292 13.15 6.292s-.155 1.364.92 2.37c1.076 1.008 2.564.776 2.564.776v-.116c-.007-.37-.106-1.55-1.032-2.356z" fill="#FFF"/>';
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
  export let ariaLabel = 'nkn';
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
@prop export let ariaLabel = 'nkn';
-->
