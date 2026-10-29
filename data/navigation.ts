export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationItem = NavigationLink & {
  children?: readonly NavigationLink[];
};

export const primaryNavigation: readonly NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Our Profile",
        href: "/about/our-profile",
      },
      {
        label: "The Partners",
        href: "/about/the-partners",
      },
    ],
  },
  {
    label: "Practice Areas",
    href: "/practice-areas",
  },
  {
    label: "Our Team",
    href: "/team",
  },
  {
    label: "Insights",
    href: "/insights",
  },
];
