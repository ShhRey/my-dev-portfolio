import { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import BotModel from "../components/models/contact/BotModel";

const Contact = () => {
    //  useState for emptying form after Submission
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
                <div className="grid-12-cols mt-16 items-stretch">
                    {/* Left Side: 3D Model (70%) */}
                    <div className="xl:col-span-8 col-span-12 min-h-[400px]">
                        <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <BotModel />
                        </div>
                    </div>
                    
                    
                    {/* Right Side: Contact Form (30%) */}
                    <div className="xl:col-span-4 col-span-12 mt-10 xl:mt-0">
                        <div className="flex-center card-border rounded-xl p-10 h-full">
                            <form className="w-full flex flex-col gap-7">
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
                </div>
            </div>
        </section>
    );
};

export default Contact;