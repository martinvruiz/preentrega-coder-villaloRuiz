

export const Form = ({submitOrder, handlechange, formData, error})=>{

    return <>
        <form onSubmit={submitOrder}>
            {
            Object.keys(formData).map((key, i)=>{
                return<div className="flex flex-col text-center">
                    <label htmlFor={key}>Ingrese {key}</label>
                    <input className="border border-cyan-700 rounded-md my-2" type="text" name={key} id={key} value={formData[key]} onChange={handlechange} />
                    {
                        error[key] && <span className="text-red-600">{error[key]};</span>
                    }
            </div>
            })
            }
            <button className="bg-cyan-700 w-full h-9 mt-2 border rounded-xl border-cyan-700 text-white" >Confirmar compra</button>
        </form>
    </>

}