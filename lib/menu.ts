// Site navigation — exact menu structure for the header.
// Items with `children` render a dropdown; items with nested `children`
// render a sub-menu (shown with a caret arrow).

export type MenuLink = {
  label: string;
  href: string;
};

export type MenuItem = MenuLink & {
  children?: MenuItem[];
};

export const mainMenu: MenuItem[] = [
  {
    label: "Main Home",
    href: "#",
  },
  {
    label: "Studio & Shop",
    href: "#",
  },
  {
    label: "Studio Home",
    href: "#",
  },
  {
    label: "Yoga Home",
    href: "#",
  },
  {
    label: "Landing",
    href: "#",
  },
];

export const pagesMenu: MenuItem[] = [
  { label: "About Us", href: "#about" },
  { label: "Pricing Plans", href: "#contact" },
  { label: "Our Team", href: "#instructors" },
  { label: "Team Member", href: "#instructors" },
  { label: "Contact Us", href: "#contact" },
  { label: "Coming Soon", href: "#" },
];

export const classesMenu: MenuItem[] = [
  { label: "Classes Timetable", href: "#classes" },
  { label: "Class Single", href: "#classes" },
];

export const retreatsMenu: MenuItem[] = [
  { label: "Retreats", href: "#retreats" },
  { label: "Retreat Single", href: "#retreats" },
];

export const shopMenu: MenuItem[] = [
  { label: "Shop List", href: "#shop" },
  { label: "Shop Single", href: "#shop" },
  {
    label: "Shop Layouts",
    href: "#shop",
    children: [
      { label: "Two Columns", href: "#shop" },
      { label: "Three Columns", href: "#shop" },
      { label: "Four Columns", href: "#shop" },
    ],
  },
  {
    label: "Shop Pages",
    href: "#shop",
    children: [
      { label: "My Account", href: "#shop" },
      { label: "Cart", href: "#shop" },
      { label: "Checkout", href: "#shop" },
    ],
  },
];

export const blogMenu: MenuItem[] = [
  { label: "Blog Right Sidebar", href: "#" },
  { label: "Blog Left Sidebar", href: "#" },
  { label: "Blog No Sidebar", href: "#" },
  {
    label: "Post Formats",
    href: "#",
    children: [
      { label: "Standard", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Quote", href: "#" },
      { label: "Video", href: "#" },
    ],
  },
];

export type NavGroup = {
  label: string;
  children: MenuItem[];
};

export const navGroups: NavGroup[] = [
  { label: "HOME", children: mainMenu },
  { label: "PAGES", children: pagesMenu },
  { label: "CLASSES", children: classesMenu },
  { label: "RETREATS", children: retreatsMenu },
  { label: "SHOP", children: shopMenu },
  { label: "BLOG", children: blogMenu },
];