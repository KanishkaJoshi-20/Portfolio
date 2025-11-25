import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from '../lib/utils';
import React, { useState } from 'react'
import { useToast } from '../hooks/use-toast';

function ContactSection() {

    const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

    return (
        <section id='contact' className='py-14 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch</span></h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in my work. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* LEFT SIDE */}
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        {/* Email + Phone + Location */}
                        <div className='space-y-6 justify-center'>

                            {/* Email */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:joshikanishka24605@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'>
                                        joshikanishka24605@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+916268242442"
                                        className='text-muted-foreground hover:text-primary transition-colors'>
                                        +91 6268242442
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Indore, MP, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className='pt-8'>
                            <h4>Connect with me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="https://linkedin.com/in/kanishka-joshi-3906a7311" target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/KanishkaJoshi-20" target='_blank'>
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE — FORM */}
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form action="" className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    placeholder='Name Here'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                                />
                            </div>
                            <div>
                                <label htmlFor="Email" className='block text-sm font-medium mb-2'> Your Email</label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    required
                                    placeholder='Mail'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'> Your Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none'
                                    placeholder='Leave a message here..'
                                />
                            </div>

                            <button type='submit' 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}> {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection