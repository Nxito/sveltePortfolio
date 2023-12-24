import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const nxito_theme: CustomThemeConfig = {
	name: 'nxito_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "24px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-800)",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #00ADB5 
		"--color-primary-50": "217 243 244", // #d9f3f4
		"--color-primary-100": "204 239 240", // #cceff0
		"--color-primary-200": "191 235 237", // #bfebed
		"--color-primary-300": "153 222 225", // #99dee1
		"--color-primary-400": "77 198 203", // #4dc6cb
		"--color-primary-500": "0 173 181", // #00ADB5
		"--color-primary-600": "0 156 163", // #009ca3
		"--color-primary-700": "0 130 136", // #008288
		"--color-primary-800": "0 104 109", // #00686d
		"--color-primary-900": "0 85 89", // #005559
		// secondary | #039bea 
		"--color-secondary-50": "217 240 252", // #d9f0fc
		"--color-secondary-100": "205 235 251", // #cdebfb
		"--color-secondary-200": "192 230 250", // #c0e6fa
		"--color-secondary-300": "154 215 247", // #9ad7f7
		"--color-secondary-400": "79 185 240", // #4fb9f0
		"--color-secondary-500": "3 155 234", // #039bea
		"--color-secondary-600": "3 140 211", // #038cd3
		"--color-secondary-700": "2 116 176", // #0274b0
		"--color-secondary-800": "2 93 140", // #025d8c
		"--color-secondary-900": "1 76 115", // #014c73
		// tertiary | #595c37 
		"--color-tertiary-50": "230 231 225", // #e6e7e1
		"--color-tertiary-100": "222 222 215", // #deded7
		"--color-tertiary-200": "214 214 205", // #d6d6cd
		"--color-tertiary-300": "189 190 175", // #bdbeaf
		"--color-tertiary-400": "139 141 115", // #8b8d73
		"--color-tertiary-500": "89 92 55", // #595c37
		"--color-tertiary-600": "80 83 50", // #505332
		"--color-tertiary-700": "67 69 41", // #434529
		"--color-tertiary-800": "53 55 33", // #353721
		"--color-tertiary-900": "44 45 27", // #2c2d1b
		// success | #495b19 
		"--color-success-50": "228 230 221", // #e4e6dd
		"--color-success-100": "219 222 209", // #dbded1
		"--color-success-200": "210 214 198", // #d2d6c6
		"--color-success-300": "182 189 163", // #b6bda3
		"--color-success-400": "128 140 94", // #808c5e
		"--color-success-500": "73 91 25", // #495b19
		"--color-success-600": "66 82 23", // #425217
		"--color-success-700": "55 68 19", // #374413
		"--color-success-800": "44 55 15", // #2c370f
		"--color-success-900": "36 45 12", // #242d0c
		// warning | #50a48e 
		"--color-warning-50": "229 241 238", // #e5f1ee
		"--color-warning-100": "220 237 232", // #dcede8
		"--color-warning-200": "211 232 227", // #d3e8e3
		"--color-warning-300": "185 219 210", // #b9dbd2
		"--color-warning-400": "133 191 176", // #85bfb0
		"--color-warning-500": "80 164 142", // #50a48e
		"--color-warning-600": "72 148 128", // #489480
		"--color-warning-700": "60 123 107", // #3c7b6b
		"--color-warning-800": "48 98 85", // #306255
		"--color-warning-900": "39 80 70", // #275046
		// error | #dc251a 
		"--color-error-50": "250 222 221", // #fadedd
		"--color-error-100": "248 211 209", // #f8d3d1
		"--color-error-200": "246 201 198", // #f6c9c6
		"--color-error-300": "241 168 163", // #f1a8a3
		"--color-error-400": "231 102 95", // #e7665f
		"--color-error-500": "220 37 26", // #dc251a
		"--color-error-600": "198 33 23", // #c62117
		"--color-error-700": "165 28 20", // #a51c14
		"--color-error-800": "132 22 16", // #841610
		"--color-error-900": "108 18 13", // #6c120d
		// surface | #2e3087 
		"--color-surface-50": "224 224 237", // #e0e0ed
		"--color-surface-100": "213 214 231", // #d5d6e7
		"--color-surface-200": "203 203 225", // #cbcbe1
		"--color-surface-300": "171 172 207", // #abaccf
		"--color-surface-400": "109 110 171", // #6d6eab
		"--color-surface-500": "46 48 135", // #2e3087
		"--color-surface-600": "41 43 122", // #292b7a
		"--color-surface-700": "35 36 101", // #232465
		"--color-surface-800": "28 29 81", // #1c1d51
		"--color-surface-900": "23 24 66", // #171842
		
	}
}