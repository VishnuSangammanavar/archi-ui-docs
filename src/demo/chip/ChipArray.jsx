"use client"

import React, { useState } from 'react'
import { Button, Chip } from 'archi-ui'

const ChipArray = () => {

  const [chipData, setChipData] = useState([
    { key: 0, label: 'Action' },
    { key: 1, label: 'Adventure' },
    { key: 2, label: 'Sci-fiction' },
    { key: 3, label: 'Horror' },
    { key: 4, label: 'Romantic' },
    { key: 5, label: 'Marvel' },
  ]);

  const handleReset = () => {
    setChipData([
      { key: 0, label: 'Action' },
      { key: 1, label: 'Adventure' },
      { key: 2, label: 'Sci-fiction' },
      { key: 3, label: 'Horror' },
      { key: 4, label: 'Romantic' },
      { key: 5, label: 'Marvel' },
    ]);
  }

  const handleChipDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {
        chipData.map((data) => {
          return (
            <Chip
              key={data.key}
              onDelete={handleChipDelete(data)}
            >
              {data.label}
            </Chip>
          )
        })
      }
      <Button onClick={handleReset}>Reset</Button>
    </div>
  )
}

export default ChipArray