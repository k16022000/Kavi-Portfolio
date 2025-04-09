import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = {};
  //   if (!formData.name) newErrors.name = "Name is required";
  //   if (!formData.email) newErrors.email = "Email is required";
  //   if (!formData.message) newErrors.message = "Message is required";

  //   if (Object.keys(newErrors).length === 0) {
  //     // Handle form submission
  //     console.log("Form data:", formData);
  //     setFormData({ name: "", email: "", message: "" });
  //     setErrors({});
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
  
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const text = await response.text(); // Read response as text first
        console.log("Raw response:", text);
  
        const data = JSON.parse(text); // Try parsing JSON manually
        if (response.ok) {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          alert("Failed to send email: " + data.error);
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Something went wrong.");
      }
    } else {
      setErrors(newErrors);
    }
  };
  

  return (
    <section
      className={`py-20 ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full p-3 rounded-lg ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                } border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full p-3 rounded-lg ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                } border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className={`w-full p-3 rounded-lg ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                } border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <EnvelopeIcon className="h-5 w-5 inline-block mr-2 text-blue-600 dark:text-blue-400" />
                beme17041@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <PhoneIcon className="h-5 w-5 inline-block mr-2 text-blue-600 dark:text-blue-400" />
                +91 9360896961
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kaviarasu-n-856b07243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href="https://github.com/k16022000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  <FaGithub className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
