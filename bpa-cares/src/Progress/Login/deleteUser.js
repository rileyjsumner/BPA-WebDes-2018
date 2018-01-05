import React, { Component } from 'react';
import $ from 'jquery';
import '../../App.css';

export class DeleteUserComponent extends Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }
    componentDidMount(){
        $(".page-header h1").text("Delete Product");
    }
    onDelete(e) {
        var userId = this.props.userId;
        $.ajax({
            url: "http://www.rileysumner.com/bpa-cares/RestAPI/UserCRUD/delete.php",
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify({'id':userId}),
            success: function(response) {
                this.props.changeAppMode('read');
            }.bind(this),
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
    }
    render() {
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-body text-align-center">Are you sure?</div>
                        <div className="panel-footer clearfix">
                            <div className="text-align-center">
                                <button onClick={this.onDelete} className="btn btn-danger m-r-1em">Yes</button>
                                <button onClick={()=>this.props.changeAppMode('read')} className="btn btn-primary m-r-1em">No</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}
