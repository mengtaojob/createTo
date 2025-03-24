// src/app/about/page.tsx
export default async function Contact() {
  //   const data = await fetch('https://api.example.com/about').then((res) => res.json())
  const data = {
    title: '联系我们',
    description: '请联系我们',
  }
  return (
    <div className="min-h-screen  gradient-bg-home py-16">
      <div className="container">
        <h1>联系我们</h1>
        <p>{data.description}</p>
      </div>
    </div>
  )
}
