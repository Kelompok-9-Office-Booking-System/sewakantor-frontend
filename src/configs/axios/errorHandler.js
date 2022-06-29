import { toast } from "react-toastify";

const errorHandler = (error) => {
    if(error){
        let message;

        if(error.response) {
            
            if(error.response.code === 500) {
                message = "Something went terible wrong"
            } else {
                message = error.message 

                if(typeof message === "string") toast.error(message)
                return Promise.reject(error)
            }
        } 
            
        
    }
}

export default errorHandler