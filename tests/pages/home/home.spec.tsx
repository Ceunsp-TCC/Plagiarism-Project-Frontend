import { render, renderHook } from '@testing-library/react'
import Home from '@/app/(private)/home/page'
import React from 'react'
import { useAuthStore } from '@store'
import { mockUserSchoolState } from '@tests/helpers'
import { act } from 'react-dom/test-utils'

describe('Home', () => {
  it('Should be render a home', async () => {
    const { result } = renderHook(() => useAuthStore())
    const { getByText, getByAltText, debug } = render(<Home />)

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })
    const message = getByText('Bem vindo ao School Guardian')
    const name = getByText('Isis e Aline Pães e Doces Ltda')

    expect(message).toBeVisible()
    expect(name).toBeVisible()
  })
})
