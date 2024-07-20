'use client'
import { Boxes } from '@/components/ui/background-boxes'
import React, { FormEvent } from 'react'

function ContactPage() {
  const [email,setEmail] = React.useState("")
  const [text,setText] = React.useState("")
  function submitHandler(event:FormEvent) {
    event.preventDefault()
    setEmail("")
    setText("")
    alert('Successfully form submitted')
  }
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
      <Boxes/>
      <div className='flex justify-center flex-col items-center'>
          <h1 className='text-lg md:text-6xl text-white font-bold relative z-20'>Contact Us</h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={submitHandler} className='relative z-20'>
          <label htmlFor="mail" className='mt-10 mb-20'>Email</label>
          <input type="email" name="mail" id="mail" value={email} onChange={(e) =>(setEmail(e.target.value))} placeholder="Your email address"
            className="rounded-lg border border-neutral-800 my-2 dark:border-[#DC143C] focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required/>
          <label htmlFor="textTag">Message</label>
          <textarea name="textTag" id="textTag" value={text} onChange={(e) =>(setText(e.target.value))} placeholder="Your message"
            className="rounded-lg border border-neutral-800 my-2 dark:border-[#DC143C] focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required></textarea>
          <button type="submit" className='mt-4 bg-[#DC143C] hover:bg-[#a31232] text-white font-bold py-2 px-4 rounded-lg focus:bg-teal-500 transition-colors duration-300'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
