import React, { createContext, useState, useEffect } from "react"

export const Context = createContext()

export const TokenContext = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token")
    return savedToken ? JSON.parse(savedToken) : null
  })

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users")
    return savedUsers ? JSON.parse(savedUsers) : []
  })

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("users", JSON.stringify(users))
  }, [token, users])

  return <Context.Provider value={{ token, setToken, users, setUsers }}>{children}</Context.Provider>
}

