import React from 'react'
import { links } from './links'
import NavLink from './navLink'

export default function NavBig() {
  return (
    <nav className="w-full">
          <ul className="flex justify-between px-6 font-semibold tracking-wide text-stone-400">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href} label={link.name} icon={link.icon} />
              </li>
            ))}
          </ul>
        </nav>
  )
}
