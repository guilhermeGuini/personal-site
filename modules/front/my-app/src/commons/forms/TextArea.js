import React, { Component } from 'react';

class TextArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPlaceHolder: true
        }
        this.changeShowPlaceHolder = this.changeShowPlaceHolder.bind(this);
    }

    changeShowPlaceHolder = (e) => {
        let canShow;

        if (e.type === 'focus') {
            e.target.placeholder = '';
            canShow = false;
        } else if (e.type === "blur") {
            canShow = e.target.value.length === 0;
            e.target.placeholder = this.props.name;
        }

        this.setState({
            showPlaceHolder: canShow
        });
    }


    render() {
        return (
            <div className="form-group">
                <div className="col-md-12 input-group-sm mb-3">
                    <label className={this.state.showPlaceHolder && this.props.activePlaceHolder === false ? "hidden" : ""}>{this.props.name}</label>
                    {
                        this.props.required === "true"
                        ? <textarea cols="25"
                                    id={this.props.id}
                                    onBlur={this.props.activePlaceHolder ? this.changeShowPlaceHolder : undefined}
                                    onFocus={this.props.activePlaceHolder ? this.changeShowPlaceHolder : undefined}
                                    className="form-control"
                                    placeholder={this.props.activePlaceHolder ? this.props.name : ''}
                                    required></textarea>
                        : <textarea cols="25"
                                    id={this.props.id}
                                    onBlur={this.props.activePlaceHolder ? this.changeShowPlaceHolder : undefined}
                                    onFocus={this.props.activePlaceHolder ? this.changeShowPlaceHolder : undefined}
                                    className="form-control"
                                    placeholder={this.props.activePlaceHolder ? this.props.name : ''}></textarea>
                    }
                    
                    <div className="valid-feedback">Muito bom!</div>
                    <div className="invalid-feedback">Necessário informar o {this.props.name}.</div>
                </div>
            </div>
        );
    }
}

export default TextArea;