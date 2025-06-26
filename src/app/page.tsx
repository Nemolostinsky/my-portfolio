'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  // Experience data
  const experiences = [
    {
      title: "SUMMER INTERN",
      org: "EasyPay",
      location: "Pune",
      date: "May - July 2025",
      points: [
        "Analyzed ONDC based e-commerce adoption and designed strategies to improve merchant onboarding.",
        "Conducted user interviews and collaborated with 50+ merchants to identify operational bottlenecks and enhance platform UX.",
        "Executed API testing for platform integration and documented technical feedback."
      ],
      links: []
    },
    {
      title: "VICE PRESIDENT (Founding Team)",
      org: "Finova - College FinTech Club, MIT Manipal",
      location: "",
      date: "Aug 2024 - Present",
      points: [
        "Spearheaded initiatives to enhance FinTech awareness through 5+ events with industry leaders.",
        "Organized hands-on workshops and internal case competitions focused on product innovation and algorithmic trading."
      ],
      links: [
        { label: "Website", href: "https://www.finovamanipal.org/", color: "text-blue-300" },
        { label: "Instagram", href: "https://www.instagram.com/finova.manipal/", color: "text-pink-300" }
      ]
    },
    {
      title: "EXECUTIVE - (CORPORATE-ALUMNI RELATIONS)",
      org: "E - cell, MIT Manipal",
      location: "",
      date: "Nov 2023 - Present",
      points: [
        "Built partnerships with startups and VCs for the Manipal Entrepreneurship Summit.",
        "Facilitated cross-functional collaboration to onboard 10+ speakers and sponsors for flagship events."
      ],
      links: []
    },
    {
      title: "FOUNDER",
      org: "The Wafflery",
      location: "",
      date: "Jul 2023 - Mar 2024",
      points: [
        "Launched and managed a successful waffle cafe business with full ownership of ops, finance, and customer experience.",
        "Leveraged CRM tools to manage customer data and improved retention through targeted marketing campaigns."
      ],
      links: [
        { label: "Instagram", href: "https://www.instagram.com/the__wafflery/", color: "text-pink-300" }
      ]
    },
    {
      title: "OPEN-SOURCE CONTRIBUTOR",
      org: "GirlScript Summer of Code",
      location: "",
      date: "October 2024 - November 2024",
      points: [
        "Contributed to open-source development projects, focusing on API integration and testing using Postman."
      ],
      links: []
    },
    {
      title: "START-UP CONSULTANT",
      org: "Bamboozle",
      location: "",
      date: "February 2024 - Present",
      points: [
        "Collaborate in developing sustainable clothing made from bamboo fibers, gaining hands-on experience in the startup ecosystem.",
        "To promote eco-friendly fashion solutions, contribute to product design, marketing strategies, and operational processes.",
        "Achievements: Received a Consolation Prize at the Hult Prize 2024 and MES 2024, recognizing innovative social enterprise ideas."
      ],
      links: []
    }
  ];

  return (
    <main className="bg-white min-h-screen w-full font-sans text-[#1a2238]">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center min-h-[70vh] md:min-h-[80vh] p-0 relative bg-[#23273f] font-sans" id="hero">
        {/* Left: Circular Image */}
        <div className="flex-1 flex items-center justify-center min-h-[320px] md:min-h-[480px] py-8 md:py-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-white/10 transition-all duration-300">
            <Image
              src="/suhani-podium.jpg"
              alt="Suhani Patel at Podium"
              width={320}
              height={320}
              className="object-cover w-full h-full rounded-full"
              priority
            />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 flex items-center justify-center relative bg-transparent">
          <div className="w-[90vw] md:w-[90%] max-w-2xl px-6 py-10 md:py-16 md:px-12 flex flex-col justify-center text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Hi, I'm Suhani Patel!
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 font-normal whitespace-pre-line">
              I'm a <span className="font-bold">Computer Science and Financial Technology</span> undergrad at MIT Manipal, passionate about blending tech with finance to build impactful products. From leading fintech events to running my own café, I thrive at the intersection of innovation, execution, and user empathy.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-normal whitespace-pre-line">
              Currently the Vice President of <span className="font-bold">Finova</span>, our college's fintech club, I've led hands-on workshops, collaborated with startups, and built platforms that solve real user problems.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="max-w-5xl mx-auto py-24 px-4 border-b border-gray-100 font-sans">
        <h2 className="text-2xl font-bold mb-8 text-white">My Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#23273f] rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-800 p-6 flex flex-col min-h-[220px]" style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.40)' }}>
              <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
              <div className="text-sm text-gray-400 mb-1">{exp.org}</div>
              <div className="text-xs text-white mb-2">{exp.location && <span className="font-bold">{exp.location}</span>}{exp.location && ' • '}{exp.date}</div>
              <ul className="list-disc list-inside text-gray-400 mb-4 pl-2">
                {exp.points.slice(0, 1).map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
                {exp.points.length > 1 && <li className="italic text-gray-500">...more</li>}
              </ul>
              <button onClick={() => setOpenModal(idx)} className="mt-auto text-yellow-400 font-bold text-sm hover:underline self-start">VIEW DETAILS &rarr;</button>
            </div>
          ))}
          {[] .map((_, idx) => (
            <div key={idx} className="bg-[#23273f] rounded-xl shadow-md border border-gray-800 p-6 flex flex-col min-h-[180px]">
              <h3 className="text-lg font-bold text-white mb-2">Experience Title {idx + 7}</h3>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.</p>
              <button className="mt-auto text-yellow-400 font-bold text-sm hover:underline self-start">VIEW DETAILS &rarr;</button>
            </div>
          ))}
        </div>

        {/* Modal for experience details */}
        {openModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-[#23273f] rounded-xl shadow-2xl p-8 max-w-lg w-full relative text-white">
              <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
              <h3 className="text-xl font-bold mb-1">{experiences[openModal].title}</h3>
              <div className="text-sm text-gray-400 mb-1">{experiences[openModal].org}</div>
              <div className="text-xs text-white mb-2">{experiences[openModal].location && <span className="font-bold">{experiences[openModal].location}</span>}{experiences[openModal].location && ' • '}{experiences[openModal].date}</div>
              <ul className="list-disc list-inside text-gray-300 mb-4 pl-2">
                {experiences[openModal].points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              {experiences[openModal].links.length > 0 && (
                <div className="flex gap-3 mb-2">
                  {experiences[openModal].links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className={`${link.color} hover:underline text-xs`}>{link.label}</a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-24 border-b border-gray-300 font-sans bg-white text-[#1a2238]" style={{ background: '#fff', color: '#1a2238', borderColor: '#e5e7eb' }}>
        <h2 className="text-2xl font-extrabold mb-2">Education</h2>
        <div className="h-1 w-full bg-black mb-8"></div>
        <div className="flex flex-col md:flex-row gap-0 items-stretch w-full">
          {/* Left: Timeline and Text */}
          <div className="relative w-full pl-16 md:pl-20">
            {/* Cyan vertical timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/80 to-cyan-200/10 rounded-full"></div>
            {/* Entry 1 */}
            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-10">
              {/* Timeline dot */}
              <span className="absolute left-2 mt-2 w-4 h-4 bg-cyan-400 border-4 border-white rounded-full shadow"></span>
              <div className="flex-1 pl-10">
                <div className="font-extrabold text-lg md:text-xl mb-1">MANIPAL INSTITUTE OF TECHNOLOGY, MANIPAL</div>
                <div className="text-base md:text-lg mb-1">B.Tech in Computer Science with Financial Technology</div>
                <div className="text-base mb-1">CGPA: 8.12 | She-Fi Scholar | Dance Head (Kalakriya)</div>
                <div className="text-base mb-1">Relevant coursework: Finance,Banking,and Payments | Cyber Security | Financial Management</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-base">Manipal, Karnataka</div>
                <div className="text-base">2027</div>
              </div>
            </div>
            {/* Entry 2 */}
            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              {/* Timeline dot */}
              <span className="absolute left-2 mt-2 w-4 h-4 bg-cyan-400 border-4 border-white rounded-full shadow"></span>
              <div className="flex-1 pl-10">
                <div className="font-extrabold text-lg md:text-xl mb-1">KENDRIYA VIDYALAYA, S.A.C</div>
                <div className="text-base mb-1">&bull; Achievements: School Captain, Head-Cultural Club</div>
                <div className="text-base mb-1">&bull; IIT-JEE Examination Score: 91.47 percentile</div>
                <div className="text-base mb-1">&bull; NATIONAL ELIGIBILITY CUM ENTRANCE TEST (UG) Score: 98.92 percentile</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-base">Ahmedabad, Gujrat</div>
                <div className="text-base">2022</div>
              </div>
            </div>
          </div>
          {/* No image on the right */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-24 px-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold mb-8">Research and Project Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Stock Market Prediction with Economic Indicators</h3>
            <p className="text-gray-600 mb-2">Developed ML models (Logistic Regression, SVM, XGBoost) using 10+ years of stock and macroeconomic data via World Bank API.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Market Crash Prediction via LPPL Modeling</h3>
            <p className="text-gray-600 mb-2">Applied LPPL theory to analyze speculative bubbles, enhancing early warning systems for market instability.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Revolut Teardown</h3>
            <p className="text-gray-600 mb-2">Download my detailed case study on Revolut's product, strategy, and growth as a PPTX presentation.</p>
            <a href="/Revolut_Case_Study.pptx" download className="text-cyan-600 font-semibold hover:underline mt-2">Download Case Study</a>
          </div>
        </div>
      </section>

      {/* Skillset Section */}
      <section id="skillset" className="max-w-5xl mx-auto py-24 px-4 border-b border-gray-100 font-sans">
        <h2 className="text-2xl font-bold mb-8 text-white">Skillset</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Problem Framing */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">🔍</span>
            <h3 className="text-xl font-bold text-white mb-2">Problem Framing</h3>
            <p className="text-gray-300">I focus on defining the "why" before the "what." I practice root cause analysis and prioritize use cases that solve clear, validated problems.</p>
          </div>
          {/* User Research & Insights */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">🧑‍🔬</span>
            <h3 className="text-xl font-bold text-white mb-2">User Research & Insights</h3>
            <p className="text-gray-300">I actively conduct user interviews, run surveys, and map user journeys to uncover core pain points and convert qualitative insights into product opportunities.</p>
          </div>
          {/* Collaboration & Communication */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">🤝</span>
            <h3 className="text-xl font-bold text-white mb-2">Collaboration & Communication</h3>
            <p className="text-gray-300">As Finnova's VP and GSoC contributor, I've led cross-functional teams, written specs, and handled stakeholder coordination effectively.</p>
          </div>
          {/* Market & Competitor Analysis */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">📊</span>
            <h3 className="text-xl font-bold text-white mb-2">Market & Competitor Analysis</h3>
            <p className="text-gray-300">I analyze competitor products, identify whitespace opportunities, and map differentiators. Comfortable building positioning maps and strategic benchmarks.</p>
          </div>
          {/* Leadership */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">🌟</span>
            <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
            <p className="text-gray-300">I believe in pushing the best idea forward. There is no 'I' when you are building a great product.</p>
          </div>
          {/* Wireframing & UX Thinking */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">🖼️</span>
            <h3 className="text-xl font-bold text-white mb-2">Wireframing & UX Thinking</h3>
            <p className="text-gray-300">I can translate product specs into intuitive wireframes using tools like Figma. I prioritize user flow clarity and accessibility.</p>
          </div>
          {/* Tech Fluency */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">💻</span>
            <h3 className="text-xl font-bold text-white mb-2">Tech Fluency</h3>
            <p className="text-gray-300">Basic understanding of APIs, databases, and system design helps me collaborate better with engineers and contribute during technical discussions.</p>
          </div>
          {/* Financial Domain Knowledge */}
          <div className="bg-[#10131a] rounded-xl p-8 flex flex-col items-start shadow-lg">
            <span className="mb-4 text-cyan-400 text-3xl">💸</span>
            <h3 className="text-xl font-bold text-white mb-2">Financial Domain Knowledge</h3>
            <p className="text-gray-300">I understand key concepts like UPI, KYC, NEFT/RTGS, ARPU, LTV, CAC, and how financial products are structured across payments, lending, and investing.</p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="max-w-2xl mx-auto py-24 px-4 border-b border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <a
          href="/Suhani_Resume_Revolut_Final - Copy.pdf"
          download
          className="inline-block mb-6 px-6 py-2 rounded-full border border-[#1a2238] bg-white text-[#1a2238] font-semibold hover:bg-[#1a2238] hover:text-white transition shadow-sm"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto py-24 px-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-200 rounded px-4 py-2 focus:outline-[#1a2238] bg-white text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-200 rounded px-4 py-2 focus:outline-[#1a2238] bg-white text-black"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-200 rounded px-4 py-2 focus:outline-[#1a2238] bg-white text-black"
            rows={5}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full border border-[#1a2238] bg-white text-[#1a2238] font-semibold hover:bg-[#1a2238] hover:text-white transition shadow-sm"
          >
            Send Message
          </button>
        </form>
        <div className="flex gap-4">
          <a href="mailto:suhanip1903@gmail.com" className="text-[#1a2238] hover:underline">Email</a>
          <a href="https://linkedin.com/in/suhani-patel-a6957a250" target="_blank" rel="noopener noreferrer" className="text-[#1a2238] hover:underline">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
