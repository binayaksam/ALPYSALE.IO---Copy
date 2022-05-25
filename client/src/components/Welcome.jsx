
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";


const CommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handlechange   }) => (
    <input
    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    onchange={(e) => handlechange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"

    />
);
const Welcome = () => {
 
  const ConnectWallet = () => {

  }

  const handlesubmit = () => {

}
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Buy $ALPY <br /> before it's too late
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              A Step towards new gen DEFI 
          </p>

          <button
          type="button"
          onclick={ConnectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#f34018] p-3 rounded-full cursor-pointer hover:bg-[#f33444]"

          >
            <p className="text-white text-base font-semibold"> Connect Wallet </p>
          </button>


          <div className="grid sm:grid-cols-2 grid-cols-2 w-full mt-10">
          <div className={`rounded-tl-2xl ${CommonStyles}`}>
                  Target Raise 
              </div>
              
              <div className={`rounded-tr-2xl ${CommonStyles}`}>
                  $150,000 
              </div>
              <div className={` ${CommonStyles}`}>
                  Token Price 
              </div>
              <div className={` ${CommonStyles}`}>
                  0.75 $USDC 
              </div>
              <div className={`rounded-bl-2xl ${CommonStyles}`}>
                  Private-sale Date 
              </div>
              <div className={`rounded-br-2xl ${CommonStyles}`}>
                  -
              </div>

          </div>
          
              </div>

              <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">

                  <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                      <div  className="flex justify-between flex-col w-full h-full">
                          <div className="flex justify-between items-start">
                              <div  className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                              
                              </div>
                               
                          </div>
                          <div>
                              <p className="text-white font-light text-lg mt-1">
                                Address
                                <p className="text-white font-semibold text-lg mt-1">
                  Polygon
                </p>
                              </p>
                          </div>
                      </div>

                  </div>

                  <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
                    <Input placeholder=" Buying Amount " name="buyingamount" type="text" handlechange={() => {}} />

                    <div className="h-[1px] w-full bg-gray-400 my-2" >

                        {false ? (
                         <Loader />
                        ) : (
                            <button
                            type="button"
                            onclick={handlesubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#f34018] rounded-full cursor-pointer"
                            >
                             Buy Now
                            </button>
                        )}

                    </div>

                  </div>
                  
                </div>

            </div>

        </div>
        
            

            

       
    );
}

export default Welcome;