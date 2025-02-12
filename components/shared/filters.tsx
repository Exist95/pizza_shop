import React from 'react'
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  return (
    <div className={className}>
      <Title text='asd' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='1111' value='1' />
        <FilterCheckbox text='2222' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>asdasd</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' min={100} max={1000} placeholder='1000' />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />

      </div>

      <CheckboxFiltersGroup
        title='asda'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'asd',
            value: '1',
          },
          {
            text: 'asd',
            value: '2',
          },
          {
            text: 'asd',
            value: '3',
          },
          {
            text: 'asd',
            value: '4',
          },
          {
            text: 'asd',
            value: '5',
          },
          {
            text: 'asd',
            value: '6',
          }
        ]}
        items={[
          {
            text: 'asd',
            value: '1',
          },
          {
            text: 'asd',
            value: '2',
          },
          {
            text: 'asd',
            value: '3',
          },
          {
            text: 'asd',
            value: '4',
          },
          {
            text: 'asd',
            value: '5',
          },
          {
            text: 'asd',
            value: '6',
          },
          {
            text: 'asd',
            value: '1',
          },
          {
            text: 'asd',
            value: '2',
          },
          {
            text: 'asd',
            value: '3',
          },
          {
            text: 'asd',
            value: '4',
          },
          {
            text: 'asd',
            value: '5',
          },
          {
            text: 'asd',
            value: '6',
          },
          {
            text: 'asd',
            value: '1',
          },
          {
            text: 'asd',
            value: '2',
          },
          {
            text: 'asd',
            value: '3',
          },
          {
            text: 'asd',
            value: '4',
          },
          {
            text: 'asd',
            value: '5',
          },
          {
            text: 'asd',
            value: '6',
          }
        ]}
      />
    </div>
  )
}
