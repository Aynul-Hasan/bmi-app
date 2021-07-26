import React,{useState} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Bmi = () => {

    const [weightMethod, setWeightMethod] = useState('')
    const [weight, setWeight] = useState('')
    const [heightMethod, setHeightMethod] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState()
    const heights=["Height","centimeters","Meters","Feet","Inch"]
    const weights=["weight","Kilograms","Pounds"]
    

    // console.log(`${weightMethod} weight is ${weight} ${heightMethod} height is${height}`)
    // console.log(`result is ${result}`)
    const getBmi=(e)=>{
        e.preventDefault();

        // console.log(`hi`)
        if(weightMethod===''||weightMethod==="Weight"||  weight===''|| heightMethod===''|| heightMethod==="Height"|| height==='' ){
            alert('please fill up this filds')
           

        }else if(weightMethod==='1'&& heightMethod==='2'){
            const res= weight/ (height*height);
            setResult( res);
        }else{
            if(weightMethod==='2'&& heightMethod==='1'){
                const kg=(weight*0.4536)
                const meter=(height*0.01)
                const res =kg/(meter*meter)
                setResult(res);
               
            } else if(weightMethod==='2'&& heightMethod==='3'){
                const kg=(weight*0.4536)
                const feet=(height*0.3048)
                const res =kg/(feet*feet)
                setResult(res);
               
            }else if(weightMethod==='2'&& heightMethod==='4'){
                const kg=weight*0.4536
                const inch=height*0.0254
                const res = kg/ (inch*inch)
                setResult(res);
               
            }else if(weightMethod==='2'&& heightMethod==='2'){
                const kg=weight*0.4536;
              
                // const meter=height
                const res =(kg)/(height*height)
                setResult(res);
              
            }else if(weightMethod==='1'&& heightMethod==='1'){
                const meter=(height*0.01)
                const res =(weight)/(meter*meter)
                setResult(res);
               
            }else if(weightMethod==='1'&& heightMethod==='3'){
                const meter=(height*0.3048)
                const res =(weight)/(meter*meter)
                setResult(res);
              
            }else if(weightMethod==='1'&& heightMethod==='4'){
                const meter=(height*0.0254)
                const res =(weight)/(meter*meter)
                setResult(res);
            }
         }
    }

    return (
        <>
        <div className="container mt-5">
          
            <div className="row d-flex  justify-content-center align-content-center">
                <div className="col-lg-7 ">
                    <h1 className="text-center bg-success">BMI Calculator</h1>
                    <div className="bg-dark p-5 rounded">
                    <div className="d-flex justify-content-evenly ">
                          <select onChange={(e)=>setWeightMethod(e.target.value)} class="form-select bg-secondary w-25" aria-label="Disabled select example">
                            {/* <p>weight</p> */}
                            <option  selected>Weight</option>
                            <option value="1">kilograms</option>
                            <option value="2">Pounds</option>
                            </select>
                            <div class="form-floating ">
                                <input onChange={(e)=>setWeight(e.target.value)} type="number" class="form-control  bg-secondary" id="floatingInput" placeholder="Weight"/>
                                <label for="floatingInput">{weightMethod===''?"weight"
                                : weightMethod==="Weight"?"Weight"
                                : weights[weightMethod]}
                                </label>
                                </div>
                    </div>
                    <div className="d-flex justify-content-evenly my-5">
                          <select  onChange={(e)=>setHeightMethod(e.target.value)} class="form-select bg-secondary w-25" aria-label="Disabled select example">
                            {/* <p>weight</p> */}
                            <option className="bg-success opt"  selected>Height</option>
                            <option className="opt"  value="1">centimeters</option>
                            <option className="opt" value="2">meters</option>
                            <option className="opt" value="3">feet</option>
                            <option className="opt" value="4">inches</option>
                            </select>
                            <div class="form-floating ">
                                <input type="number" class="form-control bg-secondary" id="floatingInput" onChange={(e)=>setHeight(e.target.value)} placeholder="Height"/>
                                <label for="floatingInput">{heightMethod===''?"Height"
                                :heightMethod==="Height"? "Height"
                                :heights[heightMethod] }
                                </label>
                                </div>

                    </div>
                    <div className="text-center">
                    <input type="submit" onClick={getBmi} className="btn  btn-outline-secondary mx-auto w-100"/>
                    </div>
                    </div>
                    <div class={result>=25?"card text-white  bg-danger mb-3 mt-5"
                    :result>18.4?"card text-white   bg-success mb-3 mt-5"
                    :result<18.5? "card text-white  bg-warning mb-3 mt-5"
                    : "d-none"} >
                        
                    <div class="row g-0">
                        <div class="col-md-4">
                           <img src={ result>24?"../img/man2.jpg":result>18.4?"../img/man3.jpg":"../img/man4.jpg"}
                             class="img-fluid w-100  h-auto rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div className="card-header text-center">
                            Your BMI 
                                <strong>
                                    {result>24?" Overweight":result>18.4?" Normal":" Underweight"}
                                </strong>
                        </div>
                        <div class="card-body">
                            <div className="card-body">
                                                <h1 className="card-title text-center">{result}</h1>
                                                <hr className="hr" />
                                                <h5 className='text-center mb-3'>Information</h5>
                                                <div className="d-flex justify-content-evenly mb-1">
                                                    <small>Underweight</small>
                                                    <small>Normal</small>
                                                    <small>Overweight</small>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                        <div className="bg-war info-d"></div>
                                                        <div className="bg-succ info-d"></div>
                                                        <div className="bg-dan  info-d"></div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-1">
                                                    <small>16.0</small>
                                                    <small>18.5</small>
                                                    <small>25.0</small>
                                                    <small>40.0</small>
                                                </div>

                                            </div>
                                                
                        
                        </div>
                        <div class="card-footer mt-5 text-muted">
                           Created BY Aynul
                        </div>  
                        </div>
                    </div>
                    </div>
                                    
                
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Bmi
