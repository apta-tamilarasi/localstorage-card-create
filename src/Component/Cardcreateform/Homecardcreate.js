import React, { Component } from "react"
import './form.css'

import { FaTrash,FaEdit} from 'react-icons/fa'
import { Link } from "react-router-dom"

class Homecardcreate extends Component {

    constructor() {
        super()

        this.state = {
            obj:'',
            arr: JSON.parse(localStorage.getItem('localobj'))
        }

        console.log(this.state.arr)

    }


   

    render() {


        const de=(val)=>{
            console.log('decrement')
           let x= this.state.arr.map((e)=>{
                return val===e.phoneid?e.phonecount>0?{...e,phonecount:e.phonecount-1}:e:e
            })

            console.log(x)

            this.setState({arr:x})
        }

        
        const ind=(val)=>{
            console.log('increment')

            let y=this.state.arr.map((e)=>{
                return val===e.phoneid?{...e,phonecount:e.phonecount+1}:e
            })
            console.log(y)

            this.setState({arr:y})
        }
      

        const del = (val) => {
            console.log('hello')
           
            let y = this.state.arr.filter((e) => {
                return val !== e.phoneid
            })
            console.log(y)
           
           localStorage.setItem('localobj',JSON.stringify(y))

           this.setState({arr: JSON.parse(localStorage.getItem('localobj'))})

        }

        const edit=(id)=>{

            console.log('hello edit')
            
            let y=this.state.arr.map((e)=>{
                return e.phoneid===id?{...e, phoneedit:e.phoneedit=false}:e
    
            })

            console.log((y));

            localStorage.clear()
            localStorage.setItem('localobj',JSON.stringify(y))
            // this.setState({arr: JSON.parse(localStorage.getItem('localobj'))})

    
        }

        return <section>

            <div className="formcon">

                {
                    this.state.arr.map((a, i)=> {

                        return a.phoneboo === true ?

                            <div className="formcol" key={i}>
                                <div className="formimage">
                                    <img src={a.phonepath} alt="loading"></img>
                                </div>

                                <div className="formcontent">
                                    <h2 style={{ color: 'purple' }}>{a.phonename}</h2>
                                    <p>{a.phonecolor}</p>
                                    <p>{a.phonerate}</p>
                                </div>
                                <div>
                                    <button onClick={()=>{de(a.phoneid)}}> -</button><span>{a.phonecount}</span> <button onClick={()=>{ind(a.phoneid)}}> +</button>
                                </div>
                                <div className="formicon">
                                    <div >
                                        <FaTrash onClick={() => del(a.phoneid)} />
                                    </div>
                                    <div >
                                       
                                        <Link to='/' onClick={()=>edit(a.phoneid)}><FaEdit/></Link>
                                    </div>

                                </div>


                            </div> : ''
                    })
                }

            </div>

        </section>
    }
}

export default Homecardcreate