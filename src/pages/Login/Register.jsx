import React, { useContext, useState } from "react"
import Logo from "../../assets/images/logo.svg"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../../assets/images/loading.png"
import { Context } from "../../context/Context"
import toast, { Toaster } from "react-hot-toast"

const Register = () => {
  const { setUsers, users } = useContext(Context)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function handleRegisterSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const email = e.target.email.value
    const name = e.target.phone.value
    const password = e.target.password.value

    const userExists = users.some((user) => user.email === email || user.name === name)

    if (userExists) {
      toast.error("User already exists")
      setIsLoading(false)
      return
    }

    const newUser = { email, name, password }
    setUsers((prevUsers) => [...prevUsers, newUser])

    toast.success("Successfully created")

    setTimeout(() => {
      e.target.reset()
      setIsLoading(false)
      navigate("/")
    }, 1000)
  }


  return (
      <div className="h-[100vh] bg-[#fcfafa] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-semibold text-[36px] mb-[53px] leading-[44px] text-center text-[#4F4F4F]">
          Welcome, Sign up
        </h1>
        <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white w-[512px] text-center">
        <div className="flex items-center justify-center mt-[72px]">
          <h1 className="col-end-3 font-medium text-[16px] text-center w-[200px] text-[#667085] leading-[25px] mb-[36px]">
            It is our great pleasure to have you on board!
          </h1>
        </div>
        <form
          onSubmit={handleRegisterSubmit}
          autoComplete="off"
          className="flex flex-col w-full justify-center items-center space-y-[25px] mb-10"
        >
          <Input
            extraClass={"!w-[250px] !py-[13px] pl-[13px]"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your Email"}
            required
          />
          <Input
            extraClass={"!w-[250px] !py-[13px] pl-[13px]"}
            name={"phone"}
            type={"tel"}
            placeholder={"Create your Login"}
            required
          />
          <Input
            extraClass={"!w-[250px] !py-[13px] pl-[13px]"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            required
          />
          <Button
            extraClass={"!w-[250px] !rounded-[4px] !mb-[100px]"}
            isLoading={isLoading}
            loadingImg={Loading}
            title={"Sign up"}
            type={"submit"}
          />
        </form>
      </div>
    </div>
  )
}

export default Register

