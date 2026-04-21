'use client';
import { useState } from "react";
import { supabase } from "@/lib/supabase";  // Fixed: Added slash after @

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project_brief: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const Handlesubmit = async() => {
    const {error} = await supabase
      .from('contacts')
      .insert([form])
    
    if (error) {
      alert("something went wrong")
    } else {
      alert("Message sent")
      setForm({ name: "", email: "", project_brief: "" })
    }
  }

  return (
    <div className="section">
      <div className="mt-20 flex flex-col gap-6">
        <div className="card p-2">
          <span>04 — Contact</span>
          <h2>Let&apos;s build</h2>
          <p>
            Tell us about your project. We will get back to you within 24 hours
            with a plan built around your brand.
          </p>
          <div className="flex flex-col">
            <span>Email</span>
            <a href="#">mxdelitehq@gmail.com</a>
            <span>Instagram</span>
            <a href="#">@mxdelite</a>
            <span>Location</span>
            <a href="#">Available Worldwide</a>
          </div>
        </div>

        <div className="card flex flex-col text-lg">
          <label className="text-center" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-sm bg-black border"
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          
          <label className="text-center" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md border bg-transparent text-white"
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          
          <label className="text-center" htmlFor="project_brief">
            Project Brief
          </label>
          <textarea
            className="rounded-md bg-transparent border text-white"
            id="project_brief"
            name="project_brief"
            value={form.project_brief}
            onChange={handleChange}
          ></textarea>
          
          <button
            className="btn"
            type="submit"
            onClick={Handlesubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;