import React, {Component} from 'react';
import axios from 'axios';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default class BucketlistDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bucketlist: {}
        }
    }

    render() {
        return(
            <div className="bucket-detail">
                <div className="bucket">
                    <div className="bucket-title">Title</div>
                    <div className="bucket-description">
                        Lorem ipsum dolor amet ennui shaman pop-up before they sold out leggings mlkshk. Green juice ethical kickstarter, normcore flexitarian 90s direct trade hell of fingerstache keffiyeh bicycle rights la croix vexillologist tilde jianbing. 
                    </div>
                </div>
                <div className="add">
                    <FlatButton
                        label="Add Item"
                        secondary={true}
                        icon={<i className="material-icons">add</i>}
                        fullWidth={true}
                    />
                </div>
                <div className="bucket-items">
                    <div className="item">
                        <div className="item-state"></div>
                        <div className="item-body">
                            <div className="item-title">
                                Item Title
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor amet ennui shaman pop-up before they sold out leggings mlkshk. Green juice ethical kickstarter, normcore flexitarian 90s direct trade hell of fingerstache keffiyeh bicycle rights la croix vexillologist tilde jianbing. 
                            </div>
                        </div>
                        <div className="item-controls">
                            <div className="item-edit">
                                <i className="material-icons">mode_edit</i>
                            </div>
                            <div className="item-delete">
                                <i className="material-icons">delete</i>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-state"></div>
                        <div className="item-body">
                            <div className="item-title">
                                Item Title
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor amet ennui shaman pop-up before they sold out leggings mlkshk. Green juice ethical kickstarter, normcore flexitarian 90s direct trade hell of fingerstache keffiyeh bicycle rights la croix vexillologist tilde jianbing. 
                            </div>
                        </div>
                        <div className="item-controls">
                            <div className="item-edit">
                                <i className="material-icons">mode_edit</i>
                            </div>
                            <div className="item-delete">
                                <i className="material-icons">delete</i>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-state"></div>
                        <div className="item-body">
                            <div className="item-title">
                                Item Title
                            </div>
                            <div className="item-description">
                                Lorem ipsum dolor amet ennui shaman pop-up before they sold out leggings mlkshk. Green juice ethical kickstarter, normcore flexitarian 90s direct trade hell of fingerstache keffiyeh bicycle rights la croix vexillologist tilde jianbing. 
                            </div>
                        </div>
                        <div className="item-controls">
                            <div className="item-edit">
                                <i className="material-icons">mode_edit</i>
                            </div>
                            <div className="item-delete">
                                <i className="material-icons">delete</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
