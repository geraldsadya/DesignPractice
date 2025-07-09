"use client"//this line indicates that this file is a client-side component in a Next.js application so that means it can use state and other React features

import { Button } from "@/components/ui/button"; //importing Button component from ui folder

export default function HomePage() {//defines a react component called HomePage
  //this is the main content of the HomePage component
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Chat</h1>

      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </main>
  );
}


