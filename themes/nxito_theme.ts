import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const nxito_theme: CustomThemeConfig = {
	name: 'nxito_theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '24px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #2209dc
		'--color-primary-50': '222 218 250', // #dedafa
		'--color-primary-100': '211 206 248', // #d3cef8
		'--color-primary-200': '200 194 246', // #c8c2f6
		'--color-primary-300': '167 157 241', // #a79df1
		'--color-primary-400': '100 83 231', // #6453e7
		'--color-primary-500': '34 9 220', // #2209dc
		'--color-primary-600': '31 8 198', // #1f08c6
		'--color-primary-700': '26 7 165', // #1a07a5
		'--color-primary-800': '20 5 132', // #140584
		'--color-primary-900': '17 4 108', // #11046c
		// secondary | #e11226
		'--color-secondary-50': '251 219 222', // #fbdbde
		'--color-secondary-100': '249 208 212', // #f9d0d4
		'--color-secondary-200': '248 196 201', // #f8c4c9
		'--color-secondary-300': '243 160 168', // #f3a0a8
		'--color-secondary-400': '234 89 103', // #ea5967
		'--color-secondary-500': '225 18 38', // #e11226
		'--color-secondary-600': '203 16 34', // #cb1022
		'--color-secondary-700': '169 14 29', // #a90e1d
		'--color-secondary-800': '135 11 23', // #870b17
		'--color-secondary-900': '110 9 19', // #6e0913
		// tertiary | #14fffb
		'--color-tertiary-50': '220 255 254', // #dcfffe
		'--color-tertiary-100': '208 255 254', // #d0fffe
		'--color-tertiary-200': '196 255 254', // #c4fffe
		'--color-tertiary-300': '161 255 253', // #a1fffd
		'--color-tertiary-400': '91 255 252', // #5bfffc
		'--color-tertiary-500': '20 255 251', // #14fffb
		'--color-tertiary-600': '18 230 226', // #12e6e2
		'--color-tertiary-700': '15 191 188', // #0fbfbc
		'--color-tertiary-800': '12 153 151', // #0c9997
		'--color-tertiary-900': '10 125 123', // #0a7d7b
		// success | #081775
		'--color-success-50': '218 220 234', // #dadcea
		'--color-success-100': '206 209 227', // #ced1e3
		'--color-success-200': '193 197 221', // #c1c5dd
		'--color-success-300': '156 162 200', // #9ca2c8
		'--color-success-400': '82 93 158', // #525d9e
		'--color-success-500': '8 23 117', // #081775
		'--color-success-600': '7 21 105', // #071569
		'--color-success-700': '6 17 88', // #061158
		'--color-success-800': '5 14 70', // #050e46
		'--color-success-900': '4 11 57', // #040b39
		// warning | #1648bc
		'--color-warning-50': '220 228 245', // #dce4f5
		'--color-warning-100': '208 218 242', // #d0daf2
		'--color-warning-200': '197 209 238', // #c5d1ee
		'--color-warning-300': '162 182 228', // #a2b6e4
		'--color-warning-400': '92 127 208', // #5c7fd0
		'--color-warning-500': '22 72 188', // #1648bc
		'--color-warning-600': '20 65 169', // #1441a9
		'--color-warning-700': '17 54 141', // #11368d
		'--color-warning-800': '13 43 113', // #0d2b71
		'--color-warning-900': '11 35 92', // #0b235c
		// error | #e3cccf
		'--color-error-50': '251 247 248', // #fbf7f8
		'--color-error-100': '249 245 245', // #f9f5f5
		'--color-error-200': '248 242 243', // #f8f2f3
		'--color-error-300': '244 235 236', // #f4ebec
		'--color-error-400': '235 219 221', // #ebdbdd
		'--color-error-500': '227 204 207', // #e3cccf
		'--color-error-600': '204 184 186', // #ccb8ba
		'--color-error-700': '170 153 155', // #aa999b
		'--color-error-800': '136 122 124', // #887a7c
		'--color-error-900': '111 100 101', // #6f6465
		// surface | #404040
		'--color-surface-50': '226 226 226', // #e2e2e2
		'--color-surface-100': '217 217 217', // #d9d9d9
		'--color-surface-200': '207 207 207', // #cfcfcf
		'--color-surface-300': '179 179 179', // #b3b3b3
		'--color-surface-400': '121 121 121', // #797979
		'--color-surface-500': '64 64 64', // #404040
		'--color-surface-600': '58 58 58', // #3a3a3a
		'--color-surface-700': '48 48 48', // #303030
		'--color-surface-800': '38 38 38', // #262626
		'--color-surface-900': '31 31 31' // #1f1f1f
	}
};
