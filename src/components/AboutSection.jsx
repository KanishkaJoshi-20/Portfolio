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
            <h3 className="text-xl md:text-2xl font-semibold">Bridging the Gap Between Theory & Deployment</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              I’m Kanishka Joshi, a 3rd-year IT student and freelance developer who doesn’t just study code—I live it. I thrive at the intersection of logic and creativity, balancing academic rigor with the fast-paced world of building real-world applications.
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              From launching a full-stack e-commerce platform for my creative brand to leading teams in national hackathons, I treat every project as a chance to refine my craft. I'm currently looking for an internship where I can bring this mix of academic foundation and freelance grit to a professional team.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button px-4 py-2">Get In Touch</a>
              <a href="/KanishkaJoshi(1).pdf" className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">Download Resume</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Full-Stack Development</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Building seamless MERN applications with a focus on clean code and pixel-perfect UI.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <User className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Freelance Grit</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Experienced in handling client requirements, deadlines, and end-to-end project deployment.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base md:text-lg">Problem Solving</h4>
                  <p className="text-sm md:text-base text-muted-foreground">Active DSA enthusiast with 150+ problems solved, always optimizing for efficiency.</p>
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