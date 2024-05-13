
import { Link } from "react-router-dom"
import BtnLarge from "../../components/Common/buttons/BtnLarge"
import Input from "../../components/Common/forms/Input"


function Login() {
  return (
    <div className="w-2/5 py-10 px-12 mx-auto my-96 text-center">
    {/* border-solid border border-slate-100 rounded-2xl shadow-md shadow-slate-300 */}
      <p className="text-ppBlack text-4xl font-bold">로그인</p>
      <div className="flex flex-col pt-10 pb-4">
        <Input name={''} id={''} placeholderText={'Email'}/>
        <Input name={''} id={''} placeholderText={'Password'}/>
        {/* <BtnLarge bgColor={'bg-yellow-300 my-4 text-ppBlack hover:bg-yellow-400'} text={'카카오 로그인'}/> */}
        <BtnLarge bgColor={'bg-ppBlue my-4 hover:bg-ppMoveBlue'} text={'PlanPeak 로그인'} />
      </div>
      <div className="flex justify-center">
        <div className="grow text-start">
          <Link to={'/'} className="text-ppBlue border-2 border-slate-950">PW 찾기</Link>        
        </div>
        <div className='flex'>
          <p className="text-ppVeryLightGray">회원이 아니신가요? &nbsp;</p>
          <Link to={'/'} className="text-ppBlue border-2 border-slate-950">Create an acount</Link>          
        </div>
      </div>
    </div>
  )
}

export default Login