export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-cyan-600 mb-4">Resume</h1>
      <a
        href="/resume.pdf"
        download
        className="inline-block mb-6 px-6 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
      >
        Download Resume (PDF)
      </a>
      <h2 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Skills & Experience</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
        <li>Machine Learning & Data Analysis</li>
        <li>Financial Modeling</li>
        <li>Python, R, SQL, JavaScript, TypeScript</li>
        <li>React, Next.js, Tailwind CSS</li>
        <li>APIs: World Bank, Alpha Vantage, etc.</li>
        <li>Teamwork, Communication, Problem Solving</li>
      </ul>
      <p className="text-gray-600 dark:text-gray-400">For a detailed resume, please download the PDF above or contact me directly.</p>
    </section>
  );
} 