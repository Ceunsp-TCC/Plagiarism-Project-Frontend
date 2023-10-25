import { toast, Slide } from 'react-toastify'
import { Toast } from '@/components'
import type { ShowToastProps } from '@/components/types'

export const ShowToast = ({
  title = '',
  toastType = 'INFO',
  description = '',
  onClick,
}: ShowToastProps) => {
  toast(Toast({ title, toastType, description, onClick }), {
    autoClose: false,
    transition: Slide,
    position: 'top-center',
    hideProgressBar: true,
    closeButton: false,
  })
}
