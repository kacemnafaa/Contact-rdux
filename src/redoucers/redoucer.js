let stateinitial=[
    {
    name:'kacem',
    phone:'94467458',
    email:'kacem@gmail.com',
    id:Math.random()
    }
]
const Listcontredoucer=(state=stateinitial,action)=>{
    switch(action.type){
        case'ADD-CONTACT':
        return state.concat(action.newcontact) 
        case'REMOVE-CONTACT':
        return state.filter((el,index)=>action.id!==el.id)
        
        default:
            return state
    }
}
export default Listcontredoucer