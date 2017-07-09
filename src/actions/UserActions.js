export function setText(text) {
    console.log('RUN');

    return {
        type: 'SET_TEXT',
        payload: {
            text: text,
        },
    };
}
