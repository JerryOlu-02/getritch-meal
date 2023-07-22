export function reducer(state, action) {
  switch (action.type) {
    case 'set_message':
      return {
        ...state,
        message: action.payload,
      };

    case 'set_error':
      return {
        ...state,
        error: action.payload,
      };

    case 'set_is_loading':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'set_show_modal':
      return {
        ...state,
        showModal: action.payload,
      };

    default:
      return state;
  }
}
