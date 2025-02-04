"use client"
import Link from "next/link"
import { Code } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={`container mx-auto ${className || ''}`}>
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center">
            <div className="mr-4">
              <Code className="h-6 w-6" />
            </div>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resume</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

