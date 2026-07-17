// Static menu data. In a real app this would come from a backend/API.
const menuData = [
  {
    id: 'm1',
    name: 'Charred Octopus',
    category: 'Starters',
    price: 16,
    spice: 1,
    description:
      'Slow-braised octopus finished over live coals, smoked paprika oil, crushed fingerling potatoes, salsa verde.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm2',
    name: 'Ember Roasted Beets',
    category: 'Starters',
    price: 13,
    spice: 0,
    description:
      'Whole beets roasted in embers, whipped goat cheese, candied walnuts, aged sherry vinaigrette.',
    image: 'https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm3',
    name: 'Smoked Burrata',
    category: 'Starters',
    price: 15,
    spice: 0,
    description:
      'House-smoked burrata, heirloom tomato, basil oil, charred sourdough, finished tableside.',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm4',
    name: 'Wood-Fired Ribeye',
    category: 'Mains',
    price: 42,
    spice: 0,
    description:
      '28-day dry-aged ribeye, cooked directly on the coals, bone marrow butter, roasted bone.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm5',
    name: 'Firepit Whole Branzino',
    category: 'Mains',
    price: 34,
    spice: 1,
    description:
      'Whole branzino stuffed with citrus and herbs, grilled over grapevine cuttings, chili oil drizzle.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm6',
    name: 'Smoked Portobello Steak',
    category: 'Mains',
    price: 24,
    spice: 2,
    description:
      'Giant portobello cap smoked low and slow, charred chimichurri, ember-roasted root vegetables. (Vegan)',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm7',
    name: 'Coal-Roasted Squash Risotto',
    category: 'Mains',
    price: 26,
    spice: 0,
    description:
      'Carnaroli rice, roasted kabocha squash, sage brown butter, aged parmesan, toasted pumpkin seeds.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm8',
    name: 'Basque Burnt Cheesecake',
    category: 'Desserts',
    price: 12,
    spice: 0,
    description:
      'Deliberately scorched top, molten center, bourbon caramel, sea salt.',
    image: 'https://images.unsplash.com/photo-1618426703038-31f52ff67d5b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm9',
    name: 'Fire-Toasted S\'mores Tart',
    category: 'Desserts',
    price: 11,
    spice: 0,
    description:
      'Graham crust, dark chocolate ganache, torched vanilla-bean marshmallow.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm10',
    name: 'Smoked Old Fashioned',
    category: 'Drinks',
    price: 15,
    spice: 0,
    description:
      'Bourbon, smoked demerara, aromatic bitters, hickory smoke captured tableside under glass.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm11',
    name: 'Charred Citrus Spritz',
    category: 'Drinks',
    price: 12,
    spice: 0,
    description:
      'Aperol, charred grapefruit, prosecco, soda, torched rosemary sprig.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm12',
    name: 'Ember Cold Brew',
    category: 'Drinks',
    price: 7,
    spice: 0,
    description:
      'House cold brew steeped over smoked oak chips, orange peel oil, cream float.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop',
  },
]

export const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

export default menuData
