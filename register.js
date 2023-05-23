import usestate from "react";


const[data , setData] = usestate({
    name:'',
    pnumber:'',
    email:"",
    password:''
})

const handlechange = (e) =>{
    e.preventDefault();
    const {name , value} = e.target;
    setData(prev =>({...prev, [name]:value}));
    console.log(data);
}