import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { scenes } from '../../data/scenes'
export function SiteNavigation() {
  const [open, setOpen] = useState(false)
  const jumpTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <header className="site-nav">
    <a className="brand-mark" href="#awakening" aria-label="Mayk, back to beginning">M<span>.</span></a>
    <div className="nav-right"><span className="nav-location">ILIGAN CITY, PH</span><button className="menu-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={18}/> : <Menu size={18}/>}<span>{open ? 'CLOSE' : 'EXPLORE'}</span></button></div>
    {open && <nav className="nav-panel" aria-label="Scene navigation"><p className="eyebrow">MOVE THROUGH THE STORY</p>{scenes.map((scene) => <button key={scene.id} className="nav-link" onClick={() => jumpTo(scene.id)}><span>{scene.number}</span>{scene.label}<ArrowUpRight size={16}/></button>)}</nav>}
  </header>
}