"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconSend, IconCheck, IconX } from "@tabler/icons-react";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    description: "",
  });

  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormState("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
      setErrorMessage(
        "There was an error submitting your request. Please try again."
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {formState === "success" ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-6">
            <IconCheck size={32} />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Thank You!</h3>
          <p className="text-neutral-300 mb-6">
            We&apos;ve received your project details and will be in touch
            shortly.
          </p>
          <button
            onClick={() => setFormState("idle")}
            className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-neutral-200 transition-colors shadow-md hover:shadow-lg"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-neutral-300 mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Your name"
                disabled={formState === "submitting"}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-neutral-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="your@email.com"
                disabled={formState === "submitting"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-neutral-300 mb-2 font-medium"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Your company (Optional)"
                disabled={formState === "submitting"}
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-neutral-300 mb-2 font-medium"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none transition-colors"
                disabled={formState === "submitting"}
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="web">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ai">AI-Powered Solutions</option>
                <option value="crm">CRM Integration</option>
                <option value="booking">Automated Booking Systems</option>
                <option value="custom">Custom Software Solution</option>
                <option value="seo">SEO & Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-neutral-300 mb-2 font-medium"
            >
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-neutral-700/50 border border-neutral-600/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Tell us about your project and requirements"
              disabled={formState === "submitting"}
            ></textarea>
          </div>

          {formState === "error" && (
            <div className="p-4 bg-red-900/40 border border-red-700/60 rounded-lg flex items-start">
              <IconX
                size={20}
                className="text-red-400 mr-3 mt-0.5 flex-shrink-0"
              />
              <p className="text-red-300 text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {formState === "submitting" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Request
                  <IconSend
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}
