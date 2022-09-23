import React, { useState } from 'react'

function CreatePassword() {

  return (
    <div className='text-center'>
        <h2 className='text-2xl text-center mb-5 font-medium'>Create a password</h2>
        <p className='font-medium text-lg'>You will use this to unlock your wallet</p>
        <form>
            <input type="password" name="password" />
            <input type="password" name="confirm" />
        </form>
    </div>
  )
}

export default CreatePassword