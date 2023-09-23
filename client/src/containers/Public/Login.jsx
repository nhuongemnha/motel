import { Button, InputForm } from "../../components"

const Login = () => {
  return (
    <div className="bg-white w-[600px] mw-600 p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-3">
        <InputForm label={'Số điện thoại'} />
        <InputForm label={'Mật khẩu'} />
      </div>
      <Button
        text="Đăng nhập"
        bgColor='bg-secondary1'
        textColor='text-white'
        fullWidth
      />
      <div className="flex justify-between">
        <small className="text-[#0068ff] hover:text-[orange] cursor-pointer">Bạn quên mật khẩu</small>
        <small className="text-[#0068ff] hover:text-[orange] cursor-pointer">Tạo tài khoản mới</small>
      </div>
    </div>
  )
}

export default Login