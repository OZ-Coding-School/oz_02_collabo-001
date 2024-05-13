import Image1 from '../assets/logo/landing1.png'
import Image2 from '../assets/logo/landing2.png'

function LandingPage() {
    return (
        <div>
            <div className="relative text-center">
                <img className='w-full mx-w-md mx-auto' src={Image1} alt="Landing Page1"/>
                <h1 className="text-ppWhite absolute text-4xl font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{fontSize: '4vw'}}>
                    간편한 모임관리 <br /> 지금 시작해보세요
                </h1>
                <span className="text-ppWhite block mt-12 text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{marginTop: '12vw', fontSize: '2vw'}}>
                    클래스 모임 관리를 효율적이고 간편하게 해드릴게요!
                </span>
            </div>
            <div className="relative text-center">   
                <img className='w-full mx-auto' src={Image2} alt="Landing Page2"/>
                <h1 className="text-ppWhite absolute text-4xl font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full" style={{fontSize: '4vw'}}>
                    일일이 알림 보내기 <br /> 귀찮으시죠?
                </h1>
                <span className="text-ppWhite block mt-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4" style={{marginTop: '12vw', fontSize: '2vw'}}>
                    이메일 자동화로 번거로운 알림 설정을 최소화 해보세요
                </span>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
                
            </div>
        </div>

    );
  }
  
  export default LandingPage;
  