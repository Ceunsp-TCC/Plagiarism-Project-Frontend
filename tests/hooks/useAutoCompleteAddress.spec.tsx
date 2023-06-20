import { renderHook, waitFor } from '@testing-library/react'
import { useAutoCompleteAddress } from '@/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import nock from 'nock'
import type { ReactNode } from 'react'

const schoolCepMock = '01001000'

describe('useAutoCompleteAddress', () => {
  it('Should return correct properties', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const scope = nock(process.env.NEXT_PUBLIC_VIA_CEP)
      .get(`/ws/${schoolCepMock}/json/`)
      .reply(200, {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })

    const { result } = renderHook(() => useAutoCompleteAddress(schoolCepMock), {
      wrapper,
    })

    result.current.autoComplete()
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.address).toBeDefined()
    expect(result.current.error).toBeDefined()
    expect(result.current.isError).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.isSuccess).toBeDefined()
    expect(result.current.autoComplete).toBeDefined()
    scope.done()
  })
  it('Should be return address informations', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const scope = nock(process.env.NEXT_PUBLIC_VIA_CEP)
      .get(`/ws/${schoolCepMock}/json/`)
      .reply(200, {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })

    const { result } = renderHook(() => useAutoCompleteAddress(schoolCepMock), {
      wrapper,
    })
    result.current.autoComplete()
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.address?.cep).toBe('01001-000')
    expect(result.current.address?.logradouro).toBe('Praça da Sé')
    expect(result.current.address?.complemento).toBe('lado ímpar')
    expect(result.current.address?.bairro).toBe('Sé')
    expect(result.current.address?.localidade).toBe('São Paulo')
    expect(result.current.address?.uf).toBe('SP')
    expect(result.current.address?.ibge).toBe('3550308')
    expect(result.current.address?.gia).toBe('1004')
    expect(result.current.address?.siafi).toBe('7107')
    expect(result.current.address?.ddd).toBe('11')
    expect(result.current.isError).toBe(false)
    expect(result.current.isSuccess).toBe(true)
    scope.done()
  })
  it('Should be is invalid cep or error in api', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const scope = nock(process.env.NEXT_PUBLIC_VIA_CEP)
      .get(`/ws/${schoolCepMock}/json/`)
      .reply(200, {
        erro: true,
      })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })

    const { result } = renderHook(() => useAutoCompleteAddress(schoolCepMock), {
      wrapper,
    })
    result.current.autoComplete()
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isError).toBe(true)
    scope.done()
  })
  it('Should be not call auto complete', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useAutoCompleteAddress(schoolCepMock), {
      wrapper,
    })
    const autoCompleteMock = jest.spyOn(result.current, 'autoComplete')

    expect(autoCompleteMock).not.toBeCalled()
  })
})
