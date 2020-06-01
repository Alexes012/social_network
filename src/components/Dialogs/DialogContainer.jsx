import React from 'react';
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialog";
import {UpdateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";

// const DialogContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogPage;
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 };
//
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(UpdateNewMessageBodyCreator(body))
//                 };
//                 return <Dialogs
//                     UpdateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogPage={state}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

const MapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        UpdateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(UpdateNewMessageBodyCreator(body))
        }
    }
};

const DialogContainer = connect (MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogContainer;
