import React from 'react'

const page = () => {
  return (
    <>
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-50 h-50 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/faizan.jpeg"
          alt=""  
          width="512"
          height="800"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              We will help you to grow your business through social media
              marketing. Enjoy a digital media presence like never before!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Faizan Nawaz</div>
            <div className="text-slate-700 dark:text-slate-500">
              social Media Marketer, It Work Center
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default page
