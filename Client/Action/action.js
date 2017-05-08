

export function FETCH_USER_START() {
    return { type: 'FETCH_USER_STARTED' };
}

export function FETCH_USER_SUCCES(users) {
    return { type: 'FETCH_USER_SUCCESS', users };
}

export function FETCH_USER_ERRO(err) {
    return { type: 'FETCH_USER_ERROR', err };
}