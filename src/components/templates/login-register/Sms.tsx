

type TPSms = {
  handleBack: () => void
}


const Sms = ({ handleBack }: TPSms) => {
  return (
    <>
      <div className="grid bg-white p-12 px-24 w-[380px] font-shabnam mx-auto my-28 mb-8 rounded shadow-md text-center text-black">
        <p>کد تایید</p>
        <span className="text-sm mt-4.5 text-[#6d6d6d] opacity-60 whitespace-nowrap">
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>
        <span className="text-sm mt-2 text-[#6d6d6d] opacity-60 whitespace-nowrap">
          09921558293
        </span>
        <input
          className="font-shabnam p-3.5 bg-white text-black rounded border border-black ltr mt-5"
          type="text"
        />
        <button className="mt-4 p-3 cursor-pointer font-shabnam bg-[#34180e] text-white">
          ثبت کد تایید
        </button>
        <p className="text-sm mt-2 opacity-60 cursor-pointer whitespace-nowrap">
          ارسال مجدد کد یکبار مصرف
        </p>
      </div>
      <p onClick={handleBack} className="block w-max mx-auto font-shabnam cursor-pointer text-sm text-[#34180e]">لغو</p>
    </>
  );
};

export default Sms;
