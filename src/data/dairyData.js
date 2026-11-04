export const dairyInfo = {
  name: "Haji Raj Din Dairy Milk",
  urduName: "حاجی راج دین ڈیری ملک",
  slogan: "Pure Taste, Trusted Tradition in Sahiwal",
  urduSlogan: "خالص دودھ، گاڑھا دہی اور روایتی دیسی گھی کے حلوہ جات",
  phone: "+92 300 2743860",
  phoneRaw: "923002743860",
  displayPhone: "0300-2743860",
  rating: 3.8,
  reviewsCount: 38,
  city: "Sahiwal, Punjab, Pakistan",
  postalCode: "57000",
  timings: "Open Daily: 06:00 AM - 11:30 PM",
  facebookUrl: "https://www.facebook.com/rajdindairyswl/",
  facebookVideoUrl: "https://www.facebook.com/rajdindairyswl/videos/famous-singer-ramzan-jani-visited-raj-din-dairy-farm-and-loved-the-taste-of-our-/4367244473497639/",
  yandexUrl: "https://yandex.com/maps/org/haji_raj_din_dairy_milk_outlet_madhali_road_branch_/98798196591/",
};

export const branches = [
  {
    id: "madhali",
    name: "Madhali Road Branch (New 3rd Branch!)",
    urduName: "مدھالی روڈ آؤٹ لیٹ برانچ (نئی برانچ)",
    badge: "Recently Opened • 3rd Outlet",
    address: "Madhali Road, near Bypass Chowk, Sahiwal 57000",
    phone: "0300-2743860",
    features: ["Modern Dairy Chillers", "Fresh Evening & Morning Batches", "Spacious Parking", "Family Ice Cream Corner"],
    timings: "06:00 AM - 11:30 PM",
    isNew: true,
    mapLink: "https://yandex.com/maps/org/haji_raj_din_dairy_milk_outlet_madhali_road_branch_/98798196591/"
  },
  {
    id: "ghori",
    name: "Ghori Street Branch",
    urduName: "گھوڑی سٹریٹ برانچ",
    badge: "Main City Hub",
    address: "Ghori Street, Main Market, Sahiwal 57000",
    phone: "0300-2743860",
    features: ["Full Halwajat Production", "Daily Khoya Kheer Hot Serving", "Wholesale & Retail Counter"],
    timings: "06:00 AM - 11:30 PM",
    isNew: false,
    mapLink: "https://www.google.com/maps/search/Ghori+Street+Sahiwal"
  },
  {
    id: "gujar",
    name: "Gujar Ahata Branch",
    urduName: "گوجر احاطہ برانچ",
    badge: "Heritage Location",
    address: "Gujar Ahata, Old City Center, Sahiwal 57000",
    phone: "0300-2743860",
    features: ["Original Farm Fresh Milk Collection", "Traditional Matka Dahi", "Fast Counter Pickup"],
    timings: "06:00 AM - 11:00 PM",
    isNew: false,
    mapLink: "https://www.google.com/maps/search/Gujar+Ahata+Sahiwal"
  }
];

export const products = [
  {
    id: "milk-buffalo",
    category: "fresh-milk",
    name: "Farm Fresh Buffalo Milk",
    urduName: "خالص بھینس کا دودھ",
    unit: "per Litre",
    price: 240,
    tag: "Daily Essential",
    description: "100% pure thick buffalo milk with rich natural cream layer, non-adulterated and chilled directly from dairy farm.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80",
    fat: "6.8% Fat",
    freshness: "Morning & Evening Supply"
  },
  {
    id: "milk-cow",
    category: "fresh-milk",
    name: "Pure Cow Milk (A2 Light)",
    urduName: "خالص گائے کا دودھ",
    unit: "per Litre",
    price: 220,
    tag: "Healthy & Digestible",
    description: "Naturally sweet, golden-tinted cow milk ideal for growing children, elders, and light tea.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",
    fat: "4.2% Fat",
    freshness: "Fresh Daily"
  },
  {
    id: "thick-dahi",
    category: "yogurt",
    name: "Traditional Thick Matka Dahi",
    urduName: "گاڑھا ملائی دار دہی",
    unit: "per Kg",
    price: 260,
    tag: "Thick Malai Top",
    description: "Naturally cultured sweet yogurt with thick velvety malai layer. Perfect for breakfast lassi and family meals.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    fat: "Full Cream",
    freshness: "Made Fresh Daily"
  },
  {
    id: "desi-ghee-sohan",
    category: "halwajat",
    name: "Pure Desi Ghee Sohan Halwa",
    urduName: "خالص دیسی گھی سوہن حلوہ",
    unit: "per Kg Box",
    price: 1450,
    tag: "Bestseller Gift",
    description: "Authentic multi-generational recipe loaded with roasted almonds, pistachios, pure desi ghee, and crunchy samnak.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    fat: "100% Desi Ghee",
    freshness: "Gift Packaging Available"
  },
  {
    id: "habshi-halwa",
    category: "halwajat",
    name: "Shahi Habshi Halwa",
    urduName: "شاہی حبشی حلوہ",
    unit: "per Kg Box",
    price: 1550,
    tag: "Winter & Wedding Special",
    description: "Slow-cooked caramelised milk solids, aromatic green cardamom, and dense dry fruits drenched in organic desi ghee.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80",
    fat: "Rich Desi Ghee",
    freshness: "Handcrafted Batches"
  },
  {
    id: "gajar-halwa",
    category: "halwajat",
    name: "Desi Ghee Gajar Ka Halwa",
    urduName: "دیسی گھی گاجر حلوہ (کھویا سپیشل)",
    unit: "per Kg",
    price: 1100,
    tag: "Seasonal Favorite",
    description: "Fresh red carrots grated and simmered in full cream milk and pure desi ghee, topped with rich homemade khoya.",
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f210f?auto=format&fit=crop&w=700&q=80",
    fat: "Pure Ghee & Khoya",
    freshness: "Warm & Fresh"
  },
  {
    id: "khoya-kheer",
    category: "kheer-rabri",
    name: "Special Matka Khoya Kheer",
    urduName: "شاہی مٹکا کھویا کھیر",
    unit: "per Bowl (approx 450g)",
    price: 320,
    tag: "Signature Dessert",
    description: "Slow-simmered basmati rice, condensed farm milk, roasted pistachios, silver vark, and natural cardamom in terracotta matkas.",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?auto=format&fit=crop&w=700&q=80",
    fat: "Rich Khoya Blend",
    freshness: "Chilled Clay Matka"
  },
  {
    id: "shahi-rabri",
    category: "kheer-rabri",
    name: "Royal Lachhedar Rabri",
    urduName: "شاہی لچھے دار ربڑی",
    unit: "per Kg",
    price: 1150,
    tag: "Layers of Cream",
    description: "Scraped layered malai simmered for hours with saffron and chopped almonds. Sahiwal's all-time favorite celebration sweet.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80",
    fat: "100% Milk Malai",
    freshness: "Daily Small Batches"
  },
  {
    id: "dairy-kulfa",
    category: "icecream",
    name: "Raj Din Shahi Dairy Kulfa",
    urduName: "راج دین شاہی ڈیری قلفہ",
    unit: "per Piece / Plate",
    price: 150,
    tag: "Summer Hit",
    description: "Traditional frozen condensed milk kulfa on stick with saffron, crushed pistachios, and almond crunch.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80",
    fat: "100% Pure Dairy",
    freshness: "Always Cold & Creamy"
  },
  {
    id: "pista-icecream",
    category: "icecream",
    name: "Creamy Pista Badam Dairy Ice Cream",
    urduName: "پستہ بادام ڈیری آئس کریم",
    unit: "Family Pack (1 Litre)",
    price: 850,
    tag: "100% Dairy Cream",
    description: "Free from vegetable fats or synthetic flavors. Crafted strictly from fresh dairy cream, genuine roasted pistachios, and pure cane sugar.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80",
    fat: "Pure Dairy Cream",
    freshness: "Family Pack"
  },
  {
    id: "desi-makhan",
    category: "fresh-milk",
    name: "Farm Fresh Desi White Butter (Makhan)",
    urduName: "تازہ دیسی سفید مکھن",
    unit: "per Kg",
    price: 1600,
    tag: "Zero Salt & Preservatives",
    description: "Whipped directly from pure cultured dahi using traditional churning. Irresistible on hot parathas and sarson ka saag.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=700&q=80",
    fat: "Pure Natural Butterfat",
    freshness: "Churned Daily"
  },
  {
    id: "pure-desi-ghee",
    category: "halwajat",
    name: "Pure Danedar Desi Ghee (Tin/Jar)",
    urduName: "خالص دانے دار دیسی گھی",
    unit: "per 1 Kg Jar",
    price: 2400,
    tag: "Golden Aroma",
    description: "Clarified slow-simmered organic butterfat with authentic granular texture and unforgettable aroma. Guaranteed 100% pure.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80",
    fat: "99.8% Milk Fat",
    freshness: "Sealed Sealed Jar"
  }
];

export const celebrityVisit = {
  celebrityName: "Ramzan Jani",
  celebrityRole: "Famous Folk & Classical Singer of Pakistan",
  visitLocation: "Raj Din Dairy Farm & Outlet, Sahiwal",
  comment: "Raj Din Dairy Farm ka taste sach mein lajawab hai! Inka doodh, dahi aur makhsoos desi ghee ka halwa Sahiwal ki shaan hai. Khalsaat aur zaiqe ki behtareen misaal!",
  urduComment: "راج دین ڈیری فارم کا ذائقہ سچ میں لاجواب ہے! ان کا دودھ، دہی اور خالص دیسی گھی کا حلوہ ساہیوال کی شان ہے۔",
  videoLink: "https://www.facebook.com/rajdindairyswl/videos/famous-singer-ramzan-jani-visited-raj-din-dairy-farm-and-loved-the-taste-of-our-/4367244473497639/",
  views: "Thousands of Viral Views on Facebook",
  verified: true
};

export const customerReviews = [
  {
    id: 1,
    name: "Malik Usman Tariq",
    branch: "Madhali Road Outlet",
    rating: 5,
    text: "Madhali road branch is a great addition! We used to travel to Ghori St. Now we get fresh buffalo milk and dahi within 5 mins. Quality is 100% original.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Chaudhry Nadeem Akhtar",
    branch: "Ghori Street Branch",
    rating: 5,
    text: "Sohan Halwa in pure desi ghee is matchless. Whenever guests come to Sahiwal from Lahore or Islamabad, Haji Raj Din halwa box is our mandatory gift.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Dr. Farhan Qureshi",
    branch: "Gujar Ahata Branch",
    rating: 4,
    text: "Very reliable dairy for pure milk. The dahi is thick with natural malai, no chemical thickeners like commercial brands.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Hafiz M. Zeeshan Gujjar",
    branch: "Madhali Road Outlet",
    rating: 5,
    text: "Shahi Matka Khoya Kheer and Dairy Kulfa taste just like royal traditional desserts. The staff is polite, packaging is clean, and hygiene standards are exceptional.",
    date: "4 days ago"
  },
  {
    id: 5,
    name: "Mian Waqas Ahmad",
    branch: "Ghori Street Branch",
    rating: 5,
    text: "Been purchasing fresh cow milk and pure desi makhan daily for our family for the last 6 years. Purity guaranteed every single day in Sahiwal!",
    date: "5 days ago"
  },
  {
    id: 6,
    name: "Sheikh Daniyal Sahiwal",
    branch: "Gujar Ahata Branch",
    rating: 5,
    text: "Their pure buffalo milk has thick natural malai layer. Morning breakfast lassi with their fresh dahi is the best way to start the day. Truly the best dairy in town.",
    date: "2 weeks ago"
  }
];

