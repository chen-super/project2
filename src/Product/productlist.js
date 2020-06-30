import React from 'react';
import Axios from '../Axios'
class Productslist  extends React.Component {
    componentWillMount(){
        //发起请求
        Axios.post("/healthproject/admin/patientActivity/selectPatientActivityWhere")     //接口地址
        .then((res)=>{
            console.log(res)
           this.setState({
               list:res.data.data.data
           })
        }).catch(function(err){
            console.log(err)
        })
        
    }
    constructor() {
        super();
        this.state = { 
            list: []
         }
    }
    render() { 
        let list = this.state.list.map((item,index)=>{
        return <div key={index}>{item.cancelreason}</div>
        })
        return ( 
            <div>
                {list}
            </div>
         );
    }
}
 
export {Productslist  as default} ;