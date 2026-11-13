export const skillCategories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'programming', label: 'Programming' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'database', label: 'Databases' },
  { id: 'core', label: 'Core Concepts' },
  { id: 'tools', label: 'Developer Tools' }
];

export const skillsData = [
  // Programming
  {
    name: 'Java',
    category: 'programming',
    level: 'Core Language',
    icon: 'Coffee',
    description: 'Primary language for OOP, data structures, algorithm implementation, and desktop GUI applications.',
    projects: ['Smart Record Manager', 'DSA Practice Repository'],
    highlight: 'Object-Oriented Architecture, Collections Framework, Exception Handling'
  },
  {
    name: 'C',
    category: 'programming',
    level: 'Systems Foundation',
    icon: 'Cpu',
    description: 'Foundation for understanding memory management, pointers, low-level execution, and systems programming.',
    projects: ['Memory & Pointer Labs', 'Fundamental Data Structures'],
    highlight: 'Pointers, Dynamic Memory Allocation (malloc/free), Structs'
  },
  {
    name: 'JavaScript',
    category: 'programming',
    level: 'Web Standard',
    icon: 'FileCode',
    description: 'Modern ES6+ development for interactive frontends, asynchronous API fetching, and DOM manipulation.',
    projects: ['CookFusion', 'Weather Horizon', 'DevUtilities'],
    highlight: 'Async/Await, Fetch API, Closures, Array Operations'
  },
  {
    name: 'SQL',
    category: 'programming',
    level: 'Data Querying',
    icon: 'Database',
    description: 'Writing complex queries, joins, window functions, and schema definitions for relational data.',
    projects: ['E-Commerce & Media SQL Analytics'],
    highlight: 'Multi-table Joins, Aggregations, Subqueries, Normalization'
  },

  // Frontend
  {
    name: 'HTML5',
    category: 'frontend',
    level: 'Markup Standard',
    icon: 'Layout',
    description: 'Semantic markup structure prioritizing accessibility, clean hierarchy, and SEO best practices.',
    projects: ['Eco-Recycler', 'CookFusion', 'Portfolio'],
    highlight: 'Semantic Elements, ARIA landmarks, Meta SEO Tags'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 'Styling & Animation',
    icon: 'Palette',
    description: 'Modern layouts using Flexbox, CSS Grid, custom properties, glassmorphism, and responsive media queries.',
    projects: ['3D Portfolio', 'Weather Horizon', 'CookFusion'],
    highlight: 'CSS Grid, Flexbox, Keyframes, Custom Properties'
  },
  {
    name: 'React',
    category: 'frontend',
    level: 'Component Framework',
    icon: 'Atom',
    description: 'Building modular, state-driven user interfaces with functional components and modern hooks.',
    projects: ['3D Interactive Portfolio', 'Eco-Recycler', 'CookFusion'],
    highlight: 'Hooks (useState, useEffect, useMemo), Component Modularity, Virtual DOM'
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    level: 'Relational Database',
    icon: 'Server',
    description: 'Designing relational schemas, setting constraints, foreign keys, and executing optimized query scripts.',
    projects: ['E-Commerce SQL Analytics', 'Student Record DB'],
    highlight: 'Table Design, Primary/Foreign Keys, Indexing, Transactions'
  },

  // Core Concepts
  {
    name: 'Data Structures & Algorithms',
    category: 'core',
    level: 'Problem Solving Engine',
    icon: 'Network',
    description: 'Active problem solving covering arrays, linked lists, stacks, queues, trees, searching, and sorting algorithms.',
    projects: ['Algorithmic Problem Sets', 'LeetCode Practice'],
    highlight: 'Time & Space Complexity (Big-O), Recursion, Sorting, Trees'
  },
  {
    name: 'Object-Oriented Programming',
    category: 'core',
    level: 'Software Design',
    icon: 'Boxes',
    description: 'Applying encapsulation, inheritance, polymorphism, and abstraction to write clean, reusable, maintainable software.',
    projects: ['Smart Record Manager (Java)', 'OOP Case Studies'],
    highlight: 'Encapsulation, Polymorphism, Class Inheritance, Interfaces'
  },
  {
    name: 'Problem Solving',
    category: 'core',
    level: 'Analytical Thinking',
    icon: 'CheckCircle2',
    description: 'Deconstructing algorithmic challenges, tracing edge cases, and formulating optimal step-by-step solutions.',
    projects: ['Chitkara University Labs', 'Coding Challenges'],
    highlight: 'Edge-case Analysis, Dry-running, Code Refactoring'
  },
  {
    name: 'Responsive Web Design',
    category: 'core',
    level: 'Multi-device UI/UX',
    icon: 'Smartphone',
    description: 'Ensuring fluid layouts, touch target optimization, and proportional typography across phones, tablets, and desktops.',
    projects: ['All Web Projects', 'Portfolio Experience'],
    highlight: 'Mobile-first Mindset, Breakpoints, Fluid Typography'
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    level: 'Version Control',
    icon: 'GitBranch',
    description: 'Managing source code versions, branching strategies, commit history, and merge resolution.',
    projects: ['All Academic & Personal Repositories'],
    highlight: 'Branching, Commit Hygiene, Merge Workflow'
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 'Collaboration Hub',
    icon: 'Github',
    description: 'Hosting repositories, documentation, open source exploration, and deployment workflows.',
    projects: ['Personal Repositories & Demos'],
    highlight: 'Repository Management, Markdown READMEs, Releases'
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 'Primary IDE',
    icon: 'Terminal',
    description: 'Productivity workflows with linting, debugging, Git extensions, and custom development setups.',
    projects: ['Daily Coding & Web Projects'],
    highlight: 'Integrated Terminal, Debugging, Extensions, Keybindings'
  }
];
