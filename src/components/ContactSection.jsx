import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

function ContactSection() {

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "000ab18a-c9d6-4865-9bbe-163981343a76"); // your key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    const showMessage = (text, success) => {
      // remove any existing status message
      const existing = e.target.querySelector('.contact-status');
      if (existing) existing.remove();

      // create h tag and prepend to the form
      const h = document.createElement('h4');
      h.className = `contact-status mb-4 ${success ? 'text-green-600' : 'text-red-600'}`;
      h.innerText = text;
      e.target.prepend(h);

      // auto-remove after 5s
      setTimeout(() => {
        if (h.parentNode) h.remove();
      }, 5000);
    };

    if (data.success) {
      showMessage("Message Sent! Thanks for reaching out. I'll reply soon!", true);
      e.target.reset();
    } else {
      showMessage("Error! Something went wrong. Please try again.", false);
    }

    setIsSubmitting(false);
  };


  return (
    <section id='contact' className='py-14 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'> Touch</span></h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          I'm always excited to connect with fellow developers, collaborators, or anyone interested in my work.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* LEFT SIDE */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>

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

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground'>Indore, MP, India</p>
                </div>
              </div>

            </div>

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

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  required
                  placeholder='Name Here'
                  className='w-full px-4 py-3 rounded-md border border-input bg-background'
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  required
                  placeholder='Mail'
                  className='w-full px-4 py-3 rounded-md border border-input bg-background'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background resize-none'
                  placeholder='Leave a message here..'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
