// JS class 문을 쓰지 않은 코드
const React = require("react"); //리액트 사용
const { useState } = React;

const WordRelay = () => {
    //화살표 함수, 변수 선언
    const [word, setWord] = useState("마유");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = React.useRef(null);

    const onSubmitForm = (e) => {
        //화살표 함수
        e.preventDefault(); //이벤트 멈추기
        if (word[word.length - 1] === value[0]) {
            //word의 끝말과 입력값의 첫말이 같다면
            setResult("딩동댕");
            setWord(value);
            setValue("");
            inputEl.current.focus(); //포커스 상태로 만듬
        } else {
            setResult("땡");
            setValue("");
            inputEl.current.focus();
        }
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordRelay;
