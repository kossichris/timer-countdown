import React from 'react'

interface inputProps {
  value: number
  title: string
  type?: string
  handleClick(): void
  handleChange(e: any): void
  handleOneHourClick(): void
}

export const TimerInput = ({
  value,
  title,
  type,
  handleClick,
  handleChange,
  handleOneHourClick,
}: inputProps) => {
  return (
    <div className="z-6 m-3 mx-auto mt-4 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
      {!type && (
        <input
          className="font-redhat mr-4 w-40 rounded-lg px-2 py-1 text-xl outline-none md:text-2xl "
          name="Timer Input"
          type="number"
          placeholder="Enter No. of Days"
          value={value}
          onChange={handleChange}
          min={0}
        />
      )}
      {!type ? (
        <button
          onClick={handleClick}
          className="font-redhat rounded-xl bg-rose-300 px-4 py-2 text-xl font-semibold text-rose-500 transition duration-300 ease-in hover:bg-rose-500 hover:text-rose-100 md:text-xl"
        >
          {' '}
          {title}
        </button>
      ) : (
        <button
          onClick={handleOneHourClick}
          className="font-redhat rounded-xl bg-rose-300 px-4 py-2 text-xl font-semibold text-rose-500 transition duration-300 ease-in hover:bg-rose-500 hover:text-rose-100 md:text-xl"
        >
          {' '}
          {title}
        </button>
      )}
    </div>
  )
}
