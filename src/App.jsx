import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Globe, 
  CheckCircle2,
  Terminal,
  Heart,
  ChevronRight
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 flex flex-col justify-between font-sans">
      {/* Background Decorator */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-100/60 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-sky-100/60 to-slate-100/40 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-700 flex items-center justify-center shadow-md shadow-slate-900/10 text-white font-semibold">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight text-lg">Aura</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#docker" className="hover:text-slate-900 transition-colors">Docker Setup</a>
            <a href="#docs" className="hover:text-slate-900 transition-colors">Docs</a>
          </nav>

          <button className="text-sm font-semibold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-medium text-slate-600 mb-8 self-center hover:border-slate-300 transition-all cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Vite + React + Tailwind CSS</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Welcome to your <br />
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
              Sweet White Theme App
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            A minimalist, high-craft web layout designed for effortless elegance, lightning performance, and seamless containerized deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all active:scale-[0.98] cursor-pointer">
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#docker" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all active:scale-[0.98] cursor-pointer">
              <Terminal className="w-4 h-4 text-slate-500" />
              <span>View Docker Setup</span>
            </a>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md hover:border-slate-300/80 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1.5">Blazing Fast</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Powered by Vite and React for instant hot module replacement and ultra-smooth renders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md hover:border-slate-300/80 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1.5">Production Ready</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Includes an optimized multi-stage Docker build ready to ship to EC2, ECS, or any cloud host.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs hover:shadow-md hover:border-slate-300/80 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1.5">Sweet Aesthetic</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clean white tones, subtle glassmorphism, crisp borders, and balanced typography.
            </p>
          </div>
        </div>

        {/* Info Banner / Code Snippet */}
        <div id="docker" className="mt-10 bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Docker Image Quickstart</h2>
              <p className="text-sm text-slate-500 mt-0.5">Run your application in a lightweight Nginx container</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-xs font-mono text-slate-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dockerfile created
            </span>
          </div>

          <div className="mt-6 bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 text-slate-500 mb-2 border-b border-slate-800 pb-2 select-none">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-slate-400">Terminal</span>
            </div>
            <p className="text-emerald-400"># 1. Build the Docker image</p>
            <p className="text-slate-100 mb-3">docker build -t docker-ec2-fe .</p>
            <p className="text-emerald-400"># 2. Run container on port 8080</p>
            <p className="text-slate-100">docker run -d -p 8080:80 --name my-app docker-ec2-fe</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          <p>© {new Date().getFullYear()} Aura Web App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

