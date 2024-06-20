'use client'
import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/utils/cn'

interface SidebarProps {
  isVisible: boolean
}

export function Sidebar({ isVisible }: SidebarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(window.innerHeight > 768)

  function handleClick() {
    setIsOpen((prev) => !prev)
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
              'visible fixed h-screen w-screen bg-black/50 opacity-0 transition-all duration-300 md:hidden',
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
                  alt="abrir/fechar menu"
                />
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
