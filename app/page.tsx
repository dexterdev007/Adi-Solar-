"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const services = [
  "Solar Panel Installation",
  "Solar Water Heater",
  "Solar Maintenance & Repair",
  "Commercial Solar Solutions",
  "Solar Battery Storage",
  "Consultation & Site Survey",
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const payload: Record<string, string | null> = {};
    for (const [key, value] of Object.entries(formData)) {
      payload[key] = value === "" ? null : value;
    }

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok && result.status === "success") {
        setStatus("success");
        setStatusMessage("Thank you! We'll get back to you shortly.");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a0a 50%, #0a0a0a 100%)",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          top: "-30%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "glow 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "glow 8s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#0a0a0a",
            }}
          >
            ☀
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            Adi{" "}
            <span style={{ color: "#f59e0b" }}>Solar</span>
          </span>
        </div>
        <a
          href="#contact"
          style={{
            padding: "10px 28px",
            borderRadius: "50px",
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            color: "#0a0a0a",
            fontWeight: "600",
            fontSize: "14px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
          }}
        >
          Get Quote
        </a>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px 60px",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          animation: "fadeInUp 1s ease-out",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "50px",
            border: "1px solid rgba(245,158,11,0.3)",
            background: "rgba(245,158,11,0.08)",
            fontSize: "13px",
            fontWeight: "500",
            color: "#fbbf24",
            marginBottom: "32px",
            letterSpacing: "0.5px",
          }}
        >
          ⚡ Powering a Sustainable Future
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: "800",
            lineHeight: "1.1",
            letterSpacing: "-2px",
            marginBottom: "24px",
          }}
        >
          Harness the Power of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24, #f59e0b)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}
          >
            Solar Energy
          </span>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#a3a3a3",
            maxWidth: "600px",
            margin: "0 auto 48px",
            lineHeight: "1.7",
          }}
        >
          Premium solar installations for homes and businesses. Cut your
          electricity bills by up to 90% with our expert solutions.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "500+", label: "Installations" },
            { number: "90%", label: "Energy Savings" },
            { number: "25yr", label: "Warranty" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#f59e0b",
                  letterSpacing: "-1px",
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: "13px", color: "#737373", fontWeight: "500", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section
        style={{
          padding: "60px 24px",
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "48px",
            letterSpacing: "-1px",
          }}
        >
          Our <span style={{ color: "#f59e0b" }}>Services</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { icon: "🔆", title: "Solar Panel Installation", desc: "High-efficiency panels tailored to your energy needs" },
            { icon: "🔋", title: "Battery Storage", desc: "Store excess energy for use during peak hours or outages" },
            { icon: "🛠", title: "Maintenance & Repair", desc: "Keep your system running at peak performance" },
            { icon: "🏢", title: "Commercial Solutions", desc: "Large-scale solar projects for businesses" },
            { icon: "💧", title: "Solar Water Heaters", desc: "Eco-friendly hot water powered by the sun" },
            { icon: "📋", title: "Free Consultation", desc: "Expert site survey and customized energy plan" },
          ].map((service) => (
            <div
              key={service.title}
              style={{
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(38,38,38,0.8)",
                borderRadius: "16px",
                padding: "28px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,158,11,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(38,38,38,0.8)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{service.icon}</div>
              <h3 style={{ fontSize: "17px", fontWeight: "600", marginBottom: "8px" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#737373", lineHeight: "1.6" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        style={{
          padding: "80px 24px",
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "12px",
            letterSpacing: "-1px",
          }}
        >
          Get a <span style={{ color: "#f59e0b" }}>Free Quote</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#737373",
            fontSize: "15px",
            marginBottom: "40px",
          }}
        >
          Fill in your details and we&apos;ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(20,20,20,0.6)",
            border: "1px solid rgba(38,38,38,0.8)",
            borderRadius: "20px",
            padding: "36px",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#a3a3a3", marginBottom: "8px" }}
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#1a1a1a",
                color: "#f5f5f5",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            />
          </div>

          {/* Phone & Email row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
            <div>
              <label
                htmlFor="phone"
                style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#a3a3a3", marginBottom: "8px" }}
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  background: "#1a1a1a",
                  color: "#f5f5f5",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
                onBlur={(e) => (e.target.style.borderColor = "#333")}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#a3a3a3", marginBottom: "8px" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #333",
                  background: "#1a1a1a",
                  color: "#f5f5f5",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
                onBlur={(e) => (e.target.style.borderColor = "#333")}
              />
            </div>
          </div>

          {/* Service */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="service"
              style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#a3a3a3", marginBottom: "8px" }}
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#1a1a1a",
                color: formData.service ? "#f5f5f5" : "#737373",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.3s",
                cursor: "pointer",
                appearance: "none" as const,
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "28px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#a3a3a3", marginBottom: "8px" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #333",
                background: "#1a1a1a",
                color: "#f5f5f5",
                fontSize: "15px",
                outline: "none",
                transition: "border-color 0.3s",
                resize: "vertical",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f59e0b")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="submitBtn"
            disabled={status === "loading"}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              border: "none",
              background:
                status === "loading"
                  ? "#525252"
                  : "linear-gradient(135deg, #f59e0b, #d97706)",
              color: status === "loading" ? "#a3a3a3" : "#0a0a0a",
              fontSize: "16px",
              fontWeight: "700",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                status === "loading" ? "none" : "0 4px 20px rgba(245,158,11,0.3)",
            }}
          >
            {status === "loading" ? "Submitting..." : "Get Free Quote →"}
          </button>

          {/* Status message */}
          {status === "success" && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#22c55e",
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              ✓ {statusMessage}
            </div>
          )}
          {status === "error" && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px",
                borderRadius: "12px",
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#ef4444",
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              ✕ {statusMessage}
            </div>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 24px",
          borderTop: "1px solid #1a1a1a",
          color: "#525252",
          fontSize: "13px",
          position: "relative",
          zIndex: 10,
        }}
      >
        © 2026 Adi Solar. All rights reserved. | Powering a brighter tomorrow.
      </footer>
    </div>
  );
}
