'use client';
import { useState } from "react";
import { supabase } from "@/lib/supabase";

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
    <div className="min-h-[calc(100vh-40px)] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-white/70">04 — Contact</span>
          <h2 className="text-4xl  mt-2">Let&apos;s build</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Tell us about your project. We will get back to you within 24 hours
            with a plan built around your brand.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="border border-white/20 rounded-2xl p-6 bg-black">
            <h3 className="text-xl  mb-4">Get in touch</h3>
            <div className="space-y-3 text-gray-300">
              <p> mxdelitehq@gmail.com</p>
              <p> @mxdelite</p>
              <p> Available Worldwide</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="border border-white/20 rounded-2xl p-6 bg-black">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-1">
                  Name
                </label>
                <input
                  className="w-full bg-transparent border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition"
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  className="w-full bg-transparent border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition"
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project_brief" className="block text-sm text-white/70 mb-1">
                  Project Brief
                </label>
                <textarea
                  className="w-full bg-transparent border border-white/20 rounded-lg p-3 focus:outline-none focus:border-white transition"
                  id="project_brief"
                  name="project_brief"
                  rows="4"
                  value={form.project_brief}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                className="w-full border border-white/20 rounded-lg p-3 hover:bg-white hover:text-black transition cursor-pointer"
                type="submit"
                onClick={Handlesubmit}
              >
                Send Message
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;