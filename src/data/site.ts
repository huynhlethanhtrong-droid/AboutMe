export type Locale = 'vi' | 'en';

export interface LocalizedText {
  vi: string;
  en: string;
}

export interface PersonalInfo {
  name: string;
  location: LocalizedText;
  email: string;
  instagram: string;
  linkedin: string;
  github: string;
  intro: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  year: string;
  image: string;
  description: LocalizedText;
  overview: LocalizedText;
  role: LocalizedText;
  tools: string[];
  gallery: string[];
}

export interface PhotoItem {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: LocalizedText;
}

export interface JournalEntry {
  slug: string;
  title: LocalizedText;
  date: string;
  category: LocalizedText;
  readTime: string;
  coverImage?: string;
  excerpt: LocalizedText;
  content: LocalizedText[];
}

export const personalInfo: PersonalInfo = {
  name: 'HUỲNH LÊ THANH TRỌNG',
  location: {
    vi: 'Dựa tại Việt Nam',
    en: 'Based in Vietnam'
  },
  email: 'trong@example.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  intro: {
    vi: 'Tôi là Trọng, một người sáng tạo sống ở Việt Nam. Tôi quan tâm đến mối quan hệ giữa công nghệ, kể chuyện hình ảnh, thiết kế và những khoảnh khắc nhỏ trong đời sống hằng ngày. Tôi thích hiểu cách mọi thứ vận hành, khám phá góc nhìn mới và tìm ra vẻ đẹp trong những chi tiết đơn giản.',
    en: "I'm Trọng, a creative mind based in Vietnam. My interests move between architectural visualization, photography, technology, and the quieter details of everyday life. I enjoy understanding how things work, exploring new perspectives, and finding beauty in simple moments."
  },
  tagline: {
    vi: 'Hình ảnh, nơi chốn, và góc nhìn.',
    en: 'Visuals, places, and perspectives.'
  },
  description: {
    vi: 'Tôi làm việc ở giao điểm giữa cảm hứng thẩm mỹ, kỹ thuật và trải nghiệm con người — nơi định hình bằng hình ảnh, không gian và những câu chuyện được kể bằng ánh sáng.',
    en: 'I work at the intersection of aesthetic sensitivity, technical thinking, and lived experience — building narratives through image, space, and atmosphere.'
  }
};

export const navLabels: Record<string, LocalizedText> = {
  home: { vi: 'Trang chủ', en: 'Home' },
  about: { vi: 'Về tôi', en: 'About' },
  work: { vi: 'Dự án', en: 'Work' },
  photography: { vi: 'Ảnh', en: 'Photography' },
  journal: { vi: 'Ghi chép', en: 'Journal' },
  contact: { vi: 'Liên hệ', en: 'Contact' },
  language: { vi: 'VI / EN', en: 'VI / EN' }
};

export const heroCopy = {
  title: {
    vi: 'HUỲNH LÊ\nTHANH TRỌNG',
    en: 'HUỲNH LÊ\nTHANH TRỌNG'
  },
  subtitle: {
    vi: 'Bộ sưu tập cá nhân về công việc, quan sát và mọi thứ ở giữa.',
    en: 'A personal collection of work, observations, and everything in between.'
  },
  location: {
    vi: 'Dựa tại Việt Nam',
    en: 'Based in Vietnam'
  }
};

export const aboutInterests = [
  { vi: 'Trực quan hóa kiến trúc', en: 'Architectural Visualization' },
  { vi: 'Nhiếp ảnh', en: 'Photography' },
  { vi: 'Nghệ thuật & Thiết kế', en: 'Art & Design' },
  { vi: 'Văn học', en: 'Literature' },
  { vi: 'Chạy bộ & Bơi lội', en: 'Running & Swimming' },
  { vi: 'Du lịch & Khám phá', en: 'Travel & Exploration' },
  { vi: 'Công nghệ', en: 'Technology' }
];

export const projects: Project[] = [
  {
    slug: 'light-and-structure',
    title: { vi: 'Ánh sáng và cấu trúc', en: 'Light and Structure' },
    category: { vi: 'Trực quan hóa kiến trúc', en: 'Architectural Visualization' },
    year: '2024',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
    description: {
      vi: 'Một chuỗi hình ảnh nghiên cứu về sự tương tác giữa khối hình, vật liệu và ánh sáng trong không gian sống.',
      en: 'A visual study on the relationship between mass, material, and light in spatial narrative.'
    },
    overview: {
      vi: 'Dự án này tìm cách vẽ lại cảm giác của một không gian trung thành với nhịp sống của người ở, thông qua ánh sáng tự nhiên, mảng tối và độ dày của vật liệu.',
      en: 'This project explores how a space can feel intimate and atmospheric by balancing daylight, shadow, and material weight.'
    },
    role: { vi: 'Thiết kế hình ảnh, hướng dẫn không gian, dựng hình', en: 'Visual design, spatial direction, image composition' },
    tools: ['3ds Max', 'V-Ray', 'Photoshop', 'After Effects'],
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'quiet-courtyard',
    title: { vi: 'Sân trong yên lặng', en: 'Quiet Courtyard' },
    category: { vi: 'Không gian', en: 'Spatial Storytelling' },
    year: '2023',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: {
      vi: 'Nghiên cứu về nhịp điệu của ánh sáng ban mai trong một không gian nội thất gắn với thiên nhiên.',
      en: 'A study of the rhythm of early daylight through a home space shaped by greenery and calm materiality.'
    },
    overview: {
      vi: 'Nơi chốn được xem như một môi trường lịch lãm, chậm rãi, nơi mọi chi tiết đều có thời gian để được nhìn thấy.',
      en: 'The atmosphere is intentionally slow and measured, letting architecture reveal itself through texture, shadow, and movement.'
    },
    role: { vi: 'Thiết kế không gian, hình ảnh quảng cáo, hình ảnh động', en: 'Spatial concept, presentation design, motion stills' },
    tools: ['C4D', 'Cinema 4D', 'Photoshop', 'Premiere Pro'],
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'measured-lines',
    title: { vi: 'Đường nét được đo', en: 'Measured Lines' },
    category: { vi: 'Thiết kế ý niệm', en: 'Concept Design' },
    year: '2022',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: {
      vi: 'Một dự án thử nghiệm không gian kiến trúc với mô hình hình khối và tuyến tính để dẫn dắt trải nghiệm.',
      en: 'An experimental architectural concept focused on linear rhythm, framing, and precisely layered perception.'
    },
    overview: {
      vi: 'Tên dự án đề cập đến việc tạo ra cảm giác điềm tĩnh thông qua sự chính xác của hình dạng và điệu nhạc của ánh sáng.',
      en: 'The work seeks a calm atmosphere created through precision, proportion, and the choreography of light.'
    },
    role: { vi: 'Khái niệm, hình ảnh mô hình, nghiên cứu ý tưởng', en: 'Concept development, model imagery, ideation' },
    tools: ['SketchUp', 'Rhino', 'Illustrator', 'InDesign'],
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const photographyItems: PhotoItem[] = [
  {
    id: 'photo-1',
    title: { vi: 'Sáng sớm', en: 'Early Morning' },
    category: { vi: 'Đường phố', en: 'Urban' },
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80',
    aspect: 'landscape',
    caption: { vi: 'Một quãng đường dài hơn nhiều so với dự định.', en: 'A walk that became longer than planned.' }
  },
  {
    id: 'photo-2',
    title: { vi: 'Dòng chảy', en: 'Flow' },
    category: { vi: 'Thiên nhiên', en: 'Landscape' },
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
    aspect: 'portrait',
    caption: { vi: 'Ánh nắng đi qua bãi cỏ và rồi biến mất.', en: 'Sunlight moving across a field, then gone.' }
  },
  {
    id: 'photo-3',
    title: { vi: 'Tự nhiên', en: 'Natural' },
    category: { vi: 'Đi du lịch', en: 'Travel' },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    aspect: 'landscape',
    caption: { vi: 'Một nhịp điệu thở vừa đủ chậm.', en: 'A rhythm that moves at a gentle pace.' }
  },
  {
    id: 'photo-4',
    title: { vi: 'Bức chân dung', en: 'Portrait' },
    category: { vi: 'Hàng ngày', en: 'Everyday' },
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=700&q=80',
    aspect: 'square',
    caption: { vi: 'Khung hình đúng ở khoảng cách vừa đủ.', en: 'The frame holds at the right distance.' }
  },
  {
    id: 'photo-5',
    title: { vi: 'Đêm ở bên hồ', en: 'By the Lake' },
    category: { vi: 'Phim ảnh', en: 'Film' },
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    aspect: 'landscape',
    caption: { vi: 'Thời tiết mềm và không vội.', en: 'The weather was soft and unhurried.' }
  },
  {
    id: 'photo-6',
    title: { vi: 'Đi qua ngõ', en: 'Passing Through' },
    category: { vi: 'Đường phố', en: 'Urban' },
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
    caption: { vi: 'Những mái ngói, những vệt nắng.', en: 'Roofs, light, and a little silence.' }
  }
];

export const journalEntries: JournalEntry[] = [
  {
    slug: 'observing-light',
    title: { vi: 'Quan sát ánh sáng', en: 'Observing Light' },
    date: '12/08/2024',
    category: { vi: 'Suy nghĩ', en: 'Thoughts' },
    readTime: '4 phút đọc',
    coverImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    excerpt: {
      vi: 'Một câu chuyện ngắn về cách ánh sáng thay đổi cách ta cảm nhận không gian khi ta đi chậm hơn.',
      en: 'A short note on how light changes our sense of space when we slow down enough to notice.'
    },
    content: [
      { vi: 'Có những điều nhỏ nhắn rất dễ bị bỏ qua trong một ngày bận rộn. Một đốm sáng nằm trên mặt bàn, một vệt mây trên tường, một khoảng im lặng trong đường đi về nhà. Những thứ ấy không cần phải được giải thích quá nhiều.', en: 'There are small things that disappear quickly in a busy day. A patch of light on a table, a cloud moving across a wall, a few seconds of quiet on the walk home. They do not need much explanation.' },
      { vi: 'Khi ta bắt đầu quan sát chậm hơn, không gian dường như mở ra với những lớp ý nghĩa mới. Ánh sáng không chỉ là vật chất; nó kể chuyện, định hướng cảm xúc, cho phép ta nhìn ra điều không thể nói thành lời.', en: 'When we begin to notice more slowly, space opens into new layers of meaning. Light is not merely illumination; it tells a story, shapes mood, and reveals what language cannot quite hold.' },
      { vi: 'Đó cũng là cách tôi nhìn vào công việc thiết kế và nhiếp ảnh: không phải tạo ra thứ gì đó to lớn, mà là để cho những chi tiết đúng chỗ được phát sáng.', en: 'That is also how I approach design and photography: not to make something grand, but to let the right details become visible.' }
    ]
  },
  {
    slug: 'travel-notes-hanoi',
    title: { vi: 'Ghi chép từ Hà Nội', en: 'Travel Notes from Hanoi' },
    date: '27/06/2024',
    category: { vi: 'Du lịch', en: 'Places' },
    readTime: '6 phút đọc',
    coverImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    excerpt: {
      vi: 'Những con phố, tiếng xe và những góc nhỏ của thành phố khiến ta chậm lại và nhìn lại nhau.',
      en: 'The streets, the sounds, and small corners of the city slow the day down and make attention feel more generous.'
    },
    content: [
      { vi: 'Hà Nội luôn khiến tôi cảm thấy vừa ở ngay tại nơi đó, vừa như đang ở trong một cuốn sách cũ. Mỗi con phố dường như có một nhịp độ riêng, một cách nói riêng.', en: 'Hanoi always feels like a place where time is both immediate and layered. Every street seems to carry its own rhythm and its own vocabulary.' },
      { vi: 'Đi giữa thành phố bằng đôi chân là cách tốt nhất để cảm nhận được mức độ sôi động và yên bình đan xen nhau. Cái mới không luôn ở trên bề mặt; đôi khi nó ẩn ở những góc nhỏ, ở tấm rèm cửa, ở sự sáng và tối trong một căn phòng.', en: 'Walking through the city is the clearest way to feel the overlap of energy and stillness. The newness is not always on the surface; sometimes it sits quietly in a corner, in a window shade, in the balance of shadow and light.' }
    ]
  },
  {
    slug: 'books-for-slow-days',
    title: { vi: 'Những cuốn sách cho những ngày chậm', en: 'Books for Slow Days' },
    date: '14/02/2024',
    category: { vi: 'Sách', en: 'Books' },
    readTime: '5 phút đọc',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    excerpt: {
      vi: 'Một danh sách ngắn của những cuốn sách mình giữ lại khi cần nhịp độ chậm hơn.',
      en: 'A short list of books that make space for a slower, quieter way of looking.'
    },
    content: [
      { vi: 'Đọc không chỉ là tiếp nhận thông tin; đó là cách để bớt vội vàng, cho mình thời gian để hiểu sâu hơn. Những cuốn sách có chiều dài vừa phải thường là những cuốn làm tôi sống chậm lại.', en: 'Reading is not only the consumption of ideas; it is a way to slow down and permit attention to deepen. The books that linger are usually the ones that make room for reflection.' },
      { vi: 'Tôi thích những tác phẩm giản dị nhưng đầy lớp, nơi mỗi câu văn đều như một bức ảnh tĩnh. Màu sắc không cần quá rực; đôi khi chỉ cần đủ rõ để giữ lại sự thật.', en: 'I favor works that are simple in structure but layered in feeling, where every sentence feels like a still image. Color need not be loud; sometimes clarity is enough.' }
    ]
  }
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' }
];

export const getLocaleFromSearch = (search?: string | null): Locale => {
  if (!search) return 'en';
  const params = new URLSearchParams(search);
  return params.get('lang') === 'vi' ? 'vi' : 'en';
};

export const withLang = (path: string, locale: Locale): string => {
  const [basePath, hash = ''] = path.split('#');
  const cleanPath = basePath || '/';
  const url = new URL(cleanPath, 'https://portfolio.local');
  url.searchParams.set('lang', locale);
  return `${url.pathname}${url.search}${hash ? `#${hash}` : ''}`;
};

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const getJournalBySlug = (slug: string) => journalEntries.find((entry) => entry.slug === slug);

export const getProjectIndex = (slug: string) => projects.findIndex((project) => project.slug === slug);
export const getEntryIndex = (slug: string) => journalEntries.findIndex((entry) => entry.slug === slug);
