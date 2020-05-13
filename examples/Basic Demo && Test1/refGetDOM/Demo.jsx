// Demo.jsx
import React from 'react';
import CustomButton from './CustomButton.jsx';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    // 產生一個可以儲存 textInput DOM element 的 ref
    this.textInput = React.createRef();
    this.textP = React.createRef();
    this.changeValue = this.changeValue.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // 特別利用原生的 DOM API 來關注文字的輸入
    // 注意：我們正利用「current」來取得 DOM 節點
    this.textInput.current.focus();
  }
  changeValue() {
    this.textP.current.innerHTML = 'changed !';
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
        <p ref={this.textP}>sssss</p>
        <button onClick={this.changeValue}>change value</button>
        <CustomButton text="步上台階">
          <button> 看天上 </button>
        </CustomButton>
      </div>
    );
  }
}
