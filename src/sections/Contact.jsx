import { useState } from "react";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };


    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get in Touch" sub="💬 Have questions or ideas? Let's talk! 🚀" />
                {/* Main div for this Section */}
                <div className="grid-12-cols mt-16">
                    {/* Left Side: Contact Form */}
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form className="w-full flex flex-col gap-7">
                                {/* Creating Input Fields for your Form */}
                                <div>
                                    <label htmlFor="name">Enter Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="What's your name: John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Enter Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="What's your Email: you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">How can I help You?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me a bit about your idea, project, or inquiry…"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows="5"
                                        required
                                    />
                                </div>
                                
                                {/* Submit Button for Form */}
                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">Send Message</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Some 3D Model */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            {/* <ContactExperience /> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;