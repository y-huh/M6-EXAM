import React, { useContext, useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../../assets/images/loading.png"
import { Context } from "../../context/Context"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { users, setToken } = useContext(Context)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const email = e.target.email.value
    const password = e.target.password.value

    if (users.length > 0) {
      const user = users.find((item) => (item.email === email || item.name === email) && item.password === password)

      if (user) {
        toast.success("Welcome")
        setTimeout(() => {
          setIsLoading(false)
          setToken({ email: user.email, name: user.name })
          localStorage.setItem("user_info", JSON.stringify(user))
          navigate("/")
        }, 1000)
      } else {
        toast.error("Invalid credentials")
        setIsLoading(false)
      }
    } else {
      toast.error("No users registered")
      setIsLoading(false)
    }
  }

  return (
    <div className="h-[100vh] bg-[#fcfafa] mx-auto flex flex-col items-center justify-center">
      <h1 className="font-semibold text-[36px] mb-[53px] leading-[44px] text-center text-[#4F4F4F]">
        Welcome, Log into your account
      </h1>

      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white flex items-center justify-center flex-col w-[512px] text-center">
        <h1 className="col-end-3 font-medium text-[16px] mt-[72px] text-center w-[200px] text-[#667085] leading-[25px] mb-[36px]">
          It is our great pleasure to have you on board!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-[250px] space-y-[25px] mb-[14px]"
          autoComplete="off"
        >
          <Input
            extraClass={"!w-[250px] !py-[13px] pl-[13px]"}
            name={"email"}
            type={"text"}
            placeholder={"Email or Username"}
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
            title={"Log In"}
            type={"submit"}
          />
        </form>
        <div className="flex items-center justify-center">
          <Link className="text-[#1DA1F2] text-[18px]" to={"/register"}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

