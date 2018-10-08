// answers object should have keys `who`, `what`, `when` and `where`
export function submitAnswers(answers) {
    return {
        type: 'ANSWERS',
        data: answers
    }
}


export function reducer(state = {}, action) {
    switch (action.type) {
        case 'ANSWERS':
            const { who, what, when, where } = action.data;
            return { sentence: `${who} ${what} ${when} ${where}` };
        default:
            return state;
    }
}
