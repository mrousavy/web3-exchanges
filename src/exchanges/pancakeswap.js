export default {
  name: 'pancakeswap',
  alternativeNames: ['pancake'],
  label: 'PancakeSwap',
  logo: 'data:image/png;base64,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'
}
