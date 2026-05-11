// UG Connect - Multi-Category Business Marketplace

export const businessCategories = [
  {
    id: 'agriculture',
    name: 'Agriculture & Farming',
    emoji: '🌾',
    color: '#1B6B3A',
    bgColor: '#E8F5EE',
    description: 'Farm products, crops, livestock, and agricultural services'
  },
  {
    id: 'fashion',
    name: 'Fashion & Clothing',
    emoji: '👔',
    color: '#D946EF',
    bgColor: '#F3E8FF',
    description: 'Clothes, shoes, accessories, and fashion items'
  },
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    emoji: '📱',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    description: 'Phones, computers, appliances, and tech gadgets'
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    emoji: '🍽️',
    color: '#EA580C',
    bgColor: '#FEF3C7',
    description: 'Fresh food, groceries, snacks, and beverages'
  },
  {
    id: 'services',
    name: 'Services',
    emoji: '🔧',
    color: '#6366F1',
    bgColor: '#E0E7FF',
    description: 'Repair, construction, cleaning, and professional services'
  },
  {
    id: 'crafts',
    name: 'Crafts & Handmade',
    emoji: '🎨',
    color: '#EC4899',
    bgColor: '#FCE7F3',
    description: 'Handmade items, crafts, art, and unique creations'
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    emoji: '🏠',
    color: '#8B5CF6',
    bgColor: '#F3E8FF',
    description: 'Properties, houses, land, and rental spaces'
  },
  {
    id: 'education',
    name: 'Education & Tutoring',
    emoji: '📚',
    color: '#06B6D4',
    bgColor: '#ECFDF5',
    description: 'Courses, tutoring, training, and educational services'
  }
];

// Agriculture Products
export const agricultureProducts = [
  { id:1, name:'Maize (Corn)', category:'Cereals', emoji:'🌽', desc:'Fresh maize from local farms', seller:'Farmer John', location:'Kampala', price:15000, badge:'Fresh' },
  { id:2, name:'Fresh Beans', category:'Legumes', emoji:'🫘', desc:'High quality beans', seller:'Farm Cooperative', location:'Jinja', price:12000, badge:'Organic' },
  { id:3, name:'Coffee Beans', category:'Cash Crops', emoji:'☕', desc:'Premium Arabica coffee', seller:'Coffee Estate Ltd', location:'Fort Portal', price:35000, badge:'Premium' },
  { id:4, name:'Bananas', category:'Fruits', emoji:'🍌', desc:'Fresh matooke bananas', seller:'Local Farmer', location:'Kampala', price:8000, badge:'Fresh' },
  { id:5, name:'Sweet Potatoes', category:'Tubers', emoji:'🍠', desc:'Nutritious sweet potatoes', seller:'Farm Fresh', location:'Mukono', price:6000, badge:'Fresh' },
  { id:6, name:'Tomatoes', category:'Vegetables', emoji:'🍅', desc:'Ripe red tomatoes', seller:'Vegetable Market', location:'Kampala', price:5000, badge:'Fresh' },
  { id:7, name:'Groundnuts', category:'Legumes', emoji:'🥜', desc:'Roasted groundnuts', seller:'Nut Farmer', location:'Gulu', price:9000, badge:'Fresh' },
  { id:8, name:'Dairy Milk', category:'Livestock', emoji:'🥛', desc:'Fresh daily milk', seller:'Dairy Farm', location:'Kampala', price:3500, badge:'Fresh' }
];

// Fashion & Clothing Products
export const fashionProducts = [
  { id:1, name:'Casual T-Shirt', category:'Shirts', emoji:'👕', desc:'Comfortable cotton t-shirt', seller:'Fashion Hub', location:'Kampala', price:25000, badge:'New' },
  { id:2, name:'Designer Jeans', category:'Trousers', emoji:'👖', desc:'Quality denim jeans', seller:'Style Store', location:'Kampala', price:85000, badge:'Premium' },
  { id:3, name:'Leather Shoes', category:'Footwear', emoji:'👞', desc:'Comfortable leather shoes', seller:'Shoe Palace', location:'Jinja', price:65000, badge:'Premium' },
  { id:4, name:'Casual Sneakers', category:'Footwear', emoji:'👟', desc:'Trendy sneakers for daily wear', seller:'Sports Wear', location:'Kampala', price:45000, badge:'Popular' },
  { id:5, name:'Silk Scarf', category:'Accessories', emoji:'🧣', desc:'Premium silk scarf', seller:'Accessories Plus', location:'Kampala', price:35000, badge:'New' },
  { id:6, name:'Traditional Dress', category:'Dresses', emoji:'👗', desc:'Beautiful traditional wear', seller:'Cultural Wear', location:'Entebbe', price:120000, badge:'Handmade' },
  { id:7, name:'Sports Jersey', category:'Activewear', emoji:'⚽', desc:'Quality sports jersey', seller:'Sports Zone', location:'Kampala', price:40000, badge:'Popular' },
  { id:8, name:'Winter Jacket', category:'Outerwear', emoji:'🧥', desc:'Warm winter jacket', seller:'Coat Store', location:'Kampala', price:150000, badge:'Premium' }
];

// Electronics Products
export const electronicsProducts = [
  { id:1, name:'Smartphone', category:'Phones', emoji:'📱', desc:'Latest Android smartphone', seller:'Tech Store', location:'Kampala', price:450000, badge:'New' },
  { id:2, name:'Laptop', category:'Computers', emoji:'💻', desc:'High performance laptop', seller:'Computer Hub', location:'Kampala', price:1200000, badge:'Premium' },
  { id:3, name:'Wireless Earbuds', category:'Audio', emoji:'🎧', desc:'Bluetooth wireless earbuds', seller:'Audio Plus', location:'Kampala', price:85000, badge:'Popular' },
  { id:4, name:'Power Bank', category:'Accessories', emoji:'🔋', desc:'10000mAh power bank', seller:'Tech Shop', location:'Jinja', price:35000, badge:'Popular' },
  { id:5, name:'Tablet', category:'Computers', emoji:'📲', desc:'10 inch display tablet', seller:'Device World', location:'Kampala', price:450000, badge:'New' },
  { id:6, name:'USB Cable', category:'Accessories', emoji:'🔌', desc:'Durable USB charging cable', seller:'Tech Accessories', location:'Kampala', price:8000, badge:'Popular' },
  { id:7, name:'Smart Watch', category:'Wearables', emoji:'⌚', desc:'Fitness tracking smartwatch', seller:'Wearable Tech', location:'Kampala', price:250000, badge:'New' },
  { id:8, name:'Portable Speaker', category:'Audio', emoji:'🔊', desc:'Waterproof portable speaker', seller:'Audio World', location:'Kampala', price:120000, badge:'Popular' }
];

// Food & Beverages
export const foodProducts = [
  { id:1, name:'Fresh Bread', category:'Baked Goods', emoji:'🍞', desc:'Fresh daily baked bread', seller:'Bakery Fresh', location:'Kampala', price:3000, badge:'Fresh' },
  { id:2, name:'Honey', category:'Condiments', emoji:'🍯', desc:'Pure natural honey', seller:'Bee Farm', location:'Mbale', price:15000, badge:'Organic' },
  { id:3, name:'Rice (10kg)', category:'Grains', emoji:'🍚', desc:'Quality long grain rice', seller:'Grain Store', location:'Kampala', price:45000, badge:'Popular' },
  { id:4, name:'Orange Juice', category:'Beverages', emoji:'🧃', desc:'Fresh squeezed orange juice', seller:'Juice Bar', location:'Kampala', price:5000, badge:'Fresh' },
  { id:5, name:'Chapati Mix', category:'Baked Goods', emoji:'🥘', desc:'Ready mix chapati flour', seller:'Flour Mill', location:'Kampala', price:12000, badge:'Popular' },
  { id:6, name:'Coffee', category:'Beverages', emoji:'☕', desc:'Instant coffee powder', seller:'Coffee Store', location:'Kampala', price:18000, badge:'Premium' },
  { id:7, name:'Cooking Oil', category:'Oils', emoji:'🛢️', desc:'Pure vegetable cooking oil', seller:'Oil Supplier', location:'Kampala', price:25000, badge:'Popular' },
  { id:8, name:'Groundnut Butter', category:'Spreads', emoji:'🥜', desc:'Homemade peanut butter', seller:'Nut Butter Co', location:'Kampala', price:22000, badge:'Handmade' }
];

// Services
export const servicesProducts = [
  { id:1, name:'Home Repair', category:'Repair', emoji:'🔧', desc:'Professional home repair services', seller:'Fix It Pros', location:'Kampala', price:50000, badge:'Professional' },
  { id:2, name:'Plumbing Service', category:'Plumbing', emoji:'🚰', desc:'Expert plumbing repairs', seller:'Plumb Masters', location:'Kampala', price:45000, badge:'Professional' },
  { id:3, name:'Electrical Work', category:'Electrical', emoji:'⚡', desc:'Licensed electrician services', seller:'Electric Pro', location:'Kampala', price:55000, badge:'Professional' },
  { id:4, name:'House Cleaning', category:'Cleaning', emoji:'🧹', desc:'Professional house cleaning', seller:'Clean Homes', location:'Kampala', price:30000, badge:'Popular' },
  { id:5, name:'Salon Services', category:'Beauty', emoji:'💇', desc:'Hair and beauty salon', seller:'Beauty Plus', location:'Kampala', price:25000, badge:'Popular' },
  { id:6, name:'Computer Repair', category:'Tech', emoji:'💻', desc:'Computer fix and maintenance', seller:'Tech Repair', location:'Kampala', price:40000, badge:'Professional' },
  { id:7, name:'Landscaping', category:'Gardening', emoji:'🌳', desc:'Garden design and landscaping', seller:'Green Spaces', location:'Kampala', price:150000, badge:'Creative' },
  { id:8, name:'Tutoring Service', category:'Education', emoji:'📚', desc:'Math and English tutoring', seller:'Study Plus', location:'Kampala', price:35000, badge:'Professional' }
];

// Crafts & Handmade
export const craftsProducts = [
  { id:1, name:'Handmade Basket', category:'Baskets', emoji:'🧺', desc:'Beautiful woven basket', seller:'Craft Master', location:'Fort Portal', price:45000, badge:'Handmade' },
  { id:2, name:'Beaded Necklace', category:'Jewelry', emoji:'💍', desc:'Traditional beaded jewelry', seller:'Bead Art', location:'Kampala', price:35000, badge:'Handmade' },
  { id:3, name:'Wood Carving', category:'Art', emoji:'🪵', desc:'Traditional wooden sculpture', seller:'Wood Artist', location:'Masaka', price:85000, badge:'Unique' },
  { id:4, name:'Ceramic Pot', category:'Pottery', emoji:'🏺', desc:'Handmade ceramic pot', seller:'Clay Works', location:'Kampala', price:28000, badge:'Handmade' },
  { id:5, name:'Leather Bag', category:'Bags', emoji:'👜', desc:'Quality leather handbag', seller:'Leather Craft', location:'Kampala', price:95000, badge:'Premium' },
  { id:6, name:'Painted Canvas', category:'Art', emoji:'🎨', desc:'Original acrylic painting', seller:'Art Gallery', location:'Kampala', price:150000, badge:'Unique' },
  { id:7, name:'Knitted Sweater', category:'Clothing', emoji:'🧶', desc:'Hand knitted sweater', seller:'Knit Studio', location:'Kampala', price:65000, badge:'Handmade' },
  { id:8, name:'Tie-Dye Fabric', category:'Textiles', emoji:'🌈', desc:'Colorful tie-dye cloth', seller:'Tie Dye Lab', location:'Kampala', price:18000, badge:'Handmade' }
];

// Real Estate
export const realEstateProducts = [
  { id:1, name:'2 Bedroom House', category:'Houses', emoji:'🏠', desc:'Furnished 2 bedroom house', seller:'Property Pro', location:'Kampala', price:250000000, badge:'Available' },
  { id:2, name:'Studio Apartment', category:'Apartments', emoji:'🏢', desc:'Modern studio apartment', seller:'Real Estate Co', location:'Kampala', price:80000000, badge:'Available' },
  { id:3, name:'Land Plot', category:'Land', emoji:'🏗️', desc:'2 acre land plot', seller:'Land Broker', location:'Wakiso', price:120000000, badge:'Available' },
  { id:4, name:'Office Space', category:'Commercial', emoji:'🏬', desc:'Prime office space', seller:'Business Real Estate', location:'Kampala', price:50000000, badge:'Available' },
  { id:5, name:'Shop Space', category:'Commercial', emoji:'🛍️', desc:'Street facing shop', seller:'Commercial Broker', location:'Jinja', price:35000000, badge:'Available' },
  { id:6, name:'Residential Plot', category:'Land', emoji:'📍', desc:'1 acre residential plot', seller:'Property Dealer', location:'Entebbe', price:45000000, badge:'Available' },
  { id:7, name:'Townhouse', category:'Houses', emoji:'🏘️', desc:'Modern townhouse', seller:'Housing Developer', location:'Kampala', price:180000000, badge:'Available' },
  { id:8, name:'Retail Shop', category:'Commercial', emoji:'🏪', desc:'Shopping mall retail space', seller:'Mall Management', location:'Kampala', price:25000000, badge:'Available' }
];

// Education & Tutoring
export const educationProducts = [
  { id:1, name:'English Coaching', category:'Languages', emoji:'📖', desc:'Advanced English training', seller:'Language Academy', location:'Kampala', price:80000, badge:'Professional' },
  { id:2, name:'Math Tutoring', category:'Academics', emoji:'📐', desc:'High school math tutoring', seller:'Study Center', location:'Kampala', price:50000, badge:'Popular' },
  { id:3, name:'Web Development Course', category:'Tech', emoji:'💻', desc:'Learn web development', seller:'Tech Academy', location:'Kampala', price:250000, badge:'Popular' },
  { id:4, name:'Photography Class', category:'Creative', emoji:'📷', desc:'Professional photography training', seller:'Photo School', location:'Kampala', price:150000, badge:'New' },
  { id:5, name:'Business Course', category:'Professional', emoji:'💼', desc:'Entrepreneurship training', seller:'Business Institute', location:'Kampala', price:200000, badge:'Professional' },
  { id:6, name:'Music Lessons', category:'Arts', emoji:'🎵', desc:'Guitar and vocal lessons', seller:'Music Academy', location:'Kampala', price:60000, badge:'Popular' },
  { id:7, name:'Fitness Training', category:'Health', emoji:'💪', desc:'Personal fitness coaching', seller:'Gym Pro', location:'Kampala', price:120000, badge:'Popular' },
  { id:8, name:'Cooking Class', category:'Skills', emoji:'👨‍🍳', desc:'Learn professional cooking', seller:'Chef Academy', location:'Kampala', price:100000, badge:'New' }
];

// Map all categories to their products
export const categoryProducts = {
  agriculture: agricultureProducts,
  fashion: fashionProducts,
  electronics: electronicsProducts,
  food: foodProducts,
  services: servicesProducts,
  crafts: craftsProducts,
  realestate: realEstateProducts,
  education: educationProducts
};

export const jobListings = [
  { id:1, title:'Farm Manager', company:'Mbarara Agro LTD', location:'Mbarara', type:'Full-time', salary:'UGX 1,200,000', badge:'Verified', description:'Lead crop production, supervise workers, and manage harvest schedules.' },
  { id:2, title:'Graphic Designer', company:'Kampala Creative Hub', location:'Kampala', type:'Contract', salary:'UGX 700,000', badge:'Remote', description:'Design marketing assets for local businesses and digital campaigns.' },
  { id:3, title:'Sales Representative', company:'GreenHomes Uganda', location:'Entebbe', type:'Full-time', salary:'UGX 850,000', badge:'Trusted', description:'Sell agricultural inputs and support customer relationships in central Uganda.' },
  { id:4, title:'Online Tutor', company:'StudyPoint Uganda', location:'Virtual', type:'Part-time', salary:'UGX 500,000', badge:'Flexible', description:'Teach business and computer skills to secondary school students.' },
  { id:5, title:'Mobile Mechanic', company:'RepairHub', location:'Kampala', type:'Full-time', salary:'UGX 900,000', badge:'Local', description:'Maintain and repair agricultural machinery and farm equipment.' },
  { id:6, title:'Copywriter', company:'BrandLeap', location:'Kampala', type:'Contract', salary:'UGX 650,000', badge:'Creative', description:'Create compelling copy for websites, social media, and product listings.' }
];

export const courseCatalog = [
  { id:1, title:'Small Business Marketing', provider:'UG Growth Academy', category:'Business', price:'UGX 120,000', duration:'4 weeks', level:'Beginner', students:'520', description:'Learn how to build your brand, attract customers, and grow sales online.', link:'https://example.com/course/marketing' },
  { id:2, title:'Farm Management Basics', provider:'AgriLearn', category:'Agriculture', price:'UGX 90,000', duration:'3 weeks', level:'Beginner', students:'430', description:'Plan your farm, manage labor, and maximize harvests with simple systems.', link:'https://example.com/course/farm-management' },
  { id:3, title:'Creative Skills Bootcamp', provider:'Studio Kampala', category:'Creative', price:'UGX 150,000', duration:'5 weeks', level:'Intermediate', students:'340', description:'Master design, video, and social media content for your business.', link:'https://example.com/course/creative-bootcamp' },
  { id:4, title:'Digital Selling with WhatsApp', provider:'SalesBoost', category:'Sales', price:'UGX 80,000', duration:'2 weeks', level:'Beginner', students:'610', description:'Sell more products using WhatsApp, chat marketing, and customer follow-up.', link:'https://example.com/course/whatsapp-selling' },
  { id:5, title:'Financial Planning for SMEs', provider:'BizSense', category:'Finance', price:'UGX 110,000', duration:'4 weeks', level:'Beginner', students:'280', description:'Understand cashflow, pricing, and profit planning for small businesses.', link:'https://example.com/course/finance' },
  { id:6, title:'E-commerce for Local Sellers', provider:'MarketWay', category:'Tech', price:'UGX 130,000', duration:'4 weeks', level:'Intermediate', students:'470', description:'Sell products online, list on marketplaces, and manage orders effectively.', link:'https://example.com/course/ecommerce' }
];

// Featured products across all categories
export const featuredProducts = [
  ...agricultureProducts.slice(0, 2),
  ...fashionProducts.slice(0, 2),
  ...electronicsProducts.slice(0, 2),
  ...foodProducts.slice(0, 2)
];
