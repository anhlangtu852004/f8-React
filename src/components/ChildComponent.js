import { memo } from 'react';

function child({onIncrease}) {
    console.log('re-rednder');
    return ( 
        <div>
            <h1>noi dung file child</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
     );
}

export default memo(child);