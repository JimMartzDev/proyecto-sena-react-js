export default function InputAddServiceForm(params){
    const {className,...rest}=params;
    return <input className={"w-full h-10 bg-gray-50  px-2.5 py-1.5 border border-[#e5e7eb] focus:border-gray-400 focus:outline-none rounded-lg "+className} {...rest} />
}      
