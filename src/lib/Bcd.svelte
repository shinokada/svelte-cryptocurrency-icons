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
    '<path d="M22.585 9.694l.067.031 2.93 3.906-.02.022-.059-.12-4.521 2.284-1.374-4.55 3.054-1.402zm-.165-.077l-2.975 1.366h-6.85L9.513 9.687l2.962-1.36h7.17zm-13.154.32l3.12 1.313-1.38 4.567-4.513-2.279zm3.44 1.373h6.576l1.426 4.72-4.714 8.332-4.713-8.332zm12.512 2.733l-8.424 9.564 4.205-7.433zm-10.047 9.524l-8.378-9.512 4.196 2.12zm-8.74-9.924l-.01-.01.043-.057zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.222 9.462L6 13.646 16 25l10-11.352-3.139-4.186L19.717 8h-7.312zm9.201 5.372c-.079-.83-.786-1.108-1.68-1.188v-1.151h-.692v1.121c-.182 0-.368.004-.553.008v-1.129h-.691v1.151c-.15.003-.297.006-.44.006l-.001-.003h-.955v.748s.512-.01.503 0c.28 0 .372.164.398.307v1.311c.02 0 .045.001.074.005h-.074v1.838c-.012.09-.064.232-.26.232.01.008-.503 0-.503 0l-.137.837h.9c.168 0 .333.003.495.004v1.164h.691v-1.152c.19.004.374.006.553.006v1.147h.692v-1.163c1.164-.068 1.978-.364 2.08-1.47.08-.892-.333-1.29-.994-1.45.402-.207.653-.572.594-1.179zm-.968 2.49c0 .87-1.471.771-1.94.772v-1.543c.469 0 1.94-.137 1.94.771zm-.322-2.177c0 .792-1.228.7-1.618.7v-1.4c.39 0 1.618-.126 1.618.7z"/>';
  let svgcolor =
    '<g fill="none"><circle cx="16" cy="16" fill="#fcc339" r="16"/><path d="M22.585 9.694l.077.171-3.054 1.402 1.374 4.55 4.521-2.283.06.119.018-.022-2.929-3.906zm-.165-.077l-2.773-1.29h-7.171l-2.962 1.36 3.08 1.296h6.85zm-13.154.32l-2.773 3.601 4.514 2.28 1.38-4.568zm3.44 1.373l-1.425 4.72 4.713 8.332 4.714-8.332-1.426-4.72zm12.512 2.733L21 16.174l-4.205 7.433zm-10.047 9.524l-4.182-7.393-4.196-2.119zm-8.74-9.924l.033-.067-.043.056zm2.791-4.181L12.405 8h7.312l3.144 1.462L26 13.648 16 25 6 13.646zm9.201 5.372c.059.607-.192.972-.594 1.179.661.16 1.075.558.993 1.45-.1 1.106-.915 1.402-2.079 1.47v1.163h-.692v-1.147c-.18 0-.363-.002-.553-.006v1.153h-.691V18.93c-.162-.001-.327-.004-.495-.004h-.9l.137-.837s.512.008.503 0c.196 0 .248-.143.26-.232V16.02h.074a.55.55 0 00-.074-.005v-1.311c-.026-.143-.117-.307-.398-.308.009-.01-.502 0-.502 0v-.748h.954v.004c.144 0 .29-.003.44-.006v-1.151h.693v1.129c.184-.004.37-.008.552-.008v-1.12l.692-.001v1.151c.894.08 1.601.358 1.68 1.188zm-.968 2.49c0-.908-1.471-.771-1.94-.771v1.543c.469 0 1.94.098 1.94-.772zm-.322-2.177c0-.826-1.228-.7-1.618-.7v1.4c.39 0 1.618.092 1.618-.7z" fill="#fff"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="120.6%" x="-8.8%" y="-7.4%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M22.585 8.694l.077.171-3.054 1.402 1.374 4.55 4.521-2.283.06.119.018-.022-2.929-3.906-.067-.031zm-.165-.077l-2.773-1.29h-7.171l-2.962 1.36 3.08 1.296h6.85l2.976-1.366zm-13.154.32l-2.773 3.601 4.514 2.28 1.38-4.568-3.12-1.313zm3.44 1.373l-1.425 4.72 4.713 8.332 4.714-8.332-1.426-4.72h-6.576zm12.512 2.733L21 15.174l-4.205 7.433 8.424-9.564zm-10.047 9.524l-4.182-7.393-4.196-2.119 8.378 9.512zm-8.74-9.924l.033-.067-.043.056.01.011zm2.791-4.181L12.405 7h7.312l3.144 1.462L26 12.648 16 24 6 12.646l3.222-4.184zm9.201 5.372c.059.607-.192.972-.594 1.179.661.16 1.075.558.993 1.45-.1 1.106-.915 1.402-2.079 1.47v1.163h-.692v-1.147c-.18 0-.363-.002-.553-.006v1.153h-.691V17.93c-.162-.001-.327-.004-.495-.004h-.9l.137-.837s.512.008.503 0c.196 0 .248-.143.26-.232V15.02h.074a.55.55 0 00-.074-.005v-1.311c-.026-.143-.117-.307-.398-.308.009-.01-.502 0-.502 0v-.748h.954v.004c.144 0 .29-.003.44-.006v-1.151h.693v1.129c.184-.004.37-.008.552-.008v-1.12l.692-.001v1.151c.894.08 1.601.358 1.68 1.188zm-.968 2.49c0-.908-1.471-.771-1.94-.771v1.543c.469 0 1.94.098 1.94-.772zm-.322-2.177c0-.826-1.228-.7-1.618-.7v1.4c.39 0 1.618.092 1.618-.7z"/></defs><g fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FCC339" fill-rule="evenodd" xlink:href="#b"/><use fill="url(#c)" fill-rule="evenodd" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g>';
  let svgwhite =
    '<path d="M22.585 9.694l.067.031 2.93 3.906-.02.022-.059-.12-4.521 2.284-1.374-4.55 3.054-1.402zm-.165-.077l-2.975 1.366h-6.85L9.513 9.687l2.962-1.36h7.17zm-13.154.32l3.12 1.313-1.38 4.567-4.513-2.279zm3.44 1.373h6.576l1.426 4.72-4.714 8.332-4.713-8.332zm12.512 2.733l-8.424 9.564 4.205-7.433zm-10.047 9.524l-8.378-9.512 4.196 2.12zm-8.74-9.924l-.01-.01.043-.057zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.222 9.462L6 13.646 16 25l10-11.352-3.139-4.186L19.717 8h-7.312zm9.201 5.372c-.079-.83-.786-1.108-1.68-1.188v-1.151h-.692v1.121c-.182 0-.368.004-.553.008v-1.129h-.691v1.151c-.15.003-.297.006-.44.006l-.001-.003h-.955v.748s.512-.01.503 0c.28 0 .372.164.398.307v1.311c.02 0 .045.001.074.005h-.074v1.838c-.012.09-.064.232-.26.232.01.008-.503 0-.503 0l-.137.837h.9c.168 0 .333.003.495.004v1.164h.691v-1.152c.19.004.374.006.553.006v1.147h.692v-1.163c1.164-.068 1.978-.364 2.08-1.47.08-.892-.333-1.29-.994-1.45.402-.207.653-.572.594-1.179zm-.968 2.49c0 .87-1.471.771-1.94.772v-1.543c.469 0 1.94-.137 1.94.771zm-.322-2.177c0 .792-1.228.7-1.618.7v-1.4c.39 0 1.618-.126 1.618.7z" fill="#fff"/>';
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
  export let ariaLabel = 'bcd';
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
@prop export let ariaLabel = 'bcd';
-->
