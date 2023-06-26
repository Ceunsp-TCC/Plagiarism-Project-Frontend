import Lottie from 'lottie-react'
import loading from '@public/animations-lottie/button-loading.json'

export function ButtonLoadingLottie() {
  return (
    <div className="w-14" role="loading">
      <Lottie className="w-full h-full" animationData={loading} />
    </div>
  )
}
