import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import "./styles/ContactForm.css";

const projectGoals = [
  "MVP Design",
  "Web Design",
  "Mobile App Design",
  "SMM & Brand Growth",
  "Workflow Automation",
  "Others",
];

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    // Add selected goals as a hidden field value
    const goalsInput = formRef.current.querySelector(
      'input[name="project_goal"]'
    ) as HTMLInputElement;
    if (goalsInput) {
      goalsInput.value = selectedGoals.join(", ");
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          setSelectedGoals([]);
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <div className="cf-section" id="contact-form">
      <div className="cf-card">
        {/* Glow effect */}
        <div className="cf-glow"></div>

        <div className="cf-inner">
          {/* Left Column - Profile */}
          <div className="cf-left">
            <h2 className="cf-heading">
              Build Brand. Scale Faster.
              <br />
              Pay Nothing to <span className="cf-script">Start.</span>
            </h2>

            <div className="cf-bullets">
              <div className="cf-bullet">
                <MdVerified className="cf-check" />
                <span>Expect a response from me personally within 24 hours</span>
              </div>
              <div className="cf-bullet">
                <MdVerified className="cf-check" />
                <span>Convert social traffic with pixel-perfect UI/UX.</span>
              </div>
              <div className="cf-bullet">
                <MdVerified className="cf-check" />
                <span>Scale leads with data-driven SMM systems.</span>
              </div>
            </div>

            <div className="cf-profile">
              <div className="cf-avatar">
                <img src="/images/mypic.png" alt="Zonayed Hossain" />
              </div>
              <div className="cf-profile-info">
                <h4 className="cf-name">Zonayed Hossain</h4>
                <p className="cf-role">
                  UI/UX Designer | Brand & Social Media Strategist
                </p>
              </div>
            </div>

            <div className="cf-phone">
              <FaWhatsapp className="cf-wa-icon" />
              <span>+88 01581 658592</span>
            </div>

            <a
              href="https://wa.me/8801581658592"
              target="_blank"
              rel="noopener noreferrer"
              className="cf-book-call"
              data-cursor="disable"
            >
              Book a Call Directly
            </a>
          </div>

          {/* Right Column - Form */}
          <div className="cf-right">
            <form ref={formRef} onSubmit={handleSubmit} className="cf-form">
              <div className="cf-field">
                <label htmlFor="from_name">Full Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="your Name..."
                  required
                />
              </div>

              <div className="cf-row">
                <div className="cf-field cf-field-half">
                  <label htmlFor="from_email">Email Address</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="Your Email..."
                  />
                </div>
                <span className="cf-or">or</span>
                <div className="cf-field cf-field-half">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="01xxxxxxxxx"
                  />
                </div>
              </div>

              <div className="cf-field">
                <label>Project Goal</label>
                <div className="cf-goals">
                  {projectGoals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      className={`cf-goal-tag ${
                        selectedGoals.includes(goal) ? "cf-goal-active" : ""
                      }`}
                      onClick={() => toggleGoal(goal)}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  name="project_goal"
                  value={selectedGoals.join(", ")}
                />
              </div>

              <div className="cf-field">
                <label htmlFor="message">Investor Profile</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share your goals, e.g., scaling on Instagram, launching a new app or ..............."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={`cf-submit ${status}`}
                disabled={status === "sending"}
              >
                {status === "idle" && "Lets Connect! →"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent ✓"}
                {status === "error" && "Failed — Try Again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
