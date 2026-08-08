export default function InputAddServiceForm(params){
    const {className,...rest}=params;
    return <input className={"px-2.5 py-1.5 border border-[#e5e7eb] rounded-md "+className} {...rest} />
}      
