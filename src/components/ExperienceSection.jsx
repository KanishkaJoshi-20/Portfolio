import React from 'react'
import { Briefcase, Code2, Trophy, Lightbulb } from 'lucide-react'

function ExperienceSection() {
    return (
        <section id='experience' className='py-12 sm:py-24 px-4 sm:px-12 lg:px-24 relative'>
            <div className='container mx-auto max-w-6xl'>

                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center'>
                    My <span className='text-primary'>Experience</span>
                </h2>

                {/* TOP TEXT */}
                <div className='text-center max-w-xl sm:max-w-3xl mx-auto mb-10 sm:mb-16 px-2'>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4'>A Journey of Creating & Leading</h3>
                    <p className='text-muted-foreground text-sm sm:text-base'>
                        From Smart India Hackathon to open-source programs and full-stack projects,
                        every experience has helped me grow as a developer, leader, and problem-solver.
                    </p>
                </div>

                {/* ROW OF CARDS */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>

                    {/* SIH 2025 */}
                    <div className='gradient-border p-4 sm:p-6 card-hover h-full flex'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                            <div className='p-2 sm:p-3 mx-auto rounded-full bg-primary/10'>
                                <Lightbulb className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
                            </div>
                            <h4 className='font-semibold text-base sm:text-lg text-center'>
                                SIH 2025 — Team Lead
                            </h4>
                            <p className='text-center text-muted-foreground text-xs sm:text-sm'>
                                Led a 6-member team and qualified the internal SIH hackathon round
                                with a practical, problem-driven solution.
                            </p>
                        </div>
                    </div>

                    {/* Hackathons */}
                    <div className='gradient-border p-4 sm:p-6 card-hover h-full flex'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                            <div className='p-2 sm:p-3 mx-auto rounded-full bg-primary/10'>
                                <Trophy className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
                            </div>
                            <h4 className='font-semibold text-base sm:text-lg text-center'>
                                Hackathon Participant
                            </h4>
                            <p className='text-center text-muted-foreground text-xs sm:text-sm'>
                                Built rapid prototypes, collaborated under pressure,
                                and delivered creative solutions within limited time.
                            </p>
                        </div>
                    </div>

                    {/* Open Source */}
                    <div className='gradient-border p-4 sm:p-6 card-hover h-full flex'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                            <div className='p-2 sm:p-3 mx-auto rounded-full bg-primary/10'>
                                <Code2 className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
                            </div>
                            <h4 className='font-semibold text-base sm:text-lg text-center'>
                                Open Source — GSSoC 2024
                            </h4>
                            <p className='text-center text-muted-foreground text-xs sm:text-sm'>
                                Contributed to community repositories, fixed issues, improved UI,
                                and collaborated via PR reviews & Git workflows.
                            </p>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className='gradient-border p-4 sm:p-6 card-hover h-full flex'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                            <div className='p-2 sm:p-3 mx-auto rounded-full bg-primary/10'>
                                <Briefcase className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
                            </div>
                            <h4 className='font-semibold text-base sm:text-lg text-center'>
                                Full-Stack Projects & Freelancer
                            </h4>
                            <p className='text-center text-muted-foreground text-xs sm:text-sm'>
                                Developed responsive, scalable applications using React,
                                Tailwind, Node.js, Express & MongoDB.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ExperienceSection
