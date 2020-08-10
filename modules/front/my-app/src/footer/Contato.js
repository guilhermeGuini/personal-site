import React, { Component } from 'react';

import TextField from '../commons/forms/TextField';
import TextArea from '../commons/forms/TextArea';

class Contato extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!event.target.checkValidity()) {
            event.target.classList.add('was-validated');
        } else {
            event.target.classList.remove('was-validated');
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>Contato</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <TextField name="Nome" type="text" required="true" id="name" />
                            <TextField name="Email" type="email" required="true" id="email" />
                            <TextArea name="Mensagem" required="true" id="msg" />

                            <div className="form-group">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato;