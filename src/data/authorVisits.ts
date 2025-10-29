export interface AuthorVisit {
  id: string;
  title: string;
  type: 'book-fair' | 'school-visit' | 'nursery-visit' | 'library-event' | 'media' | 'festival' | 'bookstore' | 'conference';
  date: string;
  location: string;
  description: string;
  highlights: string[];
  impact: string;
  images?: string[];
  testimonials?: {
    quote: string;
    author: string;
    role: string;
  }[];
  keyMoments: string[];
  audience: string;
  duration: string;
  featured: boolean;
}

export const authorVisits: AuthorVisit[] = [
  {
    id: 'abu-dhabi-book-fair-2024',
    title: 'Abu Dhabi Book Fair 2024',
    type: 'book-fair',
    date: 'April 2024',
    location: 'Abu Dhabi National Exhibition Centre',
    description: 'Participated in the prestigious Abu Dhabi Book Fair, one of the largest literary events in the Middle East, showcasing children\'s literature and engaging with families from across the UAE.',
    highlights: [
      'International book fair participation',
      'Multi-cultural audience engagement',
      'Arabic and English storytelling sessions',
      'Book signing sessions',
      'Media interviews and press coverage'
    ],
    impact: 'Reached over 500 families during the fair, promoting literacy and cultural exchange through storytelling.',
    keyMoments: [
      'Interactive storytelling sessions in both languages',
      'Book signing events with personalized messages',
      'Cultural exchange with international visitors',
      'Press interviews highlighting children\'s literacy'
    ],
    audience: 'Families, educators, and international visitors',
    duration: '5 days',
    featured: true
  },
  {
    id: 'al-shohub-private-school',
    title: 'Al Shohub Private School Visit',
    type: 'school-visit',
    date: 'March 2024',
    location: 'Abu Dhabi',
    description: 'Comprehensive author visit to Al Shohub Private School, delivering interactive storytelling sessions and creative writing workshops to inspire young readers and writers.',
    highlights: [
      'Whole school assembly presentation',
      'Grade-specific classroom workshops',
      'Creative writing masterclass',
      'Teacher professional development session',
      'Book signing and photo opportunities'
    ],
    impact: 'Inspired 300+ students across multiple grade levels, with teachers reporting increased enthusiasm for reading and writing.',
    keyMoments: [
      'Interactive assembly with character voices',
      'Hands-on creative writing exercises',
      'Student Q&A session about the writing process',
      'Teacher collaboration on literacy strategies'
    ],
    audience: 'Students (Grades 1-6), teachers, and parents',
    duration: 'Full day',
    featured: true
  },
  {
    id: 'asya-nursery-storytelling',
    title: 'Asya\'s Nursery Storytelling Session',
    type: 'nursery-visit',
    date: 'February 2024',
    location: 'Dubai',
    description: 'Special storytelling session designed for early years children at Asya\'s Nursery, focusing on interactive engagement and developing pre-literacy skills.',
    highlights: [
      'Age-appropriate interactive storytelling',
      'Sensory play integration',
      'Character puppet shows',
      'Parent-child bonding activities',
      'Early literacy skill development'
    ],
    impact: 'Enhanced pre-literacy skills for 50+ children aged 2-4, with parents reporting increased interest in books at home.',
    keyMoments: [
      'Interactive puppet character performances',
      'Sensory storytelling with props',
      'Parent-child reading activities',
      'Nursery staff training on storytelling techniques'
    ],
    audience: 'Children (ages 2-4), parents, and nursery staff',
    duration: '2 hours',
    featured: false
  },
  {
    id: 'beautiful-horizons-early-learning',
    title: 'Beautiful Horizons Early Learning Center',
    type: 'nursery-visit',
    date: 'January 2024',
    location: 'Sharjah',
    description: 'Educational visit to Beautiful Horizons Early Learning Center, delivering specialized early childhood literacy programs and teacher training workshops.',
    highlights: [
      'Early childhood literacy focus',
      'Teacher professional development',
      'Parent education sessions',
      'Multi-sensory learning activities',
      'Curriculum integration support'
    ],
    impact: 'Trained 20+ early childhood educators and reached 100+ children, improving literacy outcomes in the center.',
    keyMoments: [
      'Teacher workshop on storytelling techniques',
      'Multi-sensory story sessions',
      'Parent education on home literacy',
      'Curriculum planning collaboration'
    ],
    audience: 'Children (ages 3-5), teachers, and parents',
    duration: 'Half day',
    featured: false
  },
  {
    id: 'fujairah-childrens-book-fair',
    title: 'Fujairah Children\'s Book Fair',
    type: 'book-fair',
    date: 'December 2023',
    location: 'Fujairah',
    description: 'Featured author at the Fujairah Children\'s Book Fair, promoting children\'s literacy and engaging with families from the Northern Emirates.',
    highlights: [
      'Regional book fair participation',
      'Community engagement focus',
      'Bilingual storytelling sessions',
      'Local school partnerships',
      'Cultural storytelling exchange'
    ],
    impact: 'Connected with 200+ families from the Northern Emirates, promoting regional literacy initiatives.',
    keyMoments: [
      'Community storytelling sessions',
      'Local school collaboration',
      'Cultural story sharing',
      'Regional literacy promotion'
    ],
    audience: 'Families, educators, and community members',
    duration: '3 days',
    featured: true
  },
  {
    id: 'gems-fps-visit',
    title: 'GEMS FPS Author Visit',
    type: 'school-visit',
    date: 'November 2023',
    location: 'Dubai',
    description: 'Comprehensive author visit to GEMS FirstPoint School, delivering engaging presentations and workshops to inspire students across multiple grade levels.',
    highlights: [
      'Multi-grade presentations',
      'Creative writing workshops',
      'Library collaboration',
      'Student mentorship program',
      'Teacher resource development'
    ],
    impact: 'Inspired 400+ students and provided teachers with new literacy resources and strategies.',
    keyMoments: [
      'Grade-specific presentations',
      'Creative writing masterclasses',
      'Library storytelling sessions',
      'Student mentorship opportunities'
    ],
    audience: 'Students (Grades 1-8), teachers, and librarians',
    duration: 'Full day',
    featured: true
  },
  {
    id: 'impactful-strategies-exchange',
    title: 'Impactful Strategies Exchange Conference',
    type: 'conference',
    date: 'October 2023',
    location: 'Dubai',
    description: 'Presented at the Impactful Strategies Exchange Conference, sharing expertise on children\'s literacy development and educational storytelling techniques.',
    highlights: [
      'Professional conference presentation',
      'Educational strategy sharing',
      'Networking with educators',
      'Research-based insights',
      'Best practices workshop'
    ],
    impact: 'Influenced 100+ educators and administrators with evidence-based literacy strategies.',
    keyMoments: [
      'Keynote presentation on literacy',
      'Interactive workshop sessions',
      'Educator networking',
      'Strategy implementation planning'
    ],
    audience: 'Educators, administrators, and literacy specialists',
    duration: '2 days',
    featured: true
  },
  {
    id: 'kuwait-international-book-fair',
    title: 'Kuwait International Book Fair',
    type: 'book-fair',
    date: 'November 2023',
    location: 'Kuwait City',
    description: 'International participation at the Kuwait International Book Fair, representing UAE children\'s literature and promoting cross-cultural literacy exchange.',
    highlights: [
      'International book fair participation',
      'Cross-cultural storytelling',
      'Arabic literature promotion',
      'International networking',
      'Cultural exchange programs'
    ],
    impact: 'Represented UAE children\'s literature internationally, reaching 1000+ visitors from across the Gulf region.',
    keyMoments: [
      'International storytelling sessions',
      'Cultural exchange activities',
      'Arabic literature promotion',
      'Regional networking opportunities'
    ],
    audience: 'International visitors, educators, and families',
    duration: '5 days',
    featured: true
  },
  {
    id: 'magrudys-visit',
    title: 'Magrudy\'s Bookstore Event',
    type: 'bookstore',
    date: 'September 2023',
    location: 'Dubai',
    description: 'Special author event at Magrudy\'s flagship bookstore, featuring book readings, signings, and interactive storytelling sessions for families.',
    highlights: [
      'Bookstore partnership event',
      'Family-friendly activities',
      'Book signing sessions',
      'Interactive storytelling',
      'Community engagement'
    ],
    impact: 'Connected with 150+ families in the community, promoting local bookstore partnerships and family literacy.',
    keyMoments: [
      'Interactive book readings',
      'Family storytelling sessions',
      'Book signing events',
      'Community literacy promotion'
    ],
    audience: 'Families, book lovers, and community members',
    duration: '3 hours',
    featured: false
  },
  {
    id: 'maple-bear-visit',
    title: 'Maple Bear Visit',
    type: 'school-visit',
    date: 'August 2023',
    location: 'Dubai',
    description: 'Educational visit to Maple Bear school, delivering specialized storytelling sessions and creative writing workshops tailored to their curriculum.',
    highlights: [
      'Curriculum-integrated sessions',
      'Creative writing workshops',
      'Teacher collaboration',
      'Student mentorship',
      'Educational resource development'
    ],
    impact: 'Enhanced literacy curriculum delivery for 200+ students and provided teachers with new educational resources.',
    keyMoments: [
      'Curriculum-aligned storytelling',
      'Creative writing workshops',
      'Teacher training sessions',
      'Student mentorship programs'
    ],
    audience: 'Students, teachers, and administrators',
    duration: 'Full day',
    featured: false
  },
  {
    id: 'media-interviews',
    title: 'Media Interviews & Press Coverage',
    type: 'media',
    date: 'Ongoing',
    location: 'Various UAE locations',
    description: 'Regular media appearances and interviews promoting children\'s literacy, author visits, and educational initiatives across UAE media outlets.',
    highlights: [
      'Television interviews',
      'Radio appearances',
      'Newspaper features',
      'Podcast collaborations',
      'Social media campaigns'
    ],
    impact: 'Reached thousands of families through media coverage, promoting literacy awareness and author visit programs.',
    keyMoments: [
      'Live TV interviews',
      'Radio talk show appearances',
      'Newspaper feature articles',
      'Podcast collaborations'
    ],
    audience: 'General public, families, and educators',
    duration: 'Ongoing',
    featured: true
  },
  {
    id: 'national-festival-tolerance',
    title: 'National Festival for Tolerance & Coexistence',
    type: 'festival',
    date: 'November 2023',
    location: 'Dubai',
    description: 'Participated in the National Festival for Tolerance & Coexistence, using storytelling to promote values of tolerance, diversity, and cultural understanding.',
    highlights: [
      'Values-based storytelling',
      'Cultural diversity promotion',
      'Community engagement',
      'Tolerance education',
      'Cultural exchange'
    ],
    impact: 'Promoted tolerance and cultural understanding among 300+ participants through storytelling and cultural exchange.',
    keyMoments: [
      'Values-based story sessions',
      'Cultural diversity workshops',
      'Community engagement activities',
      'Tolerance education programs'
    ],
    audience: 'Families, community members, and cultural organizations',
    duration: '2 days',
    featured: true
  },
  {
    id: 'riyadh-international-book-fair',
    title: 'Riyadh International Book Fair',
    type: 'book-fair',
    date: 'September 2023',
    location: 'Riyadh, Saudi Arabia',
    description: 'International participation at the Riyadh International Book Fair, representing UAE children\'s literature and promoting regional literacy collaboration.',
    highlights: [
      'International book fair participation',
      'Regional collaboration',
      'Arabic literature promotion',
      'Cultural exchange',
      'Professional networking'
    ],
    impact: 'Represented UAE children\'s literature regionally, reaching 800+ visitors and establishing regional partnerships.',
    keyMoments: [
      'Regional storytelling sessions',
      'Cultural exchange activities',
      'Arabic literature promotion',
      'Regional networking'
    ],
    audience: 'International visitors, educators, and families',
    duration: '5 days',
    featured: true
  },
  {
    id: 'scholars-international-academy',
    title: 'Scholars International Academy',
    type: 'school-visit',
    date: 'May 2023',
    location: 'Dubai',
    description: 'Comprehensive author visit to Scholars International Academy, delivering engaging presentations and workshops to inspire students and support teachers.',
    highlights: [
      'Multi-grade presentations',
      'Teacher professional development',
      'Creative writing workshops',
      'Library collaboration',
      'Student mentorship'
    ],
    impact: 'Inspired 350+ students and provided teachers with new literacy strategies and resources.',
    keyMoments: [
      'Grade-specific presentations',
      'Teacher training workshops',
      'Creative writing sessions',
      'Library storytelling programs'
    ],
    audience: 'Students (Grades 1-6), teachers, and librarians',
    duration: 'Full day',
    featured: false
  },
  {
    id: 'sharjah-book-fair-2023',
    title: 'Sharjah Book Fair 2023',
    type: 'book-fair',
    date: 'November 2023',
    location: 'Sharjah',
    description: 'Featured participation at the prestigious Sharjah Book Fair, one of the largest literary events in the Arab world, promoting children\'s literacy and cultural exchange.',
    highlights: [
      'Major book fair participation',
      'International audience engagement',
      'Bilingual storytelling sessions',
      'Cultural exchange programs',
      'Media coverage and interviews'
    ],
    impact: 'Reached 2000+ visitors during the fair, promoting children\'s literacy and UAE cultural heritage.',
    keyMoments: [
      'International storytelling sessions',
      'Cultural exchange activities',
      'Media interviews and coverage',
      'Book signing events'
    ],
    audience: 'International visitors, families, and educators',
    duration: '10 days',
    featured: true,
    images: [
      '/src/assets/author-visits/2003d5cb-f336-4021-a165-b0dbce4d88ca.jpg',
      '/src/assets/author-visits/IMG_3623.jpg',
      '/src/assets/author-visits/IMG_3632.jpg',
      '/src/assets/author-visits/Sharjah book fair 2023-book signing.png'
    ]
  },
  {
    id: 'sharjah-international-book-fair',
    title: 'Sharjah International Book Fair',
    type: 'book-fair',
    date: 'October 2023',
    location: 'Sharjah',
    description: 'International participation at the Sharjah International Book Fair, showcasing children\'s literature and engaging with a diverse international audience.',
    highlights: [
      'International book fair participation',
      'Multi-cultural audience engagement',
      'Bilingual storytelling sessions',
      'Cultural exchange programs',
      'Professional networking'
    ],
    impact: 'Connected with 1500+ international visitors, promoting UAE children\'s literature globally.',
    keyMoments: [
      'International storytelling sessions',
      'Cultural exchange activities',
      'Professional networking',
      'Global literature promotion'
    ],
    audience: 'International visitors, educators, and families',
    duration: '7 days',
    featured: true
  },
  {
    id: 'the-old-library-dubai',
    title: 'The Old Library Dubai',
    type: 'library-event',
    date: 'July 2023',
    location: 'Dubai',
    description: 'Special storytelling event at The Old Library Dubai, combining traditional storytelling with modern educational techniques in a historic setting.',
    highlights: [
      'Historic venue storytelling',
      'Traditional story preservation',
      'Community engagement',
      'Cultural heritage promotion',
      'Educational workshops'
    ],
    impact: 'Preserved traditional storytelling in a historic setting, reaching 100+ community members.',
    keyMoments: [
      'Traditional storytelling sessions',
      'Cultural heritage workshops',
      'Community engagement activities',
      'Historic venue collaboration'
    ],
    audience: 'Community members, families, and cultural enthusiasts',
    duration: '3 hours',
    featured: false
  },
  {
    id: 'the-reading-box',
    title: 'The Reading Box',
    type: 'library-event',
    date: 'June 2023',
    location: 'Dubai',
    description: 'Educational partnership with The Reading Box, delivering specialized literacy programs and community reading initiatives.',
    highlights: [
      'Community literacy programs',
      'Reading initiative support',
      'Family engagement activities',
      'Educational workshops',
      'Community partnership'
    ],
    impact: 'Supported community literacy initiatives, reaching 200+ families and promoting reading culture.',
    keyMoments: [
      'Community reading programs',
      'Family engagement activities',
      'Educational workshops',
      'Literacy initiative support'
    ],
    audience: 'Families, community members, and literacy advocates',
    duration: '4 hours',
    featured: false
  },
  {
    id: 'universal-childrens-day-wisdom',
    title: 'Universal Children\'s Day at Wisdom',
    type: 'festival',
    date: 'November 2023',
    location: 'Dubai',
    description: 'Special celebration for Universal Children\'s Day at Wisdom school, promoting children\'s rights and literacy through engaging storytelling activities.',
    highlights: [
      'Children\'s rights education',
      'Literacy celebration',
      'Community engagement',
      'Educational activities',
      'Cultural celebration'
    ],
    impact: 'Celebrated children\'s rights and literacy with 250+ participants, promoting awareness and engagement.',
    keyMoments: [
      'Children\'s rights storytelling',
      'Literacy celebration activities',
      'Community engagement programs',
      'Cultural celebration events'
    ],
    audience: 'Children, families, and community members',
    duration: 'Half day',
    featured: false
  },
  {
    id: 'book-signing-sharjah-international',
    title: 'Book Signing at Sharjah International Book Fair',
    type: 'book-fair',
    date: 'November 2023',
    location: 'Sharjah',
    description: 'Dedicated book signing sessions at the Sharjah International Book Fair, providing personalized experiences for readers and promoting children\'s literature.',
    highlights: [
      'Personalized book signings',
      'Reader engagement',
      'Literature promotion',
      'Cultural exchange',
      'Community building'
    ],
    impact: 'Connected personally with 500+ readers, creating lasting memories and promoting children\'s literature.',
    keyMoments: [
      'Personalized book signing sessions',
      'Reader interaction and engagement',
      'Literature promotion activities',
      'Community building events'
    ],
    audience: 'Readers, families, and book enthusiasts',
    duration: 'Multiple sessions over 3 days',
    featured: true,
    images: [
      '/src/assets/author-visits/2003d5cb-f336-4021-a165-b0dbce4d88ca.jpg',
      '/src/assets/author-visits/IMG_3623.jpg',
      '/src/assets/author-visits/IMG_3632.jpg'
    ]
  }
];
