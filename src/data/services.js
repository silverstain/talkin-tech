export const serviceCategories = [
  {
    title: "Institutional & Sacco Management",
    services: [
      { 
        slug: "smart-school-system",
        name: "Smart School Management", 
        icon: "🎓",
        desc: "End-to-end academic, finance, and administrative automation.",
        modules: ["Student Information System", "Fee Management & Invoicing", "Exam & Report Cards", "Hostel & Transport", "Biometric Attendance"],
        features: ["M-Pesa API Integration", "Bulk SMS Notifications", "Parent/Student Portal", "KRA/NSSF/NHIF Payroll Support"]
      },
      { 
        slug: "sacco-management",
        name: "Sacco Management System", 
        icon: "🏦",
        desc: "Secure platform for managing member contributions, loans, and dividends.",
        modules: ["Member Registration", "Shares & Deposits", "Loan Appraisal & Disbursement", "Guarantor Management", "General Ledger"],
        features: ["Automated Interest Calculation", "M-Pesa Disbursement & C2B", "Financial Reporting (SASRA Standard)", "Mobile Banking App Integration"]
      },
      { 
        slug: "hospital-management",
        name: "Hospital Management System", 
        icon: "🏥",
        desc: "Streamlined clinical and administrative workflows for healthcare providers.",
        modules: ["Patient Registration", "Triage & Consultation", "Pharmacy & Inventory", "Laboratory Management", "Billing & Insurance"],
        features: ["Electronic Health Records (EHR)", "NHIF Claim Integration", "Appointment Scheduling", "Prescription Management"]
      },
      { 
        slug: "church-management",
        name: "Church Management System", 
        icon: "⛪",
        desc: "Organize ministry operations and engage with your congregation.",
        modules: ["Member Database", "Tithes & Offerings", "Project Fund Tracking", "Events & Calendar", "Departmental Management"],
        features: ["Automated Giving Receipts", "Bulk Communication (SMS/WhatsApp)", "Attendance Tracking", "Mobile Giving Integration"]
      }
    ]
  },
  {
    title: "Retail & Business Operations",
    services: [
      { 
        slug: "captain-order-pos",
        name: "Captain Order POS", 
        icon: "🍽️",
        desc: "Modern restaurant management for precision ordering and billing.",
        modules: ["Table & Floor Management", "Kitchen Display System (KDS)", "Recipe & Food Costing", "Bar & Counter Sales", "Inventory Control"],
        features: ["'Send & Stay' Workflow", "Split Billing", "M-Pesa Instant Recon", "Mobile Tablet Ordering for Waiters"]
      },
      { 
        slug: "gym-management",
        name: "Gym & Fitness Management", 
        icon: "🏋️",
        desc: "Membership tracking and automated billing for fitness centers.",
        modules: ["Membership Plans", "Access Control (QR/Biometric)", "Trainer Scheduling", "Point of Sale (Supplements)", "Payment Reminders"],
        features: ["Auto-Expiration Alerts", "Member Progress Tracking", "Subscription Renewal via M-Pesa", "Integrated SMS Reminders"]
      },
      { 
        slug: "law-management",
        name: "Law Practice Management", 
        icon: "⚖️",
        desc: "Case management and legal accounting for modern law firms.",
        modules: ["Case & Matter Tracking", "Document Management", "Client Billing & Trust Accounts", "Time Tracking", "Calendar & Tasks"],
        features: ["Legal Document Templates", "Auto-Reminders for Court Dates", "Conflict of Interest Checking", "Professional Invoice Generation"]
      },
      { 
        slug: "erp-crm-systems",
        name: "ERP & CRM Solutions", 
        icon: "💼",
        desc: "Unified business management to track everything from leads to logistics.",
        modules: ["Sales Pipeline", "Customer Support (Ticketing)", "Procurement", "Warehouse Management", "Financial Accounting"],
        features: ["Real-time Analytics Dashboard", "Multi-Currency Support", "Mobile CRM Access", "Lead Conversion Tracking"]
      }
    ]
  },
  {
    title: "Connectivity & Infrastructure",
    services: [
      { 
        slug: "bulk-comms",
        name: "Bulk Communication Tools", 
        icon: "📱",
        desc: "Omnichannel messaging to reach your customers where they are.",
        modules: ["Bulk SMS Gateway", "WhatsApp Business API", "Bulk Email Marketing", "Voice Messaging"],
        features: ["Scheduled Campaigns", "Personalized Messaging", "Delivery Reports (DLRS)", "API Integration for Developers"]
      },
      { 
        slug: "wifi-isp-solutions",
        name: "WiFi & ISP Billing", 
        icon: "📶",
        desc: "Manage and monetize WiFi hotspots and home fiber connections.",
        modules: ["Hotspot Portal", "Bandwidth Shaper", "PPPoE Server Management", "Voucher Generation"],
        features: ["Automated M-Pesa Billing", "Self-Service User Portal", "Mikrotik Integration", "Monthly Subscription Automation"]
      },
      { 
        slug: "hosting-cloud-vps",
        name: "Hosting & Cloud Services", 
        icon: "☁️",
        desc: "High-performance hosting for Kenya's digital landscape.",
        modules: ["Shared Hosting", "VPS Hosting", "Cloud Dedicated Servers", "SSL & Domain Registration"],
        features: ["NVMe Storage", "99.9% Uptime Guarantee", "Local Nairobi Latency Optimization", "Free Migration Support"]
      }
    ]
  },
  {
    title: "Custom Development & Internal Tools",
    services: [
      { 
        slug: "custom-mobile-web-dev",
        name: "Custom Mobile & Web Dev", 
        icon: "🚀",
        desc: "Bespoke software tailored to your specific business requirements.",
        modules: ["Laravel Web Apps", "Flutter Mobile Apps", "Golang Microservices", "PostgreSQL/MySQL Databases"],
        features: ["Native Performance", "Scalable Architecture", "API-First Design", "Security Audited Code"]
      },
      { 
        slug: "requisition-system",
        name: "Internal Requisition System", 
        icon: "📝",
        desc: "Automate internal approvals and procurement cycles.",
        modules: ["Purchase Requests", "Multi-Level Approvals", "Budget Tracking", "Supplier Management"],
        features: ["Email/SMS Notifications", "Approval Audit Trail", "Real-time Budget Alerts", "PDF Report Generation"]
      },
      { 
        slug: "queue-management",
        name: "Queue Management System", 
        icon: "🚶",
        desc: "Improve customer experience by managing service wait times.",
        modules: ["Token Generation", "Service Desk Dashboard", "Digital Signage Displays", "Feedback Collection"],
        features: ["SMS Ticket Notifications", "Average Wait Time Analytics", "Multi-Service Branch Support"]
      }
    ]
  }
];