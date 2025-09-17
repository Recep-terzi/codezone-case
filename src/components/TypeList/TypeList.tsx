import React from 'react'

interface IPropsTypeList {
    selected?: any;
    setSelected?: any;
}
const TypeList: React.FC<IPropsTypeList> = ({ selected, setSelected }) => {
    return (
        <>
            {
                ['Türk Rap', 'Yabancı Rap', 'Rap Haberleri', 'Haftanın Videoları', 'Ayın Videoları', 'Rap Sohbetleri', 'Rap Müsabakaları'].map((list: any, key: any) => (
                    <p key={key} onClick={() => setSelected(list)} className={`whitespace-nowrap px-5 py-[10px] border-[1px] border-white text-[16px] font-normal text-white w-max hover:bg-yellow hover:text-black transition-all cursor-pointer hover:font-bold ${selected === list && 'bg-yellow !text-black !font-bold '}`}>
                        {list}
                    </p>
                ))
            }
        </>
    )
}

export default TypeList