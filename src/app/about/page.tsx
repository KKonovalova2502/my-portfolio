import TechMarquee from '@/components/ui/TechMarquee';

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-10">About Me</h1>

        {/* Text */}
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            My journey into development started with curiosity about how web
            applications work behind the scenes. Over time, that curiosity grew
            into a desire to build complete products — from user interfaces to
            server-side logic.
          </p>

          <p>
            I work with React, TypeScript, Next.js, and TailwindCSS on the
            frontend, and Node.js with Express on the backend. I care about
            clean architecture, maintainable code, and thoughtful user
            experience.
          </p>

          <p>
            Based in Lviv, Ukraine. I’m responsible, organized, and always
            looking to grow through real-world challenges.
          </p>
        </div>

        {/* Info Block */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              📍 Location
            </p>
            <p className="text-gray-600">Lviv, Ukraine</p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              🗣 Languages
            </p>
            <p className="text-gray-600">
              Ukrainian (Native), English (Pre-Intermediate)
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              🎓 Education
            </p>
            <p className="text-gray-600">Full Stack Development Course</p>
          </div>
        </div>
      </div>

      {/* Animated Tech Stack */}
      <div className="mt-20">
        <TechMarquee />
      </div>
    </section>
  );
}
