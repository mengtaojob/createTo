import React from 'react'
export default function Footer() {
  return (
    <footer className="gradient-bg-footer">
      <div className="mx-auto w-full max-w-screen-xl my-6 px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between ">
          <div className="">
            <h4 className="font-medium mb-4 text-sm dark:text-gray-50">
              Copyright © {new Date().getFullYear()} Anson. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )
}
