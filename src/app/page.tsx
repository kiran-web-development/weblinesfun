"use client";

import Image from "next/image";
import { useTheme } from "./useTheme";
import { useAOS } from "./useAOS";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  useAOS();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-[#f8fafc] via-[#c7d2fe] to-[#f0abfc] dark:bg-background text-foreground transition-colors">
      <div className="w-full flex flex-col items-center justify-between bg-white/70 dark:bg-background backdrop-blur rounded-none min-h-screen">
        {/* Header / Navigation */}
        <header className="w-full border-2 border-primary dark:border-accent rounded-[10px]">
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-1 flex items-center">
              <span
                className="text-3xl font-extrabold tracking-widest glitch text-primary select-none"
                aria-label="WLF"
              >
                WLF
              </span>
            </div>
            {/* Center: Navigation */}
            <nav className="flex-1 flex justify-center gap-6 text-base font-medium">
              <a
                href="#team"
                className="hover:text-primary transition-colors"
              >
                Team
              </a>
              <a
                href="#gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#events"
                className="hover:text-primary transition-colors"
              >
                Events
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            {/* Right: Theme toggle */}
            <div className="flex-1 flex justify-end">
              <button
                className="ml-4 p-2 rounded hover:bg-accent transition-colors"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M4.05 4.05l-.71-.71" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center gap-6 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
            We are a group of passionate student developers
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-6 text-muted-foreground">
            creating innovative web solutions and participating in hackathons to
            solve real-world problems.
          </p>

          {/* Team Section */}
          <section id="team" className="w-full max-w-4xl mx-auto mt-16 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Members */}
              {[
                { name: "M Kiran Kumar", role: "Team Lead" },
                { name: "G Mallikarjuna", role: "Member" },
                { name: "M Ram Gopal", role: "Member" },
                { name: "KS Kishore Kumar", role: "Member" },
                { name: "K Muni Chanchu", role: "Member" },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center bg-card rounded-lg shadow p-6 gap-3 border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary mb-2">
                    <span>{member.name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                  <div className="text-lg font-semibold">{member.name}</div>
                  <div className="text-sm text-muted-foreground">{member.role}</div>
                  <div className="flex gap-3 mt-2">
                    {/* Placeholder GitHub icon */}
                    <a href="#" aria-label="GitHub" className="hover:text-primary">
                      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/></svg>
                    </a>
                    {/* Placeholder LinkedIn icon */}
                    <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v5.5a.5.5 0 0 1-.5.5H17a.5.5 0 0 1-.5-.5V12a2 2 0 0 0-4 0v5.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5V18a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5V18"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="w-full max-w-5xl mx-auto mt-20 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary text-center">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center group overflow-hidden cursor-pointer relative hover:scale-105 transition-transform"
                >
                  <span className="text-muted-foreground text-2xl font-bold opacity-60 group-hover:opacity-80 transition-opacity">
                    +
                  </span>
                  {/* Placeholder for lightbox overlay */}
                  <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
                    Preview
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">Gallery images coming soon.</p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="w-full max-w-5xl mx-auto mt-20 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-card rounded-lg shadow p-6 border border-border flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-primary">AI Medical Image Analysis System</h3>
                <p className="text-base text-muted-foreground">System provides AI-powered analysis of medical images using deep learning and computer vision techniques.</p>
                <ul className="list-disc list-inside text-sm text-foreground/80 mb-2">
                  <li>Image upload (DICOM, JPEG, PNG)</li>
                  <li>Task storage with integrated database</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-muted px-2 py-1 rounded">Vite</span>
                  <span className="bg-muted px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-muted px-2 py-1 rounded">React</span>
                  <span className="bg-muted px-2 py-1 rounded">Tailwind CSS</span>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-card rounded-lg shadow p-6 border border-border flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-primary">KMG Photography Gallery <span className="text-xs text-muted-foreground">(Ongoing – Personal Project)</span></h3>
                <p className="text-base text-muted-foreground">A collaborative image-sharing platform with profile creation, image upload, and image interaction (like/download).</p>
                <ul className="list-disc list-inside text-sm text-foreground/80 mb-2">
                  <li>Email/password authentication (Supabase)</li>
                  <li>Profile management</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-muted px-2 py-1 rounded">HTML</span>
                  <span className="bg-muted px-2 py-1 rounded">CSS</span>
                  <span className="bg-muted px-2 py-1 rounded">JS</span>
                  <span className="bg-muted px-2 py-1 rounded">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </section>

          {/* Events & Hackathons Section */}
          <section id="events" className="w-full max-w-5xl mx-auto mt-20 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary text-center">Events & Hackathons</h2>
            <div className="flex flex-col gap-8">
              {/* Event 1 */}
              <div className="bg-card rounded-lg shadow p-6 border border-border flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">SVUCE – CYNOSURE 2K25</h3>
                <p className="text-base text-muted-foreground">Participation in a national-level hackathon</p>
                <ul className="list-disc list-inside text-sm text-foreground/80 mb-1">
                  <li>Secured 5th position out of 20 teams</li>
                  <li>Members: M Kiran Kumar (Team Lead), M Ram Gopal, G Mallikarjuna Yadav, KS Kishore Kumar</li>
                </ul>
              </div>
              {/* Event 2 */}
              <div className="bg-card rounded-lg shadow p-6 border border-border flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">MITS – IMPACT-X 2K25</h3>
                <p className="text-base text-muted-foreground">Participated as Team Lead</p>
                <ul className="list-disc list-inside text-sm text-foreground/80 mb-1">
                  <li>Members: M Kiran Kumar (Team Lead), K Muni Chanchu, G Mallikarjuna Yadav, M Ram Gopal</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full max-w-2xl mx-auto mt-20 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary text-center">Contact</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-foreground font-medium shadow hover:bg-primary/90 transition-colors" aria-label="Email">
                {/* Email icon */}
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="3"/><path d="m3 6 8.29 7.07a2 2 0 0 0 2.42 0L22 6"/></svg>
                Email
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium shadow hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                {/* WhatsApp icon */}
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16.7 13.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2-.17-.28-.02-.43.13-.57.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.28-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z"/></svg>
                WhatsApp
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors" aria-label="LinkedIn">
                {/* LinkedIn icon */}
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v5.5a.5.5 0 0 1-.5.5H17a.5.5 0 0 1-.5-.5V12a2 2 0 0 0-4 0v5.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5V18a.5.5 0 0 1-.5.5H5.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5H8a.5.5 0 0 1 .5.5V18"/></svg>
                LinkedIn
              </a>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">Contact links are placeholders. Update with real info soon.</p>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 flex flex-col items-center gap-2 border-t border-border bg-background/80 mt-8">
          <span className="text-xs text-muted-foreground">
            © 2025 Web Lines Fun. Built by M Kiran Kumar.
          </span>
        </footer>
      </div>
    </div>
  );
}
