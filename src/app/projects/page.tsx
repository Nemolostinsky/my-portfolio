export const projects = [
  {
    title: "Stock Market Prediction with Economic Indicators",
    description:
      "Developed ML models (Logistic Regression, SVM, XGBoost) using 10+ years of stock and macroeconomic data via World Bank API.",
    link: "#",
  },
  {
    title: "Market Crash Prediction via LPPL Modeling",
    description:
      "Applied LPPL theory to analyze speculative bubbles, enhancing early warning systems for market instability.",
    link: "#",
  },
  {
    title: "Revolut_Case_Study.pptx",
    description: "Download my detailed case study on Revolut's product, strategy, and growth as a PPTX presentation.",
    link: "/Revolut_Case_Study.pptx",
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-cyan-600 mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-cyan-100 p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-cyan-700 dark:text-cyan-300 mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            {project.link !== "#" && (
              <a href={project.link} className="text-cyan-500 hover:underline">View Project</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 