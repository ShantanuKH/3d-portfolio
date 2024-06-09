import React, { Suspense, useRef, useState } from 'react';

//@emailjs/browser for enabling email communication
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import  Loader  from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';



const Contact = () => {
  const formRef = useRef(null);

  // To set the form
  const [form, setForm] = useState({name:'', email:'', message:'' })

  // To set the loading button dynamic measn if we click the button then it should be written as sending and if not then there should be writtin as Send Message
  const[isLoading, setIsLoading] = useState(false);




  // Fox animation

  const [currentAnimation, setCurrentAnimation]=useState('idle')


  const {alert,showAlert,hideAlert} = useAlert();
  

/*HandleChange is responsible for updating the form state object based on user input. It takes an event (e) as its parameter, typically from an input field, and uses the name attribute of the input field as the key to update the corresponding value in the form object. The setForm function is then used to update the form state with the new values.*/ 
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };


  const handleSubmit = (e)=> {
    e.preventDefault();    // Do not relod the page after submitting
    setIsLoading(true);
    setCurrentAnimation('hit');  //Whenever we will submit the form then the fox will run 


    // IMPORTANT FOR SENDING MESSAGE TO OUR EMAIL 
    
    emailjs.send(
      // These service ID and template ID comes from Emailjs Website where I created my account and then connect
      //Service ID
      //Template ID
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Shantanu",
        from_email: form.email,
        to_email: 'khadseshantanu02@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);

      // To show alert that rhe msg is sent successfully
      showAlert({show:true, text:'Message sent successfully!', type:'success'});

      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:'', email:'', message:''});
      },[2000]) //Fox will stop after 2 seconds after sending msg
    }
    ).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      //todo: show error message
      showAlert({ show: true, text: 'I didn/t receive your message', type:'danger'});
    }

    )
  }
  
  const handleFocus = ()=>setCurrentAnimation('walk');  //When we click on any of the input then the fox will walk 
  const handleBlur = ()=> setCurrentAnimation('idle');  // When we exit from any of the input then the fox will stop
  

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/>}
      


        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text'> Reach out </h1>
          <form
          // To receive the email 
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'>
            <label className='text-black-500 font-semibold'>
              Name
              <input
              type='text'
              name='name'
              className='input'
              placeholder='Shantanu Khadse'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>


              <label className='text-black-500 font-semibold'>
              Email
              <input
              type='email'
              name='email'
              className='input'
              placeholder='shantanukhadse784@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>


              <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder="How Can I help You? Let's Connect!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>

              <button
              type='submit'
              className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isLoading}
              >


                {isLoading ? 'Sending...' : 'Send Message'}
                  
              </button>

          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]'>
            <Canvas 
            camera={{
              position:[0, 0, 5],
              fov:75,   // Field of View
              near:0.1,
              far: 1000

            }}>


            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5} />

            <Suspense fallback={<Loader/>}>
              <Fox
              currentAnimation={currentAnimation}
              position={[1,0.35,0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
              
              />
            </Suspense>

            </Canvas>
        </div>
    </section>
  )
}

export default Contact
