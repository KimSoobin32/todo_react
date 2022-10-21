import { API_BASE_URL } from "../app-config";

//api: 요청 이름, method: 요청 방식, reques : 파라미터
export function call(api, method, request){
    //요청 옵션 생성
    let options = {
        headers: new Headers({
            "Content-Type" : "application/json",
        }),
        url : API_BASE_URL + api,
        method : method,

    };
    //파라미터를 json객체로 변환
    if(request){
        options.body = JSON.stringify(request);
    }
    //요청을 전송
    return fetch(options.url, options)
    .then((response) => response.json()
    .then((json) => {
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    })
    );
}