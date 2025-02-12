'use client'
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react'

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
];

export const Categories = ({ className }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex item-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${id}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  )
}

