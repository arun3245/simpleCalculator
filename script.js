const display=(content)=>{
    output.value+=content
}
const showResult=()=>{
    try{
        output.value=eval(output.value)
    }
    catch{
        output.value=""
        output.placeholder="invalid expression"
    }
    finally{
        console.log("finally task completed")
    }
}
const clear=()=>{
    output.value=" "
}
const remove=()=>{
    output.value=output.value.slice(0,-1)
}