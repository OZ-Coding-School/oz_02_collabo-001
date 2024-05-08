import { Link } from 'react-router-dom';
import Logo from '../assets/logo/planpeakHorizontal.jpg';

function Header() {
  return (
    <div className='flex items-center justify-between mx-20 py-1'>
      <ul className='flex p-1 items-center space-x-4'>
        <li>
          <Link to="/">
            <img style={{ width: '126px' }} src={Logo} alt="logo" />
          </Link>
        </li>
        <li className='items-center'>
          <Link to="/">모임 참가하기</Link>
        </li>
        <li>
          <Link to="/">모임 관리하기</Link>
        </li>
        <li>
          <Link to="/">플랜픽 소개</Link>
        </li>
      </ul>
      <div className='flex p-2 space-x-4 font-semibold'>
        <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded-full">
          <Link to="/">로그인</Link>
        </button>
        <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded-full">
          <Link to="/">회원가입하기</Link>
        </button>
      </div>
    </div>


  );
}

export default Header;
