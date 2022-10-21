import React from "react";
import {TextField, Paper, Button, Grid} from "@material-ui/core";

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {item:{title:""}};
        this.add = props.add;   //App.js에서 넘겨준 add값을 읽어서 대입
    }//생성자에선 state 초기화를 주로 함

    //이벤트 처리를 위한 함수
    onInputChange = (e) => { //입력 내용이 변경될 때 호출될 함수, 변경 내용을 데이터에 적용
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
        console.log(this.item);
    }

    //버튼 눌렀을 때 호출될 함수
    onButtonClick = (e) => {
        this.add(this.state.item);
        this.setState({item:{title:""}});    
    };

    //Enter를 누를 때 호출될 함수
    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.onButtonClick();
        }
    };

    //Paper : 영역, Grid : 박스
    //xs={1} md={1} 영역 크기 (전체 12 중 1)
    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField placeholder="Add ToDo Here" fullWidth
                            onChange={this.onInputChange}
                            value={this.state.item.title}
                            onKeyPress={this.enterKeyEventHandler}/>
                    </Grid>
                    <Grid xs={1} md={1} item style={{paddingRight:16}}>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onButtonClick}>+</Button>
                    </Grid>
                </Grid>           
            </Paper>
        )
    }

}

export default AddToDo; //클래스 이름.. 다른곳에서 쓰려면 내보내줘야 함