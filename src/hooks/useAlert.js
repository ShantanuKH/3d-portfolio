import {useState} from 'react'

const useAlert = () => {
  const[alert,setAlert]=useState({ show: false,text:'',type: 'danger'})

  const showAlert  = ({ text, type = 'danger'}) => setAlert({
    show: true,
    text,
    type
  })


  const hideAlert  = () => setAlert({
    show: false,
    text: '',
    type: 'danger'


  })



// Hooks doent return any jsx the return object
  return { alert, showAlert, hideAlert}
}

export default useAlert
