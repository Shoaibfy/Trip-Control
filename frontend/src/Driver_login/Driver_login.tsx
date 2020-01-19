import React from 'react';
import './Driver_login.scss';
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class Driver_login extends Myservice {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if(this.fetch_data("/api/login_status/","POST","driver=1").toLowerCase() != "no data")
        window.location.assign("#driver_panel")
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    login = () => {
        let user_details = {
            //@ts-ignore
            driver: this.refs.name.value,
        }
        if (this.fetch_data("/api/login_driver/", "POST", null, user_details) == "pass")
            window.location.assign("#driver_panel")
        else
            alert("Invalid username")
    }
    render() {
        return (
            <div className="Driver_login">
                <input type="text" ref="name" />
                <input type="button" value="Login" onClick={this.login.bind(this)} />
            </div>
        )
    }
}

export default Driver_login;
