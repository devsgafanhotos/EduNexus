export const showAlert = (dispatch, text, alertType = "done") => {
    dispatch({
        type: "SHOW",
        text: text,
        alertType: alertType,
    });
};

export const hideAlert = (dispatch) => {
    dispatch({ type: "HIDE" });
};
