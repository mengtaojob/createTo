// src/app/about/page.tsx
export default async function About() {
  //   const data = await fetch('https://api.example.com/about').then((res) => res.json())
  const data = {
    description: '我们是一家专业的企业解决方案服务提供商',
    title: '关于我们',
  }
  return (
    <div>
      <h1>关于我们</h1>
      <p>{data.description}</p>
    </div>
  )
}
