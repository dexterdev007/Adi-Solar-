"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Submitting...");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = Object.fromEntries(formData.entries());

    // basic processing to remove empty string
    Object.keys(data).forEach((k) => {
      if (data[k] === "") data[k] = null;
    });

    try {
      // Use relative API path for Netlify full-stack server
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      setResult("Result: " + JSON.stringify(resData));
    } catch (error: any) {
      setResult("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        {/* User's Original Form Integration */}
        <div className="w-full mt-12 p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Test Contact Form</h2>
          <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col gap-4 text-black dark:text-white">
            <input
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md"
              type="text" id="name" name="name" placeholder="Name" required 
            />
            <input
              className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md"
              type="text" id="phone" name="phone" placeholder="Phone" 
            />
            <input
               className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md"
              type="email" id="email" name="email" placeholder="Email" required 
            />
            <input
               className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md"
              type="text" id="service" name="service" placeholder="Service" 
            />
            <textarea 
               className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md min-h-[100px]"
               id="message" name="message" placeholder="Message"
            ></textarea>
            
            <button 
              type="submit" 
              id="submitBtn" 
              disabled={isSubmitting}
              className="mt-4 p-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md hover:opacity-80 disabled:opacity-50"
            >
              Submit Contact
            </button>
          </form>
          {result && (
            <p id="result" className="mt-4 p-4 rounded-md bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white break-all">
              {result}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
