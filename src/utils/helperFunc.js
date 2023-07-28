import { supabase } from '../supabaseClient';

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

export async function getBookmarkId(userId) {
  const { data, error } = await supabase
    .from('meals')
    .select('saved-meal,id')
    .eq('client_id', userId);

  if (error) throw new Error(error);

  return data;
}
