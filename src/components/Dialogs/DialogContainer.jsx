import React from 'react';
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
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
        UpdateNewMessageBody: (body) => {
            dispatch(UpdateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs);