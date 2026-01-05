
import { Course, DigitalProduct, BlogPost, Testimonial, Review, SiteContent, NavLink } from './types';
import { Book, Monitor, Layout, FileCheck, BookOpen, ShoppingBag, FileText, User, LayoutDashboard } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Courses', path: '/courses', icon: BookOpen },
  { name: 'Store', path: '/store', icon: ShoppingBag },
  { name: 'Insights', path: '/blog', icon: FileText },
  { name: 'About', path: '/about', icon: User },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
];

export const SITE_CONTENT: SiteContent = {
  home: {
    hero: {
      tagline: "Join 15,000+ learners globally",
      headline: "Learn smarter, not harder.",
      subheadline: "The premium learning hub for high-achievers. Master the systems, skills, and mindset needed to excel in the digital age.",
      primaryCTA: { text: "Start Learning", link: "/courses" },
      secondaryCTA: { text: "View Shop", link: "/store" }
    },
    offerings: {
      headline: "Curated learning categories",
      items: [
        { title: 'Online Courses', desc: 'Step-by-step video curriculums', iconName: 'Book', colorClass: 'bg-blue-50 text-blue-600' },
        { title: 'Ebooks & Guides', desc: 'Comprehensive deep-dives', iconName: 'Monitor', colorClass: 'bg-indigo-50 text-indigo-600' },
        { title: 'Templates & Toolkits', desc: 'Ready-to-use digital assets', iconName: 'Layout', colorClass: 'bg-amber-50 text-amber-600' },
        { title: 'Planners & Printables', desc: 'Optimize your daily routine', iconName: 'FileCheck', colorClass: 'bg-emerald-50 text-emerald-600' },
      ]
    },
    featuredCourses: {
      headline: "Featured Learning",
      subheadline: "Carefully curated curriculums designed to help you master high-income skills and sustainable productivity.",
      viewAllText: "View All Courses"
    },
    whyChoose: {
      headline: "Designed for the serious learner.",
      points: [
        { title: 'Structured Learning', desc: 'No more jumping between random tutorials. Our paths are logically sequenced.' },
        { title: 'Practical Approach', desc: 'Real-world projects and actionable templates you can use immediately.' },
        { title: 'Lifetime Access', desc: 'Buy once, keep forever. Including all future updates and resources.' },
        { title: 'Community Driven', desc: 'Connected to a global network of ambitious learners via our YouTube channel.' }
      ],
      creatorNote: {
        title: "Connect with the Creator",
        sub: "Join 500k subscribers on YouTube",
        quote: "I built Lumina Academy because I was tired of surface-level courses. My goal is to give you the exact toolkits I use to run my business and life.",
        ctaText: "Watch on YouTube"
      }
    },
    testimonials: {
      headline: "Trusted by thousands.",
      subheadline: "Join our growing community of professionals and creative entrepreneurs."
    },
    finalCTA: {
      headline: "Ready to level up?",
      subheadline: "Get instant access to our entire catalog of courses and digital products. Join today and start your journey towards mastery.",
      primaryCTA: { text: "Browse Courses", link: "/courses" },
      secondaryCTA: { text: "All-Access Pass", link: "/pricing" }
    }
  }
};

const MOCK_REVIEWS: Review[] = [
  { id: 'r1', userName: 'Mark T.', userInitials: 'MT', rating: 5, content: 'The systems taught here are life-changing. I finally feel in control of my schedule.', date: '2 weeks ago' },
  { id: 'r2', userName: 'Sarah L.', userInitials: 'SL', rating: 5, content: 'Clear, concise, and incredibly practical. The templates provided are worth the price alone.', date: '1 month ago' },
  { id: 'r3', userName: 'James K.', userInitials: 'JK', rating: 4, content: 'Excellent depth. I wish there were more advanced modules, but for intermediate users, it is perfect.', date: '2 months ago' }
];

// Expanded Courses List (25 items)
export const COURSES: Course[] = [
  { id: '1', title: 'Scientific Study Techniques', thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 99, duration: '8 Hours', students: 2400, rating: 4.9, reviewCount: 520, description: 'Master active recall and spaced repetition for maximum retention.', category: 'Productivity', reviews: MOCK_REVIEWS, curriculum: [{title: 'Neuroscience of Learning', duration: '45m'}, {title: 'Active Recall Systems', duration: '1h'}] },
  { id: '2', title: 'The Habit Lab: Building Discipline', thumbnail: 'https://images.unsplash.com/photo-1506784919141-935043324f60?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 129, duration: '6 Hours', students: 1800, rating: 4.8, reviewCount: 340, description: 'Break bad cycles and build unstoppable learning habits.', category: 'Productivity', reviews: MOCK_REVIEWS },
  { id: '3', title: 'Cognitive Optimization', thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 199, duration: '12 Hours', students: 950, rating: 4.9, reviewCount: 210, description: 'Advanced strategies to boost focus, mental clarity, and IQ.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '4', title: 'Deep Work for Students', thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 79, duration: '5 Hours', students: 3200, rating: 4.7, description: 'Learn to focus in a world of digital distractions.', category: 'Productivity', reviews: MOCK_REVIEWS },
  { id: '5', title: 'Speed Reading & Comprehension', thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 89, duration: '10 Hours', students: 1500, rating: 4.6, description: 'Read 3x faster without losing context.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '6', title: 'Digital Note-Taking Systems', thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 69, duration: '4 Hours', students: 4100, rating: 4.9, description: 'Master Obsidian, Notion, and Roam for research.', category: 'Technology', reviews: MOCK_REVIEWS },
  { id: '7', title: 'Exam Anxiety Management', thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 49, duration: '3 Hours', students: 2800, rating: 4.8, description: 'Psychological tools to stay calm under pressure.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '8', title: 'Neuroscience of Memory', thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 159, duration: '15 Hours', students: 1200, rating: 4.9, description: 'Understand how your brain stores information.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '9', title: 'Metacognition: Learning Strategy', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 119, duration: '8 Hours', students: 1300, rating: 4.7, description: 'Strategic thinking about your own learning process.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '10', title: 'Atomic Study Habits', thumbnail: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 69, duration: '7 Hours', students: 5400, rating: 4.9, description: 'Small changes that lead to massive academic results.', category: 'Productivity', reviews: MOCK_REVIEWS },
  { id: '11', title: 'Flow State for Academics', thumbnail: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 139, duration: '9 Hours', students: 1100, rating: 4.8, description: 'Triggering peak performance at will.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '12', title: 'Time Management for Learners', thumbnail: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 59, duration: '6 Hours', students: 3600, rating: 4.7, description: 'Balancing social life and intensive study.', category: 'Productivity', reviews: MOCK_REVIEWS },
  { id: '13', title: 'Mind Mapping Masterclass', thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 89, duration: '5 Hours', students: 2200, rating: 4.6, description: 'Visualize complex subjects for better clarity.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '14', title: 'Critical Thinking Systems', thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 149, duration: '12 Hours', students: 800, rating: 4.9, description: 'Logic, bias, and mental models for analysis.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '15', title: 'Self-Directed Learning Path', thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 129, duration: '10 Hours', students: 1400, rating: 4.8, description: 'Become an expert in any field without school.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '16', title: 'Rapid Language Acquisition', thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 149, duration: '14 Hours', students: 1600, rating: 4.7, description: 'Fluent in 6 months using immersive logic.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '17', title: 'Creative Problem Solving', thumbnail: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 109, duration: '8 Hours', students: 1900, rating: 4.8, description: 'The engineer\'s approach to difficult questions.', category: 'Technology', reviews: MOCK_REVIEWS },
  { id: '18', title: 'Academic Writing Mastery', thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 179, duration: '18 Hours', students: 700, rating: 4.9, description: 'Publishable research and effective citations.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '19', title: 'Emotional Intelligence for Academics', thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 79, duration: '6 Hours', students: 2100, rating: 4.6, description: 'Social skills for group projects and labs.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '20', title: 'Digital Minimalism Living', thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 69, duration: '5 Hours', students: 3300, rating: 4.8, description: 'Reclaiming your mind from social media algorithms.', category: 'Productivity', reviews: MOCK_REVIEWS },
  { id: '21', title: 'Memory Palace Workshop', thumbnail: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 99, duration: '7 Hours', students: 2500, rating: 4.9, description: 'Ancient secrets for massive data memorization.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '22', title: 'Building a Second Brain', thumbnail: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800', level: 'Intermediate', price: 199, duration: '15 Hours', students: 6800, rating: 4.9, description: 'The ultimate system for digital PKM.', category: 'Technology', reviews: MOCK_REVIEWS },
  { id: '23', title: 'Philosophy of Focus', thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 129, duration: '10 Hours', students: 900, rating: 4.8, description: 'Stoic and modern principles for deep work.', category: 'Psychology', reviews: MOCK_REVIEWS },
  { id: '24', title: 'The 80/20 Learning Rule', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', level: 'Beginner', price: 89, duration: '6 Hours', students: 2900, rating: 4.7, description: 'Learn 80% of a topic in 20% of the time.', category: 'Learning', reviews: MOCK_REVIEWS },
  { id: '25', title: 'Leadership in Education', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', level: 'Advanced', price: 189, duration: '20 Hours', students: 400, rating: 4.9, description: 'Managing research teams and academic projects.', category: 'Productivity', reviews: MOCK_REVIEWS },
];

// Massively Expanded Products List (115+ items)
const generateProducts = () => {
  const products: DigitalProduct[] = [];
  
  // 30 Ebooks
  const ebookTitles = [
    "The Synapse Guide", "Focus Fuel", "Learning Blueprints", "The Deep Work Manual", 
    "Neuro-Learning Secret", "Habit Loops", "The Academic Edge", "Digital Solitude",
    "Mindset Mechanics", "Retention Mastery", "The Productivity Code", "Zen Study",
    "Cognitive Health", "The Information Architect", "Memory Matrix", "Focus Flow",
    "The Polymath Path", "Logic & Reason", "Strategic Learner", "The Focus Engine",
    "Mind Mapping Guide", "Speed Reading 101", "The Research Bible", "Critical Thinker",
    "Habit Architect", "Deep Life Essentials", "Mental Clarity", "The Learning Lab",
    "Knowledge Management", "Academic Success"
  ];
  ebookTitles.forEach((t, i) => products.push({ id: `e${i}`, title: t, type: 'Ebook', price: 15 + (i % 5), thumbnail: `https://picsum.photos/seed/ebk${i}/600`, description: 'Deep-dive insights for serious learners.' }));

  // 30 Planners
  const plannerTitles = [
    "Semester Success Planner", "Deep Work Daily Log", "The 90-Day Mastery", "Focus Daily",
    "Academic Research Log", "Habit Tracker Deluxe", "The Productivity Journal", "Clarity Planner",
    "Exam Prep Strategic", "Project Milestone Log", "Daily Intentions", "The Mindset Planner",
    "Time Block Weekly", "Goal Architect", "The Student Life OS", "Priority Matrix Planner",
    "Energy Tracker", "Focus Flow Daily", "The Research Roadmap", "Study Session Log",
    "Knowledge Base Planner", "Creativity Journal", "Systematic Reviewer", "The Learning Ledger",
    "Daily Deep Focus", "Strategic Week", "The Academic Calendar", "Growth Log",
    "Mindful Planner", "Efficiency Tracker"
  ];
  plannerTitles.forEach((t, i) => products.push({ id: `pl${i}`, title: t, type: 'Planner', price: 12 + (i % 3), thumbnail: `https://picsum.photos/seed/plan${i}/600`, description: 'Structure your days for peak performance.' }));

  // 25 Printables
  const printableTitles = [
    "Cornell Notes Template", "Pomodoro Sessions Sheet", "Syllabus Breakdown", "Mind Map Leaf",
    "Habit Tracker Leaf", "Focus Session Timer", "Retention Cheat Sheet", "Active Recall Cards",
    "Reading Log", "Research Summary Grid", "Logic Flow Chart", "The Exam Countdown",
    "Topic Deep Dive", "Formula Reference Sheet", "Citation Guide", "Vocabulary Builder",
    "Concept Connector", "The Focus Shield", "Daily Progress Chart", "Weekly Review Sheet",
    "Goal Breakdown", "Mindset Shift Worksheet", "Energy Audit", "Time Block Sheet",
    "Knowledge Mapping"
  ];
  printableTitles.forEach((t, i) => products.push({ id: `pr${i}`, title: t, type: 'Printable', price: 5 + (i % 2), thumbnail: `https://picsum.photos/seed/print${i}/600`, description: 'Instant downloads to keep you organized.' }));

  // 30 Toolkits
  const toolkitTitles = [
    "Notion Academic OS", "Obsidian Research Hub", "The Creator Workflow", "Second Brain Template",
    "Student CRM System", "Research Library DB", "The Habit Dashboard", "Project Mastery Kit",
    "Exam Prep Database", "The Focused Writer Kit", "Mind Mapping Toolkit", "Data Analysis OS",
    "Language Learning Suite", "The Deep Work Station", "Digital Asset Manager", "Learning Lab CRM",
    "The Knowledge Base", "Curriculum Builder", "Teaching Assistant Toolkit", "Personal Growth OS",
    "Efficiency Dashboard", "The Workflow Architect", "Priority Management Kit", "Focus Engine OS",
    "The Strategy Kit", "Research Automation", "Knowledge Graph Setup", "The Thinking Hub",
    "Academic Project OS", "The Creator Kit"
  ];
  toolkitTitles.forEach((t, i) => products.push({ id: `tk${i}`, title: t, type: 'Toolkit', price: 35 + (i % 10), thumbnail: `https://picsum.photos/seed/tool${i}/600`, description: 'Comprehensive systems ready to implement.' }));

  return products;
};

export const PRODUCTS = generateProducts();

export const BLOG_POSTS: BlogPost[] = [
  { id: 'b1', title: 'Building Sustainable Learning Habits', date: 'Oct 12, 2023', excerpt: 'Discover why most fail to learn new skills.', image: 'https://picsum.photos/seed/blog1/800/400' },
  { id: 'b2', title: 'High-Performance Focus', date: 'Sep 28, 2023', excerpt: 'Eliminating distractions is only half the battle.', image: 'https://picsum.photos/seed/blog2/800/400' },
  { id: 'b3', title: 'The Power of Active Recall', date: 'Nov 05, 2023', excerpt: 'Why testing yourself is better than re-reading.', image: 'https://picsum.photos/seed/blog3/800/400' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Sarah Johnson', initials: 'SJ', role: 'Medical Student', content: 'Lumina\'s study techniques saved my grades. I spend 50% less time and retain more.' },
  { id: 't2', name: 'David Chen', initials: 'DC', role: 'Software Engineer', content: 'The Building a Second Brain course is a masterclass in modern knowledge management.' },
  { id: 't3', name: 'Elena Rodriguez', initials: 'ER', role: 'Researcher', content: 'The Notion Academic OS is the backbone of my PhD research. Absolutely worth it.' }
];
