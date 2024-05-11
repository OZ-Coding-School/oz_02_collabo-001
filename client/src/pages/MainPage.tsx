import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function MainPage() {
 return (
    <div>
        <Header />
          <div className='flex flex-col w-full md:w-480 h-auto md:h-125 p-4 md:p-0'>
            <div className='w-full md:w-107 h-auto md:h-45 bg-ppBlue text-center mt-2'>
                <h1 className='mt-10 text-ppWhite text-6xl leading-tight'>
                    나의 모임 관리가 <br />
                    쉽고, 편해지는 곳
                </h1>
                <p className='text-ppWhite mt-4 text-xl'>
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
                <ul className='mt-10 grid grid-cols-4 gap-4 [&_span]:text-ppGray'>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>자기계발</span>
                    </li>    
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>운동</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" />
                        <span className='mt-2 text-sm'>음악</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>아웃도어</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>클래스/강의</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>문화/예술</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>N잡</span>
                    </li>
                    <li className="col text-center items-center">
                        <img className='w-40 h-40' src="path_to_image" alt="" /> 
                        <span className='mt-2 text-sm'>스터디</span>
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
                    <li className='col text-left items-center [&_span]:text-ppBlack'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>커피 원데이 클래스</span> <br />
                        <span className='text-sm'>커피를 좋아하는 사람들의 모임</span> <br />
                        <span className='text-sm'>을지로, 2024. 4. 29(목)</span> 
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
                <h2 className="mt-10 text-ppGray text-3xl font-bold text-center">
                    참여를 기다리는 모임
                </h2>
                <ul className='mt-10 ml-2 grid grid-cols-4 gap-4'>
                    <li className='col text-left items-center [&_span]:text-ppBlack'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>커피 원데이 클래스</span> <br />
                        <span className='text-sm'>커피를 좋아하는 사람들의 모임</span> <br />
                        <span className='text-sm'>을지로, 2024. 4. 29(목)</span> 
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
                <h2 className="mt-10 text-ppGray text-3xl font-bold text-center">
                    요즘 핫한 모임
                </h2>
                <ul className='mt-10 ml-2 grid grid-cols-4 gap-4'>
                    <li className='col text-left items-center [&_span]:text-ppBlack'>
                        <img className='w-40 h-40 bg-ppWhite' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>커피 원데이 클래스</span> <br />
                        <span className='text-sm'>커피를 좋아하는 사람들의 모임</span> <br />
                        <span className='text-sm'>을지로, 2024. 4. 29(목)</span> 
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
            <div className='mt-10 items-center text-center'>
                <ul className='flex gap-2'>
                    <li className='w-50 h-30 bg-ppWhite border border-solid border-ppBlack text-left'>광고배너</li>
                    <li className='border border-solid border-ppBlack text-left'>광고배너</li>
                </ul>
            </div>
            <div className='mt-10'>
                <ul className='flex gap-2 text-center'>
                    <li>
                        <img className='w-40 h-40 bg-ppWhite border border-solid border-ppBlack' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>후기</span> <br />
                    </li>
                    <li>
                        <img className='w-40 h-40 bg-ppWhite border border-solid border-ppBlack' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>후기</span> <br />
                    </li>
                    <li>
                        <img className='w-40 h-40 bg-ppWhite border border-solid border-ppBlack' src="path_to_image" alt="" /> 
                        <span className='text-sm text-bold'>후기</span> <br />
                    </li>
                </ul>
            </div>
            <div className='flex flex-auto gab-4'>
                <div className='mt-10 ml-80 text-left'>
                    <h1 className='text-4xl'>쉽고 간편한 <br/> 우리의 모임관리 시스템</h1>
                    <p className='mt-2 text-lg text-ppVeryLightGray'>어떤 클래스, 모임도 비즈니스로, <br />플랜픽과 함게 모임을 시작해볼까요?</p>
                </div>
                <div>
                    <img className='w-90 h-40 border border-solid border-ppBlack' src="path_to_image" alt=""/>
                </div>
            </div>
          </div>
        <Footer />
    </div>
 )
}

export default MainPage;