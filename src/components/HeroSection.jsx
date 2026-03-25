import { ArrowDown } from 'lucide-react'
import React from 'react'

function HeroSection() {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Kanishka</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Joshi</span>
                </h1>
                
                {/* Updated Tagline: Emphasizing both roles */}
                <h2 className='text-2xl md:text-3xl font-medium text-foreground opacity-0 animate-fade-in-delay-3'>
                    Freelance Full-Stack Developer & IT Student
                </h2>

                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed'>
                   I bridge the gap between academic excellence at IET DAVV and the fast-paced world of freelance development. I don't just write code; I build **scalable, client-ready digital experiences** that solve real problems.
                </p>

                <div className='opacity-0 pt-6 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center'>
                    <a href="#projects" className='cosmic-button px-8 py-3 rounded-full'>Explore My Work</a>
                    <a href="#contact" className='px-8 py-3 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300 text-foreground'>Hire Me</a>
                </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-5'>
          <span className='text-xs uppercase tracking-widest text-muted-foreground mb-2'>Scroll</span>
          <ArrowDown className='h-5 w-5 text-primary' />
        </div>
    </section>
  )
};

export default HeroSection