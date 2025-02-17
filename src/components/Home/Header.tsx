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
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-secondary-foreground p-4">
      <div>
        <Link href="/" className="text-3xl font-bold text-white" passHref>
          F.S.BEGUES
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg !text-black`}>
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!text-lg !text-black">Equipos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[200px] flex-col gap-3 p-4">
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
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg !text-black`}>
                  Calendario
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-lg !text-black`}>
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
