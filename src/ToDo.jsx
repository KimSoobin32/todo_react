import React from "react";

import{
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core"

import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.state = {item:props.item, readOnly: true}; //{데이터 이름 : 실제 데이터} json 형식.., 속성 하나 만들어 줌
        this.delete = props.delete;
        this.update = props.update;
    }

    //삭제 처리 함수
    deleteEventHandler = (e) => {
        this.delete(this.state.item);
    }

    //title을 클릭하면 읽기 전용이 해제되는 함수
    offReadOnlyMode = (e) => {
        this.setState({readOnly:false});
    }

    //Enter를 누르면 읽기 전용이 설정되는 함수
    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.setState({readOnly:true});
            this.update(this.state.item);
        }
    }

    //텍스트필드에서 데이터를 수정하면 반영되는 함수
    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }

    //체크박스 클릭 이벤트 처리를 위한 함수
    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item:thisItem});
        this.update(this.state.item);
    }

    render(){
        //데이터 찾아오기.
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler}/>
                <ListItemText>
                    <InputBase 
                        inputProps={{"aria-label":"naked", readOnly:this.state.readOnly}}   //입력 모드 설정 가능
                        type="text"
                        id={item.id} name={item.id} value={item.title}
                        multiline={true} fullWidth={true}
                        onClick={this.offReadOnlyMode} onChange={this.editEventHandler} onKeyPress={this.enterKeyEventHandler} />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default ToDo;