'use client'
import Image from 'next/image'
import {
  type ChangeEvent,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  useState,
} from 'react'

interface ChatInputProps {
  placeholder: string
  onSubmiteMessage: (key: string) => void
}

export function ChatInput({ placeholder, onSubmiteMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  function handleKeyDown(
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
  ) {
    if (event.key === 'Enter') {
      onSubmiteMessage(inputValue)
      setInputValue('')
    }
  }

  function handleClick() {
    onSubmiteMessage(inputValue)
    setInputValue('')
  }
  return (
    <div className="flex w-full justify-center p-4 lg:p-10">
      <div className="relative mb-4 w-full max-w-[833px] lg:mb-10">
        <input
          type="text"
          className="boreder flex h-10 w-full rounded-md border-b bg-background-light p-6 text-sm text-gray ring-offset-background-chat placeholder:text-gray focus-visible:ring-background-light focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        <div className="absolute right-6 top-1/2 flex -translate-y-1/2 cursor-pointer items-center">
          <button onClick={handleClick}>
            <Image
              src="/images/send-icon.svg"
              width={20}
              height={20}
              alt="icone de envio de mensagens"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
