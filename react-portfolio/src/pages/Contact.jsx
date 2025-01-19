import { useState } from "react";
import { headerStyle } from "../styles";

const formStyle =
  "p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-color";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Thank you! Your message has been saved.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2 className={`${headerStyle} text-3xl font-bold mb-8`}>Contact</h2>
      <div className="flex flex-col justify-center items-center bg-white-color">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-md shadow-md"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={formStyle}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={formStyle}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${formStyle} resize-vertical`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-primary-color text-white rounded-md hover:bg-black-color transition"
          >
            Submit
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">Josh Kramer - Brooklyn, NY</p>
          <p className="mb-2">
            <strong>Email: </strong>
            <a
              href="mailto:thatsoundguyjosh@gmail.com"
              className="text-blue-500 hover:underline"
            >
              thatsoundguyjosh@gmail.com
            </a>
          </p>
          <p>
            <strong>GitHub: </strong>
            <a
              href="https://github.com/KramerJosh"
              className="text-blue-500 hover:underline"
            >
              github.com/KramerJosh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
