export class Post {
    constructor(
        
        protected photo: string,
        private description: string,
        private type: string,
    ){
        this.photo = photo,
        this.description = description,
        this.type = type
    }

    public getPhoto(){
        return this.photo
    }

    public getDescription(){
        return this.description
    }

    public getType(){
        return this.type
    }

    public setPhoto(){
       return this.photo 
    }

    public setDescription(){
       return this.description 
    }

    public setType(){
       return this.type
    }

}