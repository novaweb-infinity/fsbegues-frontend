import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const teams = [
  { name: "Senior A", href: "/equipos/senior-a" },
  { name: "Senior B", href: "/equipos/senior-b" },
  { name: "Juvenil", href: "/equipos/juvenil" },
  { name: "Cadete", href: "/equipos/cadete" },
  { name: "Infantil", href: "/equipos/infantil" },
  { name: "Alevín", href: "/equipos/alevin" },
  { name: "Benjamín", href: "/equipos/benjamin" },
]

export function Header() {
  return (
    <div className="flex items-center fixed z-10 bg-secondary w-full p-4 justify-between h-16">
      <div>
        <Link href="/" className="text-2xl font-bold text-black">
          F.S.BEGUES
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg`}>Inicio</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!text-lg">Equipos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[200px] gap-3 p-4">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href={team.href}
                        >
                          <div className="text-sm font-medium leading-none">{team.name}</div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/calendario" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg`}>
                  Calendario
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg`}>Contacto</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
