'use client'

import { ReactElement, useState } from 'react'

import { useChat } from '@/hooks/use-chats'

import { ChatInput } from './_components/chat-input'
import { ChatMessages } from './_components/chat-message'
import { KeyInstructors } from './_components/key-instructors'
import { Sidebar } from './_components/sidebar'

function Home(): ReactElement {
  const [openAIKey, setOpenAIKey] = useState<string>('')
  const {
    chats,
    isLoading,
    selectedChat,
    selectChat,
    addUserMessage,
    deleteChat,
  } = useChat(openAIKey)

  const placeholder = openAIKey
    ? '😁 Digite um “Oi”'
    : '🔑 Digite sua chave de API'

  function handleSubmitMessage(message: string) {
    addUserMessage(selectedChat, message)
  }

  const handleChatSubmit = openAIKey ? handleSubmitMessage : setOpenAIKey

  return (
    <div className="flex">
      <Sidebar
        isVisible={!!openAIKey}
        selectedChat={selectedChat}
        deleteChat={deleteChat}
        selectChat={selectChat}
        chats={chats}
      />

      <main className="flex h-screen w-full flex-col justify-between p-10">
        <h1 className="pb-5 text-center text-3xl font-bold text-gray lg:text-[45px]">
          CloneGPT
        </h1>

        {openAIKey ? (
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
        ) : (
          <KeyInstructors />
        )}

        <ChatInput
          placeholder={placeholder}
          onSubmiteMessage={handleChatSubmit}
        />
      </main>
    </div>
  )
}

export default Home
