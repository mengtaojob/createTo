// app/page.tsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CodeBracketSquareIcon, CloudArrowUpIcon, CpuChipIcon, SparklesIcon } from '@heroicons/react/24/outline'
import '@/app/animate.css'
export default function Home() {
  const features = [
    {
      title: '定制化软件开发',
      desc: '从需求分析到部署运维的全周期服务',
      icon: CodeBracketSquareIcon,
      color: 'from-purple-600 to-blue-500',
    },
    {
      title: '云原生解决方案',
      desc: '基于K8s的弹性伸缩架构设计',
      icon: CloudArrowUpIcon,
      color: 'from-green-500 to-cyan-400',
    },
    {
      title: 'AI赋能系统',
      desc: '机器学习与业务流程深度集成',
      icon: SparklesIcon,
      color: 'from-pink-500 to-red-500',
    },
    {
      title: '工业级物联网',
      desc: '百万级终端设备接入管理',
      icon: CpuChipIcon,
      color: 'from-yellow-500 to-orange-400',
    },
  ]

  return (
    <div className="relative overflow-hidden gradient-bg-home">
      {/* 主内容 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              IT 驱动<span className="text-white">数字未来</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              凯瑞兔信息科技 - 为企业提供全栈式数字化解决方案
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              开启数字化转型
            </motion.button>
          </motion.div>
          {/* 右侧一张公司的主题图片, 尺寸自适应 */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/images/rabbit.jpg"
            alt="Hero"
            className="w-1/4 h-full object-cover rounded-3xl shadow-2xl hidden md:block custom-filter cursor-pointer"
          />
        </section>

        {/* 核心能力悬浮卡片 */}
        <section className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity ${item.color}`}
              />

              <div className="relative z-10">
                <item.icon className="h-12 w-12 mb-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 数据可视化区块 */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">技术生态全景</h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {['AWS', 'Azure', 'Kubernetes', 'TensorFlow', 'React', 'Node.js'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-700 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 动态数字展示 */}
        <section className="py-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className="p-8 bg-gray-800 rounded-2xl"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                300+
              </div>
              <h3 className="text-xl text-white">成功交付项目</h3>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className="p-8 bg-gray-800 rounded-2xl"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                500+
              </div>
              <h3 className="text-xl text-white">成功案例</h3>
            </motion.div>

            {/* 其他数据项... */}
          </div>
        </section>
      </div>
    </div>
  )
}
