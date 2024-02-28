export const navLinks = [
  { href: "/", label: "Home", key: "home" },
  { href: "/products", label: "Products", key: "products" },
  { href: "/about", label: "About", key: "about" },
  { href: "/blogs", label: "Blogs", key: "blogs" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export const sortOption = [
  { name: "Newest", value: "/?date=desc" },
  { name: "Price, low to high", value: "/?price=asc" },
  { name: "Price, high to low", value: "/?price=desc" },
];

export const Filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { label: "All", value: "all" },
      { label: "Phones", value: "phones" },
      { label: "Accessories", value: "accessories" },
      { label: "Tablets", value: "tablets" },
      { label: "Watches", value: "watches" },
    ],
  },
  {
    id: "tag",
    name: "Tag",
    options: [
      { label: "Dark Color", value: "dark color" },
      { label: "Modern", value: "modern" },
      { label: "Light Color", value: "light color" },
      { label: "Cheap", value: "cheap" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Samsung", value: "samsung" },
      { label: "Google Pixel", value: "google pixel" },
    ],
  },
];
