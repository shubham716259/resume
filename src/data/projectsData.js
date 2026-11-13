export const projectsData = [
  {
    id: 'eco-recycler',
    title: 'Eco-Recycler',
    subtitle: 'Household Waste Pickup & Recycling Concept',
    category: 'Web App',
    featured: true,
    accentColor: '#10b981',
    description:
      'A web-based concept designed to bridge the gap between households and recycling facilities, encouraging systematic waste segregation and scheduled doorstep pickups.',
    problem:
      'Urban households frequently lack convenient channels to properly segregate and recycle dry waste, electronics, and plastics, resulting in recyclable materials ending up in local landfills.',
    solution:
      'Eco-Recycler provides an intuitive scheduling interface where residents choose waste categories, estimate recyclable volume, select pickup time slots, and view their cumulative carbon offset impact.',
    technologies: ['React', 'JavaScript', 'CSS3 / Glassmorphism', 'Web APIs', 'LocalStorage'],
    highlights: [
      'Interactive waste category selector (e-waste, paper, plastics, metals)',
      'Estimated environmental impact counter and reward points tracker',
      'Doorstep pickup schedule management with simulated status updates',
      'Responsive, mobile-friendly design with green-tech aesthetics'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/eco-recycler',
    liveUrl: 'https://eco-recycler-demo.vercel.app',
    isPlaceholderLink: true,
    stats: {
      type: 'Concept & Prototype',
      status: 'Active Iteration'
    }
  },
  {
    id: 'cookfusion',
    title: 'CookFusion',
    subtitle: 'Recipe Discovery & Culinary Meal Planner',
    category: 'Web App',
    featured: true,
    accentColor: '#a855f7',
    description:
      'A dynamic recipe discovery and meal planning web application focused on finding recipes by available ingredients, organizing culinary ideas, and providing step-by-step guidance.',
    problem:
      'Everyday cooks struggle with meal inspiration based on random ingredients currently sitting in their pantry, leading to food waste and repetitive meal choices.',
    solution:
      'CookFusion enables multi-ingredient matching, dietary tag filtering (vegetarian, gluten-free, high-protein), cooking time sort, and structured recipe cards with ingredient checklists.',
    technologies: ['React', 'JavaScript', 'REST API Integration', 'CSS Grid/Flexbox', 'Responsive Design'],
    highlights: [
      'Multi-ingredient query search filter with immediate visual feedback',
      'Interactive recipe modal with step-by-step cooking progress checkboxes',
      'Dietary restriction filters and calorie/prep-time tags',
      'Local storage persistence for favorite bookmarks and custom notes'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/cookfusion',
    liveUrl: 'https://cookfusion-demo.vercel.app',
    isPlaceholderLink: true,
    stats: {
      type: 'Full Frontend App',
      status: 'Deployed'
    }
  },
  {
    id: 'weather-application',
    title: 'Weather Horizon',
    subtitle: 'Real-time Meteorological Intelligence UI',
    category: 'Web App',
    featured: true,
    accentColor: '#00f0ff',
    description:
      'A clean, responsive weather interface demonstrating real-time API data fetching, geolocation lookup, and dynamic visual atmospheric themes.',
    problem:
      'Many standard weather interfaces are either cluttered with intrusive ads or fail to provide immediate, actionable atmospheric metrics in a responsive view.',
    solution:
      'Weather Horizon provides city search, geolocation auto-detect, 5-day forecast charts, wind & humidity gauges, and UI backgrounds that smoothly adapt to current weather conditions.',
    technologies: ['JavaScript (ES6+)', 'OpenWeatherMap API', 'HTML5', 'CSS3 Animations', 'Geolocation API'],
    highlights: [
      'Live weather queries with dynamic background gradient transitions',
      'Metrics for humidity, atmospheric pressure, wind velocity, and UV index',
      '5-day meteorological forecast cards with hourly trend graph',
      'Imperial / Metric temperature unit toggle with saved preference'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/weather-app',
    liveUrl: 'https://weather-horizon-app.vercel.app',
    isPlaceholderLink: true,
    stats: {
      type: 'API Integration',
      status: 'Completed'
    }
  },
  {
    id: 'java-swing-system',
    title: 'Smart Record Manager',
    subtitle: 'Java Desktop Record & Inventory System',
    category: 'Java Desktop',
    featured: true,
    accentColor: '#38bdf8',
    description:
      'A desktop software built using Java Swing and Object-Oriented principles for managing structured records, inventory tracking, and persistent file/data storage.',
    problem:
      'Small departmental labs and offices require reliable offline desktop software to handle record entry, search, and update without recurring SaaS subscriptions or web latency.',
    solution:
      'Smart Record Manager offers a clean desktop interface with table models, quick search filtering, strict input validation dialogs, and reliable persistence.',
    technologies: ['Java', 'Java Swing / AWT', 'OOP Architecture', 'File I/O & Serialization', 'Event Dispatch Thread'],
    highlights: [
      'Custom Swing JTable components with column sorting and search filter',
      'Strict input validation preventing duplicate IDs and corrupted data types',
      'Structured modular architecture following Object-Oriented best practices',
      'CSV export and automated state backup to local filesystem'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/java-record-manager',
    liveUrl: null,
    isPlaceholderLink: true,
    stats: {
      type: 'Desktop Application',
      status: 'Functional'
    }
  },
  {
    id: 'sql-analytics-exploration',
    title: 'E-Commerce & Media SQL Analytics',
    subtitle: 'Relational Database Queries & Insights',
    category: 'Data & SQL',
    featured: false,
    accentColor: '#ec4899',
    description:
      'A collection of relational database projects exploring multi-table e-commerce transactions and streaming platform media catalogs using advanced SQL queries.',
    problem:
      'Raw transactional logs and sprawling catalog databases provide no business value until queried, aggregated, and transformed into actionable operational metrics.',
    solution:
      'Authored parameterized queries, window functions, and multi-table joins to analyze customer purchasing cohorts, revenue trends, top-grossing categories, and user retention.',
    technologies: ['MySQL', 'SQL DDL / DML', 'Window Functions', 'Joins & Subqueries', 'Indexing & Optimization'],
    highlights: [
      'Cohort analysis and customer lifetime value (LTV) calculation queries',
      'Streaming media catalog exploration with genre popularity rankings',
      'Normalized schema design (3NF) ensuring relational data integrity',
      'Query execution plan analysis with index tuning for reduced latency'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/sql-data-analytics',
    liveUrl: null,
    isPlaceholderLink: true,
    stats: {
      type: 'Database Analytics',
      status: 'Documented'
    }
  },
  {
    id: 'developer-utilities',
    title: 'DevUtilities Suite',
    subtitle: 'Task Matrix & Precision Mathematical Calculator',
    category: 'Utilities',
    featured: false,
    accentColor: '#eab308',
    description:
      'A lightweight web utility suite featuring a priority-based task board with local persistence and a scientific mathematical calculator with history evaluation.',
    problem:
      'Developers and students benefit from focused, distraction-free utilities that load instantly and work offline without tracking.',
    solution:
      'Built a fast utility suite featuring keyboard shortcuts, status categorization, undo/clear history, and responsive glassmorphic interfaces.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Keyboard Event Bindings'],
    highlights: [
      'Priority categorization (High, Medium, Low) with completed archive',
      'Full mathematical expression evaluator with keyboard input support',
      'State synchronization using browser LocalStorage for offline persistence',
      'Clean minimalist interface with fluid micro-interactions'
    ],
    githubUrl: 'https://github.com/shubhamthakur-dev/developer-utilities',
    liveUrl: 'https://dev-utilities-suite.vercel.app',
    isPlaceholderLink: true,
    stats: {
      type: 'Utility Tools',
      status: 'Completed'
    }
  }
];
