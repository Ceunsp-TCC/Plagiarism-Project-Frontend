'use client'
import { Button } from '@/components'
import { useWarningAccountInReview } from '@/app/(public)/signup//hooks'

export default function WarningAccountInReview() {
  const { handleNavigate } = useWarningAccountInReview()

  return (
    <div>
      <div className="mb-10">
        <p className="text-gray-500 font-bold">Cadastro finalizado</p>
      </div>
      <div>
        <h1 className="font-bold mb-10 text-2xl text-white tracking-tight">
          Sua conta foi criada com sucesso e está em análise. Aprovação estimada
          em algumas horas. Agradecemos sua paciência e em breve você terá
          acesso completo à plataforma.
        </h1>
      </div>
      <div className="w-full p-3">
        <div className="flex flex-wrap md:justify-end -m-2">
          <div className="w-full">
            <Button onClick={() => handleNavigate('/login')}>
              Entrar na conta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
