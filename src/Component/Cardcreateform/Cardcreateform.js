import React, { Component } from "react"
import './form.css'

import { Link } from "react-router-dom"

class Cardcreateform extends Component {

    constructor() {
        super()

        this.state = {
            phonename: '',
            phoneedit: true,
            phonecolor: '',
            ar: '',
            arr: JSON.parse(localStorage.getItem('localobj')),
            phoneid: '',
            index: '',
            phonepath: '',
            phonerate: '',
            phonecount: 0,
            phoneboo: true
        }
    }

    componentDidMount(){

        this.state.arr.find((a)=>{

            if(a.phoneedit===false){
                console.log(this.state.arr)
                this.setState({phoneid:a.phoneid})  
                this.setState({phonename:a.phonename})   
                this.setState({phonepath:a.phonepath})  
                this.setState({phonecolor:a.phonecolor}) 
                this.setState({phonerate:a.phonerate})      
            }

        })
       
    }

    

    render() {

        console.log(this)

        const handle = (e) => {

            if (e.target.name === 'name') {

                this.setState({ phonename: e.target.value })

            }

            else if (e.target.name === 'color') {

                this.setState({ phonecolor: e.target.value })
            }

            else if (e.target.name === 'ipath') {

                this.setState({ phonepath: e.target.value })
            }

            else if (e.target.name === 'rate') {

                this.setState({ phonerate: e.target.value })
            }

            else if (e.target.name === 'id') {

                this.setState({ phoneid: e.target.value })
            }

        }

        const sub = (e) => {
            e.preventDefault()
            // this.setState({phoneid:this.state.phoneid+1})
            var localobj = {
                phoneid:this.state.phoneid,
                phonename: this.state.phonename,
                phonecolor: this.state.phonecolor,
                phonepath: this.state.phonepath,
                phonerate: this.state.phonerate,
                phonecount: this.state.phonecount,
                phoneboo: this.state.phoneboo,
                phoneedit: this.state.phoneedit

            }

            storedata(localobj)
        }
        const storedata = (localobj) => {
            var storeformdata = JSON.parse(localStorage.getItem(('localobj'))) || []

            storeformdata.push(localobj)

            var b = storeformdata

            localStorage.setItem('localobj', JSON.stringify(storeformdata))
            b = JSON.parse(localStorage.getItem('localobj'))

            console.log(this.state.arr);

            b.map((a) => {


                if (a.phoneedit === false) {
                    console.log("hellow edit")
                    console.log(localobj);
                    localobj.phoneedit = true
                    console.log('editsubmit')

                    let x = this.state.arr.map((val) => {
                        console.log()
                        return val.phoneedit === false ? localobj : val
                    })

                    console.log(x)
                    localStorage.setItem('localobj', JSON.stringify(x))
                }

            })

            this.setState({ phonename: '' })
            this.setState({ phoneid: '' })
            this.setState({ phonepath: '' })
            this.setState({ phonecolor: '' })
            this.setState({ phonerate: '' })

        }


        return <section>

            <form onSubmit={sub}>

                <label >Id : </label>
                <input name='id' onChange={handle} value={this.state.phoneid} placeholder='phoneid'></input><br></br><br></br>

                <label>Name : </label>
                <input id='name' name='name' onChange={handle} value={this.state.phonename} placeholder='phonename'></input><br></br><br></br>

                <label >color : </label>
                <input name='color' id='age' onChange={handle} value={this.state.phonecolor} placeholder='phonecolor'></input><br></br><br></br>

                <label>Path : </label>
                <input name='ipath' onChange={handle} value={this.state.phonepath} placeholder='phonepath'></input><br></br><br></br>

                <label >rate : </label>
                <input name='rate' onChange={handle} value={this.state.phonerate} placeholder='phonerate'></input><br></br><br></br>


                <button>Submit</button>
            </form>

            <Link to="/home">Go to Home</Link>


        </section>
    }
}

export default Cardcreateform