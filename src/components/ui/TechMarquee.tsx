export default function TechMarquee() {
  const stack = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Redux Toolkit',
    'TailwindCSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'Vite',
    'VScode',
    'Figma',
  ];

  return (
    <div className="overflow-hidden border-y border-gray-200 dark:border-gray-700 py-6">
      <div className="flex whitespace-nowrap animate-marquee gap-16 text-lg font-medium text-gray-500">
        {[...stack, ...stack].map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
