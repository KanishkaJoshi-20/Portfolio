import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='py-11 px-4 bg-card relative border-t border-border mt-12 pt-8 flex items-center text-center'>
        <p className='w-full text-sm text-muted-foreground'> &copy; {new Date().getFullYear()} KanishkaJoshi. All rights reserved </p>
        <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors absolute right-4 top-1/2 transform -translate-y-1/2'><ArrowUp /></a>
    </footer>
  )
}

export default Footer
