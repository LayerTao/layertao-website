"use client";
import React, { useState } from "react";
import { SiTypescript, SiPython, SiGo } from "react-icons/si";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  {
    id: "typescript",
    name: "TYPESCRIPT",
    filename: "example.ts",
    description: "Production-ready SDK with full type safety",
    icon: SiTypescript,
    code: `import { LayerTao } from '@layertao/sdk';

const client = new LayerTao({
  apiKey: process.env.LAYERTAO_API_KEY,
  baseURL: 'https://api.layertao.ai'
});

const response = await client.chat.completions.create({
  model: 'layer-chat-1',
  messages: [
    {
      role: 'user',
      content: 'Your query here'
    }
  ],
  options: {
    timeout: 5000,
    cache: true
  }
});

console.log(response.choices[0].message.content);`,
  },
  {
    id: "python",
    name: "PYTHON",
    filename: "main.py",
    description: "Simple async integration for rapid development",
    icon: SiPython,
    code: `from layertao import LayerTao
import os

client = LayerTao(
    api_key=os.environ.get("LAYERTAO_API_KEY"),
    base_url="https://api.layertao.ai"
)

async def main():
    response = await client.chat.completions.create(
        model="layer-chat-1",
        messages=[{"role": "user", "content": "Your query here"}]
    )
    print(response.choices[0].message.content)`,
  },
  {
    id: "go",
    name: "GO",
    filename: "main.go",
    description: "High-performance SDK for scalable systems",
    icon: SiGo,
    code: `package main

import (
    "github.com/layertao/sdk-go"
    "fmt"
)

func main() {
    client := layertao.NewClient("YOUR_API_KEY")
    
    resp, _ := client.CreateChatCompletion(layertao.ChatRequest{
        Model: "layer-chat-1",
        Messages: []layertao.Message{
            {Role: "user", Content: "Your query here"},
        },
    })

    fmt.Println(resp.Choices[0].Message.Content)
}`,
  },
];
export function Code() {
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);

  return (
    <section
      id="developer"
      className="py-12 md:py-24 px-4 md:px-6 w-full max-w-7xl mx-auto flex flex-col items-center overflow-hidden"
    >
      {/* 1. Header with forced centering and padding */}
      <div className="text-center mb-10 md:mb-16 space-y-4 w-full">
        <h2 className="text-4xl md:text-5xl font-sans tracking-tight leading-tight px-2">
          One API. Fully Orchestrated.
        </h2>
        <p className="text-t-secondary text-sm md:text-base font-sans max-w-xl mx-auto px-6">
          Send one request. LayerTao handles routing, evaluation, and
          optimization automatically.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-full mb-5">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveLang(lang)}
            className={cn(
              "flex flex-row sm:flex-col items-center sm:text-center cursor-pointer  p-4 md:p-6 rounded-xl border transition-all duration-300 group gap-4 sm:gap-0 min-w-0",
              activeLang.id === lang.id
                ? "bg-white/[0.04] border-white/10"
                : "bg-transparent border-transparent hover:bg-white/5",
            )}
          >
            <div className="flex items-center gap-3 mb-0 sm:mb-3 shrink-0">
              <lang.icon size={18} className="text-white shrink-0" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white truncate">
                {lang.name}
              </span>
            </div>
            {/* 'truncate' or 'line-clamp' prevents long descriptions from pushing width */}
            <p className="text-[11px] md:text-xs text-t-secondary font-sans leading-relaxed text-left sm:text-center line-clamp-2 sm:line-clamp-none">
              {lang.description}
            </p>
          </button>
        ))}
      </div>
      {/* 2. Code Window with 'min-w-0' to prevent expansion */}
      <div className="w-full max-w-full bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-2xl flex flex-col min-w-0">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/5 bg-white/[0.02] shrink-0">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] md:text-xs font-mono text-white/40 tracking-wider truncate px-2">
            {activeLang.filename}
          </span>
          <div className="w-8 md:w-12" />
        </div>

        {/* 3. The Scroll Container */}
        {/* 'w-full' + 'overflow-x-auto' + 'min-w-0' is the magic combo */}
        <div className="p-4 md:p-10 overflow-x-auto custom-scrollbar min-h-[300px] md:min-h-[450px] w-full min-w-0">
          <pre className="font-mono text-xs md:text-sm lg:text-base leading-relaxed text-white/80 w-full">
            <code className="block w-full">{activeLang.code}</code>
          </pre>
        </div>
      </div>

      {/* 4. Language Tabs - Ensuring they stay within bounds */}
    </section>
  );
}
