"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`hover:text-neutral-400 transition-colors ${isActive ? "text-white" : "text-neutral-500"}`}
    >
      {children}
    </Link>
  )
}

