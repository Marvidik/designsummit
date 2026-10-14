export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  bio: string[];
  isKeynote?: boolean;
}

export const speakers: Speaker[] = [
  {
    id: 'idika-victor-chinemerem',
    name: 'Idika Victor Chinemerem',
    title: 'Main Sponsor · 1st Keynote Speaker',
    company: 'CEO, Vizid',
    photo: '/speak (3).jpeg',
    isKeynote: true,
    bio: [
      'Idika Victor is a professional interior designer, educator, and entrepreneur. He is the founder of Vizid Decors Ltd., a design firm specializing in high-end modern and luxury spatial design.',
      'Beyond his commercial practice, he serves as the Lead Instructor for the Vizid Design Academy, an educational institution dedicated to training the next generation of spatial designers.',
      'Victor holds a background in Food Science and Technology. This scientific training deeply informs his structured approach to design physics, material properties, and spatial optimization.',
      'He is the Convener of "Self Discovery with Idika Victor" and co-author of A Marriage on a Mission, written alongside his wife, Princess Adanna. Victor seamlessly integrates his professional pursuits with his commitment to family and community impact.'
    ]
  },
  {
    id: 'arc-divine-umoh',
    name: 'Arc. Divine Umoh',
    title: 'Chief Architect · The Business of Design',
    company: 'General Manager, D24 Consults',
    photo: '/ns2.jpg',
    isKeynote: true,
    bio: [
      'Divine Umoh is a Nigerian architect, entrepreneur and creative professional committed to excellence, innovation and purposeful leadership. He is the Chief Architect and General Manager of D24 Consults, a multidisciplinary firm specialising in architectural design, construction supervision, renovation, interior design and creative services.',
      'He holds a BSc and MSc in Architecture, alongside diplomas in Interior Design and Site Management, and is currently pursuing a PhD in Architecture.',
      'With almost a decade of professional experience, he has contributed to numerous architectural design and construction projects across Nigeria and internationally, including projects in Liberia, Ghana, the United Kingdom and South Africa. His notable project experience includes the renovation of the Ibom Plaza Roundabout in Uyo, Akwa Ibom State.',
      'Beyond architecture, his entrepreneurial interests extend to art, printing, branding and customised products, reflecting his versatility and commitment to innovative solutions.',
      'His professional journey is anchored in faith in God, whose grace he acknowledges as the foundation of his progress and achievements.',
      'Session Track: Sustainability and Relevance in the Built Environment | Topic: The Business of Design: Turning Your Creative Gift Into a Profitable Brand.'
    ]
  },
  {
    id: 'kate-inwang',
    name: 'Kate Inwang',
    title: 'Interior & Fashion Designer · Creative Entrepreneur',
    company: 'Founder, Aurelia Interiors',
    photo: '/ns1.jpg',
    isKeynote: false,
    bio: [
      'Kate Inwang is an interior designer and creative entrepreneur passionate about creating spaces that harmonize aesthetics, functionality, and human experience. Having received professional training and gained practical project experience at Design by C. Williams, she has developed a deep appreciation for intentional design, spatial planning, color coordination, and the thoughtful use of materials to create meaningful environments.',
      'Her creative perspective is rooted in the belief that exceptional design goes beyond visual appeal to reflect identity, enhance functionality, and shape how people experience a space. Her interests extend to fashion design, allowing her to explore creative expression across disciplines.',
      'Design Philosophy: "Beyond aesthetics, towards meaning."',
      'Founder, Aurelia Interiors. Notable Projects: Ali’s Residence, Glover Pearl Apartment, and Bourdillon Residence.'
    ]
  },
  {
    id: 'asian-dickson',
    name: 'Asian Dickson',
    title: 'Speaker · Event Architecture',
    company: 'Branch Manager, Vizid (Uyo) | Event Manager, AKDS',
    photo: '/speak (1).jpeg',
    isKeynote: true,
    bio: [
      'Asian Dickson serves as the Branch Manager for Vizid Uyo and the Event Manager for the Akwa Ibom Design Summit 2026.',
      'A seasoned strategist specializing in community growth and large-scale event operations, Asian has managed and executed dozens of high-impact activations across West Africa. At Vizid, he spearheads local market expansion and operational excellence, while leading the summit\'s core planning to unite top-tier designers, architects, and innovators.',
      'Asian focuses on delivering immersive, community-first experiences that redefine the creative economy in Akwa Ibom and beyond.',
      'Focus: Creative Operations, Ecosystem Growth, Event Architecture'
    ]
  },
  {
    id: 'elisha-nyong',
    name: 'Elisha Nyong',
    title: 'Speaker · Psychology of Arts',
    company: 'Contemporary Realist and Figurative Painter',
    photo: '/speak (4).jpeg',
    bio: [
      'Elisha Nyong is a Nigerian painter whose artistic journey began in childhood through drawing and portrait studies. Born in Lagos but from Akwa Ibom State, he earned a B.A. (Hons.) in Painting from the University of Uyo in 2017.',
      'His talent gained early recognition after winning the jury prize in the international "Art for Guns" competition in 2010 at the age of 14.',
      'His undergraduate years shaped his early visual language — one rooted in symbolism, allegory, and dream-like imagery, drawing on influences from Botticelli and the Old Masters alongside Surrealist thinkers like Breton and Dalí.',
      'Over time, this evolved into his current practice: a sustained visual discourse with Dutch Golden Age vanitas painting, reimagined through contemporary Black figuration.',
      'Over the years, mentorship, formal training, and study of both Nigerian and international masters have contributed to the evolution of his practice. Working primarily in oil, Elisha combines tenebrist realism with symbolic elements such as flowers, birds, butterflies, aquatic life, and sigils, creating richly layered figurative compositions.',
      'Elisha Nyong has participated in a number of exhibitions within Nigeria and internationally and his paintings are in public and private collections locally and internationally.'
    ]
  },
  {
    id: 'benneth-onyemachi-ugochukwu',
    name: 'Benneth Onyemachi Ugochukwu',
    title: 'Speaker · Graphics Design Essentials',
    company: 'Graphics & Brand Designer | Tech Career Mentor',
    photo: '/speak (2).jpeg',
    bio: [
      'Benneth Onyemachi Ugochukwu, popularly known as Benjoe, is a seasoned Graphic and Brand Identity Designer with nearly a decade of experience crafting high-impact visual systems for global brands.',
      'He specializes in strategic brand positioning, helping companies clarify their visual identity and resonate with their target audiences.',
      'Over the course of his career, Benjoe has partnered with more than 100 brands across Africa, Europe, North America, and the UK. His multi-disciplinary portfolio spans diverse sectors, including Fintech, Web3, Food & Agriculture, Education, Fashion, Lifestyle, and Advertising & Marketing.',
      'Beyond design, Benjoe is a dedicated capacity builder in the technology ecosystem. He actively mentors aspiring professionals and tech enthusiasts, equipping them with actionable guidance to navigate and accelerate their career paths in tech.'
    ]
  },
  {
    id: 'thankgod-bosseman',
    name: 'ThankGod Bosseman',
    title: 'Speaker · Personal Branding & AI',
    company: 'AI Engineer, Innovative Finance Initiative (IFI)',
    photo: '/speak (5).jpeg',
    bio: [
      'Meet ThankGod Bosseman, an AI Engineer, technology leader, and entrepreneur known professionally as Bosseman. He works across artificial intelligence, software, data, and digital products, helping organizations and emerging founders use technology to build better businesses.',
      'Through his work and growing personal brand, Bosseman has become passionate about helping young professionals understand how to position their expertise, tell their stories, and create meaningful opportunities through personal branding.'
    ]
  }
];
