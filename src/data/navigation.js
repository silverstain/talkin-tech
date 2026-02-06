export const megaMenuData = [
  {
    trigger: "Enterprise ERP",
    type: "mega",
    columns: [
      {
        heading: "Institutional",
        items: [
          { name: "Smart School ERP", desc: "Admissions, Finance & Portals", icon: "🎓", href: "/solutions/smart-school", badge: "TOP" },
          { name: "Sacco Core Banking", desc: "SASRA Compliant Banking", icon: "🏦", href: "/solutions/sacco-core" },
          { name: "MediFlow Hospital", desc: "Patient Records & Billing", icon: "🏥", href: "/solutions/hospital" },
          { name: "NGO Project Mgmt", desc: "Donor & Grant Tracking", icon: "🤝", href: "/solutions/ngo-erp" }
        ]
      },
      {
        heading: "Business Ops",
        items: [
          { name: "Captain Order POS", desc: "Restaurant & Bar KDS", icon: "🍽️", href: "/solutions/pos", badge: "HOT" },
          { name: "Retail POS", desc: "Supermarket Stock Control", icon: "🛒", href: "/solutions/retail-pos" },
          { name: "HR & Payroll", desc: "KRA Automated Payroll", icon: "👥", href: "/solutions/hr-payroll" },
          { name: "Real Estate", desc: "Property Management", icon: "🏢", href: "/solutions/property" }
        ]
      }
    ],
    featured: {
      title: "Case Study",
      name: "Sacco Digital Shift",
      desc: "Migrating 50k members to the cloud.",
      link: "/case-studies/sacco",
      image: "bg-blue-600"
    }
  },
  {
    trigger: "On-Demand Apps",
    type: "mega",
    columns: [
      {
        heading: "Mobility",
        items: [
          { name: "Taxi Booking App", desc: "Uber/Bolt Clone White Label", icon: "🚖", href: "/solutions/taxi-app", badge: "POPULAR" },
          { name: "Logistics App", desc: "Trucking & Fleet Mgmt", icon: "🚚", href: "/solutions/logistics" },
          { name: "Parcel Delivery", desc: "Boda Boda Courier App", icon: "📦", href: "/solutions/courier-app" }
        ]
      },
      {
        heading: "Marketplace",
        items: [
          { name: "Food Delivery", desc: "UberEats Clone", icon: "🍔", href: "/solutions/food-delivery" },
          { name: "Grocery App", desc: "Supermarket Delivery", icon: "🥦", href: "/solutions/grocery" },
          { name: "Handyman App", desc: "Service Booking", icon: "🛠️", href: "/solutions/handyman" }
        ]
      }
    ],
    featured: {
      title: "New",
      name: "Super App",
      desc: "Taxi + Food + Services in one app.",
      link: "/solutions/super-app",
      image: "bg-purple-600"
    }
  },
  {
    trigger: "Engineering",
    type: "mega",
    columns: [
      {
        heading: "Development",
        items: [
          { name: "Mobile App Dev", desc: "Flutter Native Experts", icon: "📱", href: "/services/mobile" },
          { name: "Web Applications", desc: "Laravel & React Systems", icon: "💻", href: "/services/web" },
          { name: "API Integration", desc: "M-Pesa & Bank APIs", icon: "🔌", href: "/services/api" }
        ]
      },
      {
        heading: "Infrastructure",
        items: [
          { name: "Cloud Hosting", desc: "VPS & Dedicated Servers", icon: "☁️", href: "/infrastructure/cloud" },
          { name: "WiFi Billing", desc: "Hotspot Management", icon: "📶", href: "/infrastructure/wifi" },
          { name: "Cyber Security", desc: "Pen-Testing & Audits", icon: "🔒", href: "/services/security" }
        ]
      }
    ],
    featured: {
      title: "Offer",
      name: "Free Migration",
      desc: "Move to our servers for free.",
      link: "/infrastructure/migration",
      image: "bg-emerald-600"
    }
  },
  // NEW COMPANY DROPDOWN
  {
    trigger: "Company",
    type: "simple", 
    items: [
      { name: "About Talkin Tech", icon: "👋", href: "/about" },
      { name: "Our Portfolio", icon: "💼", href: "/portfolio" },
      { name: "Careers", icon: "🚀", href: "/careers" },
      { name: "Contact Us", icon: "📞", href: "/contact" }
    ]
  }
];