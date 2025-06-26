export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-cyan-600 mb-4">Contact</h1>
      <form className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-cyan-200 rounded px-4 py-2 focus:outline-cyan-400 bg-white dark:bg-gray-900"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-cyan-200 rounded px-4 py-2 focus:outline-cyan-400 bg-white dark:bg-gray-900"
        />
        <textarea
          placeholder="Your Message"
          className="border border-cyan-200 rounded px-4 py-2 focus:outline-cyan-400 bg-white dark:bg-gray-900"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </form>
      <div className="flex gap-4">
        <a href="mailto:youremail@example.com" className="text-cyan-500 hover:underline">Email</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">GitHub</a>
      </div>
    </section>
  );
} 