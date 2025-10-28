// Image mapping and organization system
// This file centralizes all image imports and provides organized access

// Author Photos
export const authorPhotos = {
  main: "/src/assets/author-photos/dina-author-photo-alt.jpg",
  alternative: "/src/assets/author-photos/dina-author-photo-alt.jpg",
  classroom: "/src/assets/classroom-visit.jpg",
  additional: "/src/assets/author-photos/dina-author-photo-2.jpg"
};

// Book Covers
export const bookCovers = {
  billyBear: {
    main: "/src/assets/billy-bear.jpg",
    alternative: "/src/assets/book-covers/billy-bear-cover-alt.jpg",
    alternative2: "/src/assets/book-covers/billy-bear-cover-alt2.jpg"
  },
  sparkDragon: {
    main: "/src/assets/spark-dragon.jpg",
    alternative: "/src/assets/book-covers/spark-dragon-cover-alt.jpg"
  }
};

// Billy Bear Activities
export const billyBearActivities = {
  coloringSheets: [
    {
      name: "Billy Bear and Funny Bunny Colouring Sheet",
      path: "/src/assets/activities/billy-bear/billy-bear-funny-bunny-coloring.jpg",
      type: "coloring",
      ageGroup: "3-6",
      description: "Fun coloring activity featuring Billy Bear and his friend"
    },
    {
      name: "Billy Bear's Brown Hair Book Cover Colouring",
      path: "/src/assets/activities/billy-bear/billy-bear-book-cover-coloring.jpg",
      type: "coloring",
      ageGroup: "3-8",
      description: "Book cover coloring activity for creative expression"
    },
    {
      name: "Billy Bear's Brown Hair Colouring Sheet",
      path: "/src/assets/activities/billy-bear/billy-bear-coloring-sheet.jpg",
      type: "coloring",
      ageGroup: "3-8",
      description: "Main character coloring page"
    }
  ],
  specialActivities: [
    {
      name: "Billy Bear's Brown Hair Colouring Roll",
      path: "/src/assets/activities/billy-bear/billy-bear-coloring-roll.jpg",
      type: "coloring",
      ageGroup: "3-8",
      description: "Extended coloring activity roll"
    }
  ]
};

// Spark Dragon Activities
export const sparkDragonActivities = {
  coloringSheets: [
    {
      name: "Spark the Sparkly Dragon Colouring Sheet",
      path: "/src/assets/activities/spark-dragon/spark-dragon-coloring.jpg",
      type: "coloring",
      ageGroup: "3-8",
      description: "Main dragon character coloring page"
    }
  ],
  masks: [
    {
      name: "Spark Mask - Free Download",
      path: "/Spark's mask - colouring activity.jpg",
      type: "craft",
      ageGroup: "3-8",
      description: "Printable Spark the Dragon mask colouring activity"
    }
  ],
  connectTheDots: [
    {
      name: "Spark Dragon Connect the Dots - Advanced",
      path: "/src/assets/activities/spark-dragon/spark-dragon-connect-dots-advanced.jpg",
      type: "connect-dots",
      ageGroup: "6-10",
      description: "Advanced level connect the dots activity"
    },
    {
      name: "Spark Dragon Connect the Dots - Medium",
      path: "/src/assets/activities/spark-dragon/spark-dragon-connect-dots-medium.jpg",
      type: "connect-dots",
      ageGroup: "4-7",
      description: "Medium level connect the dots activity"
    }
  ],
  crafts: [
    {
      name: "Spark Dragon Finger Puppets",
      path: "/src/assets/activities/spark-dragon/spark-dragon-finger-puppets.jpg",
      type: "craft",
      ageGroup: "3-6",
      description: "Cut and glue finger puppet craft"
    }
  ],
  mazes: [
    {
      name: "Spark Dragon Maze - Medium",
      path: "/src/assets/activities/spark-dragon/spark-dragon-maze-medium.jpg",
      type: "maze",
      ageGroup: "4-7",
      description: "Medium difficulty maze activity"
    },
    {
      name: "Spark Dragon Maze - Beginner",
      path: "/src/assets/activities/spark-dragon/spark-dragon-maze-beginner.jpg",
      type: "maze",
      ageGroup: "3-5",
      description: "Beginner level maze activity"
    }
  ]
};

// Activity categories for filtering
export const activityCategories = {
  coloring: {
    name: "Coloring Pages",
    icon: "🎨",
    color: "primary"
  },
  "connect-dots": {
    name: "Connect the Dots",
    icon: "🔗",
    color: "accent"
  },
  craft: {
    name: "Crafts & Activities",
    icon: "✂️",
    color: "secondary"
  },
  maze: {
    name: "Mazes & Puzzles",
    icon: "🧩",
    color: "primary"
  }
};

// Get all activities as a flat array
export const getAllActivities = () => {
  return [
    ...billyBearActivities.coloringSheets,
    ...billyBearActivities.specialActivities,
    ...sparkDragonActivities.coloringSheets,
    ...((sparkDragonActivities as any).masks || []),
    ...sparkDragonActivities.connectTheDots,
    ...sparkDragonActivities.crafts,
    ...sparkDragonActivities.mazes
  ];
};

// Get activities by book
export const getActivitiesByBook = (book: 'billy-bear' | 'spark-dragon') => {
  if (book === 'billy-bear') {
    return [
      ...billyBearActivities.coloringSheets,
      ...billyBearActivities.specialActivities
    ];
  } else {
    return [
      ...sparkDragonActivities.coloringSheets,
      ...sparkDragonActivities.connectTheDots,
      ...sparkDragonActivities.crafts,
      ...sparkDragonActivities.mazes
    ];
  }
};

// Get activities by type
export const getActivitiesByType = (type: string) => {
  const allActivities = getAllActivities();
  return allActivities.filter(activity => activity.type === type);
};
