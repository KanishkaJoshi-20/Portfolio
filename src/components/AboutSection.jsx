import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

function AboutSection() {
  return (
    <section id="about" className="py-12 px-4 md:py-24 md:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">Passionate Web Developer & DSA Enthusiast</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              I’m Kanishka Joshi, a developer who loves building imaginative digital experiences and sharpening problem-solving skills through Data Structures & Algorithms.
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              With a strong foundation in HTML, CSS, JavaScript, and MERN Stack. I create responsive, user-friendly websites that bring ideas to life. I’m also passionate about DSA, constantly honing my skills to tackle complex coding challenges efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4 justify-center">
              <a href="#contact" className="cosmic-button px-4 py-2">Get In Touch</a>
              <a href="/KanishkaJoshi(1).pdf" className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Web Development</h4>
                  <p className="text-sm md:text-base">Passionate Web Developer crafting seamless interfaces and powerful backend solutions</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <User className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Backend Engineering</h4>
                  <p className="text-sm md:text-base">Building secure and scalable backend systems with clean architecture and strong logic.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Database & APIs</h4>
                  <p className="text-sm md:text-base">Designing efficient databases and developing reliable APIs for modern applications.</p>
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