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
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.41 20.902c.496.507 1.246.738 2.257.735 2.16 0 3.954-1.866 3.954-4.997v-.39c0-3.01-1.55-5.262-3.914-5.262-.564 0-1.57.021-2.358.777H8.26v-.64H6V25h2.312v-4.098zm4.064-4.076c0 2.019-.865 2.933-2.038 2.936-1.49 0-2.249-1.274-2.249-2.939v-.68c0-1.747.771-3.271 2.209-3.271 1.331 0 2.078 1.31 2.078 3.271zM15.74 7v14.576h2.315V7zm8.929 6.409h.29l-.013-2.333c-.1 0-.015-.003-.119-.003-1.042-.015-2.31.241-2.827.787h-.088v-.637h-2.133v10.362h2.303v-5.844c0-1.302 1.289-2.332 2.587-2.332zm-.972 5.686v2.481H26v-2.481z" fill-rule="evenodd"/>';
  let svgcolor =
    '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#00bfff" r="16"/><path d="M8.41 20.902h-.098V25H6V11.125h2.26v.64h.089c.789-.756 1.794-.777 2.358-.777 2.364 0 3.914 2.253 3.914 5.262v.39c0 3.131-1.794 4.997-3.954 4.997-1.011.003-1.76-.228-2.257-.735zm4.064-4.076v-.683c0-1.96-.747-3.271-2.078-3.271-1.438 0-2.209 1.524-2.209 3.271v.68c0 1.665.759 2.94 2.249 2.94 1.173-.004 2.038-.918 2.038-2.937zM15.74 7h2.315v14.576H15.74zm8.929 6.409c-1.298 0-2.587 1.03-2.587 2.332v5.844H19.78V11.223h2.133v.637H22c.518-.546 1.785-.802 2.827-.787.104 0 .018.003.119.003l.012 2.333zm-.972 5.686H26v2.481h-2.303z" fill="#fff" fill-rule="nonzero"/></g>';
  let svgicon =
    '<defs><filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/></filter><filter id="d" width="117.5%" height="119.4%" x="-8.8%" y="-6.9%" filterUnits="objectBoundingBox"><feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/></filter><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"/><stop offset="100%" stop-opacity=".5"/></linearGradient><circle id="b" cx="16" cy="15" r="15"/><path id="e" d="M8.41 19.902h-.098V24H6V10.125h2.26v.64h.089c.789-.756 1.794-.777 2.358-.777 2.364 0 3.914 2.253 3.914 5.262v.39c0 3.131-1.794 4.997-3.954 4.997-1.011.003-1.76-.228-2.257-.735zm4.064-4.076v-.683c0-1.96-.747-3.271-2.078-3.271-1.438 0-2.209 1.524-2.209 3.271v.68c0 1.665.759 2.94 2.249 2.94 1.173-.004 2.038-.918 2.038-2.937zM15.74 6h2.315v14.576H15.74V6zm8.929 6.409c-1.298 0-2.587 1.03-2.587 2.332v5.844H19.78V10.223h2.133v.637H22c.518-.546 1.785-.802 2.827-.787.104 0 .018.003.119.003l.012 2.333h-.29zm-.972 5.686H26v2.481h-2.303v-2.481z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#00BFFF" xlink:href="#b"/><use fill="url(#c)" style="mix-blend-mode:soft-light" xlink:href="#b"/><circle cx="16" cy="15" r="14.5" stroke="#000" stroke-opacity=".097"/><g fill-rule="nonzero"><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#e"/></g></g>';
  let svgwhite =
    '<path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8.41 20.902c.496.507 1.246.738 2.257.735 2.16 0 3.954-1.866 3.954-4.997v-.39c0-3.01-1.55-5.262-3.914-5.262-.564 0-1.57.021-2.358.777H8.26v-.64H6V25h2.312v-4.098zm4.064-4.076c0 2.019-.865 2.933-2.038 2.936-1.49 0-2.249-1.274-2.249-2.939v-.68c0-1.747.771-3.271 2.209-3.271 1.331 0 2.078 1.31 2.078 3.271zM15.74 7v14.576h2.315V7zm8.929 6.409h.29l-.013-2.333c-.1 0-.015-.003-.119-.003-1.042-.015-2.31.241-2.827.787h-.088v-.637h-2.133v10.362h2.303v-5.844c0-1.302 1.289-2.332 2.587-2.332zm-.972 5.686v2.481H26v-2.481z" fill="#fff" fill-rule="evenodd"/>';
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
  export let ariaLabel = 'plr';
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
@prop export let ariaLabel = 'plr';
-->
