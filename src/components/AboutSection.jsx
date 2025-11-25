import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

function AboutSection() {
  return (
    <section id='about' className='py-24 px-24 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer & DSA Enthusiast</h3>
            <p className='text-muted-foreground'>
              I’m Kanishka Joshi, a developer who loves building imaginative digital experiences and sharpening problem-solving skills through Data Structures & Algorithms.
            </p>
            <p className='text-muted-foreground'>
              With a strong foundation in HTML, CSS, JavaScript, and MERN Stack. I create responsive, user-friendly websites that bring ideas to life. I’m also passionate about DSA, constantly honing my skills to tackle complex coding challenges efficiently.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get In Touch</a>
              <a href="/KanishkaJoshi(1).pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download Resume</a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p>Passionate Web Developer crafting seamless interfaces and powerful backend solutions</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Backend Engineering</h4>
                  <p>Building secure and scalable backend systems with clean architecture and strong logic.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Database & APIs</h4>
                  <p>Designing efficient databases and developing reliable APIs for modern applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection