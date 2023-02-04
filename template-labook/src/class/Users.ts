export class Users {
    constructor(
        private name: string,
        private email: string,
        private password: number,
    ){
        this.name = name,
        this.email = email,
        this.password = password
    }

    

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

   

    public setName(){
        return this.name
    }

    public setEmail(){
        return this.email
    }

    public setPassword(){
        return this.password
    }
}