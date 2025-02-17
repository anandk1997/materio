import { Spinner } from '@/@core/components/Loader'

const loading = () => {
  return (
    <div className='flex justify-center align-items-center h-[100vh]'>
      <Spinner />
    </div>
  )
}

export default loading
