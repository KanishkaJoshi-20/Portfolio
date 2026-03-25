import React from 'react'
import { ArrowRight, ExternalLink, GithubIcon } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Karigari - E-commerce Platform',
        // Highlighting the freelance nature and specific business features
        description: 'A full-stack e-commerce solution for a crochet art brand. Features dynamic product management, a custom admin dashboard, and a seamless checkout experience.', 
        imageUrl: '/projects/karigari.png', 
        tags: ['Freelance', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
        gitHub: 'https://github.com/KanishkaJoshi-20/Karigari', // Add specific repo if public
        demoUrl: 'https://karigari-sigma.vercel.app/', // Add hosted link when ready
    },
    {
       id: 2,
        title: 'Aapada Mitra',
        description: 'Building a disaster preparedness and response education system for young minds. Lead project for Smart India Hackathon.', 
        imageUrl: '/projects/aapadamitra.jpg',
        tags: ['Hackathon', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/SIH',
        demoUrl: 'https://aapada-mitraa.vercel.app/',
    },
    {
       id: 3,
        title: 'Fundraising Portal',
        description: 'A dynamic fundraising intern portal with real-time user stats, leaderboard rankings, and referral tracking. Developed for SheCanFoundation.', 
        imageUrl: '/projects/image1.png',
        tags: ['Internship', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/Task1-ShecanFoundation',
        demoUrl: 'https://fundraisingportal.vercel.app/',
    },
    {
       id: 4,
        title: 'DevSync Dashboard',
        description: 'A comprehensive GSSoC contribution focusing on developer collaboration and monitoring productivity through an interactive dashboard.', 
        imageUrl: '/projects/devsync.png',
        tags: ['Open Source', 'GSSoC', 'React', 'Node.js', 'MongoDB'],
        gitHub: 'https://github.com/KanishkaJoshi-20/DevSync',
        demoUrl: 'https://devsync-one.vercel.app/',
    }
]

function ProjectsSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> 
          Featured <span className='text-primary'>Work</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          A collection of freelance projects, hackathon wins, and open-source contributions. 
          From client-ready platforms to experimental builds.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-xs border border-primary/10 transition-all hover:border-primary/30 card-hover'>
              <div className='h-56 overflow-hidden relative'>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                {/* Optional: Freelance Badge */}
                {project.tags.includes('Freelance') && (
                  <div className='absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider'>
                    Client Project
                  </div>
                )}
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='text-[10px] bg-primary/10 text-primary-foreground border border-primary/20 px-2 py-0.5 rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>{project.title}</h3>
                <p className='text-sm text-muted-foreground mb-6 line-clamp-2'>{project.description}</p>

                <div className='flex justify-between items-center'>
                  <div className='flex space-x-4'>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className='text-foreground/80 hover:text-primary transition-colors duration-300' title="Live Demo">
                      <ExternalLink size={20}/>
                    </a>
                    <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className='text-foreground/80 hover:text-primary transition-colors duration-300' title="Source Code">
                      <GithubIcon size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <a href="https://github.com/KanishkaJoshi-20" className='cosmic-button w-fit flex items-center mx-auto gap-2 px-6 py-3'>
            More on GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection