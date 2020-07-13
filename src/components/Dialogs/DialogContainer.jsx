import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const MapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs);