import axios from 'axios';

import Token from './Token'
import AppStorage from './AppStorage'
import { has } from 'lodash';


class User{
    
    login(data){
        axios.post('/api/login',data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res){

        const access_token = res.data.access_token
        //const payload = access_token.split('.')[1]
        const user_name = res.data.user.name
        AppStorage.store(user_name,access_token)
        this.hasToken()

    }

    hasToken(){
        const storedToken = AppStorage.getToken()
        console.log(storedToken)
        if (storedToken){
            return true
        }
        else{
            return false
        }
    }

    loggedIn(){
        this.hasToken()
    }

    logout(){
        AppStorage.clear()
    }

    name(){
        if(this.loggedIn()){
            AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const access_token = AppStorage.getToken()
            const payload = atob(access_token.split('.')[1])

            return payload.sub
        }
    }

}

export default User = new User();