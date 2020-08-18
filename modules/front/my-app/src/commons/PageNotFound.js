import React from 'react';
import GenericNotFound from './GenericNotFound';

export default function PageNotFound() {

    return (
        <div>
            <div className="row">
                <div className="col-md-12 text-center title">
                    <h1>Página não encontrada!</h1>
                </div>
                <GenericNotFound msg="O oh, desculpe, esta página não está disponível!" />
            </div>
        </div>
    );
}