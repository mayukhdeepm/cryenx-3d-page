import {car_rent, portfolio,
  promptopia,
  snapgram,
  bussli} from '../../assets/index.js'


type ProjectsConfig = {
  description: string
  projects: {
    title: string
    description: string
    tags: string[]
    image: {
      src: string
      alt: string
    }
    url: string
  }[]
}

const projectsConfig: ProjectsConfig = {
  description:
    'Behold a showcase of my prowess in web development, a testament to my rich experience manifested in real-world examples. Each project is meticulously crafted, reflecting a harmonious blend of skill and creativity. Explore the intricacies of my work through the accompanying Code Repository links and immersive live demos, where every line of code breathes life into a digital masterpiece.',
  projects: [
    {
      title: 'Game Assets',
      description:
        'The creation of digital three-dimensional models and assets specifically designed for games and interactive media. This includes everything from props and weapons to vehicles and environmental elements, all optimized for real-time rendering engines. These assets must balance visual quality with technical constraints like polygon count and texture resolution to ensure smooth performance.',
      tags: ['react', 'appwrite', 'tailwindcss'],
      image: {
        src: snapgram,
        alt: 'snapgram app'
      },
      url: 'https://barisolgun-snapgram.netlify.app/'
    },
    {
      title: 'Character Design & Sculpting',
      description:
        'The art of creating and developing unique characters through digital sculpting tools like ZBrush or Blender. This process involves crafting detailed anatomical features, expressions, and personality traits in high-resolution digital clay. Artists focus on both aesthetic appeal and functional design, ensuring characters can be properly rigged and animated, Artists focus on both aesthetic appeal and functional design,',
      tags: ['react', 'next', 'mongodb'],
      image: {
        src: portfolio,
        alt: 'promptopia app'
      },
      url: 'https://barisolgun-promptopia.vercel.app/'
    },
    {
      title: 'Texturing',
      description:
        'The process of applying detailed surface properties to 3D models, including color, roughness, metallic properties, and surface imperfections. Artists use specialized software to create and apply various texture maps that define how surfaces interact with light and appear under different conditions. This includes techniques like UV unwrapping, PBR texturing, and hand-painted details.',
      tags: ['react', 'express', 'mongodb'],
      image: {
        src: portfolio,
        alt: 'car rent app'
      },
      url: 'https://barisolgun-car-rent.netlify.app/'
    },
    {
      title: 'Environment Design',
      description:
        'Creating immersive and believable digital spaces that tell stories and set moods. This encompasses landscape modeling, architectural elements, and atmospheric effects. Environment artists must consider factors like composition, lighting, and spatial flow while maintaining performance optimization for real-time rendering.',
      tags: ['react', 'next', 'tailwindcss'],
      image: {
        src: snapgram,
        alt: 'portfolio app'
      },
      url: 'https://barisolgun-portfolio2.vercel.app/'
    },
    {
      title: 'Visual Effects',
      description:
        'The creation of computer-generated imagery that enhances or creates impossible-to-film elements. This includes particle systems, fluid simulations, and dynamic effects like explosions or magic spells. VFX artists combine technical expertise with artistic vision to create believable and impactful visual elements.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: snapgram,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Computer-generated imagery',
      description:
        'The broad field of creating photorealistic digital imagery for films, commercials, and other media. This involves high-end rendering techniques, complex lighting setups, and sophisticated materials to achieve results that are indistinguishable from reality. CGI artists must master both technical tools and artistic principles.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: portfolio,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: '2D Design',
      description:
        'The creation of flat visual elements including user interfaces, illustrations, and graphic designs. This fundamental skill encompasses composition, color theory, typography, and visual hierarchy. 2D designers work across various mediums and styles, from minimalist interfaces to detailed illustrations.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: portfolio,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Animation',
      description:
        'The art of bringing characters and objects to life through movement. This includes keyframe animation, motion capture implementation, and procedural animation techniques. Animators must understand principles like timing, weight, and anticipation to create convincing and appealing movement.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: snapgram,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Generative AI Modelling',
      description:
        'An emerging field that uses artificial intelligence to assist in creating 3D models and assets. This technology can generate basic shapes, variations, or complete models based on text prompts or reference images. Artists combine AI capabilities with traditional modeling skills to accelerate their workflow.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: snapgram,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Generative AI Texturing',
      description:
        'The application of AI-powered tools to create and enhance textures for 3D models. This includes generating seamless patterns, material variations, and complex surface details from simple inputs. Artists use these tools to speed up the texturing process while maintaining creative control.',
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: portfolio,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Architecture Visualization',
      description:
        "The specialized field of creating photorealistic renders of architectural projects before they're built. This involves detailed modeling of buildings, interiors, and landscapes, along with sophisticated lighting and materials to convey the intended design vision. Artists must balance technical accuracy with artistic presentation.",
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: portfolio,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    },
    {
      title: 'Concept Art',
      description:
        "The creation of visual designs that establish the look and feel of projects before full production begins. Concept artists combine strong foundational art skills with imagination to visualize characters, environments, props, and key moments. Their work guides the visual development of films, games, and other media projects.",
      tags: ['next', 'tailwindcss', 'framer-motion'],
      image: {
        src: snapgram,
        alt: 'landing page'
      },
      url: 'https://barisolgun-bussli.netlify.app/'
    }
  ]
}

export { projectsConfig, type ProjectsConfig }
