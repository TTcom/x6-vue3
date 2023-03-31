import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
  } from 'unocss'
  
  export default defineConfig({
    theme: {
	    animation: {
	        // keyframes: { custom: '{0%, 100% {opacity:1} 50% {opacity:.5}}' },
          durations: { spin: '1.5s' },
          // timingFns: { custom: 'cubic-bezier(0.4,0,.6,1)' },
          // properties and counts same as it
	    },
	  },
    shortcuts: [
      ['asvg-style', 'fill-current w-20px h-20px inline-block c-white']
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
    ],
    rules: [
        [/^abg-(\S+)$/, ([, d]) => ({ 'background-color': `#${d}` })],
    ]
  })
  