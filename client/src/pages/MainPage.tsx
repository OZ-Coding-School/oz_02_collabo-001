import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function MainPage() {
 return (
    <div>
        <Header />
          <div className='flex flex-col w-full md:w-480 h-auto md:h-125 p-4 md:p-0'>
            <div className='w-full md:w-107 h-auto md:h-45 bg-ppBlue text-center mt-2'>
                <h1 className='mt-2 text-ppWhite text-lg md:text-xl leading-tight'>
                    나의 모임 관리가 <br />
                    쉽고, 편해지는 곳
                </h1>
                <p className='text-ppWhite mt-2'>
                    클래스, 모임 관리를 효율적이고 간편하게 해드릴게요!
                </p>
                <br />
                <span className="mt-4 overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                    <Link to="/" className="block py-2 px-3 text-ppVeryLightGray hover:text-white">
                    모임 둘러보기
                    </Link>
                </span>
            </div>
            <div className='flex flex-col mt-10 items-center justify-center'>
                <ul className="mt-10 ml-2 grid grid-cols-4 gap-4">
                    <li className="col text-center items-center">
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>자기계발</span>
                    </li>    
                    <li className="col text-center items-center">
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>운동</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" />
                        <span className='mt-2 text-sm text-ppGray'>음악</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>아웃도어</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>클래스/강의</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>문화/예술</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>N잡</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className="w-40 h-40" src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm text-ppGray'>스터디</span>
                    </li>
                </ul>
                <span className="mt-10 overflow-hidden border border-solid border-ppVeryLightGray rounded-full hover:border-transparent hover:bg-ppBlue">
                    <Link to="/" className="block py-2 px-3 text-ppVeryLightGray hover:text-white font-['Pretendard']">
                    더 많은 카테고리 보기
                    </Link>
                </span>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center bg-ppLightGray'>
                <h2 className="mt-10 text-ppGray text-3xl font-bold text-center">
                    곧 마감되는 모임
                </h2>
                <ul className='mt-10 ml-2 grid grid-cols-4 gap-4'>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack text-bold'>커피 원데이 클래스</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>드로잉 모임</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>영화 평론 모임</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>문문문</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>커피 원데이 클래스</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>드로잉 모임</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>영화 평론 모임</span> 
                    </li>
                    <li className='col text-center items-center'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-ppBlack'>문문문</span> 
                    </li>
                </ul>
            </div>
          </div>
        <Footer />
    </div>
 )
}

export default MainPage;