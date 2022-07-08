import style from './PracticeCss.module.css'

console.log(style);
function PractiseCss() {
    return ( 
        <div>
            <h1 className={style.headingh1} >this contents of PractiseCss</h1> 
            <h2 className={style.headingh2} >this contents of PractiseCss</h2> 
        </div>
     );
}

export default PractiseCss;