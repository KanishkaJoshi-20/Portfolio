import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

function EducationSection() {
  return (
    <section id='edu' className='py-12 md:py-24 px-6 md:px-24 relative'>
      <div className='container mx-auto max-w-5xl'>

        <h2 className='text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center'>
          My <span className='text-primary'>Education</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>

          {/* College */}
          <div className='gradient-border p-4 md:p-6 card-hover h-full'>
            <div className='flex flex-col items-center gap-3 md:gap-4'>
              <div className='p-2 md:p-3 rounded-full bg-primary/10'>
                <GraduationCap className='h-6 w-6 md:h-7 md:w-7 text-primary' />
              </div>

              <h3 className='font-semibold text-lg md:text-xl text-center'>
                Bachelor of Engineering — Information Technology
              </h3>

              <p className='text-muted-foreground text-center text-sm md:text-base'>
                IET DAVV, Indore  
                <br /> CGPA: 7.8  
                <br /> 2023 – 2027 (Pursuing)
              </p>
            </div>
          </div>

          {/* Schooling */}
          <div className='gradient-border p-4 md:p-6 card-hover h-full'>
            <div className='flex flex-col items-center gap-3 md:gap-4'>
              <div className='p-2 md:p-3 rounded-full bg-primary/10'>
                <BookOpen className='h-6 w-6 md:h-7 md:w-7 text-primary' />
              </div>

              <h3 className='font-semibold text-lg md:text-xl text-center'>
                Higher Secondary Education — PCM
              </h3>

              <p className='text-muted-foreground text-center text-sm md:text-base'>
                Completed 12th with Physics, Chemistry & Mathematics.  
                Strong foundation in analytical and logical problem-solving.
                <br />JEE MAINS Score: 95.5 %ile.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default EducationSection
