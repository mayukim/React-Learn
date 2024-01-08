const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); //useState, 첫번째는 초기값이 들어가는 변수 두번째는 변수를 변경하는 함수
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputEl = useRef(null); //변수에 input 정보를 줌

    const onSubmitForm = (e) => {
        e.preventDefault(); //현재 실행중인 이벤트 멈추기
        if (parseInt(value) === first * second) {
            //만약 입력한 값을 number로 바꾼 것이 문제와 같을 경우
            setResult("정답"); //
            setFirst(Math.ceil(Math.random() * 9)); //문제 초기화
            setSecond(Math.ceil(Math.random() * 9));
            setValue(""); //입력값 초기화
            inputEl.current.focus();
        } else {
            setResult("땡");
            setValue("");
            inputEl.current.focus(); //포커스 상태로 만들어 줌
        }
    };
    return (
        <>
            <div>
                {first} 곱하기 {second}는?
            </div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = GuGuDan;
