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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.428-20.453l-2.47 11.284a.322.322 0 00.155.363l7.573 4.745c.056.035.116.05.173.05a.317.317 0 00.174-.05l7.573-4.745a.322.322 0 00.154-.363l-2.47-11.284a.322.322 0 00-.058-.13l-5.11-6.982a.311.311 0 00-.263-.132.311.311 0 00-.262.132l-5.11 6.983a.322.322 0 00-.059.13zm-1.395 9.367l1.767-8.07 1.01 3.171-2.777 4.899zm-.216 1.68l3.257-5.748 1.83 5.747H8.96zm.565.64h4.726l1.178 3.699-5.904-3.7zm2.857-7.978l-1.143-3.588 4.44-6.065v3.836l-3.297 5.817zm3.62 11.369l-1.08-3.392h2.16l-1.08 3.392zm.574.308l1.178-3.7h4.726l-5.904 3.7zm4.486-14.089l1.766 8.07-2.776-4.899 1.01-3.17zm-1.44 2.412L16.327 9.44V5.603l4.44 6.065-1.144 3.588zm3.422 7.337H17.96l1.83-5.747 3.256 5.747zm-7.042-12.427l3.356 5.921-2.072 6.506H14.72l-2.072-6.506 3.355-5.921z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".64" d="M10.886 11.61L16 27.667l-7.588-4.754 2.474-11.303L16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986 2.475 11.303-7.588 4.754L21.12 11.61"/></g>';
  let svgicon =
    '<defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><circle id="b" cx="16" cy="15" r="15"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#282828" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><path fill="#FFF" d="M9.177 19.914l2.776-4.899-1.01-3.17-1.766 8.069zm3.04-4.068l-3.256 5.747h5.087l-1.83-5.747zm-2.691 6.387l5.904 3.7-1.178-3.7H9.526zm2.857-7.977L15.68 8.44V4.603l-4.44 6.065 1.143 3.588zm-1.81-3.709a.322.322 0 01.057-.13l5.111-6.982a.311.311 0 01.262-.132.311.311 0 01.262.132l5.111 6.983a.322.322 0 01.058.13l2.47 11.283a.322.322 0 01-.154.363l-7.573 4.745a.317.317 0 01-.174.05.317.317 0 01-.173-.05l-7.573-4.745a.322.322 0 01-.154-.363l2.47-11.284zm5.43 15.078l1.08-3.392h-2.16l1.08 3.392zm.574.308l5.904-3.7h-4.726l-1.178 3.7zm4.486-14.089l-1.01 3.171 2.776 4.899-1.766-8.07zm-.297-1.176l-4.439-6.065v3.836l3.296 5.817 1.143-3.588zm2.28 10.925l-3.257-5.747-1.83 5.747h5.086zM16.002 9.166l-3.355 5.921 2.072 6.506h2.567l2.072-6.506-3.356-5.921zm7.313 12.905l.279-.478h-.55l.271.478zm-14.904-.478l.279.478.27-.478h-.549z"/></g>';
  let svgwhite =
    '<path fill="#FFF" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.428-20.453l-2.47 11.284a.322.322 0 00.155.363l7.573 4.745c.056.035.116.05.173.05a.317.317 0 00.174-.05l7.573-4.745a.322.322 0 00.154-.363l-2.47-11.284a.322.322 0 00-.058-.13l-5.11-6.982a.311.311 0 00-.263-.132.311.311 0 00-.262.132l-5.11 6.983a.322.322 0 00-.059.13zm-1.395 9.367l1.767-8.07 1.01 3.171-2.777 4.899zm-.216 1.68l3.257-5.748 1.83 5.747H8.96zm.565.64h4.726l1.178 3.699-5.904-3.7zm2.857-7.978l-1.143-3.588 4.44-6.065v3.836l-3.297 5.817zm3.62 11.369l-1.08-3.392h2.16l-1.08 3.392zm.574.308l1.178-3.7h4.726l-5.904 3.7zm4.486-14.089l1.766 8.07-2.776-4.899 1.01-3.17zm-1.44 2.412L16.327 9.44V5.603l4.44 6.065-1.144 3.588zm3.422 7.337H17.96l1.83-5.747 3.256 5.747zm-7.042-12.427l3.356 5.921-2.072 6.506H14.72l-2.072-6.506 3.355-5.921z"/>';
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
  export let ariaLabel = 'eos';
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
@prop export let ariaLabel = 'eos';
-->
