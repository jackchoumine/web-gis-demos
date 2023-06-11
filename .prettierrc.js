/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-06-11 23:30:39
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-06-11 23:44:57
 * @Description : prettier 配置文件
 */
module.exports = {
  singleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  bracketSameLine: true,
  printWidth: 90,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^@/(.*)$',
    '^#c/(.*)$',
    '^../(.*)',
    '^./((?!scss).)*$',
    '^./(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
