export default async function Page({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log('🚀 ~ page.tsx ~ id:', id)

  const { default: Post } = await import(`@contents/${id}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

export const dynamicParams = false
// console.log(Post);
// export default function Page() {
//   return <div>Hello World</div>
// }
