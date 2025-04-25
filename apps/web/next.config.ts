import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

/**
 * 问: 为什么没有直接使用 export default withMDX(nextConfig) ?
 * 答:
 * 1. https://github.com/microsoft/TypeScript/issues/42873
 * 2. https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
 *
 * 因为 MDX 包没有用 next 作为依赖，但是使用了 next 的类型定义，当你的 tsconfig.json 中开启了
 * declaration: true 是，ts 会检查类型生成，此时TS会认为你的类型无法正确生成。因为它认为你的包
 * 可能不可移植，因为其它使用对应类型的项目，可能并没有安装next，同时你又读取了 next类型
 *
 * 所以两个解决方案，显式的在我们这个文件里，声明到处变量的类型，或者关闭 declaration
 */
const config: NextConfig = withMDX(nextConfig)

export default config
