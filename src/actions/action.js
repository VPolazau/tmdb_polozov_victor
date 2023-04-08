const ok = (newState) => {
  return {
    type: 'OK',
    payload: newState
  }
}

export {ok}