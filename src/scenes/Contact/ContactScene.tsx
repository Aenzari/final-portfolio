import { ArrowUpRight, Github, Linkedin, Mail, BriefcaseBusiness } from 'lucide-react'
import { SceneHeading } from '../../components/ui/SceneHeading'

const links = [
  { label: 'GitHub', href: 'https://github.com/Aenzari', icon: Github, note: 'Code & experiments' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-angelou-quinit-9071b7410/', icon: Linkedin, note: 'Professional profile' },
  { label: 'OnlineJobs.ph', href: 'https://v2.onlinejobs.ph/jobseekers/info/5476009', icon: BriefcaseBusiness, note: 'Work profile' },
]

export function ContactScene() {
  return (
    <section id="contact" className="scene content-scene contact-scene">
      <div className="section-index">06 — THE CONNECTION</div>
      <div className="contact-layout">
        <div className="contact-main">
          <SceneHeading
            number="06"
            eyebrow="OPEN TO GOOD IDEAS"
            title="Let's make something matter."
            description="Have a project, an opportunity, or simply want to talk about technology and building useful things? My inbox is open."
          />
          <a className="email-link" href="mailto:michaelangeloucquinit@gmail.com?subject=Let's%20connect">
            <span>michaelangeloucquinit@gmail.com</span><ArrowUpRight size={19} />
          </a>
          <p className="contact-response-note">THE BEST THINGS OFTEN START WITH A CONVERSATION.</p>
        </div>

        <aside className="contact-aside" aria-label="Other ways to connect">
          <p className="eyebrow">FIND ME ELSEWHERE</p>
          {links.map(({ label, href, icon: Icon, note }) => (
            <a className="contact-social" href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon size={18} />
              <span className="contact-social-copy"><strong>{label}</strong><small>{note}</small></span>
              <ArrowUpRight size={15} />
            </a>
          ))}
          <a className="contact-social contact-email-social" href="mailto:michaelangeloucquinit@gmail.com">
            <Mail size={18} />
            <span className="contact-social-copy"><strong>Email</strong><small>Send me a message</small></span>
            <ArrowUpRight size={15} />
          </a>
          <div className="contact-location"><span className="status-dot" /> BASED IN ILIGAN CITY, PHILIPPINES</div>
        </aside>
      </div>
      <div className="contact-bottom"><span>MICHAEL ANGELOU C. QUINIT</span><span>LET'S BUILD WHAT'S NEXT.</span></div>
    </section>
  )
}
