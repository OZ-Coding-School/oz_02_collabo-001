import { Link, useNavigate } from "react-router-dom"
import BtnLarge from "../../components/Common/buttons/BtnLarge"

function LoginSelectPage() {

  const navigate = useNavigate();

  return (
    <div className="w-5/12 h-screen py-10 px-20 mx-auto text-center content-center">
      <p className="text-ppBlack text-4xl font-bold">로그인</p>
      <div className="pt-10 pb-4">
        <BtnLarge 
          bgColor={'bg-ppBlue my-4 hover:bg-ppMoveBlue'} 
          text={'PlanPeak 로그인'} 
          onClick={() => { navigate('/login'); }}
        />
        <BtnLarge 
          bgColor={'bg-yellow-300 my-4 text-ppBlack hover:bg-yellow-400'} 
          text={'카카오 로그인'}
        />
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-ppVeryLightGray">
          회원이 아니신가요? &nbsp;
        </p>
        <Link to={'/create-account'} 
          className="text-ppBlue border-2 border-slate-950">
          Create an acount
        </Link>
      </div>
    </div>
  )
}

export default LoginSelectPage