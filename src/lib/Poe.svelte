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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.758-24.268A4.283 4.283 0 0021.742 6.5c-1.145 0-2.211.44-3.016 1.232L8.87 17.438a.5.5 0 00-.145.382v4.996L6 25.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 10.724a4.171 4.171 0 00-1.242-2.99zM19.026 8.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V8.859zM10.55 22.501l2.056-2.026h3.812l-2.056 2.026zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398zm2.978.822l-2.27 2.235H13.43l2.27-2.235zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#dcd6cc" r="16"/><path d="M24.758 7.732A4.283 4.283 0 0021.742 6.5c-1.145 0-2.211.44-3.016 1.232L8.87 17.438a.5.5 0 00-.145.382v4.996L6 25.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 10.724a4.171 4.171 0 00-1.242-2.99zM19.026 8.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V8.859zM10.55 22.501l2.056-2.026h3.812l-2.056 2.026zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398zm2.978.822l-2.27 2.235H13.43l2.27-2.235zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="118.4%" x="-8.8%" y="-6.6%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M24.758 6.732A4.283 4.283 0 0021.742 5.5c-1.145 0-2.211.44-3.016 1.232L8.87 16.438a.5.5 0 00-.145.382v4.996L6 24.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 9.724a4.171 4.171 0 00-1.242-2.99zM19.026 7.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V7.859h-.01zM10.55 21.501l2.056-2.026h3.812l-2.056 2.026H10.55zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398h-3.812zm2.978.822l-2.27 2.235H13.43l2.27-2.235h3.811zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417v-3.81zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235v-3.802zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044v-3.802z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#DCD6CC" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.758-24.268A4.283 4.283 0 0021.742 6.5c-1.145 0-2.211.44-3.016 1.232L8.87 17.438a.5.5 0 00-.145.382v4.996L6 25.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 10.724a4.171 4.171 0 00-1.242-2.99zM19.026 8.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V8.859zM10.55 22.501l2.056-2.026h3.812l-2.056 2.026zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398zm2.978.822l-2.27 2.235H13.43l2.27-2.235zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'poe';
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
@prop export let ariaLabel = 'poe';
-->
