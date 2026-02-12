import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5">
            <span className="block">Welcome to my portfolio</span>

            <span className="block text-gray-400">
              as a <span className="text-green-500">full-stack developer</span>
            </span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-500 mb-6">
            Hi, I’m{' '}
            <span className="text-black dark:text-white font-semibold">
              Kseniia Konovalova
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-4">
            I enjoy building web applications and watching an idea slowly turn
            into a complete product. For me, development isn’t just about
            writing code — it’s about solving problems and improving user
            experience.
          </p>

          <p className="text-lg text-gray-600">
            I work with React, TypeScript, and Next.js, use Redux Toolkit, style
            with TailwindCSS, and build backend logic with Node.js and
            Express.js. I enjoy thinking through project structure, keeping code
            clean, and continuously looking for better solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/Kseniia_Konovalova_CV.pdf"
              download
              className="bg-green-500 text-white px-6 py-3 rounded-2xl"
            >
              Download CV
            </a>

            <Link
              href="/contact"
              className="border border-green-500 text-green-500 px-6 py-3 rounded-2xl"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/photo.jpg"
            alt="Kseniia Konovalova"
            width={350}
            height={500}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
