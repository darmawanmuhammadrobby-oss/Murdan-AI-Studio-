
"use client";

import { useState } from "react";
import {
  Image as ImageIcon,
  Video,
  Sparkles,
  History,
  Settings,
  Menu,
  Plus,
  WandSparkles,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "AI Image Generator",
    description: "Create stunning images from your imagination.",
    icon: ImageIcon,
    color: "purple",
    tag: "IMAGE",
  },
  {
    title: "AI Video Generator",
    description: "Transform your ideas into amazing videos.",
    icon: Video,
    color: "blue",
    tag: "VIDEO",
  },
  {
    title: "Gemini AI",
    description: "Chat, brainstorm and explore new ideas.",
    icon: Sparkles,
    color: "pink",
    tag: "AI CHAT",
  },
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "AI Image", icon: ImageIcon },
    { name: "AI Video", icon: Video },
    { name: "Gemini AI", icon: Sparkles },
    { name: "My Creations", icon: History },
    { name: "Settings", icon: Settings },
  ];

  return (
    <main className="studio">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-icon"><Sparkles /></div>
          <div>
            <h2>Murdan AI</h2>
            <span>CREATIVE STUDIO</span>
          </div>
        </div>

        <p className="nav-label">WORKSPACE</p>

        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`nav-item ${active === item.name ? "selected" : ""}`}
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
              }}
            >
              <Icon size={19} />
              <span>{item.name}</span>
              {active === item.name && <ChevronRight size={16} />}
            </button>
          );
        })}

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="avatar">M</div>
            <div>
              <strong>Murdan Studio</strong>
              <span>Creative Account</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
          <span className="breadcrumb">Workspace / {active}</span>
          <div className="top-status">
            <span className="status-dot" />
            AI STUDIO
          </div>
        </header>

        <div className="content">
          <section className="welcome">
            <div>
              <span className="eyebrow">
                <Sparkles size={14} /> YOUR CREATIVE SPACE
              </span>
              <h1>Imagine it. <span>Create it.</span></h1>
              <p>Welcome to Murdan AI Studio. Your imagination starts here.</p>
            </div>
            <div className="welcome-art"><WandSparkles size={65} /></div>
          </section>

          {active === "Dashboard" ? (
            <>
              <div className="section-heading">
                <div>
                  <h2>Creative Workspace</h2>
                  <p>Choose your AI creative tool</p>
                </div>
              </div>

              <div className="feature-grid">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      className="feature-card"
                      key={feature.title}
                      onClick={() => setActive(
                        feature.title === "AI Image Generator"
                          ? "AI Image"
                          : feature.title === "AI Video Generator"
                          ? "AI Video"
                          : "Gemini AI"
                      )}
                    >
                      <div className={`feature-icon ${feature.color}`}>
                        <Icon size={25} />
                      </div>
                      <span className="feature-tag">{feature.tag}</span>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <div className="card-link">
                        Open Studio <ChevronRight size={16} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <section className="quick-create">
                <div className="section-heading">
                  <div>
                    <h2>Quick Create</h2>
                    <p>Start with your creative idea</p>
                  </div>
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to create..."
                  rows={4}
                />
                <div className="create-footer">
                  <span>AI creative workspace</span>
                  <button
                    onClick={() => setActive("AI Image")}
                    disabled={!prompt.trim()}
                  >
                    <WandSparkles size={17} /> Continue
                  </button>
                </div>
              </section>

              <section className="history-section">
                <div>
                  <h2>Recent Creations</h2>
                  <p>Your generated projects will appear here.</p>
                </div>
                <History size={27} />
              </section>
            </>
          ) : (
            <section className="tool-panel">
              <div className="feature-icon purple">
                <Sparkles size={28} />
              </div>
              <h2>{active}</h2>
              <p>
                Your {active} workspace is being prepared.
                AI provider integration will be configured next.
              </p>
              <button onClick={() => setActive("Dashboard")}>
                <LayoutDashboard size={17} /> Back to Dashboard
              </button>
            </section>
          )}

          <footer>
            <span>© 2026 Murdan AI Studio</span>
            <span>CREATIVITY WITHOUT LIMITS</span>
          </footer>
        </div>
      </section>
    </main>
  );
          }
            
