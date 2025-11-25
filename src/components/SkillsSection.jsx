import React, { useState } from 'react'
import { cn } from '../lib/utils';

const skills = [
    { name: 'HTML', level: '95', Category: 'Frontend' },
    { name: 'CSS', level: '90', Category: 'Frontend' },
    { name: 'JavaScript', level: '85', Category: 'Frontend' },
    { name: 'React', level: '80', Category: 'Frontend' },
    { name: 'Redux', level: '80', Category: 'Frontend' },
    { name: 'Tailwind CSS', level: '80', Category: 'Frontend' },
    { name: 'Bootstrap', level: '75', Category: 'Frontend' },

    { name: 'Node.js', level: '80', Category: 'Backend' },
    { name: 'Express.js', level: '75', Category: 'Backend' },

    { name: 'MongoDB', level: '80', Category: 'Database' },
    { name: 'SQL', level: '70', Category: 'Database' },

    { name: 'Git/GitHub', level: '85', Category: 'Tools' },
    { name: 'VS Code', level: '90', Category: 'Tools' },
    { name: 'Postman', level: '75', Category: 'Tools' },
]

const categories = ['all', 'Frontend', 'Backend', 'Database', 'Tools'];

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = skills.filter((skill) =>
        activeCategory === 'all' || skill.Category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* CATEGORY BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary/70 text-foreground hover:bg-secondary'
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* SKILL CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out_forwards]"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
