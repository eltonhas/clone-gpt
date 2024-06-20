'use client'
import { useState } from 'react'

import { ChatInput } from './chat-input'

export function ChatInputClient() {
  const [openAIKey, setOpenAIKey] = useState('')
  return (
    <>
      <ChatInput
        placeholder="🔑    Digite sua chave de API"
        onSubmiteMessage={setOpenAIKey}
      />
    </>
  )
}
