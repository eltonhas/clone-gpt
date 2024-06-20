import { ReactElement } from 'react'

import { ChatInputClient } from './_components/chat-input-client'
import { KeyInstructors } from './_components/key-instructors'

function Home(): ReactElement {
  return (
    <main className="flex h-screen w-full flex-col justify-between p-10">
      <h1 className="pb-5 text-center text-3xl font-bold text-gray lg:text-[45px]">
        CloneGPT
      </h1>

      <KeyInstructors />
      <ChatInputClient />
    </main>
  )
}

export default Home
