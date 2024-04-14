import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  rules: [
    [
      /^bg-rgba-([\.\d]+)-([\.\d]+)-([\.\d]+)-([\.\d]+)$/,
      ([_, r, g, b, a]) => ({ "background-color": `rgba(${r}, ${g}, ${b}, ${a})` })
    ],
    [
      /^font-family-([a-zA-Z_-]+)$/,
      ([_, fontFamily]) => ({ "font-family": fontFamily })
    ],
    [
      /^hearth-stroke-([\.\d]+)px$/,
      ([_, size]) => ({ "text-shadow": `-${size}px -${size}px 0 black, ${size}px -${size}px 0 black, -${size}px ${size}px 0 black, ${size}px ${size}px 0 black` })
    ],
    [
      /^white-space-([a-zA-Z_-]+)$/,
      ([_, whiteSpace]) => ({ "white-space": whiteSpace })
    ],
    [
      /^box-shadow-([\.\d]+)px-([\.\d]+)px-([\.\d]+)px-([a-zA-Z_-]+)$/,
      ([_, offsetX, offsetY, blur, color]) => ({ "box-shadow": `${offsetX}px ${offsetY}px ${blur}px ${color}` })
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
