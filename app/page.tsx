"use client"//this line indicates that this file is a client-side component in a Next.js application so that means it can use state and other React features

import { Button } from "@/components/ui/button"; //importing Button component from ui folder
import { Card } from "@/components/ui/card"

export default function HomePage() {//defines a react component called HomePage
  //this is the main content of the HomePage component
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Welcome to the Chat</h1>
      <Button onClick={() => alert("You clicked me!")}>Click Me</Button>
    </main>
  );
}

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <Card>
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p>This content is inside a Card.</p>
      </Card>
    </main>
  )
}
