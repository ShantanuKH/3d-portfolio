const Alert = ({ type, alert }) => {
  return (
    <div className='absolute top-10 left-10 right-10 flex justify-center items-center'>

      <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} p-2 text-indigo-100 leading-none flex items-center`} role="alert">

        <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} flex uppercase px-2 py-1 font-semibold `}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>

        <p className='mr-2 text-left'>{alert}</p>
      </div>

    </div>
  );
};

export default Alert;
