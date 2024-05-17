import { Link } from 'react-router-dom';
import Logo from '../assets/logo/planpeakHorizontal.jpg';
import { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // 메뉴 토글 함수
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    // 메뉴 열기/닫기 버튼에 이벤트 리스너 추가
    const burger = document.querySelector('.navbar-burger');
    burger?.addEventListener('click', toggleMenu);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      burger?.removeEventListener('click', toggleMenu);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="content flex items-center justify-between py-1">
        <ul className={`flex p-1 items-center space-x-4 ${isMenuOpen ? "hidden" : "block"} md:block`}>
          <li>
            <Link to="/">
              <img style={{ width: '126px' }} src={Logo} alt="PlanPeak logo" />
            </Link>
          </li>
          <li className='md:flex p-1 items-center space-x-4'>
            <Link to="/user/meetinglist" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 참가하기
            </Link>
            <ul className="hidden md:flex items-center space-x-1">
              <li>
                <Link to="/browse" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  모든 모임 둘러보기
                </Link>
              </li>
              <li>
                <Link to="/participations" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  내가 참여중인 모임
                </Link>
              </li>
              <li>
                <Link to="/history" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
                  나의 모임 이력
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admin/meetinglist" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              모임 관리하기
            </Link>
          </li>
          <li>
            <Link to="/about" className="p-2 text-ppVeryLightGray hover:text-ppBlue">
              플랜픽 소개
            </Link>
          </li>
        </ul>
        <div className='lg:hidden'>
            <button className='navbar-burger flex items-center text-blue-600 p-3'>
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
        </div>
        <div className='flex p-2 space-x-4 md:flex'>
          {isLoggedIn ? (
            <>
              <span className="overflow-hidden rounded-full">
                <Link to="/" className="block py-2 px-3 hover:text-white">
                  {userName}
                </Link>
              </span>
              <span className="overflow-hidden rounded-full">
                <Link to="/mypage" className="block py-2 px-3 hover:text-white">
                  마이페이지
                </Link>
              </span>
              <span className="overflow-hidden rounded-full">
                <Link to="/logout" className="block py-2 px-3 hover:text-white" onClick={() => setIsLoggedIn(false)}>
                  로그아웃
                </Link>
              </span>
            </>
          ) : (
            <>
              <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                <Link to="/login" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
                  로그인
                </Link>
              </span>
              <span className="overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                <Link to="/signup" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
                  회원가입하기
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;