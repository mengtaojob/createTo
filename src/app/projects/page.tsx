// src/app/about/page.tsx
import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
export default async function projects() {
  const data = {
    title: '案例展示',
    description: '我们是一家专业的企业解决方案服务提供商, 为客户提供全栈式数字化解决方案',
    screenList: [
      { title: '项目1', img: '/images/screen1.jpg' },
      { title: '项目2', img: '/images/screen2.jpg' },
      { title: '项目3', img: '/images/screen3.jpg' },
      { title: '项目4', img: '/images/screen4.jpg' },
      { title: '项目5', img: '/images/screen5.jpg' },
      { title: '项目6', img: '/images/screen6.jpg' },
      { title: '项目7', img: '/images/screen7.jpg' },
      { title: '项目8', img: '/images/screen8.jpg' },
    ],
  }
  return (
    <div className="projects-root w-full gradient-bg-projects">
      <div className="projects-container border-[1px] flex flex-col justify-center items-center">
        {/* 第1栏 */}
        <div className="row1 flex md:flex-row flex-col justify-center items-center my-10">
          <div className="row1-left flex flex-1 flex-col justify-center items-center items-start text-white md:mr-[100px] mr-0">
            <h1 className="text-[36px] font-bold">{data.title}</h1>
            <p className="py-4">{data.description}</p>
            <button className="flex justify-between items-center text-white bg-[#2546bd] p-3 px-10 my-5 rounded-full">
              <AiFillCaretRight className="text-white mr-2" />
              <p>了解更多</p>
            </button>
          </div>
          <div className=" flex-1 row1-right flex flex-col justify-center items-center text-white">
            <div className="row1-right-item">
              <img className="md:w-[60%]" src="/images/project.jpg" alt="Project 1" />
              <h2>项目1</h2>
              <p>项目1描述</p>
            </div>
          </div>
        </div>
        {/* 第2栏 */}
        <div className="row2">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 w-full">
            <div className=""></div>
          </div>
        </div>
        {/* 第3栏 */}
        <div className="row3">
          <ul className="flex flex-wrap justify-center items-center">
            {data.screenList.map((item, index) => (
              <li
                className="flex-1
                md:min-w-[350px] 
                md:max-w-[400px]
                lg:min-w-[400px]
                lg:max-w-[450px]
                min-w-full
                m-2
                cursor-pointer
                rounded-md
                overflow-hidden
                "
                key={index}
              >
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
