import { Request, Response } from "express";


const UserController = {
    get: (request: Request, response: Response) => {
        return response.send( { id: request.params.id,name: "Gilmar", password: "eusouasenha"} )
    },
    list: () => {

    }   
}

export default UserController