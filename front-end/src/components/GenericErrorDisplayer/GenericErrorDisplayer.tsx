type GenericErrorDisplayerProps = {
  error: Error | null
}

export const GenericErrorDisplayer = ({ error }: GenericErrorDisplayerProps) => {
  return (
    <div className="flex flex-col gap-x-12 text-red-500 text-lg">
      <p>Something went wrong...</p>
      <p>{error?.message}</p>
      <p>{error?.name}</p>
    </div>
  )
}