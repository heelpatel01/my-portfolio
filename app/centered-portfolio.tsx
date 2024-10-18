import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  Code,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string;
  demoUrl: string;
  repoUrl: string;
  imageUrl: string;
  youtubeId?: string;
}

const projects: Project[] = [
  {
    title: "Crypto Compass",
    description:
      "A comprehensive trading platform for beginners with virtual money, live charts, and portfolio management.",
    techStack: "React.js, Node.js, MongoDB, CoinGecko API",
    demoUrl: "https://new-crypto-compass.vercel.app/",
    repoUrl: "https://github.com/yourusername/crypto-compass",
    imageUrl: "/placeholder.svg",
    youtubeId: "c6DFE5XKaIk",
  },
  {
    title: "DevTalkZ",
    description:
      "An open-source chat app for developers with custom channels, code sharing, and real-time collaboration.",
    techStack: "React.js, Node.js, Express, MongoDB, Socket.io, Prism.js",
    demoUrl: "https://slack-clone-one-ivory.vercel.app/",
    repoUrl: "https://github.com/yourusername/devtalkz",
    imageUrl: "/placeholder.svg",
    youtubeId: "v0Lq4VF8buw",
  },
  {
    title: "KisanSetu",
    description:
      "An online platform connecting farmers directly with consumers, featuring product listing and order management.",
    techStack: "React.js, Node.js, Express, MongoDB, Redux, Stripe API",
    demoUrl: "https://kisan-setu.vercel.app/",
    repoUrl: "https://github.com/yourusername/kisansetu",
    imageUrl: "https://kisan-setu.vercel.app/assets/KisanSetuLogo-RnTXQsmE.svg",
  },
  {
    title: "Site Buddy",
    description:
      "An AI-powered tool for website interaction, providing context-aware responses to user queries.",
    techStack: "TypeScript, Next.js, Tailwind CSS, OpenAI API, Upstash, Redis",
    demoUrl: "https://site-buddy-mauve.vercel.app/",
    repoUrl: "https://github.com/yourusername/site-buddy",
    imageUrl: "/placeholder.svg",
    youtubeId: "rVkStPfsg2I",
  },
  {
    title: "Full Stack Notes App",
    description:
      "A feature-rich notes app with CRUD functionality, real-time sync, and mind map visualization.",
    techStack: "MongoDB, React.js, Node.js, Express.js, GraphQL, JWT",
    demoUrl: "https://notes-app-nine-alpha.vercel.app/",
    repoUrl: "",
    imageUrl: "",
  },
];

export default function RefactoredPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Heel Patel</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Innovative Software Developer
          </p>
        </header>

        <GlassCard className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <User className="mr-2" /> About Me
          </h2>
          <p className="text-gray-300">
            Innovative Software Developer with a passion for creating
            cutting-edge software solutions. Adept at problem-solving and driven
            by the challenge of tackling complex issues, I thrive in building
            impactful and efficient software applications.
          </p>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2" /> Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <SkillCategory
                title="Languages"
                skills={["JavaScript", "TypeScript", "Python", "Java"]}
              />
              <SkillCategory title="Databases" skills={["MongoDB", "SQL"]} />
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2" /> Technologies
            </h2>
            <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-2">
              <li>React.js</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code2 className="mr-2" /> Featured Projects
          </h2>
          <ProjectsGrid projects={projects} />
        </GlassCard>

        <GlassCard className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Mail className="mr-2" /> Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a
                href="mailto:patelheel.dev@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>patelheel.dev@gmail.com</span>
              </a>
              <a
                href="tel:+919714411841"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
                <span>+91 9714411841</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>Gujarat, India</span>
              </div>
            </div>
            <div className="flex space-x-6 items-center justify-center md:justify-end">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href="https://leetcode.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Code2 size={32} />
              </a>
            </div>
          </div>
        </GlassCard>

        <footer className="text-center text-gray-400">
          <p>&copy; 2024 Heel Patel. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedProject(project)}
        >
          {project.youtubeId ? (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={`${project.title} demo video`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="relative w-full h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2 mb-2">
              {project.description}
            </p>
            <div className="text-xs text-gray-400 mb-2">
              <strong>Tech Stack:</strong> {project.techStack}
            </div>
            <div className="flex justify-between text-xs">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <ExternalLink size={12} className="mr-1" /> Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 flex items-center"
              >
                <Github size={12} className="mr-1" /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        {project.youtubeId ? (
          <div className="relative w-full pt-[56.25%] mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.title} demo video`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <p className="text-gray-300 mb-4">{project.description}</p>
        <p className="text-gray-400 mb-4">
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
        <div className="flex justify-between">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-400 hover:text-green-300"
          >
            <Github size={20} className="mr-2" />
            Source Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            <ExternalLink size={20} className="mr-2" />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
