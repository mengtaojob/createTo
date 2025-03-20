// src/app/about/page.tsx
export default async function projects() {
  const data = {
    title: '案例展示',
    description: '我们是一家专业的企业解决方案服务提供商',
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}
