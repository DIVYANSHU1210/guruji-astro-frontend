import { useState , createContext, useContext, useEffect } from "react";

const infoContext = createContext();

const InfoContextProvider = ({children})=>{
    const initialState = {
        name: '',
        email: '',
        phone: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: ''
      };

    const loadFromLocalStorage = ()=>{
        const personalInfo = JSON.parse(localStorage.getItem('Personal_Info')) || {};
        const addressInfo = JSON.parse(localStorage.getItem('Address_Info')) || {};
        return {...initialState, ...personalInfo, ...addressInfo};
    }
    const [formData, setFormData] = useState(loadFromLocalStorage)

    useEffect(()=>{
        const loadedData = loadFromLocalStorage()
        setFormData(loadedData);
    }, []); 

    const resetFormData = () => {
        localStorage.removeItem("Personal_Info");
        localStorage.removeItem("Address_Info");
        setFormData(initialState);
    };
    const value = {formData, setFormData, resetFormData}
    return (
        <infoContext.Provider value={value}>{children}</infoContext.Provider>
    )
}
export const useFormData = ()=>useContext(infoContext);
export default InfoContextProvider;