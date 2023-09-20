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
    '<path fill-rule="evenodd" d="M16.931 9.625c.061-1.188.454-3.826 1.704-3.826.33 0 .601.094.812.282-.3.157-.451.423-.451.8 0 .563.473.94.947.94.473 0 .946-.283.946-.94C20.89 6.221 20.26 5 18.77 5c-2.458.046-3.42 2.855-3.469 4.695-2.501.395-5.051 2.165-5.051 6.258 0 3.64 2.449 6.143 5.077 6.565-.116 2.098-.794 3.73-1.696 3.73-.27 0-.54-.094-.811-.282.27-.157.405-.439.405-.846 0-.611-.45-.94-.901-.94s-.947.282-.947.94c0 1.01.947 1.88 2.074 1.88 2.38 0 3.34-2.444 3.527-4.473 2.49-.311 4.272-1.883 4.272-2.578 0-.33-.225-.47-.406-.47-.325 0-1.577 1.684-3.832 2.013-.006-2.175-.068-8.495-.085-10.791.846.047 1.574.273 2.294 1.35.668 1 .541 1.505.992 1.505.3 0 .466-.126.496-.377-.12-.365-.18-.632-.18-.799 0-.25.045-.658.045-.846 0-.264-1.19-1.728-3.643-1.909zm-1.587 11.788c-1.726-.521-3.11-2.532-3.11-5.46 0-1.847.76-4.593 3.067-5.16.008 2.577.039 8.186.043 10.62zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#262626"/><path fill="#FFF" d="M16.931 9.625c2.453.181 3.643 1.645 3.643 1.91 0 .187-.045.595-.045.845 0 .167.06.434.18.8-.03.25-.195.376-.496.376-.45 0-.324-.505-.992-1.505-.72-1.077-1.448-1.303-2.294-1.35.017 2.296.08 8.616.085 10.79 2.255-.328 3.507-2.012 3.832-2.012.18 0 .406.14.406.47 0 .695-1.782 2.267-4.272 2.578C16.792 24.556 15.832 27 13.45 27c-1.127 0-2.074-.87-2.074-1.88 0-.658.496-.94.947-.94.45 0 .901.329.901.94 0 .407-.135.69-.405.846.27.188.54.282.811.282.902 0 1.58-1.632 1.696-3.73-2.628-.422-5.077-2.926-5.077-6.565 0-4.093 2.55-5.863 5.051-6.258.05-1.84 1.011-4.65 3.47-4.695 1.487 0 2.118 1.222 2.118 1.88 0 .658-.473.94-.946.94-.474 0-.947-.376-.947-.94 0-.376.15-.642.45-.799-.21-.188-.48-.282-.81-.282-1.251 0-1.644 2.638-1.705 3.826zm-1.587 11.788c-.004-2.434-.035-8.043-.043-10.62-2.308.567-3.067 3.313-3.067 5.16 0 2.928 1.384 4.939 3.11 5.46z"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="131.8%" height="115.9%" x="-15.9%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M16.931 8.625c2.453.181 3.643 1.645 3.643 1.91 0 .187-.045.595-.045.845 0 .167.06.434.18.8-.03.25-.195.376-.496.376-.45 0-.324-.505-.992-1.505-.72-1.077-1.448-1.303-2.294-1.35.017 2.296.08 8.616.085 10.79 2.255-.328 3.507-2.012 3.832-2.012.18 0 .406.14.406.47 0 .695-1.782 2.267-4.272 2.578C16.792 23.556 15.832 26 13.45 26c-1.127 0-2.074-.87-2.074-1.88 0-.658.496-.94.947-.94.45 0 .901.329.901.94 0 .407-.135.69-.405.846.27.188.54.282.811.282.902 0 1.58-1.632 1.696-3.73-2.628-.422-5.077-2.926-5.077-6.565 0-4.093 2.55-5.863 5.051-6.258.05-1.84 1.011-4.65 3.47-4.695 1.487 0 2.118 1.222 2.118 1.88 0 .658-.473.94-.946.94-.474 0-.947-.376-.947-.94 0-.376.15-.642.45-.799-.21-.188-.48-.282-.81-.282-1.251 0-1.644 2.638-1.705 3.826zm-1.587 11.788c-.004-2.434-.035-8.043-.043-10.62-2.308.567-3.067 3.313-3.067 5.16 0 2.928 1.384 4.939 3.11 5.46z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#262626" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" xlink:href="#e"/></g>';
  let svgwhite =
    '<path fill="#FFF" fill-rule="evenodd" d="M16.931 9.625c.061-1.188.454-3.826 1.704-3.826.33 0 .601.094.812.282-.3.157-.451.423-.451.8 0 .563.473.94.947.94.473 0 .946-.283.946-.94C20.89 6.221 20.26 5 18.77 5c-2.458.046-3.42 2.855-3.469 4.695-2.501.395-5.051 2.165-5.051 6.258 0 3.64 2.449 6.143 5.077 6.565-.116 2.098-.794 3.73-1.696 3.73-.27 0-.54-.094-.811-.282.27-.157.405-.439.405-.846 0-.611-.45-.94-.901-.94s-.947.282-.947.94c0 1.01.947 1.88 2.074 1.88 2.38 0 3.34-2.444 3.527-4.473 2.49-.311 4.272-1.883 4.272-2.578 0-.33-.225-.47-.406-.47-.325 0-1.577 1.684-3.832 2.013-.006-2.175-.068-8.495-.085-10.791.846.047 1.574.273 2.294 1.35.668 1 .541 1.505.992 1.505.3 0 .466-.126.496-.377-.12-.365-.18-.632-.18-.799 0-.25.045-.658.045-.846 0-.264-1.19-1.728-3.643-1.909zm-1.587 11.788c-1.726-.521-3.11-2.532-3.11-5.46 0-1.847.76-4.593 3.067-5.16.008 2.577.039 8.186.043 10.62zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/>';
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
  export let ariaLabel = 'cs';
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
@prop export let ariaLabel = 'cs';
-->
