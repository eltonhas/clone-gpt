'use client'
import Image from 'next/image'
import { useState } from 'react'

import type { Chats } from '@/hooks/use-chats'
import { cn } from '@/utils/cn'

interface SidebarProps {
  isVisible: boolean
  chats: Chats
  selectedChat: string | null
  selectChat: (chatId: string) => void
  deleteChat: (chatId: string) => void
}

export function Sidebar({
  isVisible,
  chats,
  selectChat,
  deleteChat,
  selectedChat,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(
    global.window?.innerHeight > 768,
  )

  function handleClick() {
    setIsOpen((prev) => !prev)
  }

  function handleChatClick(chatIndex: string) {
    selectChat(chatIndex)
  }

  function handleDeleteClick(
    event: React.MouseEvent<HTMLButtonElement>,
    chatIndex: string,
  ) {
    event.stopPropagation()

    deleteChat(chatIndex)
  }

  return (
    <>
      {isVisible && (
        <>
          <button
            onClick={handleClick}
            className="absolute left-4 top-4 z-10 flex items-center justify-center rounded-md border border-border bg-background-dark p-2"
          >
            <Image
              src="/images/open-menu.svg"
              width={25}
              height={16}
              alt="abrir/fechar menu"
            />
          </button>

          <div
            className={cn(
              'visible fixed h-screen w-screen bg-black/60 opacity-0 transition-all duration-300 md:hidden',
              isOpen && 'opacity-100',
            )}
          />
          <nav
            className={cn(
              'fixed z-10 flex h-screen w-0 flex-col overflow-hidden bg-background-dark p-0 opacity-0 transition-all duration-300 md:relative',
              isOpen && 'visible w-[288px] p-4 opacity-100 md:w-[377px]',
            )}
          >
            <div className="flex justify-between gap-4">
              <h3 className="basis-4/5 rounded-md border border-border p-2 text-center text-base font-semibold text-gray">
                Lista de conversas
              </h3>
              <button
                onClick={handleClick}
                className="flex basis-1/5 items-center justify-center rounded-md border border-border bg-background-dark p-2"
              >
                <Image
                  src="/images/open-menu.svg"
                  width={25}
                  height={16}
                  alt="Abrir/fechar menu"
                />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {Object.keys(chats).map((chatIndex) => (
                <div
                  key={chatIndex}
                  onClick={() => handleChatClick(chatIndex)}
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-lg bg-background-light px-3 py-2',
                    selectedChat === chatIndex && 'border-2 border-border',
                  )}
                >
                  <div className="mr-2 flex items-center gap-3">
                    <Image
                      src="/images/balloon.svg"
                      width={17}
                      height={18}
                      alt="Icone de chat"
                    />
                    <span className="max-w-[180px] truncate text-ellipsis text-white">
                      {chats[chatIndex].title}
                    </span>
                  </div>

                  <button
                    disabled={Object.keys(chats).length === 1}
                    onClick={(ev) => handleDeleteClick(ev, chatIndex)}
                    className="disabled:invisible"
                  >
                    <Image
                      src="/images/trash.svg"
                      width={13}
                      height={18}
                      alt="Icone de lixeira para apagar conversa"
                    />
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  )
}
