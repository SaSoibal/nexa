export type Job = {
  title: string;
  category: string;
  budget: string;
  location: string;
  deadline: string;
  status: "ACTIVE" | "OPEN";
  match: number;
};

export type Service = {
  title: string;
  category: string;
  price: string;
  provider: string;
  rating: string;
  completed: string;
};

export type Transaction = {
  ref: string;
  type: string;
  description: string;
  amount: string;
  balance: string;
  status: string;
};

export const jobs: Job[] = [
  { title: "Tax Return Documentation", category: "Business", budget: "৳1,500", location: "Gulshan", deadline: "2 days", status: "ACTIVE", match: 92 },
  { title: "Excel Data Cleanup", category: "Data", budget: "৳850", location: "Remote", deadline: "1 day", status: "OPEN", match: 95 },
  { title: "Presentation Design", category: "Design", budget: "৳900", location: "Banani", deadline: "3 days", status: "OPEN", match: 87 },
  { title: "IT Support Visit", category: "IT", budget: "৳1,200", location: "Dhanmondi", deadline: "Tomorrow", status: "OPEN", match: 89 },
  { title: "AC Maintenance", category: "Home Service", budget: "৳1,800", location: "Uttara", deadline: "2 days", status: "OPEN", match: 84 },
  { title: "Product Photography", category: "Creative", budget: "৳2,500", location: "Mirpur", deadline: "4 days", status: "OPEN", match: 82 },
  { title: "English Tutor", category: "Education", budget: "৳600", location: "Remote", deadline: "Weekly", status: "OPEN", match: 91 },
  { title: "Retail Survey", category: "Micro Task", budget: "৳250", location: "Gulshan", deadline: "Today", status: "OPEN", match: 88 },
  { title: "Invoice Reconciliation", category: "Finance", budget: "৳1,100", location: "Motijheel", deadline: "2 days", status: "OPEN", match: 90 },
  { title: "Logo Refresh", category: "Design", budget: "৳1,500", location: "Remote", deadline: "3 days", status: "OPEN", match: 86 },
];

export const services: Service[] = [
  { title: "Excel Dashboard & Reporting", category: "Business", price: "৳1,200", provider: "Rashed", rating: "4.9", completed: "87" },
  { title: "Tax Documentation", category: "Finance", price: "৳1,500", provider: "Rashed", rating: "4.9", completed: "87" },
  { title: "Presentation Design", category: "Design", price: "৳900", provider: "Nabila", rating: "4.9", completed: "42" },
  { title: "IT Support & Setup", category: "IT", price: "৳1,200", provider: "Arif", rating: "4.8", completed: "65" },
  { title: "AC Servicing", category: "Home", price: "৳1,800", provider: "Imran", rating: "4.7", completed: "112" },
  { title: "Product Photography", category: "Creative", price: "৳2,500", provider: "Sakib", rating: "4.9", completed: "38" },
  { title: "English Tutoring", category: "Education", price: "৳600", provider: "Mitu", rating: "4.8", completed: "54" },
  { title: "Video Editing", category: "Creative", price: "৳2,000", provider: "Nadia", rating: "4.9", completed: "31" },
  { title: "Data Entry", category: "Business", price: "৳500", provider: "Farhan", rating: "4.7", completed: "76" },
  { title: "Social Media Design", category: "Marketing", price: "৳1,000", provider: "Jannat", rating: "4.8", completed: "49" },
];

export const transactions: Transaction[] = [
  { ref: "TXN-10842", type: "Job income", description: "Tax Documentation", amount: "+৳1,350", balance: "৳28,450", status: "RELEASED" },
  { ref: "TXN-10841", type: "Delivery", description: "PUDO Delivery", amount: "+৳100", balance: "৳27,100", status: "RELEASED" },
  { ref: "TXN-10840", type: "Fee", description: "Platform fee", amount: "-৳150", balance: "৳27,000", status: "SETTLED" },
  { ref: "TXN-10839", type: "Job income", description: "Excel Cleanup", amount: "+৳765", balance: "৳27,150", status: "RELEASED" },
  { ref: "TXN-10838", type: "Withdrawal", description: "bKash payout", amount: "-৳5,000", balance: "৳26,385", status: "COMPLETED" },
  { ref: "TXN-10837", type: "Job income", description: "Presentation", amount: "+৳810", balance: "৳31,385", status: "RELEASED" },
  { ref: "TXN-10836", type: "Fee", description: "Platform fee", amount: "-৳90", balance: "৳30,575", status: "SETTLED" },
  { ref: "TXN-10835", type: "Job income", description: "Survey", amount: "+৳225", balance: "৳30,665", status: "RELEASED" },
  { ref: "TXN-10834", type: "Withdrawal", description: "Bank payout", amount: "-৳3,000", balance: "৳30,440", status: "COMPLETED" },
  { ref: "TXN-10833", type: "Job income", description: "IT Support", amount: "+৳1,080", balance: "৳33,440", status: "RELEASED" },
];

export const notifications: string[] = [
  "New PUDO opportunity · Gulshan → Demra · ৳100",
  "Payment released · ৳1,350 added to wallet",
  "Your profile reached 92% smart match",
  "Nabila sent you a message",
  "Verification approved for Excel skill",
  "New job posted: Excel Data Cleanup · ৳850",
  "Customer accepted your proposal",
  "Learning milestone: Advanced Excel lesson 12",
  "Withdrawal of ৳5,000 completed",
  "New review received · ⭐5.0",
];

export type NavItem = { href: string; label: string; icon: string };

export const navSections: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: "⌂" },
      { href: "/dashboard/provider", label: "Provider Dashboard", icon: "◈" },
      { href: "/dashboard/customer", label: "Customer Dashboard", icon: "◉" },
    ],
  },
  {
    heading: "Marketplace",
    items: [
      { href: "/dashboard/jobs", label: "Jobs", icon: "▣" },
      { href: "/dashboard/services", label: "Services", icon: "◇" },
      { href: "/dashboard/matching", label: "Smart Matching", icon: "✦" },
      { href: "/dashboard/deliveries", label: "Deliveries / PUDO", icon: "▱" },
    ],
  },
  {
    heading: "Finance",
    items: [
      { href: "/dashboard/wallet", label: "Wallet", icon: "৳" },
      { href: "/dashboard/transactions", label: "Transactions", icon: "⇄" },
      { href: "/dashboard/chat", label: "Chat", icon: "◌" },
      { href: "/dashboard/notifications", label: "Notifications", icon: "♧" },
    ],
  },
  {
    heading: "Account",
    items: [
      { href: "/dashboard/profile", label: "Profile", icon: "●" },
      { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
    ],
  },
  {
    heading: "Administration",
    items: [
      { href: "/dashboard/admin", label: "Admin Dashboard", icon: "▦" },
      { href: "/dashboard/users", label: "User Management", icon: "♙" },
      { href: "/dashboard/verification", label: "Verification", icon: "✓" },
      { href: "/dashboard/disputes", label: "Disputes", icon: "!" },
      { href: "/dashboard/reports", label: "Reports", icon: "◒" },
    ],
  },
];

export const dashboardRoutes = [
  "provider", "customer", "jobs", "services", "matching", "deliveries",
  "wallet", "transactions", "chat", "notifications", "profile", "settings",
  "admin", "users", "verification", "disputes", "reports",
  "job-detail", "service-detail", "delivery-detail",
  "create-job", "create-service", "requests", "learning",
] as const;