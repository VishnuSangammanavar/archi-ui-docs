"use client"

import React, { useState } from 'react'
import { FormControl, FormHelperText, PinInput } from 'archi-ui'

const PinInputValidation = () => {

  const [pinValue, setPinValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePinChange = (value) => {
    setPinValue(value);
    setIsError(value !== '' && value !== '1234');
    setIsSuccess(value !== '' && value == '1234');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <p className="mt-2 text-sm">Try typing "1234" to clear the error.</p>
      <FormControl>
        <PinInput
          length={4}
          value={pinValue}
          onChange={handlePinChange}
          error={isError}
          color={isError ? 'error' : 'primary'}
        />
        <FormHelperText error={isError} className={`${isSuccess && 'text-green-500'}`}>{isError ? 'Invalid PIN!' : isSuccess ? 'Success!' : 'Enter the pin'}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default PinInputValidation
